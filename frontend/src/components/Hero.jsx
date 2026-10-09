import { ArrowRight, Sparkles, Play, BrainCircuit } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute left-10 top-1/2 h-64 w-64 rounded-full bg-violet-600/15 blur-[110px]" />

        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-blue-600/15 blur-[120px]" />
      </div>

      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-10">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              AI-Powered Interview Preparation
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Prepare Smarter.
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Interview Better.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg lg:mx-0">
              Practice technical interviews with an AI interviewer that
              understands your resume, adapts to your answers, and identifies
              your strengths and weaknesses.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

              <a
                href="/register"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/40"
              >
                Start Interview
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                How It Works
              </a>

            </div>

            {/* Small Stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm lg:justify-start">
              <div>
                <p className="font-semibold text-white">Resume Based</p>
                <p className="mt-1 text-slate-500">Personalized questions</p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div>
                <p className="font-semibold text-white">Adaptive AI</p>
                <p className="mt-1 text-slate-500">Questions evolve with you</p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div>
                <p className="font-semibold text-white">Detailed Report</p>
                <p className="mt-1 text-slate-500">Know your weak areas</p>
              </div>
            </div>
          </div>

          {/* Right AI Interview Card */}
          <div className="relative mx-auto w-full max-w-xl">

            {/* Glow */}
            <div className="absolute inset-10 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-violet-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl sm:p-7">

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600">
                    <BrainCircuit className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      AI Technical Interview
                    </p>
                    <p className="text-xs text-slate-500">
                      Backend Developer
                    </p>
                  </div>
                </div>

                <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>

              {/* Question */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-cyan-400">
                  AI Interviewer
                </p>

                <p className="text-base leading-7 text-slate-200">
                  You mentioned Spring Boot in your resume. Can you explain
                  how dependency injection works in Spring?
                </p>
              </div>

              {/* Candidate Answer */}
              <div className="mt-4 rounded-2xl border border-violet-400/10 bg-violet-400/[0.03] p-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-violet-400">
                  Your Answer
                </p>

                <p className="text-sm leading-6 text-slate-400">
                  Dependency injection is a design pattern where Spring
                  provides the required dependencies instead of creating them
                  manually...
                </p>
              </div>

              {/* AI Evaluation */}
              <div className="mt-4 flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3">
                <div>
                  <p className="text-xs text-slate-500">
                    Understanding
                  </p>
                  <p className="font-semibold text-white">Good</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Difficulty
                  </p>
                  <p className="font-semibold text-cyan-400">Adaptive</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Score
                  </p>
                  <p className="font-semibold text-emerald-400">8.4/10</p>
                </div>
              </div>

              {/* Next Question */}
              <div className="mt-5 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                </div>

                <span className="text-xs text-slate-500">
                  6 / 9
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;