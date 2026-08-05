import HeroSection from "./HeroSection";

export default function AuthLayout({ children }) {
    return (

        <main className="min-h-screen bg-[#030712] relative overflow-hidden">

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute -left-44 top-0 h-[550px] w-[550px] rounded-full bg-emerald-500/10 blur-[150px]" />

                <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

            </div>

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl">

                {/* Left */}

                <div className="hidden lg:flex w-1/2">

                    <HeroSection />

                </div>

                {/* Right */}

                <div className="flex w-full items-center justify-center px-6 py-10 lg:w-1/2">

                    {children}

                </div>

            </div>

        </main>

    )
}