import React from 'react';
import { AirplaneIcon } from '../Icons/Icons';

const services = [
  {
    title: 'Flight Booking',
    description: 'Get the best deals on flights to any destination worldwide with our extensive network of airlines.',
  },
  {
    title: 'Cruise Packages',
    description: 'Experience luxury on the seas with our premium cruise packages to exotic destinations.',
  },
  {
    title: 'Train Journeys',
    description: 'Enjoy scenic train journeys through breathtaking landscapes and historic routes.',
  },
  {
    title: 'Car Rentals',
    description: 'Explore at your own pace with our convenient and affordable car rental services.',
  },
  {
    title: 'Guided Tours',
    description: 'Discover hidden gems with our expert local guides who know every corner of your destination.',
  },
  {
    title: 'Group Packages',
    description: 'Special packages for groups, corporate retreats, and family reunions with customized itineraries.',
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50" id='services'>
      <div className="container mx-auto px-4 text-center max-w-4xl mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Bespoke Services</h2>
        <p className="text-lg text-gray-600">
          We provide meticulously crafted travel experiences with attention to every detail, ensuring a seamless and refined journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center w-14 h-14 bg-red-100 text-red-500 rounded-full mx-auto mb-4 text-2xl">
              <AirplaneIcon />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
