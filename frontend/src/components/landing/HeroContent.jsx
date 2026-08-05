import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function HeroContent() {
  return (
    <div className="flex max-w-2xl flex-col">

      {/* Badge */}

      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">

        <Sparkles size={16} />

        Build Better Every Day

      </div>

      {/* Heading */}

      <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">

        What did you
        <span className="block bg-gradient-to-r from-emerald-400 via-green-300 to-cyan-400 bg-clip-text text-transparent">
          build today?
        </span>

      </h1>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

        Join a community where people share daily progress,
        stay accountable, and inspire each other through
        consistent action.

        Whether you're coding, reading, learning English,
        exercising, or building a business—every step matters.

      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <Link to="/register">

          <Button
            size="lg"
            className="group w-full sm:w-auto"
          >
            Start Growing

            <ArrowRight
              size={18}
              className="ml-2 transition group-hover:translate-x-1"
            />

          </Button>

        </Link>

        <Link to="/community">

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            Explore Community
          </Button>

        </Link>

      </div>

      {/* Social Proof */}

      <div className="mt-12 flex flex-wrap items-center gap-8">

        <div>

          <h3 className="text-3xl font-bold text-white">

            12K+

          </h3>

          <p className="mt-1 text-sm text-gray-500">

            Active Builders

          </p>

        </div>

        <div>

          <h3 className="text-3xl font-bold text-white">

            150K+

          </h3>

          <p className="mt-1 text-sm text-gray-500">

            Progress Logs

          </p>

        </div>

        <div>

          <h3 className="text-3xl font-bold text-white">

            98%

          </h3>

          <p className="mt-1 text-sm text-gray-500">

            Daily Consistency

          </p>

        </div>

      </div>

    </div>
  );
}