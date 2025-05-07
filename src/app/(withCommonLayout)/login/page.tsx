import Link from "next/link";

export default function LoginPage() {
    return (
      <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: 'url(/images/travel-bg.jpg)' }}>
        <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Welcome Back, Traveler</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-xl bg-white/20focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-xl bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="flex items-center justify-between  text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-400" />
                <span>Remember me</span>
              </label>
              <a href="#" className="hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition duration-200"
            >
              Sign In
            </button>
            <p className="text-center py-2">Are you new go to <Link href={'/registration'} className="font-bold">Registration</Link></p>
          </form>
        </div>
      </div>
    );
  }
  