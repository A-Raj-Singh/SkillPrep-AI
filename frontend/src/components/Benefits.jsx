import {
  Sparkles,
  BrainCircuit,
  FileSearch,
  Mic,
  BarChart3,
  Target,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: BrainCircuit,
    title: "Adaptive AI Interview",
    description:
      "The AI changes question difficulty based on your answers and keeps exploring your actual level of understanding.",
  },
  {
    icon: FileSearch,
    title: "Understands Your Resume",
    description:
      "Your projects, skills, technologies, and experience become part of the interview instead of generic questions.",
  },
  {
    icon: Mic,
    title: "Voice & Text Interviews",
    description:
      "Practice through natural voice-to-voice conversations or use text-to-text interviews whenever you prefer.",
  },
  {
    icon: BarChart3,
    title: "Detailed Performance Analysis",
    description:
      "Understand how you performed across technical accuracy, depth, reasoning, communication, and individual skills.",
  },
  {
    icon: Target,
    title: "Find Your Weak Areas",
    description:
      "Identify specific concepts where your understanding needs improvement instead of relying on one overall score.",
  },
  {
    icon: Sparkles,
    title: "Personalized Preparation",
    description:
      "Get targeted topics and recommendations based on your interview performance and knowledge gaps.",
  },
];

function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-slate-950 px-5 py-24 sm:px-8 lg:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Built Around You
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            More than just{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              practice questions
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            SkillPrep-AI focuses on understanding how you perform so your
            preparation becomes more targeted and meaningful.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left — Visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-violet-600/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl sm:p-8">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Interview Analysis
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-white">
                    Your Knowledge Map
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Skills */}
              <div className="mt-6 space-y-5">
                <Skill
                  name="Java"
                  score="82%"
                  width="82%"
                  color="from-cyan-400 to-blue-500"
                />

                <Skill
                  name="Spring Boot"
                  score="76%"
                  width="76%"
                  color="from-blue-500 to-violet-500"
                />

                <Skill
                  name="SQL"
                  score="61%"
                  width="61%"
                  color="from-violet-500 to-fuchsia-500"
                />

                <Skill
                  name="Multithreading"
                  score="54%"
                  width="54%"
                  color="from-orange-400 to-pink-500"
                />
              </div>

              {/* Strength / Weakness */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4">
                  <p className="text-xs text-slate-500">Strong Area</p>
                  <div className="mt-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm font-medium text-white">
                      OOP
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-orange-400/10 bg-orange-400/[0.04] p-4">
                  <p className="text-xs text-slate-500">Improve</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-orange-400" />
                    <span className="text-sm font-medium text-white">
                      SQL Optimization
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Benefits */}
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ name, score, width, color }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-sm font-semibold text-white">{score}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          style={{ width }}
        />
      </div>
    </div>
  );
}

export default Benefits;