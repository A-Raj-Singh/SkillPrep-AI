import { Sparkles, ArrowRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";

function BottomBanner() {
  return (
    <section className="relative mt-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-r from-[#0b1830] via-[#0c1b38] to-[#101631] p-6 sm:p-7">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Content */}
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-400">
            <Flame size={20} />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold text-white">
                Keep Going!
              </h3>

              <span className="inline-flex items-center gap-1 rounded-full border border-orange-400/20 bg-orange-400/10 px-2 py-0.5 text-[10px] font-semibold text-orange-300">
                <Flame size={10} />
                7 Day Streak
              </span>
            </div>

            <p className="mt-1 max-w-xl text-sm leading-6 text-slate-400">
              You're making great progress. Complete one more interview today
              to keep your preparation streak alive.
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/interview"
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          Continue Practice
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

export default BottomBanner;