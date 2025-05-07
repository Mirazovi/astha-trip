import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: 'url(/images/travel-bg.jpg)' }}>
      <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold  text-center mb-6">Create Your Travel Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block  mb-1" htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-xl bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block  mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block  mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl bg-white/20  focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block  mb-1" htmlFor="confirm">Confirm Password</label>
            <input
              id="confirm"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600  py-2 rounded-xl transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className=" text-sm text-center mt-6">
          Already have an account?{' '}
          <Link href="/login" className="underline hover:text-blue-300">
            Go to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
