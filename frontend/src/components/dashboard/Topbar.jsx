import {
  Search,
  Bell,
  ChevronDown,
  Command,
} from "lucide-react";

function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#030817]/90 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Search */}
        <div className="relative hidden w-full max-w-md md:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search anything..."
            className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-11 pr-20 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-cyan-400/40 focus:bg-white/[0.05]"
          />

          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-xs text-slate-500">
            <Command size={12} />
            <span>K</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-4">

          {/* Notification */}
          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition hover:bg-white/[0.07] hover:text-white"
            title="Notifications"
          >
            <Bell size={19} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-[#030817]" />
          </button>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-white/[0.08] sm:block" />

          {/* Profile */}
          <button className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-white/[0.04]">

            {/* Avatar */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-bold text-white shadow-lg shadow-cyan-500/10">
              H
            </div>

            {/* User Info */}
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-white">
                Himanshu Chaudhari
              </p>

              <p className="text-xs text-slate-500">
                Free Plan
              </p>
            </div>

            <ChevronDown
              size={16}
              className="hidden text-slate-500 sm:block"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;