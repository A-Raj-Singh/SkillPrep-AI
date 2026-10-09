import { Target, TrendingUp } from "lucide-react";

function ProgressCard() {
  const progress = 72;
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            Your Progress
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Overall interview preparation
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-400/10 text-violet-400">
          <Target size={17} />
        </div>
      </div>

      {/* Donut */}
      <div className="mt-6 flex justify-center">
        <div className="relative h-36 w-36">
          <svg
            className="h-full w-full -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Background */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-white/[0.06]"
            />

            {/* Progress */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />

            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">
              {progress}%
            </span>

            <span className="text-[11px] text-slate-500">
              Ready
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
          <div className="flex items-center gap-1.5">
            <TrendingUp size={14} className="text-emerald-400" />
            <span className="text-xs text-slate-500">
              This week
            </span>
          </div>

          <p className="mt-2 text-lg font-semibold text-white">
            +12%
          </p>
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
          <p className="text-xs text-slate-500">
            Interviews
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            24
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProgressCard;