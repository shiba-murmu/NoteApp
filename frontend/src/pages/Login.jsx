import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute w-96 h-96 bg-emerald-500/20 blur-[140px] rounded-full -top-20 -left-10" />

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full bottom-0 right-0" />

      <div className="relative z-10 flex min-h-screen">

        {/* Left */}

        <div className="hidden lg:flex w-1/2 items-center justify-center px-20">

          <div>

            <p className="text-emerald-400 font-semibold tracking-[5px] uppercase">
              Growth Journal
            </p>

            <h1 className="mt-5 text-6xl font-black leading-tight text-white">
              Build Yourself
              <br />
              Every Day.
            </h1>

            <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
              Join thousands of learners, developers, readers,
              creators and dreamers sharing their daily progress
              while building meaningful habits together.
            </p>

            <div className="flex gap-10 mt-12">

              <div>
                <h2 className="text-4xl font-bold text-white">
                  25K+
                </h2>
                <p className="text-gray-400">
                  Active Builders
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">
                  1.8M+
                </h2>
                <p className="text-gray-400">
                  Daily Logs
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-1 items-center justify-center px-5">

          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-3xl p-10 shadow-2xl">

            <div className="text-center">

              <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center mx-auto mb-6">

                <ArrowRight className="text-white" />

              </div>

              <h2 className="text-3xl font-bold text-white">
                Welcome Back
              </h2>

              <p className="text-gray-400 mt-2">
                Continue your growth journey.
              </p>

            </div>

            <form className="space-y-6 mt-10">

              <div>

                <label className="text-gray-300 text-sm">
                  Email
                </label>

                <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/5 px-4">

                  <Mail
                    className="text-gray-400"
                    size={18}
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-3 py-4 outline-none text-white placeholder:text-gray-500"
                  />

                </div>

              </div>

              <div>

                <label className="text-gray-300 text-sm">
                  Password
                </label>

                <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/5 px-4">

                  <Lock
                    className="text-gray-400"
                    size={18}
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full bg-transparent px-3 py-4 outline-none text-white placeholder:text-gray-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <EyeOff
                        className="text-gray-400"
                        size={18}
                      />
                    ) : (
                      <Eye
                        className="text-gray-400"
                        size={18}
                      />
                    )}
                  </button>

                </div>

              </div>

              <div className="flex justify-between text-sm">

                <label className="flex items-center gap-2 text-gray-400">

                  <input type="checkbox" />

                  Remember me

                </label>

                <Link
                  to="/forgot-password"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  Forgot Password?
                </Link>

              </div>

              <button
                className="w-full rounded-xl bg-emerald-500 py-4 font-semibold text-white transition hover:bg-emerald-600"
              >
                Sign In
              </button>

            </form>

            <div className="my-8 flex items-center">

              <div className="flex-1 border-t border-white/10" />

              <span className="px-4 text-gray-500 text-sm">
                OR
              </span>

              <div className="flex-1 border-t border-white/10" />

            </div>

            <button className="w-full rounded-xl border border-white/10 bg-white/5 py-4 text-white hover:bg-white/10 transition">
              Continue with Google
            </button>

            <p className="mt-8 text-center text-gray-400">

              Don't have an account?

              <Link
                to="/register"
                className="ml-2 text-emerald-400 font-semibold"
              >
                Create Account
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}