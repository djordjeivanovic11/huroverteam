"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const SponsorContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      setError("Email service is not configured properly.");
      return;
    }

    emailjs.send(serviceId, templateId, formData, publicKey)
        .then(() => {
          setIsSent(true);
          setError("");
          setFormData({ name: "", organization: "", email: "", message: "" });
        })
        .catch((err) => {
          console.error("Failed to send email:", err);
          setError("Failed to send email. Please try again.");
        });
  };

  return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sponsor Contact Form</h2>

          {isSent && (
              <p className="text-green-600 text-center mb-4">Your message has been sent successfully!</p>
          )}
          {error && (
              <p className="text-red-600 text-center mb-4">{error}</p>
          )}

          <form onSubmit={sendEmail} className="space-y-5">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
            />

            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
            />

            <input
                type="text"
                name="organization"
                placeholder="Your Business or Organization"
                value={formData.organization}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
            />

            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
            />

            <button
                type="submit"
                className="w-full bg-red-900 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
  );
};

export default SponsorContactForm;
