import React from 'react'
import {
  StickyNote,
  CheckSquare,
  Users,
  Activity,
  ArrowRight,
} from "lucide-react";
function QuickActions() {
    return (
        <>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                {/* Left Side */}
                <div className="space-y-6 xl:col-span-2">
                    {/* Notes Widget Placeholder */}
                    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-white">
                                    Recent Notes
                                </h2>
                                <p className="text-sm text-gray-400">
                                    Continue writing where you left off.
                                </p>
                            </div>

                            <button className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400 transition hover:bg-emerald-500/20">
                                View All
                                <ArrowRight size={16} />
                            </button>
                        </div>

                        <div className="flex h-56 items-center justify-center rounded-2xl border border-dashed border-emerald-500/20 bg-[#111827]/60">
                            <div className="text-center">
                                <StickyNote className="mx-auto mb-3 text-emerald-400" size={38} />
                                <p className="font-medium text-gray-300">
                                    Notes Widget Coming Soon
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Your pinned notes and recent edits will appear here.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Productivity Overview */}
                    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-white">
                                Productivity Overview
                            </h2>
                            <p className="text-sm text-gray-400">
                                Track your weekly focus and completion progress.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            {[
                                {
                                    title: "Focus Time",
                                    value: "18h",
                                    color: "emerald",
                                },
                                {
                                    title: "Tasks Done",
                                    value: "32",
                                    color: "cyan",
                                },
                                {
                                    title: "Notes Created",
                                    value: "14",
                                    color: "purple",
                                },
                                {
                                    title: "Streak",
                                    value: "07 Days",
                                    color: "orange",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-white/10 bg-[#111827]/70 p-4 transition hover:border-emerald-400/30 hover:bg-[#111827]"
                                >
                                    <p className="text-xs text-gray-400">{item.title}</p>
                                    <h3 className="mt-2 text-2xl font-bold text-white">
                                        {item.value}
                                    </h3>

                                    <div
                                        className={`mt-4 h-1 rounded-full ${item.color === "emerald"
                                                ? "bg-emerald-500"
                                                : item.color === "cyan"
                                                    ? "bg-cyan-500"
                                                    : item.color === "purple"
                                                        ? "bg-violet-500"
                                                        : "bg-orange-500"
                                            }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* ==========================================
              Right Sidebar
          =========================================== */}
                <aside className="space-y-6">
                    {/* Today's Tasks */}
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400">
                                <CheckSquare size={20} />
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">Today's Tasks</h3>
                                <p className="text-xs text-gray-500">Your top priorities.</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {["Design Notes Page", "Read 20 RRB Questions", "Workout 30 Minutes"].map(
                                (task) => (
                                    <div
                                        key={task}
                                        className="flex items-center justify-between rounded-xl border border-white/10 bg-[#111827]/70 px-4 py-3"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                            <span className="text-sm text-gray-300">{task}</span>
                                        </div>

                                        <span className="text-xs text-gray-500">Today</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Community */}
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 p-6 backdrop-blur-xl">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-400">
                                <Users size={20} />
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">Community Feed</h3>
                                <p className="text-xs text-gray-500">
                                    Discover ideas from other creators.
                                </p>
                            </div>
                        </div>

                        <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-cyan-500/20 bg-[#111827]/60">
                            <p className="text-center text-sm text-gray-400">
                                Community posts will appear here.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default QuickActions