import { useState } from "react";
import {
  Upload,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  X,
  RefreshCw,
  Target,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  function handleFile(selectedFile) {
    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Please upload a PDF or DOCX file.");
      return;
    }

    setFile(selectedFile);
    setIsAnalyzed(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files?.[0];

    handleFile(droppedFile);
  }

  function handleAnalyze() {
    if (!file) return;

    // Temporary frontend mock
    setIsAnalyzed(true);
  }

  function removeFile() {
    setFile(null);
    setIsAnalyzed(false);
  }

  return (
    <div className="min-h-screen bg-[#030817] text-white">
      <div className="min-h-screen bg-[#030817] text-white">
        <div className="px-4 py-8 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="w-full">
            <div className="flex items-center gap-2 text-sm text-cyan-400">
              <Sparkles size={16} />
              Resume Analyzer
            </div>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Analyze Your Resume
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Upload your resume and get AI-powered insights about your
              skills, strengths, gaps, and interview readiness.
            </p>
          </div>

          {/* Upload Area */}
          {!isAnalyzed && (
            <div className="mx-auto mt-8 max-w-8xl">

              {!file ? (
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`rounded-2xl border border-dashed p-10 text-center transition sm:p-14 ${
                    isDragging
                      ? "border-cyan-400/50 bg-cyan-400/[0.06]"
                      : "border-white/[0.10] bg-white/[0.03] hover:border-cyan-400/30"
                  }`}
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                    <Upload size={27} />
                  </div>

                  <h2 className="mt-5 text-lg font-semibold text-white">
                    Upload your resume
                  </h2>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                    Drag and drop your resume here, or select a file from
                    your computer.
                  </p>

                  <label className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]">
                    <Upload size={16} />
                    Choose Resume

                    <input
                      type="file"
                      accept=".pdf,.docx"
                      className="hidden"
                      onChange={(e) =>
                        handleFile(e.target.files?.[0])
                      }
                    />
                  </label>

                  <p className="mt-4 text-[11px] text-slate-600">
                    Supported formats: PDF, DOCX • Maximum 5MB
                  </p>
                </div>
              ) : (
                <UploadedFile
                  file={file}
                  onRemove={removeFile}
                  onAnalyze={handleAnalyze}
                />
              )}

              {/* Features */}
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <FeatureCard
                  icon={Target}
                  title="Resume Score"
                  description="Get an overall resume quality score."
                />

                <FeatureCard
                  icon={Code2}
                  title="Skills Detection"
                  description="Identify technical skills from your resume."
                />

                <FeatureCard
                  icon={BriefcaseBusiness}
                  title="Career Insights"
                  description="Find missing skills for your target role."
                />
              </div>
            </div>
          )}

          {/* Analysis Result */}
          {isAnalyzed && (
            <AnalysisResult
              file={file}
              onReset={() => {
                setFile(null);
                setIsAnalyzed(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Uploaded File ---------- */

function UploadedFile({ file, onRemove, onAnalyze }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-400/10 text-red-400">
            <FileText size={21} />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              {file.name}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onRemove}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] text-slate-500 transition hover:bg-white/[0.05] hover:text-white"
          >
            <X size={16} />
          </button>

          <button
            onClick={onAnalyze}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white"
          >
            <Sparkles size={16} />
            Analyze Resume
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Analysis Result ---------- */

function AnalysisResult({ file, onReset }) {
  const skills = [
    "Java",
    "Spring Boot",
    "React.js",
    "MySQL",
    "Git",
    "REST API",
  ];

  const missingSkills = [
    "System Design",
    "Docker",
    "Advanced SQL",
  ];

  return (
    <div className="mx-auto mt-8 max-w-6xl">

      {/* Result Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <CheckCircle2
              size={18}
              className="text-emerald-400"
            />

            <span className="text-sm font-medium text-emerald-400">
              Analysis Complete
            </span>
          </div>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Resume Analysis
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            {file?.name}
          </p>
        </div>

        <button
          onClick={onReset}
          className="flex w-fit items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-slate-300 hover:bg-white/[0.06]"
        >
          <RefreshCw size={15} />
          Analyze Another
        </button>
      </div>

      {/* Score */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[300px_1fr]">

        <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
          <p className="text-sm font-semibold text-white">
            Resume Score
          </p>

          <div className="relative mx-auto mt-7 h-40 w-40">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full -rotate-90"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-white/[0.06]"
              />

              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#resumeGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="251"
                strokeDashoffset="35"
              />

              <defs>
                <linearGradient
                  id="resumeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">
                86
              </span>

              <span className="text-[11px] text-slate-500">
                out of 100
              </span>
            </div>
          </div>

          <div className="mt-5 text-center">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Strong Resume
            </span>
          </div>
        </section>

        {/* Summary */}
        <section className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
          <p className="text-sm font-semibold text-white">
            Resume Summary
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            Your resume shows a strong foundation in Java, Spring Boot,
            React.js, and database technologies. Your project experience
            aligns well with entry-level software development roles.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <SummaryStat
              label="Skills Found"
              value="12"
            />

            <SummaryStat
              label="Projects"
              value="4"
            />

            <SummaryStat
              label="Experience Match"
              value="82%"
            />
          </div>
        </section>
      </div>

      {/* Skills */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">

        <section className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.03] p-6">
          <div className="flex items-center gap-2">
            <CheckCircle2
              size={18}
              className="text-emerald-400"
            />

            <h3 className="text-sm font-semibold text-white">
              Detected Skills
            </h3>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-emerald-400/10 px-3 py-2 text-xs text-emerald-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-amber-400/10 bg-amber-400/[0.03] p-6">
          <div className="flex items-center gap-2">
            <AlertTriangle
              size={18}
              className="text-amber-400"
            />

            <h3 className="text-sm font-semibold text-white">
              Recommended Skills
            </h3>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {missingSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-amber-400/10 px-3 py-2 text-xs text-amber-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Suggestions */}
      <section className="mt-6 rounded-2xl border border-violet-400/10 bg-violet-400/[0.04] p-6">
        <div className="flex items-center gap-2">
          <Sparkles
            size={18}
            className="text-violet-400"
          />

          <h3 className="text-sm font-semibold text-white">
            AI Recommendations
          </h3>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <Recommendation text="Add measurable results to your project descriptions." />

          <Recommendation text="Highlight your Spring Boot REST API experience." />

          <Recommendation text="Add Docker and system design to strengthen your backend profile." />
        </div>
      </section>
    </div>
  );
}

/* ---------- Small Components ---------- */

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        <Icon size={18} />
      </div>

      <p className="mt-4 text-sm font-semibold text-white">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function SummaryStat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <p className="text-xl font-bold text-white">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {label}
      </p>
    </div>
  );
}

function Recommendation({ text }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <p className="text-xs leading-5 text-slate-400">
        {text}
      </p>
    </div>
  );
}

export default ResumeAnalyzer;