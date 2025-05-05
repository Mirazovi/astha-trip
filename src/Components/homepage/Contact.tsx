'use client';

import React from 'react';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50 text-gray-800" id="contact">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Our dedicated consultants are available to assist with your travel inquiries and provide personalized recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
                <div className='flex gap-4'>
                <div className='w-full'>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border-b-2 focus:outline-none"
                />
              </div>

              <div className='w-full'>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border-b-2  focus:outline-none"
                />
              </div>
                </div>
             

              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Trip Inquiry"
                   className="w-full px-4 py-2 border-b-2  focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your travel plans..."
                   className="w-full px-4 py-2 border-b-2  focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-lg w-full hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>

            <div>
              <h4 className="font-medium">Our Office</h4>
              <p>123 Travel Lane, Suite 456<br />New York, NY 10001<br />United States</p>
            </div>

            <div>
              <h4 className="font-medium">Phone</h4>
              <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
            </div>

            <div>
              <h4 className="font-medium">Email</h4>
              <p>info@asthatrips.com<br />bookings@asthatrips.com</p>
            </div>

            <div>
              <h4 className="font-medium">Business Hours</h4>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
