import React from "react";
import { CalendarDays } from "lucide-react";

const WelcomeBanner = () => {
    const hour = new Date().getHours();

    let greeting = "Good Morning";

    if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
    } else if (hour >= 17) {
        greeting = "Good Evening";
    }

    return (
        <section
            className="
                flex flex-col gap-4
                rounded-2xl
                border border-emerald-950/60
                bg-[#0B1C15]
                px-5 py-5
                sm:flex-row
                sm:items-center
                sm:justify-between
            "
        >

            {/* Welcome Content */}
            <div>

                <p className="text-sm font-medium text-emerald-400">
                    Dashboard
                </p>

                <h1 className="mt-1 text-2xl font-bold text-white">
                    {greeting}, Shiba 👋
                </h1>

                <p className="mt-1 text-sm text-slate-400">
                    Here's your workspace overview for today.
                </p>

            </div>


            {/* Date */}
            <div
                className="
                    flex w-fit items-center gap-3
                    rounded-xl
                    border border-emerald-950/60
                    bg-[#07130F]
                    px-4 py-3
                "
            >

                <CalendarDays
                    size={19}
                    className="text-emerald-400"
                />

                <div>

                    <p className="text-xs text-slate-500">
                        Today
                    </p>

                    <p className="text-sm font-medium text-slate-200">
                        {new Date().toLocaleDateString("en-US", {
                            weekday: "short",
                            day: "numeric",
                            month: "short",
                        })}
                    </p>

                </div>

            </div>

        </section>
    );
};

export default WelcomeBanner;