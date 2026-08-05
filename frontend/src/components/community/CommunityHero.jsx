import { Users, Sparkles } from "lucide-react";

export default function CommunityHero() {
  return (
    <section className="rounded-[36px] border border-white/10 bg-[#111827]/70 p-8 backdrop-blur-xl lg:p-12">

      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">

        <Sparkles size={16} />

        COMMUNITY

      </div>

      <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">

        {/* Left */}

        <div>

          <h1 className="text-4xl font-black leading-tight text-white lg:text-6xl">

            See what
            <span className="block bg-gradient-to-r from-emerald-400 via-green-300 to-cyan-400 bg-clip-text text-transparent">
              builders created today.
            </span>

          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">

            Discover daily progress from developers,
            readers, designers, entrepreneurs,
            fitness enthusiasts and lifelong learners.

            Every post represents consistency.

          </p>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-6">

            <Users className="text-emerald-400" />

            <h3 className="mt-5 text-3xl font-bold text-white">
              320+
            </h3>

            <p className="mt-2 text-gray-400">
              Active Builders Today
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-6">

            <span className="text-3xl">
              🔥
            </span>

            <h3 className="mt-5 text-3xl font-bold text-white">
              1,240
            </h3>

            <p className="mt-2 text-gray-400">
              Progress Shared
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-6">

            <span className="text-3xl">
              📚
            </span>

            <h3 className="mt-5 text-3xl font-bold text-white">
              28
            </h3>

            <p className="mt-2 text-gray-400">
              Categories
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-6">

            <span className="text-3xl">
              🚀
            </span>

            <h3 className="mt-5 text-3xl font-bold text-white">
              Daily
            </h3>

            <p className="mt-2 text-gray-400">
              New Inspiration
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}