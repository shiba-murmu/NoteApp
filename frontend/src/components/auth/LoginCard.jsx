import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

import Card from "../common/Card";
import Button from "../common/Button";
import AuthInput from "./AuthInput";

export default function LoginCard() {
  return (
   <Card className="w-full md:mt-10 max-w-[560px] p-6 sm:p-8 lg:p-10">

      {/* Heading */}

      <div className="space-y-3">

        <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          Welcome Back
        </span>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let's make today count.
        </h2>

        <p className="leading-7 text-gray-400">
          Continue building your goals, sharing your progress,
          and growing with the community.
        </p>

      </div>

      {/* Form */}

      <form className="mt-10 space-y-6">

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          icon={Mail}
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon={Lock}
        />

        {/* Options */}

        <div className="flex items-center justify-between text-sm">

          <label className="flex cursor-pointer items-center gap-3 text-gray-400">

            <input
              type="checkbox"
              className="h-4 w-4 rounded accent-emerald-500"
            />

            Remember me

          </label>

          <Link
            to="/forgot-password"
            className="font-medium text-emerald-400 transition hover:text-emerald-300"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Button */}

        <Button
          type="submit"
          size="lg"
          className="w-full rounded-2xl"
        >
          Sign In
        </Button>

      </form>

      {/* Divider */}

      <div className="my-8 flex items-center">

        <div className="h-px flex-1 bg-white/10" />

        <span className="px-4 text-xs uppercase tracking-[3px] text-gray-500">
          or
        </span>

        <div className="h-px flex-1 bg-white/10" />

      </div>

      {/* Google */}

      <Button
        variant="outline"
        size="lg"
        className="w-full gap-3"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5"
        />

        Continue with Google

      </Button>

      {/* Footer */}

      <p className="mt-8 text-center text-gray-400">

        Don't have an account?

        <Link
          to="/register"
          className="ml-2 font-semibold text-emerald-400 transition hover:text-emerald-300"
        >
          Create Account
        </Link>

      </p>

    </Card>
  );
}