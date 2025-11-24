export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-[#020406] py-8 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-zinc-400">
            © {currentYear} Abhinav Raj. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/abbinavv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-[#14F4C9]"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/abhinavraj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-[#14F4C9]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:abhinavraj00001@gmail.com"
              className="text-sm text-zinc-400 transition-colors hover:text-[#14F4C9]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
