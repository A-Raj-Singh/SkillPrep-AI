import { useState } from "react";
import {
  Sparkles,
  Code2,
  Users,
  Brain,
  Layers3,
  Check,
  ArrowRight,
  Clock3,
  MessageSquare,
  Mic,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const interviewTypes = [
  {
    id: "technical",
    title: "Technical",
    description: "Test your technical knowledge",
    icon: Code2,
  },
  {
    id: "behavioral",
    title: "Behavioral",
    description: "Practice HR & behavioral questions",
    icon: Users,
  },
  {
    id: "mixed",
    title: "Mixed",
    description: "Technical + behavioral questions",
    icon: Layers3,
  },
];

const roles = [
  "Java Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Frontend Developer",
  "Software Developer",
];

const skills = [
  "Java",
  "Spring Boot",
  "DSA",
  "SQL",
  "React.js",
  "OOP",
  "DBMS",
  "REST API",
];

const difficulties = ["Easy", "Medium", "Hard"];

function AIInterview() {
  const [interviewType, setInterviewType] = useState("technical");
  const [role, setRole] = useState("Java Developer");
  const [selectedSkills, setSelectedSkills] = useState([
    "Java",
    "OOP",
    "DSA",
  ]);
  const [difficulty, setDifficulty] = useState("Medium");
  const [questionCount, setQuestionCount] = useState(10);
  const [mode, setMode] = useState("text");

  function toggleSkill(skill) {
    setSelectedSkills((current) =>
      current.includes(skill)
        ? current.filter((item) => item !== skill)
        : [...current, skill]
    );
  }

  return (

      <div className="min-h-screen bg-[#030817] text-white">
        <div className="px-4 py-8 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="w-full">
            <div className="flex items-center gap-2 text-sm text-cyan-400">
              <Sparkles size={16} />
              AI Interview
            </div>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Configure Your Interview
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Customize your mock interview according to your target role,
              skills, and experience level.
            </p>
          </div>

          {/* Main */}
          <div className="mt-8 grid w-full gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">

            {/* Left */}
            <div className="space-y-6">

              {/* Interview Type */}
              <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6">
                <SectionHeader
                  number="01"
                  title="Interview Type"
                  description="What kind of interview do you want to practice?"
                />

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {interviewTypes.map((type) => {
                    const Icon = type.icon;
                    const selected = interviewType === type.id;

                    return (
                      <button
                        key={type.id}
                        onClick={() => setInterviewType(type.id)}
                        className={`relative rounded-xl border p-4 text-left transition ${
                          selected
                            ? "border-cyan-400/40 bg-cyan-400/[0.08]"
                            : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14]"
                        }`}
                      >
                        {selected && (
                          <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}

                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                            selected
                              ? "bg-cyan-400/15 text-cyan-400"
                              : "bg-white/[0.05] text-slate-400"
                          }`}
                        >
                          <Icon size={19} />
                        </div>

                        <p className="mt-4 text-sm font-semibold text-white">
                          {type.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {type.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Role */}
              <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6">
                <SectionHeader
                  number="02"
                  title="Target Role"
                  description="Choose the role you are preparing for."
                />

                <div className="mt-5">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#07101f] px-4 text-sm text-white outline-none transition focus:border-cyan-400/40"
                  >
                    {roles.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              {/* Skills */}
              <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6">
                <SectionHeader
                  number="03"
                  title="Skills"
                  description="Select the skills you want the AI to focus on."
                />

                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => {
                    const selected = selectedSkills.includes(skill);

                    return (
                      <button
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition ${
                          selected
                            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                            : "border-white/[0.08] bg-white/[0.02] text-slate-400 hover:text-white"
                        }`}
                      >
                        {selected && <Check size={13} />}
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Difficulty */}
              <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6">
                <SectionHeader
                  number="04"
                  title="Difficulty"
                  description="Choose how challenging your interview should be."
                />

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {difficulties.map((level) => {
                    const selected = difficulty === level;

                    return (
                      <button
                        key={level}
                        onClick={() => setDifficulty(level)}
                        className={`rounded-xl border py-3 text-sm font-medium transition ${
                          selected
                            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                            : "border-white/[0.07] text-slate-400 hover:bg-white/[0.03] hover:text-white"
                        }`}
                      >
                        {level}
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Questions + Mode */}
              <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6">
                <SectionHeader
                  number="05"
                  title="Interview Settings"
                  description="Choose the number of questions and interview mode."
                />

                {/* Questions */}
                <div className="mt-5">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare
                        size={16}
                        className="text-cyan-400"
                      />
                      <span className="text-sm font-medium text-slate-300">
                        Number of Questions
                      </span>
                    </div>

                    <span className="text-sm font-semibold text-cyan-400">
                      {questionCount}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="5"
                    max="20"
                    step="5"
                    value={questionCount}
                    onChange={(e) =>
                      setQuestionCount(Number(e.target.value))
                    }
                    className="w-full accent-cyan-400"
                  />

                  <div className="mt-2 flex justify-between text-[11px] text-slate-600">
                    <span>5</span>
                    <span>10</span>
                    <span>15</span>
                    <span>20</span>
                  </div>
                </div>

                {/* Mode */}
                <div className="mt-7">
                  <div className="mb-3 flex items-center gap-2">
                    <Mic size={16} className="text-violet-400" />

                    <span className="text-sm font-medium text-slate-300">
                      Interview Mode
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <ModeButton
                      active={mode === "text"}
                      icon={MessageSquare}
                      title="Text Interview"
                      description="Type your answers"
                      onClick={() => setMode("text")}
                    />

                    <ModeButton
                      active={mode === "voice"}
                      icon={Mic}
                      title="Voice Interview"
                      description="Speak your answers"
                      onClick={() => setMode("voice")}
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* Right Summary */}
            <aside className="xl:sticky xl:top-24 xl:h-fit">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-cyan-400">
                    <Brain size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Interview Summary
                    </p>

                    <p className="text-xs text-slate-500">
                      AI will use these settings
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <SummaryRow
                    label="Role"
                    value={role}
                  />

                  <SummaryRow
                    label="Type"
                    value={
                      interviewType.charAt(0).toUpperCase() +
                      interviewType.slice(1)
                    }
                  />

                  <SummaryRow
                    label="Difficulty"
                    value={difficulty}
                  />

                  <SummaryRow
                    label="Questions"
                    value={`${questionCount} questions`}
                  />

                  <SummaryRow
                    label="Mode"
                    value={
                      mode === "text"
                        ? "Text"
                        : "Voice"
                    }
                  />
                </div>

                <div className="my-5 h-px bg-white/[0.07]" />

                {/* Selected Skills */}
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Selected Skills
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedSkills.length > 0 ? (
                      selectedSkills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-cyan-400/10 px-2 py-1 text-[11px] text-cyan-300"
                        >
                          {skill}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-600">
                        No skills selected
                      </span>
                    )}
                  </div>
                </div>

                {/* Estimated Time */}
                <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                  <Clock3
                    size={15}
                    className="text-slate-500"
                  />

                  <span className="text-xs text-slate-400">
                    Estimated time:
                  </span>

                  <span className="ml-auto text-xs font-semibold text-white">
                    {questionCount * 2}-{questionCount * 3} min
                  </span>
                </div>

                {/* Start */}
                <Link
                  to="/interview"
                  state={{
                    role,
                    interviewType,
                    selectedSkills,
                    difficulty,
                    questionCount,
                    mode,
                  }}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition hover:scale-[1.01]"
                >
                  Start AI Interview
                  <ArrowRight size={17} />
                </Link>

                <p className="mt-3 text-center text-[11px] text-slate-600">
                  Your interview will adapt based on your answers.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
  );
}

/* ---------- Components ---------- */

function SectionHeader({ number, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-xs font-semibold text-cyan-400">
        {number}
      </span>

      <div>
        <h2 className="text-sm font-semibold text-white">
          {title}
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs text-slate-500">
        {label}
      </span>

      <span className="text-xs font-medium text-slate-200">
        {value}
      </span>
    </div>
  );
}

function ModeButton({
  active,
  icon: Icon,
  title,
  description,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${
        active
          ? "border-violet-400/30 bg-violet-400/[0.08]"
          : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12]"
      }`}
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          active
            ? "bg-violet-400/15 text-violet-400"
            : "bg-white/[0.05] text-slate-500"
        }`}
      >
        <Icon size={16} />
      </div>

      <div>
        <p className="text-xs font-semibold text-white">
          {title}
        </p>

        <p className="mt-0.5 text-[10px] text-slate-600">
          {description}
        </p>
      </div>
    </button>
  );
}

export default AIInterview;