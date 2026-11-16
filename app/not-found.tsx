import Link from 'next/link';
import { Logo } from '@/components';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080a09] text-white flex flex-col justify-between p-6 sm:p-12">
      <header>
        <Link href="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-[#02e4a4] rounded-lg">
          <Logo size="md" />
        </Link>
      </header>

      <main className="my-auto max-w-xl mx-auto text-center space-y-6">
        <div className="inline-block px-3 py-1 rounded-full bg-[#02e4a4]/10 border border-[#02e4a4]/30 text-[#02e4a4] font-mono text-xs">
          ERROR 404: PAGE NOT FOUND
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          The Page You Are Looking For Does Not Exist.
        </h1>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          The link may have moved or the page is currently being updated by our studio team.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#02e4a4] hover:bg-[#3df6b8] text-black font-bold px-6 py-3.5 rounded-full transition-all shadow-[0_0_20px_rgba(2,228,164,0.3)]"
          >
            <span>&larr; Back to Home</span>
          </Link>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/30 text-gray-300 font-medium px-6 py-3.5 rounded-full transition-colors"
          >
            <span>Contact Studio</span>
          </a>
        </div>
      </main>

      <footer className="text-center text-xs text-gray-400 font-mono">
        &copy; 2026 Typical Studio (TYPCL). Surabaya, Indonesia.
      </footer>
    </div>
  );
}
