function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 pt-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2">
              
              {/* Logo */}
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"
                    fill="white"
                  />
                  <path
                    d="M19 15L19.7 17.3L22 18L19.7 18.7L19 21L18.3 18.7L16 18L18.3 17.3L19 15Z"
                    fill="white"
                  />
                </svg>
              </div>

              <span className="text-xl font-bold text-white">
                Skill
                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  Prep
                </span>
                -AI
              </span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              An AI-powered technical interview preparation platform that
              helps you practice smarter, understand your weak areas, and
              prepare with confidence.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">

              {/* GitHub */}
              <SocialLink
                href="https://github.com/Mrdev21/SkillPrep-AI"
                label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1v3.12c0 .3.21.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </SocialLink>

              {/* LinkedIn */}
              <SocialLink
                href="#"
                label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </SocialLink>

              {/* Twitter / X */}
              <SocialLink
                href="#"
                label="Twitter"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.47 22H3.36l7.24-8.28L3 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.9h1.73L8.47 3.98H6.61L17.8 19.9Z" />
                </svg>
              </SocialLink>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#how-it-works">
                How It Works
              </FooterLink>
              <FooterLink href="#benefits">Benefits</FooterLink>
              <FooterLink href="/register">Get Started</FooterLink>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Account
            </h3>

            <ul className="mt-5 space-y-3">
              <FooterLink href="/login">Login</FooterLink>
              <FooterLink href="/register">Register</FooterLink>
              <FooterLink href="/dashboard">Dashboard</FooterLink>
              <FooterLink href="/interview">
                Start Interview
              </FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-slate-500">
            © {currentYear} SkillPrep-AI. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="#"
              className="text-xs text-slate-500 transition hover:text-slate-300"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-xs text-slate-500 transition hover:text-slate-300"
            >
              Terms
            </a>

            {/* Back to Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="M12 19V5" />
                <path d="M6 11l6-6 6 6" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
      >
        {children}
      </a>
    </li>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
    >
      {children}
    </a>
  );
}

export default Footer;