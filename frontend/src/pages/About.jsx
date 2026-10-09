import {
  BrainCircuit,
  Target,
  Users,
  Sparkles,
  MessageSquare,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <Sparkles className="h-4 w-4" />
            About SkillPrep-AI
          </div>

          <h1 className="mt-7 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Prepare Smarter.
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Interview Better.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            SkillPrep-AI is an AI-powered interview preparation platform that
            helps students and developers practice technical interviews,
            identify weak areas, and improve with personalized feedback.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-cyan-400">
              WHAT WE DO
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Your personal AI interview partner.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
              Preparing for technical interviews can often feel repetitive and
              uncertain. SkillPrep-AI makes preparation more focused by creating
              interview experiences based on your resume, skills, and target
              role.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
              Instead of simply giving you a list of questions, SkillPrep-AI
              simulates an actual interview and provides meaningful feedback
              after the session.
            </p>

            {/* Points */}
            <div className="mt-7 space-y-4">
              {[
                "Personalized interview questions",
                "Resume and skill-based preparation",
                "AI-powered performance evaluation",
                "Weak-area identification and recommendations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                  </div>

                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right AI Workflow Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 sm:p-7">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative">
              {/* Card Header */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 shadow-lg shadow-violet-500/20">
                  <BrainCircuit className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    AI-Powered Preparation
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Personalized interview workflow
                  </p>
                </div>
              </div>

              {/* Workflow */}
              <div className="mt-7 space-y-3">
                {/* Input */}
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-cyan-400/70">
                    Input
                  </p>

                  <p className="mt-2 text-sm font-medium text-slate-200">
                    Resume + Skills + Target Role
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                    ↓
                  </div>
                </div>

                {/* AI Interview */}
                <div className="rounded-2xl border border-cyan-400/10 bg-slate-900/60 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-violet-400/80">
                      AI Interview
                    </p>

                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                  </div>

                  <p className="mt-2 text-sm font-medium text-slate-200">
                    Adaptive Technical Questions
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Questions adapt to your responses
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/5 text-violet-400">
                    ↓
                  </div>
                </div>

                {/* Output */}
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-emerald-400/70">
                    Output
                  </p>

                  <p className="mt-2 text-sm font-medium text-slate-200">
                    Evaluation + Recommendations
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-md bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-400">
                      Strengths
                    </span>

                    <span className="rounded-md bg-orange-400/10 px-2 py-1 text-[10px] text-orange-400">
                      Weak Areas
                    </span>

                    <span className="rounded-md bg-cyan-400/10 px-2 py-1 text-[10px] text-cyan-400">
                      Recommendations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y border-white/5 bg-white/[0.015] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <Target className="mx-auto h-10 w-10 text-cyan-400" />

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Our Mission</h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            Our goal is to make interview preparation more personalized,
            practical, and accessible. SkillPrep-AI is built to help learners
            move beyond random question practice and understand exactly where
            they need to improve.
          </p>
        </div>
      </section>

      {/* Who is it for */}
      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-medium text-cyan-400">
              BUILT FOR LEARNERS
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Who is SkillPrep-AI for?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Whether you are preparing for your first interview or trying to
              sharpen your existing skills, SkillPrep-AI can become part of your
              preparation workflow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <AudienceCard
              icon={<Users className="h-6 w-6" />}
              title="Students"
              description="Practice technical interviews before campus placements and internship opportunities."
            />

            <AudienceCard
              icon={<MessageSquare className="h-6 w-6" />}
              title="Freshers"
              description="Build confidence and identify the technical areas that need more preparation."
            />

            <AudienceCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Developers"
              description="Keep improving your technical knowledge and interview performance."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-violet-600/10 p-8 text-center sm:p-12">
          <Sparkles className="mx-auto h-9 w-9 text-cyan-400" />

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Ready to prepare smarter?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Start practicing with AI-powered interviews and turn your weak areas
            into strengths.
          </p>

          <Link
            to="/login"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-violet-500/40"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function AudienceCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}

export default About;
