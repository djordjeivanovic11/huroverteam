'use client';

import React, { useState } from 'react';

const SponsorContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSent(true);
        setError('');
        setFormData({ name: '', organization: '', email: '', message: '' });
      } else {
        setError(data.error || 'Failed to send email. Please try again.');
      }
    } catch {
      setError('Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gray-50 px-4'>
      <div className='w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl'>
        <h2 className='text-3xl font-bold text-center mb-6 text-gray-800'>
          Sponsor Contact Form
        </h2>

        {isSent && (
          <div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center'>
            <p className='text-green-800'>
              Your message has been sent successfully!
            </p>
          </div>
        )}

        {error && (
          <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-center'>
            <p className='text-red-800'>{error}</p>
          </div>
        )}

        <form onSubmit={sendEmail} className='space-y-5'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900'
          />

          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900'
          />

          <input
            type='text'
            name='organization'
            placeholder='Your Business or Organization'
            value={formData.organization}
            onChange={handleChange}
            required
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900'
          />

          <textarea
            name='message'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900'
          />

          <button
            type='submit'
            disabled={isSubmitting}
            className={`w-full bg-red-900 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition duration-200 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SponsorContactForm;
