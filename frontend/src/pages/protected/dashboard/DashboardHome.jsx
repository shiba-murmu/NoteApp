import React from "react";

import WelcomeBanner from "./WelcomeBanner";
import StatsGrid from "./StatsGrid";
import QuickActions from "./QuickActions";

import {
  StickyNote,
  CheckSquare,
  Users,
  Activity,
  ArrowRight,
} from "lucide-react";

const DashboardHome = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* ==========================================
          Background Glow
      =========================================== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* ==========================================
          Dashboard Content
      =========================================== */}
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-6 md:px-8 lg:px-10">
        {/* Welcome Banner */}
        <WelcomeBanner />

        {/* Statistics */}
        <StatsGrid />

        {/* Quick Actions */}
        <QuickActions />

        {/* ==========================================
            Main Dashboard Layout
        =========================================== */}
       

        {/* ==========================================
            Bottom Dashboard Widgets
        =========================================== */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Activity Timeline */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-violet-500/10 p-2 text-violet-400">
                <Activity size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-white">Recent Activity</h2>
                <p className="text-sm text-gray-400">
                  Your latest actions inside Nexora.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                "Created a new note about React Router.",
                "Completed 4 tasks today.",
                "Joined the Productivity Community.",
                "Updated your profile information.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <div>
                    <p className="text-sm text-gray-300">{item}</p>
                    <span className="text-xs text-gray-500">
                      {index + 1} hour ago
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Motivation Card */}
          <section className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 via-[#111827] to-cyan-500/10 p-6 backdrop-blur-xl">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-emerald-500/10 blur-3xl" />

            <p className="text-sm uppercase tracking-widest text-emerald-400">
              Daily Motivation
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-snug text-white">
              Small consistent actions create extraordinary results.
            </h2>

            <p className="mt-4 text-gray-400">
              Build your streak today. Every note, every task, every focused
              session moves you one step closer.
            </p>

            <button className="mt-8 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400">
              Start Focus Session
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;