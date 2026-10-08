import { ArrowRight, Sparkles, BrainCircuit } from "lucide-react";

function Cta() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-5 py-24 sm:px-8 lg:px-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/[0.08] via-slate-900 to-violet-600/[0.08] px-6 py-16 text-center shadow-2xl sm:px-12">

          {/* Decorative Glow */}
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

          {/* Icon */}
          <div className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-600 shadow-lg shadow-violet-500/20">
            <BrainCircuit className="h-7 w-7 text-white" />
          </div>

          {/* Badge */}
          <div className="relative mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Your next interview starts here
          </div>

          {/* Heading */}
          <h2 className="relative mx-auto max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready to discover how{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              interview-ready
            </span>{" "}
            you really are?
          </h2>

          {/* Description */}
          <p className="relative mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Upload your resume, choose your skills, and let SkillPrep-AI
            simulate a personalized technical interview built around you.
          </p>

          {/* CTA */}
          <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/register"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/40"
            >
              Start Your Interview
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-slate-200 transition-all duration-300 hover:bg-white/10"
            >
              I Already Have an Account
            </a>
          </div>

          {/* Small Note */}
          <p className="relative mt-6 text-xs text-slate-600">
            Personalized • Adaptive • Technical • AI-Powered
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cta;