import {
  FileText,
  Target,
  BrainCircuit,
  MessageSquare,
  BarChart3,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume-Based Interview",
    description:
      "AI analyzes your resume and asks questions based on your projects, skills, experience, and technologies.",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Target,
    title: "Skill-Specific Practice",
    description:
      "Choose Java, Spring Boot, SQL, React, or multiple skills and practice exactly what you want to improve.",
    gradient: "from-blue-500 to-violet-500",
  },
  {
    icon: BrainCircuit,
    title: "Adaptive AI Questions",
    description:
      "Questions dynamically adapt to your answers, knowledge level, and interview performance.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: MessageSquare,
    title: "Real Interview Experience",
    description:
      "Experience an interactive mock interview that follows up on your answers like a real technical interviewer.",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "AI Evaluation",
    description:
      "Get evaluated on correctness, depth, reasoning, relevance, and communication.",
    gradient: "from-emerald-400 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Personalized Preparation",
    description:
      "Discover your weak areas and get targeted topics and recommendations for your next interview.",
    gradient: "from-orange-400 to-violet-500",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-950 px-5 py-24 sm:px-8 lg:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 text-sm font-medium text-violet-300">
            Everything You Need
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Prepare for interviews with{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              AI that adapts to you
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            From resume analysis to personalized feedback, SkillPrep-AI
            helps you prepare smarter for your next technical interview.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-r ${feature.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                {/* Icon */}
                <div
                  className={`relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>

                {/* Bottom line */}
                <div
                  className={`mt-6 h-px w-0 bg-gradient-to-r ${feature.gradient} transition-all duration-500 group-hover:w-full`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;