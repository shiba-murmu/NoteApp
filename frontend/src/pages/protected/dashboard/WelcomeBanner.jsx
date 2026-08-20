import React from "react";
import {
    CalendarDays,
    Flame,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { getFirstName } from "../../../utils/getFirstName";

const WelcomeBanner = () => {
    const {data : user} = useCurrentUser();
    const firstName = getFirstName(user?.name);

    const hour = new Date().getHours();

    let greeting = "Good Morning";
    let message = "Let's build something meaningful today.";

    if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
        message = "Stay focused. You're making progress.";
    } else if (hour >= 17) {
        greeting = "Good Evening";
        message = "Wrap up today with one more win.";
    }

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <section className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-[#111827] via-[#081712] to-[#030712] p-6 md:p-8">
            {/* Background Glow */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/15 blur-[120px]" />
            <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                {/* Left Content */}
                <div className="max-w-2xl">
                    {/* Top Badge */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5">
                        <Sparkles size={14} className="text-emerald-400" />
                        <span className="text-xs font-medium tracking-wide text-emerald-300">
                            NEXORA DASHBOARD
                        </span>
                    </div>

                    {/* Greeting */}
                    <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                        {greeting},{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            {firstName} 👋
                        </span>
                    </h1>

                    <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-400">
                        {message}
                        <br />
                        Welcome back to your personal productivity hub — manage notes, track
                        tasks, and grow every day with Nexora.
                    </p>

                    {/* Stats Pills */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/5 px-4 py-2 backdrop-blur-md">
                            <Flame size={16} className="text-orange-400" />
                            <span className="text-sm text-slate-200">7 Day Streak</span>
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/5 px-4 py-2 backdrop-blur-md">
                            <ArrowUpRight size={16} className="text-cyan-400" />
                            <span className="text-sm text-slate-200">Productivity +18%</span>
                        </div>
                    </div>
                </div>

                {/* Right Side Card */}
                <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-emerald-500/15 p-3">
                            <CalendarDays size={22} className="text-emerald-400" />
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-widest text-slate-500">
                                Today
                            </p>

                            <h3 className="text-sm font-semibold text-white">{today}</h3>
                        </div>
                    </div>

                    <div className="my-5 h-px bg-white/10" />

                    {/* Focus Card */}
                    <div className="rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-4">
                        <p className="text-xs uppercase tracking-widest text-emerald-300">
                            Focus Goal
                        </p>

                        <h4 className="mt-2 text-lg font-semibold text-white">
                            Complete today's top priorities.
                        </h4>

                        <div className="mt-4">
                            <div className="mb-2 flex justify-between text-xs text-slate-400">
                                <span>Daily Progress</span>
                                <span>68%</span>
                            </div>

                            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                                <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeBanner;