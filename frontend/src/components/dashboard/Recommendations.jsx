import {
  BookOpen,
  Code2,
  Database,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const recommendations = [
  {
    title: "Practice DSA",
    description: "Improve your problem-solving skills",
    icon: Code2,
    progress: 61,
  },
  {
    title: "Revise SQL",
    description: "Strengthen your database concepts",
    icon: Database,
    progress: 68,
  },
  {
    title: "Spring Boot",
    description: "Practice backend interview questions",
    icon: BookOpen,
    progress: 78,
  },
];

function Recommendations() {
  return (
    <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            Recommended for You
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Focus on these areas next
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-400/10 text-violet-400">
          <Sparkles size={17} />
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-5 space-y-3">
        {recommendations.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition hover:border-white/[0.10] hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  <Icon size={16} />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-200">
                    {item.title}
                  </p>

                  <p className="mt-0.5 truncate text-[11px] text-slate-600">
                    {item.description}
                  </p>
                </div>

                <span className="text-xs font-semibold text-slate-400">
                  {item.progress}%
                </span>
              </div>

              {/* Progress */}
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] py-2.5 text-xs font-medium text-slate-400 transition hover:bg-white/[0.05] hover:text-white">
        View preparation roadmap
        <ArrowRight size={14} />
      </button>
    </section>
  );
}

export default Recommendations;