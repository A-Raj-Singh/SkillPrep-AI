import { useState } from "react";
import {
  User,
  Bell,
  Lock,
  Mic,
  Target,
  Save,
  CheckCircle2,
} from "lucide-react";

function Settings() {
  const [name, setName] = useState("Himanshu Chaudhari");
  const [email, setEmail] = useState("himanshu@example.com");
  const [role, setRole] = useState("Java Backend Developer");
  const [difficulty, setDifficulty] = useState("Medium");
  const [mode, setMode] = useState("Text");

  const [notifications, setNotifications] = useState({
    interview: true,
    progress: true,
    recommendations: false,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#030817] text-white">
      <div className="min-h-screen bg-[#030817] text-white">
        <div className="px-4 py-7 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="w-full">
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="mt-1 mb-8 text-sm text-slate-400">
              Manage your profile and interview preferences.
            </p>
          </div>

          {/* Profile */}
          <section className="mb-6 rounded-2xl border border-white/10 bg-[#081225]">
            <div className="border-b border-white/10 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                  <User className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <h2 className="font-semibold">Profile Information</h2>
                  <p className="text-xs text-slate-500">
                    Update your personal information.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 p-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Full Name
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#030817] px-4 py-3 text-sm outline-none focus:border-cyan-500/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Email
                </label>

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#030817] px-4 py-3 text-sm outline-none focus:border-cyan-500/50"
                />
              </div>
            </div>
          </section>

          {/* Interview Preferences */}
          <section className="mb-6 rounded-2xl border border-white/10 bg-[#081225]">
            <div className="border-b border-white/10 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                  <Target className="h-5 w-5 text-violet-400" />
                </div>

                <div>
                  <h2 className="font-semibold">
                    Interview Preferences
                  </h2>
                  <p className="text-xs text-slate-500">
                    Configure your default interview settings.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 p-5 md:grid-cols-3">

              {/* Role */}
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Target Role
                </label>

                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#030817] px-4 py-3 text-sm text-slate-300 outline-none focus:border-cyan-500/50"
                >
                  <option>Java Backend Developer</option>
                  <option>Full Stack Developer</option>
                  <option>Frontend Developer</option>
                  <option>Software Developer</option>
                </select>
              </div>

              {/* Difficulty */}
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Default Difficulty
                </label>

                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#030817] px-4 py-3 text-sm text-slate-300 outline-none focus:border-cyan-500/50"
                >
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>

              {/* Mode */}
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Default Mode
                </label>

                <select
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#030817] px-4 py-3 text-sm text-slate-300 outline-none focus:border-cyan-500/50"
                >
                  <option>Text</option>
                  <option>Voice</option>
                </select>
              </div>
            </div>
          </section>

          {/* Notifications */}
          <section className="mb-6 rounded-2xl border border-white/10 bg-[#081225]">
            <div className="border-b border-white/10 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
                  <Bell className="h-5 w-5 text-amber-400" />
                </div>

                <div>
                  <h2 className="font-semibold">Notifications</h2>
                  <p className="text-xs text-slate-500">
                    Choose what updates you want to receive.
                  </p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-white/5">

              <ToggleRow
                title="Interview Reminders"
                description="Get reminders about your interview practice."
                checked={notifications.interview}
                onChange={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    interview: !prev.interview,
                  }))
                }
              />

              <ToggleRow
                title="Progress Updates"
                description="Receive updates about your interview performance."
                checked={notifications.progress}
                onChange={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    progress: !prev.progress,
                  }))
                }
              />

              <ToggleRow
                title="AI Recommendations"
                description="Get personalized preparation recommendations."
                checked={notifications.recommendations}
                onChange={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    recommendations: !prev.recommendations,
                  }))
                }
              />

            </div>
          </section>

          {/* Security */}
          <section className="mb-6 rounded-2xl border border-white/10 bg-[#081225]">
            <div className="border-b border-white/10 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                  <Lock className="h-5 w-5 text-red-400" />
                </div>

                <div>
                  <h2 className="font-semibold">Security</h2>
                  <p className="text-xs text-slate-500">
                    Manage your account security.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">
                  Password
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Change your account password regularly.
                </p>
              </div>

              <button className="rounded-xl border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/5">
                Change Password
              </button>
            </div>
          </section>

          {/* Save */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">

            {saved && (
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                Settings saved successfully
              </div>
            )}

            <button
              onClick={handleSave}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold transition hover:opacity-90"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

function ToggleRow({ title, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4 p-5">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-xs text-slate-500">
          {description}
        </p>
      </div>

      <button
        onClick={onChange}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked ? "bg-cyan-500" : "bg-slate-700"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

export default Settings;