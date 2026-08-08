import React from "react";

import {
  FileText,
  CheckSquare,
  Flame,
  TrendingUp,
} from "lucide-react";

import StatCard from "./StatCard";

const StatsGrid = () => {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Notes"
        value="126"
        change="+12 this week"
        icon={FileText}
        iconColor="text-blue-400"
        iconBg="bg-blue-500/10"
      />

      <StatCard
        title="Pending Tasks"
        value="08"
        change="2 due today"
        icon={CheckSquare}
        iconColor="text-emerald-400"
        iconBg="bg-emerald-500/10"
      />

      <StatCard
        title="Current Streak"
        value="15 Days"
        change="Keep going"
        icon={Flame}
        iconColor="text-orange-400"
        iconBg="bg-orange-500/10"
      />

      <StatCard
        title="Productivity"
        value="89%"
        change="+6% this week"
        icon={TrendingUp}
        iconColor="text-purple-400"
        iconBg="bg-purple-500/10"
      />

    </section>
  );
};

export default StatsGrid;