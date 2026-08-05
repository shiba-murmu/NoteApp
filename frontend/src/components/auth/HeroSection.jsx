import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  Languages,
  Dumbbell,
  PenTool,
} from "lucide-react";

import Logo from "../common/Logo";

const activities = [
  {
    icon: Code2,
    user: "Rahul",
    goal: "Completed React Authentication",
    category: "Development",
    time: "2 min ago",
  },
  {
    icon: Languages,
    user: "Sarah",
    goal: "Practiced English for 45 minutes",
    category: "Learning",
    time: "6 min ago",
  },
  {
    icon: BookOpen,
    user: "Alex",
    goal: "Read 30 pages",
    category: "Reading",
    time: "12 min ago",
  },
  {
    icon: Dumbbell,
    user: "Emily",
    goal: "Finished today's workout",
    category: "Fitness",
    time: "18 min ago",
  },
  {
    icon: PenTool,
    user: "David",
    goal: "Designed a new portfolio",
    category: "Design",
    time: "25 min ago",
  },
];

export default function HeroSection() {
  return (
    <section className="hidden lg:flex flex-col justify-between h-full py-10">

      <div>

        {/* <Logo /> */}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mt-14 text-6xl font-black leading-tight tracking-tight text-white"
        >
          Build Yourself.
          <br />

          <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-cyan-400 bg-clip-text text-transparent">
            One Day at a Time.
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="mt-8 max-w-xl text-lg leading-8 text-gray-400"
        >
          Growth Journal is where ambitious people document
          daily progress, stay accountable, and inspire each
          other through consistent action.
        </motion.p>

      </div>

      <div className="mt-16 space-y-4">

        <p className="mb-4 text-sm uppercase tracking-[4px] text-gray-500">
          Recent Activity
        </p>

        {activities.map((activity, index) => {

          const Icon = activity.icon;

          return (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * .1 }}
              whileHover={{ x: 6 }}
              className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/70 px-6 py-5 backdrop-blur-xl transition"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-emerald-500/15 p-3">

                  <Icon
                    size={20}
                    className="text-emerald-400"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {activity.user}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {activity.goal}
                  </p>

                  <span className="mt-2 inline-flex rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                    {activity.category}
                  </span>

                </div>

              </div>

              <span className="text-xs text-gray-500">
                {activity.time}
              </span>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}