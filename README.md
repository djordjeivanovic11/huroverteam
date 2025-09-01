This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First install the needed deps with

```bash
npm install
```

Then you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Email Configuration

The contact form requires SMTP configuration to send emails. Create a `.env.local` file in the root directory with the following variables:

```env
# SMTP Server Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
TO_EMAIL=contact@yourteam.com
```

**Note:** For Gmail, you need to:

1. Enable 2-Factor Authentication
2. Generate an App Password (not your regular password)
3. Use the App Password in the `SMTP_PASS` field

## Code Quality

Before committing or deploying, ensure your code is properly formatted and linted:

```bash
# Check for linting errors
npm run lint

# Fix auto-fixable linting issues
npm run lint:fix

# Format code with Prettier
npm run format
```

**Pre-commit checklist:**

- Run `npm run lint:fix`
- Run `npm run format`
- Test contact form functionality
- Verify environment variables are set

## Vercel Deployment

Follow these steps:

### 1. Deploy to Vercel

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy from your project directory
vercel
```

Or connect your GitHub repository to Vercel dashboard for automatic deployments.

### 2. Configure Environment Variables in Vercel

In your Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

| Variable    | Value                            | Example                |
| ----------- | -------------------------------- | ---------------------- |
| `SMTP_HOST` | Your SMTP server                 | `smtp.gmail.com`       |
| `SMTP_PORT` | SMTP port number                 | `587`                  |
| `SMTP_USER` | Your email address               | `your-email@gmail.com` |
| `SMTP_PASS` | Your email password/app password | `your-app-password`    |
| `TO_EMAIL`  | Where contact forms are sent     | `contact@yourteam.com` |

### 3. Security Features

The contact form includes:

- **Rate limiting**: 5 requests per 15 minutes per IP
- **Input validation**: Email format, length limits, required fields
- **Input sanitization**: Trims whitespace, normalizes email
- **Environment variable validation**: Checks all required config
- **Error handling**: Detailed logging, user-friendly error messages

### 4. Testing Your Deployment

After deployment, test your contact form:

```bash
# Test with curl (replace YOUR_DOMAIN with your Vercel URL)
curl -X POST https://YOUR_DOMAIN.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "organization": "Test Org",
    "message": "This is a test message"
  }'
```

### 5. Domain Configuration (Optional)

To use a custom domain:

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

If Tailwind install issues:

npm install -D tailwindcss@3
