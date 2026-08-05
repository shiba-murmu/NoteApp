
import RegisterHero from "../components/register/RegisterHero";
import RegisterCard from "../components/register/RegisterCard";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#030712]">

      {/* Hero Section */}
      <section className="relative overflow-hidden">

        {/* Background Glow */}

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

        {/* Content */}

        <div
          className="
            relative
            mx-auto
            grid
            min-h-screen
            max-w-screen-2xl
            grid-cols-1
            items-center
            gap-16
            px-6
            pt-32
            pb-20
            lg:grid-cols-2
            lg:px-10
          "
        >

          {/* Left */}

          <RegisterHero />

          {/* Right */}

          <div className="flex justify-center">

            <RegisterCard />

          </div>

        </div>

      </section>



    </main>
  );
}