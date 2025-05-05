'use client';
import React from 'react';
import { AirplaneIcon } from '../Icons/Icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Destination', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#aboutSection' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full py-4 px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            <span className="text-3xl text-red-500">
              <AirplaneIcon />
            </span>
            <h5>ASTHA TRIP</h5>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group transition text-gray-700 dark:text-white ${
                  pathname === link.href ? 'font-semibold' : ''
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] bg-red-500 transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="border-2 rounded-lg py-1 px-4 border-gray-500">
              Login
            </button>
            <button className="border-2 rounded-lg py-1 px-4 border-gray-500">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
