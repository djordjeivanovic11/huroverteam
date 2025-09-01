import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting (for production, consider Redis or database)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_MAX_REQUESTS = 5; // Max requests per window
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function getRateLimitKey(request: NextRequest): string {
  // Use IP address for rate limiting
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded
    ? forwarded.split(',')[0]
    : request.headers.get('x-real-ip') || 'unknown';
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record) {
    rateLimitMap.set(key, { count: 1, lastReset: now });
    return false;
  }

  // Reset if window has passed
  if (now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    record.count = 1;
    record.lastReset = now;
    return false;
  }

  // Check if limit exceeded
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

function validateInput(data: ContactFormData): string[] {
  const errors: string[] = [];

  // All fields are required - check for presence and type
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!data.email || typeof data.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.push('Please provide a valid email address');
  }

  if (!data.organization || typeof data.organization !== 'string' || data.organization.trim().length < 2) {
    errors.push('Organization must be at least 2 characters long');
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  // Check for reasonable length limits
  if (data.name && data.name.length > 100) errors.push('Name is too long');
  if (data.email && data.email.length > 254) errors.push('Email is too long');
  if (data.organization && data.organization.length > 200) errors.push('Organization name is too long');
  if (data.message && data.message.length > 5000) errors.push('Message is too long');

  return errors;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request);
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, organization, message } = body;

    // Validate input
    const validationErrors = validateInput(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }

    // Sanitize inputs (trim whitespace)
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      organization: organization.trim(),
      message: message.trim(),
    };

    // Get environment variables for email configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.TO_EMAIL;

    // Validate all required environment variables
    const missingVars = [];
    if (!smtpHost) missingVars.push('SMTP_HOST');
    if (!smtpPort) missingVars.push('SMTP_PORT');
    if (!smtpUser) missingVars.push('SMTP_USER');
    if (!smtpPass) missingVars.push('SMTP_PASS');
    if (!toEmail) missingVars.push('TO_EMAIL');

    if (missingVars.length > 0) {
      return NextResponse.json(
        {
          error: 'Email service not configured properly',
          details:
            process.env.NODE_ENV === 'development'
              ? `Missing variables: ${missingVars.join(', ')}`
              : 'Please contact administrator',
        },
        { status: 500 }
      );
    }

    // Validate SMTP_PORT is a valid number
    const portNumber = parseInt(smtpPort!);
    if (isNaN(portNumber) || portNumber < 1 || portNumber > 65535) {
      return NextResponse.json(
        { error: 'Invalid email configuration' },
        { status: 500 }
      );
    }

    // Create transporter (variables are validated above)
    const transporter = nodemailer.createTransport({
      host: smtpHost!,
      port: portNumber,
      secure: portNumber === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser!,
        pass: smtpPass!,
      },
    });

    // Email content
    const mailOptions = {
      from: `"URC Website Contact Form" <${smtpUser!}>`, // sender address
      to: toEmail!, // list of receivers
      replyTo: sanitizedData.email, // reply to the form submitter
      subject: `🚀 New Contact Form Submission from ${sanitizedData.organization}`,
      text: `
═══════════════════════════════════════════════════════════════
🚀 NEW CONTACT FORM SUBMISSION - URC WEBSITE
═══════════════════════════════════════════════════════════════

📋 CONTACT DETAILS:
   Name: ${sanitizedData.name}
   Email: ${sanitizedData.email}
   Organization: ${sanitizedData.organization}

💬 MESSAGE:
${sanitizedData.message}

═══════════════════════════════════════════════════════════════
This message was sent from the URC Team website contact form.
Reply directly to this email to respond to ${sanitizedData.name}.
═══════════════════════════════════════════════════════════════
      `,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #7c2d12 0%, #991b1b 100%); color: white; padding: 30px 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🚀 URC Team</h1>
              <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">New Contact Form Submission</p>
            </div>

            <!-- Content -->
            <div style="padding: 30px 20px;">
              
              <!-- Alert Banner -->
              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 25px; border-radius: 4px;">
                <p style="margin: 0; color: #92400e; font-weight: 600;">
                  New message received from your website contact form
                </p>
              </div>

              <!-- Contact Information -->
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                  Contact Details
                </h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #374151; width: 120px;">Name:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${sanitizedData.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #374151;">Email:</td>
                    <td style="padding: 8px 0;">
                      <a href="mailto:${sanitizedData.email}" style="color: #991b1b; text-decoration: none; font-weight: 500;">${sanitizedData.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #374151;">Organization:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${sanitizedData.organization}</td>
                  </tr>
                </table>
              </div>

              <!-- Message -->
              <div style="background-color: #ffffff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                  💬 Message
                </h2>
                <div style="color: #374151; line-height: 1.6; font-size: 16px; white-space: pre-wrap; background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #991b1b;">
${sanitizedData.message}
                </div>
              </div>

              <!-- Action Button -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${sanitizedData.email}?subject=Re: Your inquiry to URC Team" 
                   style="display: inline-block; background-color: #991b1b; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                  📧 Reply to ${sanitizedData.name}
                </a>
              </div>

            </div>

            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                This message was sent from the <strong>URC Team website</strong> contact form.<br>
                You can reply directly to this email to respond to the sender.
              </p>
              <p style="margin: 10px 0 0 0; color: #9ca3af; font-size: 12px;">
                Timestamp: ${new Date().toLocaleString()}
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
