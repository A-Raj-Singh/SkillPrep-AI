import {
  Upload,
  Settings2,
  MessageCircle,
  BarChart3,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Resume",
    description:
      "Upload your resume and let AI understand your skills, projects, experience, education, and technologies.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Configure Your Interview",
    description:
      "Choose your target role, skills, difficulty, interview type, and preferred interview duration.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Take the AI Interview",
    description:
      "Answer dynamic questions through text or voice while the AI adapts the interview based on your responses.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Get Your Performance Report",
    description:
      "Receive detailed scores, strengths, weaknesses, knowledge gaps, and personalized preparation recommendations.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-slate-950 px-5 py-24 sm:px-8 lg:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
            Simple & Personalized
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            How{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              SkillPrep-AI
            </span>{" "}
            works
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Go from your resume to a personalized technical interview in just
            four simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">

          {/* Connecting Line - Desktop */}
          <div className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-gradient-to-r from-cyan-500/30 via-violet-500/50 to-cyan-500/30 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative text-center"
                >
                  {/* Step Icon */}
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 blur-xl transition-all duration-500 group-hover:scale-125" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-slate-900 shadow-xl transition-all duration-300 group-hover:border-cyan-400/40 group-hover:shadow-cyan-500/10">
                      <Icon className="h-8 w-8 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Number */}
                    <span className="absolute -right-1 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-gradient-to-r from-cyan-500 to-violet-600 text-[10px] font-bold text-white">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <p className="text-xs font-semibold tracking-widest text-violet-400">
                      STEP {step.number}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowDown className="mx-auto mt-8 h-5 w-5 text-slate-700 lg:hidden" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/[0.05] via-violet-500/[0.08] to-cyan-500/[0.05] p-6 text-center backdrop-blur-sm sm:p-8">
          <p className="text-base font-medium text-white sm:text-lg">
            Your interview adapts to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              your knowledge level
            </span>
            — not the other way around.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Strong answers lead to deeper questions. Weak areas trigger
            targeted follow-ups.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;