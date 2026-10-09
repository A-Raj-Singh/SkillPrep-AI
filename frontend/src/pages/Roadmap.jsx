import { useState } from "react";
import {
  Map,
  CheckCircle2,
  Circle,
  Lock,
  ChevronDown,
  Code2,
  Database,
  Server,
  Monitor,
  Brain,
  BriefcaseBusiness,
  Sparkles,
  Clock3,
} from "lucide-react";

const roadmaps = {
  "Java Backend Developer": [
    {
      title: "Java Fundamentals",
      description: "Build a strong foundation in Core Java.",
      icon: Code2,
      duration: "1 week",
      progress: 100,
      status: "completed",
      topics: [
        "Variables & Data Types",
        "OOP",
        "String",
        "Exception Handling",
        "Collections",
      ],
    },
    {
      title: "DSA",
      description: "Improve problem-solving and coding skills.",
      icon: Brain,
      duration: "3 weeks",
      progress: 65,
      status: "current",
      topics: [
        "Arrays",
        "Strings",
        "Hashing",
        "Two Pointer",
        "Sliding Window",
        "Linked List",
      ],
    },
    {
      title: "SQL & DBMS",
      description: "Master database concepts for backend interviews.",
      icon: Database,
      duration: "1 week",
      progress: 40,
      status: "current",
      topics: [
        "SQL Queries",
        "Joins",
        "Subqueries",
        "Normalization",
        "Indexes",
      ],
    },
    {
      title: "Spring Boot",
      description: "Build production-ready Java backend applications.",
      icon: Server,
      duration: "2 weeks",
      progress: 30,
      status: "current",
      topics: [
        "REST API",
        "Dependency Injection",
        "Spring Security",
        "JPA / Hibernate",
        "JWT",
      ],
    },
    {
      title: "System Design Basics",
      description: "Learn the fundamentals of designing scalable systems.",
      icon: Monitor,
      duration: "1 week",
      progress: 0,
      status: "locked",
      topics: [
        "Client-Server",
        "API Design",
        "Caching",
        "Load Balancing",
        "Database Design",
      ],
    },
    {
      title: "Interview Preparation",
      description: "Prepare for technical and behavioral interviews.",
      icon: BriefcaseBusiness,
      duration: "1 week",
      progress: 0,
      status: "locked",
      topics: [
        "Technical Questions",
        "HR Questions",
        "Mock Interviews",
        "Resume Questions",
        "Communication",
      ],
    },
  ],

  "Full Stack Developer": [
    {
      title: "Frontend Fundamentals",
      description: "Strengthen HTML, CSS and JavaScript fundamentals.",
      icon: Monitor,
      duration: "1 week",
      progress: 100,
      status: "completed",
      topics: [
        "HTML",
        "CSS",
        "JavaScript",
        "DOM",
        "ES6+",
      ],
    },
    {
      title: "React.js",
      description: "Build modern frontend applications with React.",
      icon: Code2,
      duration: "2 weeks",
      progress: 70,
      status: "current",
      topics: [
        "Components",
        "Props & State",
        "Hooks",
        "React Router",
        "API Integration",
      ],
    },
    {
      title: "Backend Development",
      description: "Build APIs and backend services.",
      icon: Server,
      duration: "2 weeks",
      progress: 45,
      status: "current",
      topics: [
        "REST APIs",
        "Authentication",
        "Spring Boot",
        "JWT",
        "Error Handling",
      ],
    },
    {
      title: "Database",
      description: "Learn SQL and database design.",
      icon: Database,
      duration: "1 week",
      progress: 40,
      status: "current",
      topics: [
        "SQL",
        "Joins",
        "Normalization",
        "Indexes",
        "Transactions",
      ],
    },
    {
      title: "Full Stack Projects",
      description: "Build projects combining frontend and backend.",
      icon: Code2,
      duration: "2 weeks",
      progress: 0,
      status: "locked",
      topics: [
        "Authentication",
        "CRUD",
        "API Integration",
        "Deployment",
        "Git & GitHub",
      ],
    },
    {
      title: "Interview Preparation",
      description: "Prepare for full-stack interviews.",
      icon: BriefcaseBusiness,
      duration: "1 week",
      progress: 0,
      status: "locked",
      topics: [
        "Technical",
        "Coding",
        "System Design",
        "HR",
        "Mock Interviews",
      ],
    },
  ],
};

