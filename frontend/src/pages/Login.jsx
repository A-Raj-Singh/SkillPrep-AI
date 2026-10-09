import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Abhi frontend-only login
    // Backend authentication baad me connect karenge
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <div className="mx-auto flex min-h-[90vh] max-w-6xl items-center justify-center">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl lg:grid-cols-2">

          {/* Left Side */}
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-cyan-500/10 via-slate-900 to-violet-600/10 p-10 lg:flex lg:flex-col lg:justify-between">

            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/20 blur-[100px]" />

            <div className="relative">
              <Link
                to="/"
                className="text-2xl font-bold"
              >
                Skill
                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  Prep
                </span>
                -AI
              </Link>

              <div className="mt-20">
                <p className="text-sm font-medium text-cyan-400">
                  AI-POWERED INTERVIEW PREPARATION
                </p>

                <h1 className="mt-4 text-4xl font-bold leading-tight">
                  Practice smarter.
                  <br />
                  Interview better.
                </h1>

                <p className="mt-5 max-w-md leading-7 text-slate-400">
                  Prepare with personalized AI interviews based on your
                  resume, skills, projects, and target role.
                </p>
              </div>
            </div>

            <p className="relative text-sm text-slate-600">
              Your preparation starts here.
            </p>
          </div>

          {/* Login Form */}
          <div className="p-7 sm:p-10 lg:p-12">

            <div className="mx-auto max-w-md">

              <div className="mb-8">
                <Link
                  to="/"
                  className="text-xl font-bold lg:hidden"
                >
                  Skill
                  <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                    Prep
                  </span>
                  -AI
                </Link>

                <h2 className="mt-8 text-3xl font-bold">
                  Welcome back
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Login to continue your interview preparation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-300">
                      Password
                    </label>

                    <a
                      href="#"
                      className="text-xs text-cyan-400 hover:text-cyan-300"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/40"
                >
                  Login
                </button>

              </form>

              {/* Register */}
              <p className="mt-8 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-cyan-400 hover:text-cyan-300"
                >
                  Create an account
                </Link>
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;