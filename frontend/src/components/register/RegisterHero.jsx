import { CheckCircle2, Sparkles } from "lucide-react";

const benefits = [
    "Build better habits",
    "Stay accountable",
    "Inspire others",
];

export default function RegisterHero() {
    return (
        <section className="hidden lg:flex h-full flex-col justify-center px-8 xl:px-12">

            {/* Badge */}

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">

                <Sparkles size={16} />

                START YOUR JOURNEY

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-6xl font-black leading-tight tracking-tight text-white">

                Your future

                <br />

                is created by

                <br />

                <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-cyan-400 bg-clip-text text-transparent">

                    what you do today.

                </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

                Join thousands of people building
                better habits through consistency.

                Learn, create, read, exercise,
                and inspire others one day at a time.

            </p>

            {/* Benefits */}

            <div className="mt-12 space-y-5">

                {benefits.map((item) => (

                    <div
                        key={item}
                        className="flex items-center gap-4"
                    >

                        <CheckCircle2
                            size={22}
                            className="text-emerald-400"
                        />

                        <span className="text-lg text-gray-200">

                            {item}

                        </span>

                    </div>

                ))}

            </div>

            {/* Community Highlights */}

            <div className="mt-10 grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-5">

                    <h3 className="text-2xl font-bold text-white">
                        Daily Progress
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                        Share your achievements every day and
                        build consistency through action.
                    </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-5">

                    <h3 className="text-2xl font-bold text-white">
                        Community
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                        Connect with learners, developers,
                        readers, creators and achievers.
                    </p>

                </div>

            </div>


            {/* Community Highlights */}

            <div className="mt-10 grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-5">

                    <h3 className="text-2xl font-bold text-white">
                        Daily Progress
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                        Share your achievements every day and
                        build consistency through action.
                    </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-[#111827]/80 p-5">

                    <h3 className="text-2xl font-bold text-white">
                        Community
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                        Connect with learners, developers,
                        readers, creators and achievers.
                    </p>

                </div>

            </div>


            {/* Why Join */}

            <div className="mt-12">

                <h3 className="mb-6 text-xl font-semibold text-white">
                    Why people join us
                </h3>

                <div className="space-y-5">

                    {benefits.map((item) => (

                        <div
                            key={item}
                            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111827]/60 px-5 py-4"
                        >

                            <CheckCircle2
                                size={22}
                                className="text-emerald-400"
                            />

                            <span className="text-gray-200">
                                {item}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

            {/* Featured Community */}

            <div className="mt-12 rounded-3xl border border-white/10 bg-[#111827]/70 p-6">

                <p className="text-sm uppercase tracking-[3px] text-emerald-400">
                    Featured Builder
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                    "I stayed consistent for 90 days."
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                    Sharing my daily progress kept me accountable.
                    I finally completed my first React project
                    without giving up halfway.
                </p>

                <div className="mt-6 flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white">
                        R
                    </div>

                    <div>

                        <p className="font-medium text-white">
                            Rahul Sharma
                        </p>

                        <p className="text-sm text-gray-500">
                            React Developer
                        </p>

                    </div>

                </div>

            </div>

            

        </section>
    );
}