import {
  Video,
  TrendingUp,
  MessageSquare,
  Flame,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Interviews",
    value: "24",
    change: "+12%",
    description: "vs last month",
    icon: Video,
  },
  {
    title: "Average Score",
    value: "78%",
    change: "+8%",
    description: "vs last month",
    icon: TrendingUp,
  },
  {
    title: "Questions Practiced",
    value: "186",
    change: "+24%",
    description: "vs last month",
    icon: MessageSquare,
  },
  {
    title: "Current Streak",
    value: "7 Days",
    change: "Best: 12",
    description: "Keep going!",
    icon: Flame,
  },
];

function OverviewStats() {
  return (
    <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.05]"
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Icon size={19} />
              </div>

              <ArrowUpRight
                size={17}
                className="text-slate-600 transition group-hover:text-cyan-400"
              />
            </div>

            {/* Value */}
            <div className="mt-5">
              <p className="text-2xl font-bold tracking-tight text-white">
                {stat.value}
              </p>

              <p className="mt-1 text-sm font-medium text-slate-400">
                {stat.title}
              </p>
            </div>

            {/* Bottom */}
            <div className="mt-4 flex items-center gap-2 text-xs">
              <span className="font-semibold text-emerald-400">
                {stat.change}
              </span>

              <span className="text-slate-600">•</span>

              <span className="text-slate-500">
                {stat.description}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default OverviewStats;