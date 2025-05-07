export default function BookNowPage() {
    return (
      <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: 'url(/images/travel-bg.jpg)' }}>
        <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl shadow-lg p-8 w-full max-w-2xl ">
          <h2 className="text-3xl font-bold text-center mb-6">Book Your Dream Trip</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-2 rounded-xl bg-white/20  focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 rounded-xl bg-white/20  focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="block mb-1">Phone Number</label>
              <input type="tel" placeholder="+1234567890" className="w-full px-4 py-2 rounded-xl bg-white/20  focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="block mb-1">Destination</label>
              <input type="text" placeholder="Bali, Indonesia" className="w-full px-4 py-2 rounded-xl bg-white/20  focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="block mb-1">Departure Date</label>
              <input type="date" className="w-full px-4 py-2 rounded-xl bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="block mb-1">Return Date</label>
              <input type="date" className="w-full px-4 py-2 rounded-xl bg-white/20  focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="block mb-1">Travelers</label>
              <input type="number" min="1" placeholder="2" className="w-full px-4 py-2 rounded-xl   focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1">Special Requests</label>
              <textarea placeholder="Let us know anything special..." className="w-full px-4 py-2 rounded-xl    focus:outline-none focus:ring-2 focus:ring-blue-300" rows={3}></textarea>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600  py-2 rounded-xl transition duration-200">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  