function Roadmap() {
  const [role, setRole] = useState("Java Backend Developer");
  const [expanded, setExpanded] = useState(1);

  const roadmap = roadmaps[role];

  const completed = roadmap.filter(
    (item) => item.status === "completed"
  ).length;

  const overallProgress = Math.round(
    roadmap.reduce((sum, item) => sum + item.progress, 0) /
      roadmap.length
  );

  function toggleStep(index) {
    setExpanded((current) =>
      current === index ? -1 : index
    );
  }

  return (
    <div className="min-h-screen bg-[#030817] text-white">
      <div className="min-h-screen bg-[#030817] text-white">
        <div className="px-4 py-8 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="w-full">
            <div className="flex items-center gap-2 text-sm text-cyan-400">
              <Map size={16} />
              Preparation Roadmap
            </div>

            <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Your Learning Roadmap
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                  Follow a structured path based on your target role and
                  improve your interview readiness step by step.
                </p>
              </div>

              {/* Role Selector */}
              <select
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  setExpanded(0);
                }}
                className="h-11 rounded-xl border border-white/[0.08] bg-[#07101f] px-4 text-sm text-white outline-none focus:border-cyan-400/30"
              >
                {Object.keys(roadmaps).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Progress Card */}
          <div className="mx-auto mt-7 max-w-5xl rounded-2xl border border-white/[0.08] bg-gradient-to-r from-cyan-500/[0.07] to-violet-500/[0.07] p-5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Sparkles size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {role}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {completed} of {roadmap.length} stages completed
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="hidden text-right sm:block">
                  <p className="text-xs text-slate-500">
                    Overall Progress
                  </p>

                  <p className="mt-1 text-xl font-bold text-white">
                    {overallProgress}%
                  </p>
                </div>

                <div className="h-12 w-12 rounded-full border-4 border-cyan-400/20 border-t-cyan-400" />
              </div>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-700"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>

          {/* Roadmap */}
          <div className="mx-auto mt-8 max-w-5xl">
            {roadmap.map((step, index) => {
              const Icon = step.icon;
              const isExpanded = expanded === index;
              const isLast = index === roadmap.length - 1;

              return (
                <div
                  key={step.title}
                  className="relative flex gap-4 sm:gap-6"
                >
                  {/* Timeline */}
                  <div className="flex w-8 shrink-0 flex-col items-center">
                    <div
                      className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border ${
                        step.status === "completed"
                          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                          : step.status === "current"
                          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                          : "border-white/[0.08] bg-white/[0.03] text-slate-600"
                      }`}
                    >
                      {step.status === "completed" ? (
                        <CheckCircle2 size={16} />
                      ) : step.status === "locked" ? (
                        <Lock size={14} />
                      ) : (
                        <span className="text-xs font-bold">
                          {index + 1}
                        </span>
                      )}
                    </div>

                    {!isLast && (
                      <div className="h-full min-h-20 w-px bg-white/[0.08]" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="mb-5 min-w-0 flex-1">
                    <button
                      onClick={() => toggleStep(index)}
                      className={`w-full rounded-2xl border p-5 text-left transition ${
                        step.status === "locked"
                          ? "border-white/[0.05] bg-white/[0.015]"
                          : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.13]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">

                        <div className="flex min-w-0 items-start gap-4">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                              step.status === "completed"
                                ? "bg-emerald-400/10 text-emerald-400"
                                : step.status === "current"
                                ? "bg-cyan-400/10 text-cyan-400"
                                : "bg-white/[0.04] text-slate-600"
                            }`}
                          >
                            <Icon size={18} />
                          </div>

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h2
                                className={`text-sm font-semibold ${
                                  step.status === "locked"
                                    ? "text-slate-500"
                                    : "text-white"
                                }`}
                              >
                                {step.title}
                              </h2>

                              {step.status === "current" && (
                                <span className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-[10px] font-medium text-cyan-300">
                                  In Progress
                                </span>
                              )}

                              {step.status === "completed" && (
                                <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                                  Completed
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        <ChevronDown
                          size={17}
                          className={`shrink-0 text-slate-600 transition ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {/* Progress */}
                      <div className="mt-5">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[11px] text-slate-600">
                            Progress
                          </span>

                          <span className="text-[11px] text-slate-500">
                            {step.progress}%
                          </span>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                          <div
                            className={`h-full rounded-full ${
                              step.status === "completed"
                                ? "bg-emerald-400"
                                : step.status === "current"
                                ? "bg-gradient-to-r from-cyan-400 to-violet-500"
                                : "bg-slate-700"
                            }`}
                            style={{
                              width: `${step.progress}%`,
                            }}
                          />
                        </div>
                      </div>

                      {/* Expanded Topics */}
                      {isExpanded && (
                        <div className="mt-5 border-t border-white/[0.06] pt-5">
                          <div className="grid gap-2 sm:grid-cols-2">
                            {step.topics.map((topic, topicIndex) => (
                              <div
                                key={topic}
                                className="flex items-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.02] p-3"
                              >
                                {step.status === "completed" ||
                                topicIndex < 2 ? (
                                  <CheckCircle2
                                    size={14}
                                    className="text-emerald-400"
                                  />
                                ) : (
                                  <Circle
                                    size={14}
                                    className="text-slate-600"
                                  />
                                )}

                                <span className="text-xs text-slate-400">
                                  {topic}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-600">
                            <Clock3 size={13} />
                            Estimated duration: {step.duration}
                          </div>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;