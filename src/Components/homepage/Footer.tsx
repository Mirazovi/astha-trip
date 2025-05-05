import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">ASTHA TRIP</h2>
          <p className="text-sm text-gray-300">
            Providing distinguished travel experiences since 2010. Excellence in every journey.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/destinations">Destinations</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/aboutUs">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Popular Destinations */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Popular Destinations</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Bali, Indonesia</li>
            <li>Santorini, Greece</li>
            <li>Kyoto, Japan</li>
            <li>Machu Picchu, Peru</li>
            <li><a href="/destinations" className="text-blue-400 hover:underline">View All Destinations</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to our newsletter for the latest travel deals and updates.
          </p>
          <form className=" flex gap-3 flex-col">
            <input
              type="email"
              placeholder="Your email address"
              className=" px-4 py-2 rounded-md text-white w-full sm:w-auto"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-gray-700 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4 w-[90%] mx-auto">
        <p>© 2025 ASTHA TRIP. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
