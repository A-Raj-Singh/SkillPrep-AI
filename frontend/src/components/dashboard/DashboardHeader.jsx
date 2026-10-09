import { Sparkles, ArrowUpRight } from "lucide-react";

function DashboardHeader() {
  return (
    <section className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

      {/* Left */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />

          <span className="text-sm font-medium text-emerald-400">
            AI Interview Platform
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Good Evening, Himanshu!
        </h1>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
          Ready to sharpen your skills? Continue your preparation and get
          closer to your dream placement.
        </p>
      </div>

      {/* Placement Ready Card */}
      <div className="w-full max-w-md rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-xl">
        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
              <Sparkles size={19} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Placement Ready
              </p>

              <p className="mt-0.5 text-xs text-slate-500">
                Keep improving your profile
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm font-semibold text-cyan-400">
            72%
            <ArrowUpRight size={15} />
          </div>
        </div>

        {/* Progress */}
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
            style={{ width: "72%" }}
          />
        </div>

        <div className="mt-2 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Overall preparation
          </span>

          <span className="text-slate-400">
            72 / 100
          </span>
        </div>
      </div>
    </section>
  );
}

export default DashboardHeader;