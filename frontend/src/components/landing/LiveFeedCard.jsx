import {
  Flame,
  Clock3,
} from "lucide-react";

export default function LiveFeedCard({
  avatar,
  name,
  category,
  progress,
  streak,
  time,
}) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-white/10
      bg-[#111827]
      p-5
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-emerald-500/20
      hover:shadow-[0_20px_60px_rgba(0,0,0,.45)]
    "
    >
      <div className="flex items-center gap-4">

        <img
          src={avatar}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>

          <h3 className="font-semibold text-white">

            {name}

          </h3>

          <p className="text-sm text-gray-500">

            {category}

          </p>

        </div>

      </div>

      <p className="mt-5 leading-7 text-gray-300">

        {progress}

      </p>

      <div className="mt-6 flex items-center justify-between">

        <div className="flex items-center gap-2 text-emerald-400">

          <Flame size={16} />

          <span className="text-sm">

            {streak}

          </span>

        </div>

        <div className="flex items-center gap-2 text-gray-500">

          <Clock3 size={15} />

          <span className="text-xs">

            {time}

          </span>

        </div>

      </div>

    </div>
  );
}