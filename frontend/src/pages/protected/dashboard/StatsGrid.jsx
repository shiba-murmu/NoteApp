import React from "react";
import {
  FileText,
  CheckSquare,
  Flame,
  TrendingUp,
} from "lucide-react";

import StatCard from "./StatCard";

const stats = [
  {
    title: "Total Notes",
    value: "126",
    change: "+12 this week",
    icon: FileText,
    iconColor: "text-cyan-400",
    glow: "from-cyan-500/20 to-blue-500/5",
    progress: 82,
  },
  {
    title: "Pending Tasks",
    value: "08",
    change: "2 due today",
    icon: CheckSquare,
    iconColor: "text-emerald-400",
    glow: "from-emerald-500/20 to-green-500/5",
    progress: 45,
  },
  {
    title: "Current Streak",
    value: "15 Days",
    change: "Keep going 🚀",
    icon: Flame,
    iconColor: "text-orange-400",
    glow: "from-orange-500/20 to-red-500/5",
    progress: 100,
  },
  {
    title: "Productivity",
    value: "89%",
    change: "+6% this week",
    icon: TrendingUp,
    iconColor: "text-violet-400",
    glow: "from-violet-500/20 to-purple-500/5",
    progress: 89,
  },
];

const StatsGrid = () => {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </section>
  );
};

export default StatsGrid;