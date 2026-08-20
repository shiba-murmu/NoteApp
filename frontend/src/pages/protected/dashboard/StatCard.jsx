import React from "react";
import { ArrowUpRight } from "lucide-react";

const StatCard = ({
  title,
  value,
  change,
  icon: Icon,
  iconColor,
  glowColor,
  progress,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/8 bg-[#111827]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]">

      {/* Soft Glow Only */}
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity duration-500 opacity-70 group-hover:opacity-100 ${glowColor}`}
      />

      {/* Small Bottom Glow */}
      <div
        className={`absolute bottom-0 left-0 h-24 w-24 rounded-full blur-3xl opacity-20 ${glowColor}`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className={`rounded-2xl border border-white/10 bg-white/5 p-3 ${iconColor}`}>
            <Icon size={22} />
          </div>

          <ArrowUpRight
            size={18}
            className="text-slate-600 transition group-hover:text-emerald-400"
          />
        </div>

        {/* Content */}
        <div className="mt-6">
          <p className="text-sm text-slate-400">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-white">{value}</h2>

          <p className="mt-2 text-sm font-medium text-emerald-400">{change}</p>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-xs text-slate-500">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              style={{ width: `${progress}%` }}
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;