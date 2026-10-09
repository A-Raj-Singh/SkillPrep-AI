import {
  TrendingUp,
  Target,
  Award,
  Brain,
  CheckCircle2,
  AlertTriangle,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const skills = [
  { name: "Java", score: 86 },
  { name: "Spring Boot", score: 78 },
  { name: "React.js", score: 72 },
  { name: "SQL", score: 68 },
  { name: "DSA", score: 61 },
];

const interviews = [
  {
    role: "Java Backend Developer",
    date: "Today",
    score: 86,
    questions: 10,
  },
  {
    role: "Full Stack Developer",
    date: "Yesterday",
    score: 78,
    questions: 10,
  },
  {
    role: "Spring Boot Interview",
    date: "Oct 5",
    score: 72,
    questions: 8,
  },
  {
    role: "React.js Interview",
    date: "Oct 3",
    score: 69,
    questions: 10,
  },
];

function Performance() {
  return (
    <div className="min-h-screen bg-[#030817] text-white">
      <div className="min-h-screen bg-[#030817] text-white">
        <div className="px-4 py-8 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="w-full">
            <div className="flex items-center gap-2 text-sm text-cyan-400">
              <TrendingUp size={16} />
              Performance
            </div>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Your Performance
            </h1>

            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Track your interview progress, identify weak areas, and improve
              your preparation.
            </p>
          </div>

          {/* Overview Stats */}
          <div className="mx-auto mt-7 grid max-w-8xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={Target}
              label="Overall Score"
              value="78%"
              change="+8%"
            />

            <StatCard
              icon={Award}
              label="Interviews Completed"
              value="24"
              change="+5 this month"
            />

            <StatCard
              icon={Brain}
              label="Questions Answered"
              value="186"
              change="+24 this month"
            />

            <StatCard
              icon={TrendingUp}
              label="Improvement"
              value="+12%"
              change="vs last month"
            />
          </div>

          {/* Main Grid */}
          <div className="mt-8 grid w-full gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">

            {/* Skill Performance */}
            <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">

              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-white">
                    Skill Performance
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Your current performance across technical skills
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  <Brain size={17} />
                </div>
              </div>

              <div className="mt-7 space-y-6">
                {skills.map((skill) => (
                  <SkillRow
                    key={skill.name}
                    name={skill.name}
                    score={skill.score}
                  />
                ))}
              </div>
            </section>

            {/* Overall Score */}
            <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">

              <h2 className="text-sm font-semibold text-white">
                Overall Readiness
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Based on your recent activity
              </p>

              {/* Circle */}
              <div className="relative mx-auto mt-8 h-40 w-40">
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full -rotate-90"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-white/[0.06]"
                  />

                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#performanceGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="251"
                    strokeDashoffset="55"
                  />

                  <defs>
                    <linearGradient
                      id="performanceGradient"
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

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    78%
                  </span>

                  <span className="text-[11px] text-slate-500">
                    Ready
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                <TrendingUp
                  size={15}
                  className="text-emerald-400"
                />

                <span className="text-xs text-emerald-400">
                  Improving steadily
                </span>
              </div>
            </section>
          </div>

          {/* Strengths & Weaknesses */}
          <div className="mx-auto mt-6 grid max-w-6xl gap-6 md:grid-cols-2">

            {/* Strengths */}
            <section className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.03] p-6">
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  className="text-emerald-400"
                />

                <h2 className="text-sm font-semibold text-white">
                  Your Strengths
                </h2>
              </div>

              <div className="mt-5 space-y-3">
                <Strength text="Strong Java fundamentals" />
                <Strength text="Good understanding of OOP" />
                <Strength text="Clear technical explanations" />
                <Strength text="Good Spring Boot knowledge" />
              </div>
            </section>

            {/* Weaknesses */}
            <section className="rounded-2xl border border-amber-400/10 bg-amber-400/[0.03] p-6">
              <div className="flex items-center gap-2">
                <AlertTriangle
                  size={18}
                  className="text-amber-400"
                />

                <h2 className="text-sm font-semibold text-white">
                  Areas to Improve
                </h2>
              </div>

              <div className="mt-5 space-y-3">
                <Weakness text="DSA problem solving speed" />
                <Weakness text="SQL advanced queries" />
                <Weakness text="System design fundamentals" />
                <Weakness text="Answering under time pressure" />
              </div>
            </section>
          </div>

          {/* Recent Interviews */}
          <section className="mx-auto mt-6 max-w-6xl rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-white">
                  Interview History
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Your recent interview performance
                </p>
              </div>

              <Clock3
                size={18}
                className="text-slate-500"
              />
            </div>

            <div className="mt-5 overflow-x-auto">
              <div className="min-w-[600px]">

                {/* Table Header */}
                <div className="grid grid-cols-[1.5fr_1fr_0.7fr_0.7fr_30px] gap-4 border-b border-white/[0.06] px-3 pb-3 text-[11px] uppercase tracking-wider text-slate-600">
                  <span>Interview</span>
                  <span>Date</span>
                  <span>Questions</span>
                  <span>Score</span>
                  <span />
                </div>

                {/* Rows */}
                <div className="divide-y divide-white/[0.05]">
                  {interviews.map((interview) => (
                    <div
                      key={`${interview.role}-${interview.date}`}
                      className="grid grid-cols-[1.5fr_1fr_0.7fr_0.7fr_30px] items-center gap-4 px-3 py-4"
                    >
                      <span className="text-sm font-medium text-slate-300">
                        {interview.role}
                      </span>

                      <span className="text-xs text-slate-500">
                        {interview.date}
                      </span>

                      <span className="text-xs text-slate-400">
                        {interview.questions}
                      </span>

                      <span className="text-sm font-semibold text-cyan-400">
                        {interview.score}%
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="text-slate-600"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function StatCard({ icon: Icon, label, value, change }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          <Icon size={18} />
        </div>

        <span className="text-[11px] text-emerald-400">
          {change}
        </span>
      </div>

      <p className="mt-5 text-2xl font-bold text-white">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {label}
      </p>
    </div>
  );
}

function SkillRow({ name, score }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-slate-300">
          {name}
        </span>

        <span className="text-sm font-semibold text-white">
          {score}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

function Strength({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
      <CheckCircle2
        size={15}
        className="shrink-0 text-emerald-400"
      />

      <span className="text-xs text-slate-400">
        {text}
      </span>
    </div>
  );
}

function Weakness({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
      <AlertTriangle
        size={15}
        className="shrink-0 text-amber-400"
      />

      <span className="text-xs text-slate-400">
        {text}
      </span>
    </div>
  );
}

export default Performance;