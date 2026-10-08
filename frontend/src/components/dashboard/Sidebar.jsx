import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const location = useLocation();

  const menuItems = [
    {
      name: "Overview",
      path: "/dashboard",
      icon: "▦",
    },
    {
      name: "My Resume",
      path: "/dashboard/resume",
      icon: "▤",
    },
    {
      name: "Interviews",
      path: "/dashboard/interviews",
      icon: "◉",
    },
    {
      name: "Performance",
      path: "/dashboard/performance",
      icon: "↗",
    },
    {
      name: "Recommendations",
      path: "/dashboard/recommendations",
      icon: "✦",
    },
  ];

  const isActive = (path) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* ================= MOBILE HEADER ================= */}
      <div className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-white/10 bg-slate-950/90 px-5 backdrop-blur-xl lg:hidden">

        <Link
          to="/dashboard"
          className="text-lg font-bold text-white"
        >
          Skill
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Prep
          </span>
          -AI
        </Link>

        <button
          onClick={() => setIsMobileOpen(true)}
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xl text-slate-300"
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`fixed left-0 top-0 z-50 hidden h-screen flex-col border-r border-white/10 bg-slate-950 transition-all duration-300 lg:flex ${
          isExpanded ? "w-64" : "w-20"
        }`}
      >

        {/* Logo */}
        <div className="flex h-20 items-center border-b border-white/10 px-5">

          <Link
            to="/dashboard"
            className={`flex items-center overflow-hidden whitespace-nowrap ${
              isExpanded ? "gap-2" : "justify-center w-full"
            }`}
          >
            {/* Logo Icon */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600">
              ✦
            </div>

            {/* Logo Text */}
            <span
              className={`text-xl font-bold transition-all duration-200 ${
                isExpanded
                  ? "opacity-100"
                  : "w-0 overflow-hidden opacity-0"
              }`}
            >
              Skill
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Prep
              </span>
              -AI
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6">

          {/* Label */}
          <p
            className={`mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600 transition-opacity ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            Workspace
          </p>

          <div className="space-y-2">

            {menuItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group flex h-11 items-center rounded-xl transition-all duration-200 ${
                    isExpanded
                      ? "gap-3 px-3"
                      : "justify-center px-0"
                  } ${
                    active
                      ? "bg-gradient-to-r from-cyan-500/15 to-violet-500/10 text-white"
                      : "text-slate-500 hover:bg-white/5 hover:text-slate-200"
                  }`}
                >

                  {/* Icon */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm ${
                      active
                        ? "bg-gradient-to-br from-cyan-400 to-violet-600 text-white"
                        : "bg-white/5 text-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    {item.icon}
                  </span>

                  {/* Text */}
                  <span
                    className={`whitespace-nowrap text-sm font-medium transition-all duration-200 ${
                      isExpanded
                        ? "opacity-100"
                        : "w-0 overflow-hidden opacity-0"
                    }`}
                  >
                    {item.name}
                  </span>

                  {/* Active Indicator */}
                  {active && isExpanded && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  )}

                </Link>
              );
            })}

          </div>

          {/* Divider */}
          <div className="my-6 border-t border-white/10" />

          {/* Account */}
          <p
            className={`mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600 transition-opacity ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            Account
          </p>

          <Link
            to="/dashboard/settings"
            className={`flex h-11 items-center rounded-xl text-slate-500 transition hover:bg-white/5 hover:text-slate-200 ${
              isExpanded
                ? "gap-3 px-3"
                : "justify-center px-0"
            }`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
              ⚙
            </span>

            <span
              className={`whitespace-nowrap text-sm font-medium transition-all ${
                isExpanded
                  ? "opacity-100"
                  : "w-0 overflow-hidden opacity-0"
              }`}
            >
              Settings
            </span>
          </Link>

        </nav>

        {/* ================= PROFILE ================= */}
        <div className="border-t border-white/10 p-3">

          <div
            className={`flex items-center rounded-xl bg-white/[0.03] p-2 ${
              isExpanded ? "gap-3" : "justify-center"
            }`}
          >

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 text-sm font-bold text-white">
              H
            </div>

            <div
              className={`min-w-0 transition-all duration-200 ${
                isExpanded
                  ? "opacity-100"
                  : "w-0 overflow-hidden opacity-0"
              }`}
            >
              <p className="truncate text-sm font-medium text-white">
                Himanshu
              </p>

              <p className="truncate text-xs text-slate-600">
                Candidate
              </p>
            </div>

          </div>
        </div>

        {/* ================= HOVER ARROW ================= */}
        <div
          className="absolute -right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-xs text-slate-400 shadow-lg"
        >
          {isExpanded ? "‹" : "›"}
        </div>

      </aside>

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-white/10 bg-slate-950 transition-transform duration-300 lg:hidden ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">

          <span className="text-xl font-bold text-white">
            Skill
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Prep
            </span>
            -AI
          </span>

          <button
            onClick={() => setIsMobileOpen(false)}
            className="text-xl text-slate-500 hover:text-white"
          >
            ✕
          </button>

        </div>

        <nav className="flex-1 px-4 py-6">

          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-cyan-500/15 to-violet-500/10 text-white"
                    : "text-slate-500 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  {item.icon}
                </span>

                {item.name}
              </Link>
            ))}
          </div>

        </nav>
      </aside>
    </>
  );
}

export default Sidebar;