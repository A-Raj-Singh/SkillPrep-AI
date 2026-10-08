import {
  FileText,
  Play,
  ArrowRight,
  TrendingUp,
  Target,
  Clock3,
  BrainCircuit,
  CheckCircle2,
  AlertCircle,
  Upload,
  Sparkles,
} from "lucide-react";



function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />
      </div>

      {/* Main */}
      <main className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm text-slate-500">
              Dashboard
            </p>

            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
              Welcome back, Himanshu 👋
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Continue your interview preparation and improve your weak areas.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-violet-500/40">
            <Play className="h-4 w-4" />
            Start Interview
          </button>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon={<Target className="h-5 w-5" />}
            title="Interviews"
            value="12"
            subtitle="+3 this month"
          />

          <StatCard
            icon={<TrendingUp className="h-5 w-5" />}
            title="Average Score"
            value="78%"
            subtitle="+8% from last week"
          />

          <StatCard
            icon={<Clock3 className="h-5 w-5" />}
            title="Practice Time"
            value="6.4h"
            subtitle="This month"
          />

          <StatCard
            icon={<BrainCircuit className="h-5 w-5" />}
            title="Skills Practiced"
            value="7"
            subtitle="2 need improvement"
          />

        </div>

        {/* Main Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Resume */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">
                  Your Resume
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Used to personalize your AI interviews.
                </p>
              </div>

              <FileText className="h-6 w-6 text-cyan-400" />
            </div>

            <div className="mt-6 flex flex-col gap-5 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                  <FileText className="h-6 w-6 text-cyan-400" />
                </div>

                <div>
                  <p className="font-medium text-white">
                    Himanshu_Chaudhari_Resume.pdf
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Uploaded recently • AI analyzed
                  </p>
                </div>

              </div>

              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                <Upload className="h-4 w-4" />
                Update
              </button>

            </div>

            {/* Extracted Skills */}
            <div className="mt-6">
              <p className="text-sm font-medium text-slate-300">
                Detected Skills
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Java",
                  "Spring Boot",
                  "SQL",
                  "React",
                  "Python",
                  "Git",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Start */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/[0.08] to-violet-600/[0.08] p-6">

            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600">
                <Sparkles className="h-5 w-5 text-white" />
              </div>

              <h2 className="mt-5 text-xl font-semibold">
                Ready for another interview?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Let AI challenge you with questions based on your current
                skill level.
              </p>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
                Start AI Interview
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">

          {/* Performance */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">
                  Skill Performance
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your latest AI evaluation
                </p>
              </div>

              <button className="text-sm text-cyan-400 hover:text-cyan-300">
                View Report
              </button>
            </div>

            <div className="mt-6 space-y-5">

              <SkillProgress
                name="Java"
                score="84%"
                width="84%"
              />

              <SkillProgress
                name="Spring Boot"
                score="76%"
                width="76%"
              />

              <SkillProgress
                name="SQL"
                score="61%"
                width="61%"
              />

              <SkillProgress
                name="React"
                score="72%"
                width="72%"
              />

            </div>
          </div>

          {/* Recommendations */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <div>
              <h2 className="text-lg font-semibold">
                Recommended Focus
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Based on your recent interviews
              </p>
            </div>

            <div className="mt-6 space-y-3">

              <Recommendation
                icon={<AlertCircle className="h-5 w-5 text-orange-400" />}
                title="SQL Query Optimization"
                description="Practice indexing and query performance."
              />

              <Recommendation
                icon={<AlertCircle className="h-5 w-5 text-orange-400" />}
                title="Multithreading"
                description="Review synchronization and thread safety."
              />

              <Recommendation
                icon={<CheckCircle2 className="h-5 w-5 text-emerald-400" />}
                title="Java OOP"
                description="Your recent answers show strong understanding."
              />

            </div>
          </div>
        </div>

        {/* Recent Interviews */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Recent Interviews
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your latest practice sessions
              </p>
            </div>

            <button className="text-sm text-cyan-400 hover:text-cyan-300">
              View All
            </button>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-white/10 text-xs text-slate-500">
                  <th className="pb-4 font-medium">Interview</th>
                  <th className="pb-4 font-medium">Skills</th>
                  <th className="pb-4 font-medium">Score</th>
                  <th className="pb-4 font-medium">Date</th>
                </tr>
              </thead>

              <tbody>
                <InterviewRow
                  title="Backend Developer"
                  skills="Java • Spring Boot"
                  score="84%"
                  date="Today"
                />

                <InterviewRow
                  title="SQL Technical Round"
                  skills="SQL • Database"
                  score="68%"
                  date="Yesterday"
                />

                <InterviewRow
                  title="Full Stack Interview"
                  skills="React • Java"
                  score="76%"
                  date="3 days ago"
                />
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}

/* ---------------- Components ---------------- */

function StatCard({ icon, title, value, subtitle }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          {icon}
        </div>

        <span className="text-xs text-slate-600">
          SkillPrep-AI
        </span>
      </div>

      <p className="mt-5 text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-1 text-2xl font-bold text-white">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}

function SkillProgress({ name, score, width }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-slate-300">
          {name}
        </span>

        <span className="font-medium text-white">
          {score}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
          style={{ width }}
        />
      </div>
    </div>
  );
}

function Recommendation({ icon, title, description }) {
  return (
    <div className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="mt-0.5">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-white">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function InterviewRow({ title, skills, score, date }) {
  return (
    <tr className="border-b border-white/5">
      <td className="py-4 text-sm font-medium text-white">
        {title}
      </td>

      <td className="py-4 text-sm text-slate-500">
        {skills}
      </td>

      <td className="py-4">
        <span className="rounded-lg bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
          {score}
        </span>
      </td>

      <td className="py-4 text-sm text-slate-500">
        {date}
      </td>
    </tr>
  );
}

export default Dashboard;