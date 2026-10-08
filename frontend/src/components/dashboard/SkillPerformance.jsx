import { BarChart3, ArrowUpRight } from "lucide-react";

const skills = [
  {
    name: "Java",
    score: 86,
    level: "Excellent",
  },
  {
    name: "Spring Boot",
    score: 78,
    level: "Good",
  },
  {
    name: "React.js",
    score: 72,
    level: "Good",
  },
  {
    name: "SQL",
    score: 68,
    level: "Improving",
  },
  {
    name: "DSA",
    score: 61,
    level: "Needs Practice",
  },
];

function SkillPerformance() {
  return (
    <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            Skill Performance
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Your performance by skill
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
          <BarChart3 size={17} />
        </div>
      </div>

      {/* Skills */}
      <div className="mt-6 space-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-300">
                  {skill.name}
                </span>

                <span className="text-[10px] text-slate-600">
                  {skill.level}
                </span>
              </div>

              <span className="text-sm font-semibold text-white">
                {skill.score}%
              </span>
            </div>

            {/* Progress */}
            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                style={{ width: `${skill.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <button className="mt-6 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/[0.07] bg-white/[0.025] py-2.5 text-xs font-medium text-slate-400 transition hover:bg-white/[0.05] hover:text-white">
        View detailed performance
        <ArrowUpRight size={14} />
      </button>
    </section>
  );
}

export default SkillPerformance;