import {
  Sparkles,
  ArrowRight,
  Clock3,
  Brain,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

function AIInterviewCard() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/[0.10] via-blue-500/[0.06] to-violet-500/[0.08] p-6 sm:p-7">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative">

        {/* Badge */}
        <div className="mb-5 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            <Sparkles size={13} />
            Recommended
          </span>

          <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
            AI Powered
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Start an AI Interview
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          Practice with an AI interviewer that adapts questions according to
          your skills, experience, and previous answers.
        </p>

        {/* Features */}
        <div className="mt-6 flex flex-wrap gap-2">
          <Feature icon={Brain} text="Adaptive Questions" />
          <Feature icon={Target} text="Personalized" />
          <Feature icon={Clock3} text="Real-time Feedback" />
          <Feature icon={Zap} text="AI Evaluation" />
        </div>

        {/* CTA */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">

          <Link
            to="/interview"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition hover:scale-[1.02] hover:shadow-cyan-500/20"
          >
            Start Interview
            <ArrowRight size={17} />
          </Link>

          <span className="text-xs text-slate-500">
            Takes approximately 15–30 minutes
          </span>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
      <Icon size={14} className="text-cyan-400" />
      {text}
    </div>
  );
}

export default AIInterviewCard;