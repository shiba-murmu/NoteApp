import {
    Search,
    Sparkles,
    TrendingUp,
    Users,
    Trophy,
    Plus,
} from "lucide-react";


const categories = [
    "Programming",
    "Reading",
    "Fitness",
    "English",
    "Design",
    "Music",
    "Business",
    "Self Growth",
];

export default function CommunityPage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white">
            <Navbar />

            {/* Background Glow */}
            <div className="pointer-events-none fixed -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />

            <div className="pointer-events-none fixed -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />

            <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 lg:px-8">
                {/* HERO */}

                <section className="rounded-[32px] border border-white/10 bg-[#111827]/70 p-8 backdrop-blur-xl lg:p-12">
                    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                                <Sparkles size={16} />
                                COMMUNITY
                            </div>

                            <h1 className="mt-8 text-4xl font-black leading-tight lg:text-6xl">
                                See what builders
                                <span className="block bg-gradient-to-r from-emerald-400 via-green-300 to-cyan-400 bg-clip-text text-transparent">
                                    accomplished today.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                                Discover developers, readers, designers, entrepreneurs and
                                lifelong learners sharing their daily progress. Every post is a
                                step toward becoming better.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <button className="flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 font-semibold transition hover:scale-105">
                                    <Plus size={20} />
                                    Share Progress
                                </button>

                                <button className="rounded-2xl border border-white/10 px-6 py-3 text-gray-300 transition hover:border-emerald-500 hover:text-white">
                                    Explore Categories
                                </button>
                            </div>
                        </div>

                        {/* Stats */}

                        <div className="grid grid-cols-2 gap-5">
                            <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-6">
                                <Users className="text-emerald-400" />

                                <h3 className="mt-5 text-3xl font-bold">328</h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    Active Builders
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-6">
                                <TrendingUp className="text-cyan-400" />

                                <h3 className="mt-5 text-3xl font-bold">1,284</h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    Progress Shared
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-6">
                                🔥

                                <h3 className="mt-5 text-3xl font-bold">82</h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    Longest Streak
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-6">
                                <Trophy className="text-yellow-400" />

                                <h3 className="mt-5 text-3xl font-bold">12</h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    Daily Challenges
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEARCH */}

                <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div className="relative w-full lg:max-w-md">
                        <Search
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                            size={18}
                        />

                        <input
                            placeholder="Search builders..."
                            className="h-14 w-full rounded-2xl border border-white/10 bg-[#111827] pl-12 pr-5 text-white outline-none transition focus:border-emerald-500"
                        />
                    </div>

                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="whitespace-nowrap rounded-full border border-white/10 bg-[#111827] px-5 py-2 text-sm text-gray-300 transition hover:border-emerald-500 hover:text-white"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* MAIN */}

                <div className="mt-10 grid gap-8 lg:grid-cols-12">
                    {/* Feed */}

                    <div className="space-y-6 lg:col-span-8">
                        <div className="rounded-[28px] border border-dashed border-white/10 bg-[#111827] p-10 text-center">
                            <h2 className="text-2xl font-bold">
                                CreatePostCard Component
                            </h2>

                            <p className="mt-4 text-gray-400">
                                We'll build this next with image upload, categories, emojis and
                                share button.
                            </p>
                        </div>

                        <div className="rounded-[28px] border border-dashed border-white/10 bg-[#111827] p-16 text-center">
                            <h2 className="text-2xl font-bold">
                                Community Feed Component
                            </h2>

                            <p className="mt-4 text-gray-400">
                                Feed cards will appear here.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}

                    <aside className="space-y-6 lg:col-span-4">
                        <div className="rounded-[28px] border border-white/10 bg-[#111827] p-6">
                            <h3 className="text-xl font-bold">
                                🔥 Trending Categories
                            </h3>

                            <div className="mt-6 space-y-4">
                                {categories.slice(0, 5).map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center justify-between rounded-xl bg-[#0F172A] px-4 py-3"
                                    >
                                        <span>{item}</span>

                                        <span className="text-sm text-emerald-400">
                                            Trending
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-[#111827] p-6">
                            <h3 className="text-xl font-bold">
                                🎯 Today's Challenge
                            </h3>

                            <div className="mt-5 rounded-2xl bg-[#0F172A] p-5">
                                <h4 className="font-semibold">
                                    Read 20 Pages
                                </h4>

                                <p className="mt-3 text-sm text-gray-400">
                                    Complete today's reading challenge and keep your learning
                                    streak alive.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-[#111827] p-6">
                            <h3 className="text-xl font-bold">
                                🏆 Top Builders
                            </h3>

                            <div className="mt-6 space-y-4">
                                {["Rahul", "Sarah", "Alex", "Emily"].map((user) => (
                                    <div
                                        key={user}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 font-bold">
                                            {user[0]}
                                        </div>

                                        <div>
                                            <p className="font-medium">{user}</p>
                                            <p className="text-sm text-gray-500">
                                                🔥 28 Day Streak
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}