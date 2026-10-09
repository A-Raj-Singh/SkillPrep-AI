import {
  Clock3,
  ArrowRight,
  CheckCircle2,
  XCircle,
  MinusCircle,
} from "lucide-react";

const interviews = [
  {
    role: "Java Backend Developer",
    date: "Today, 6:30 PM",
    score: 86,
    status: "Completed",
  },
  {
    role: "Full Stack Developer",
    date: "Yesterday, 8:15 PM",
    score: 78,
    status: "Completed",
  },
  {
    role: "Spring Boot Interview",
    date: "Oct 5, 2026",
    score: 72,
    status: "Completed",
  },
  {
    role: "React.js Interview",
    date: "Oct 3, 2026",
    score: null,
    status: "Incomplete",
  },
];

function RecentInterviews() {
  return (
    <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            Recent Interviews
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Your latest interview sessions
          </p>
        </div>

        <Clock3 size={18} className="text-slate-500" />
      </div>

      {/* Interviews */}
      <div className="mt-5 space-y-2">
        {interviews.map((interview) => (
          <div
            key={`${interview.role}-${interview.date}`}
            className="group flex items-center justify-between rounded-xl border border-transparent p-3 transition hover:border-white/[0.07] hover:bg-white/[0.03]"
          >
            {/* Left */}
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-slate-200">
                {interview.role}
              </p>

              <p className="mt-1 text-[11px] text-slate-600">
                {interview.date}
              </p>
            </div>

            {/* Right */}
            <div className="ml-3 flex items-center gap-3">
              {interview.status === "Completed" ? (
                <>
                  <div className="hidden items-center gap-1.5 sm:flex">
                    <CheckCircle2
                      size={13}
                      className="text-emerald-400"
                    />

                    <span className="text-[11px] text-slate-500">
                      Completed
                    </span>
                  </div>

                  <span className="text-sm font-bold text-white">
                    {interview.score}%
                  </span>
                </>
              ) : (
                <>
                  <div className="hidden items-center gap-1.5 sm:flex">
                    <XCircle
                      size={13}
                      className="text-amber-400"
                    />

                    <span className="text-[11px] text-slate-500">
                      Incomplete
                    </span>
                  </div>

                  <MinusCircle
                    size={16}
                    className="text-slate-600"
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] py-2.5 text-xs font-medium text-slate-400 transition hover:bg-white/[0.05] hover:text-white">
        View all interviews
        <ArrowRight size={14} />
      </button>
    </section>
  );
}

export default RecentInterviews;