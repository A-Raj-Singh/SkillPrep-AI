import { useNavigate, Link } from "react-router-dom";
import {
  BookOpen,
  BrainCircuit,
  ChevronRight,
  FileText,
  Home,
  LogOut,
  Map,
  Mic,
  Settings,
  Trophy,
  BarChart3,
  Bookmark,
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-white/[0.08] bg-[#07101f] lg:flex">

      {/* Logo */}
      <div className="flex h-20 shrink-0 items-center border-b border-white/[0.06] px-5">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 shadow-lg shadow-violet-500/20">
            <BrainCircuit className="h-5 w-5 text-white" />
          </div>

          <p className="text-lg font-bold tracking-tight">
            SkillPrep<span className="text-cyan-400">-AI</span>
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex min-h-0 flex-1 flex-col px-3 py-4">

        {/* Main Navigation */}
        <div className="space-y-1">

          <SidebarItem
            to="/dashboard"
            icon={<Home className="h-5 w-5" />}
            label="Dashboard"
          />

          <SidebarItem
            to="/ai-interview"
            icon={<Mic className="h-5 w-5" />}
            label="AI Interview"
          />

          <SidebarItem
            to="/practice"
            icon={<BookOpen className="h-5 w-5" />}
            label="Practice"
          />

          <SidebarItem
            to="/performance"
            icon={<BarChart3 className="h-5 w-5" />}
            label="Performance"
          />

          <SidebarItem
            to="/resume-analyzer"
            icon={<FileText className="h-5 w-5" />}
            label="Resume Analyzer"
          />

          <SidebarItem
            to="/roadmap"
            icon={<Map className="h-5 w-5" />}
            label="Roadmap"
          />

          <SidebarItem
            to="/saved-questions"
            icon={<Bookmark className="h-5 w-5" />}
            label="Saved Questions"
          />

        </div>

        {/* Upgrade Card */}
        <div className="mt-4 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-cyan-500/5 p-3">

          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-400/10">
            <Trophy className="h-4 w-4 text-orange-400" />
          </div>

          <h3 className="mt-2 text-sm font-semibold">
            Upgrade to Pro
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            Unlock unlimited interviews, detailed analysis and more.
          </p>

          <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-fuchsia-500 px-3 py-2 text-xs font-semibold transition hover:opacity-90">
            Upgrade Now
            <ChevronRight className="h-3.5 w-3.5" />
          </button>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-auto space-y-1 pt-3">

          <SidebarItem
            to="/settings"
            icon={<Settings className="h-5 w-5" />}
            label="Settings"
          />

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-4 rounded-xl px-4 py-2.5 text-sm text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>

        </div>

      </nav>
    </aside>
  );
}

function SidebarItem({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex w-full items-center gap-4 rounded-xl px-4 py-2.5 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export default Sidebar;