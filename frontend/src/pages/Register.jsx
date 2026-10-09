import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BrainCircuit,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Temporary frontend-only registration
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-5 py-12 sm:px-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/30 lg:grid-cols-2">

          {/* Left Side */}
          <div className="hidden flex-col justify-between bg-gradient-to-br from-cyan-500/[0.08] to-violet-600/[0.08] p-10 lg:flex">
            <div>
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600">
                  <BrainCircuit className="h-5 w-5 text-white" />
                </div>

                <span className="text-lg font-bold">
                  SkillPrep<span className="text-cyan-400">-AI</span>
                </span>
              </Link>

              <div className="mt-20 max-w-md">
                <p className="text-sm font-medium text-cyan-400">
                  START YOUR JOURNEY
                </p>

                <h1 className="mt-4 text-4xl font-bold leading-tight">
                  Prepare smarter.
                  <span className="block bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                    Get interview ready.
                  </span>
                </h1>

                <p className="mt-6 leading-7 text-slate-400">
                  Create your SkillPrep-AI account and start practicing
                  personalized technical interviews powered by AI.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Personalized AI interviews",
                "Resume-based questions",
                "Detailed performance feedback",
                "Targeted improvement recommendations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Register Form */}
          <div className="p-6 sm:p-10">
            <div className="mx-auto max-w-md">
              {/* Mobile Logo */}
              <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600">
                  <BrainCircuit className="h-5 w-5 text-white" />
                </div>

                <span className="text-lg font-bold">
                  SkillPrep<span className="text-cyan-400">-AI</span>
                </span>
              </div>

              {/* Heading */}
              <div>
                <p className="text-sm font-medium text-cyan-400">
                  CREATE ACCOUNT
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Create your account
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Start your personalized interview preparation journey.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Full Name
                  </label>

                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-white/[0.06]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-white/[0.06]"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Password
                  </label>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      required
                      minLength={6}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-11 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-white/[0.06]"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-300"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-11 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-white/[0.06]"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-300"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 accent-cyan-400"
                  />

                  <span className="text-xs leading-5 text-slate-500">
                    I agree to the{" "}
                    <span className="text-cyan-400 hover:text-cyan-300">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-cyan-400 hover:text-cyan-300">
                      Privacy Policy
                    </span>
                    .
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-violet-500/40"
                >
                  Create Account

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              {/* Login */}
              <p className="mt-7 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-cyan-400 transition hover:text-cyan-300"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;