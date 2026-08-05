import LiveFeedCard from "./LiveFeedCard";

const feed = [
  {
    avatar:
      "https://i.pravatar.cc/150?img=11",

    name: "Rahul",

    category: "💻 Coding",

    progress:
      "Completed authentication system using React & Express.",

    streak: "12 Day Streak",

    time: "2 min ago",
  },

  {
    avatar:
      "https://i.pravatar.cc/150?img=5",

    name: "Sarah",

    category: "📚 Reading",

    progress:
      "Finished reading Atomic Habits. 32 pages today.",

    streak: "18 Day Streak",

    time: "8 min ago",
  },

  {
    avatar:
      "https://i.pravatar.cc/150?img=9",

    name: "Alex",

    category: "🇬🇧 English",

    progress:
      "Practiced speaking English for 45 minutes.",

    streak: "30 Day Streak",

    time: "21 min ago",
  },

  {
    avatar:
      "https://i.pravatar.cc/150?img=16",

    name: "Emily",

    category: "🏋 Fitness",

    progress:
      "Completed today's full body workout.",

    streak: "67 Day Streak",

    time: "1 hour ago",
  },
];

export default function LiveFeed() {
  return (
    <div className="relative w-full max-w-lg">

      {/* Heading */}

      <div className="mb-8">

        <p className="text-sm uppercase tracking-[5px] text-emerald-400">

          Community

        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">

          Today's Progress

        </h2>

      </div>

      {/* Cards */}

      <div className="space-y-5">

        {feed.map((item, index) => (
          <LiveFeedCard
            key={index}
            {...item}
          />
        ))}

      </div>

    </div>
  );
}