import React from 'react';
import { StarIcon } from '../Icons/Icons';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    quote:
      'Our family trip to Bali was absolutely perfect! Astha Trips handled everything from flights to accommodations and activities. We didn’t have to worry about a thing!',
  },
  {
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    quote:
      'The European tour package was well organized and gave us the perfect balance of guided tours and free time to explore. Will definitely book with Astha again!',
  },
  {
    name: 'Priya Sharma',
    location: 'London, UK',
    quote:
      'Their customer service is exceptional. When our flight was canceled, they immediately rebooked us and arranged for accommodation. They truly care about their clients.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white" id='testimonials'>
      <div className="text-center mb-12 max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
        <p className="text-lg text-gray-600">
          The experiences of our distinguished clientele reflect our commitment to excellence and personalized service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
           
           <div className='flex items-center gap-4'>
            <div className='w-[50px]'>
                <Image width={100} height={100} src={'/user.png'}alt='user'/>
            </div>
           <div>
            <div className="text-gray-800 font-semibold">{testimonial.name}</div>
            <div className="text-gray-500 text-sm">{testimonial.location}</div>
            </div>
           </div>
            <div className='flex items-center gap-2 text-yellow-500 py-4 justify-center'>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </div>
            <hr className="my-4 border-gray-200" />
            <p className="text-gray-700 text-sm mb-4">{testimonial.quote}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">
          Read More Reviews
        </button>
      </div>
    </section>
  );
}
