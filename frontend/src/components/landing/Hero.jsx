import HeroContent from "./HeroContent";
import LiveFeed from "./LiveFeed";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-20 px-6 pb-20 pt-36 lg:flex-row lg:px-8">

        {/* Left */}

        <div className="flex-1">

          <HeroContent />

        </div>

        {/* Right */}

        <div className="flex w-full justify-center lg:w-auto lg:flex-1">

          <LiveFeed />

        </div>

      </div>

    </section>
  );
}