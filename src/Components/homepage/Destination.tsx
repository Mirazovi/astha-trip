import React from 'react';

const destinations = [
  {
    name: 'Bali, Indonesia',
    duration: '7 Days',
    price: '$1,299',
    bgImage: '/travel1.jpeg',
  },
  {
    name: 'Santorini, Greece',
    duration: '8 Days',
    price: '$1,599',
    bgImage: '/travel2.jpg',
  },
  {
    name: 'Kyoto, Japan',
    duration: '10 Days',
    price: '$1,899',
    bgImage: '/travel1.jpeg',
  },
  {
    name: 'Machu Picchu, Peru',
    duration: '12 Days',
    price: '$2,199',
    bgImage: '/travel2.jpg',
  },
];

export default function Destinations() {
  return (
    <div className="container mx-auto py-16">
      {/* Heading Section */}
      <div className="text-center mb-16 lg:w-[60%] mx-auto">
        <h2 className="text-4xl font-bold text-gray-800">Premium Destinations</h2>
        <p className="text-lg text-gray-600">
          Discover our curated collection of exclusive destinations, selected to provide unparalleled experiences for the sophisticated traveler.
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center h-96 rounded-xl"
            style={{ backgroundImage: `url(${destination.bgImage})` }}
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-xl flex flex-col justify-end">
              <div className="text-white space-y-4 py-6 px-4">
                <h3 className="text-2xl font-semibold">{destination.name}</h3>
                
                {/* Display duration and price on one row, spaced apart */}
                <div className="flex justify-between items-center">
                  <p className="text-xl">{destination.duration}</p>
                  <p className="text-lg">{destination.price}</p>
                </div>
                    <button className='w-full bg-red-500 text-white rounded-md py-2 px-6 hover:bg-red-600'>
                  View Details
                    </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
