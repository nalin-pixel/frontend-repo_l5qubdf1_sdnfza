import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6cOu3sKoKYLrBv5p/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/90" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Star className="h-3.5 w-3.5 text-yellow-300" />
          Metasocial — Social Media Management
        </span>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Kelola Sosial Media Tanpa Ribet.
          <br className="hidden md:block" />
          Fokus ke Bisnis, Konten Kami Urus.
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
          Tim kreatif kami merencanakan, membuat, dan mempublikasikan konten yang konsisten
          untuk Instagram, TikTok, dan platform lain. Hasil rapi, ritme terjaga, brand makin kuat.
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-white/80 md:grid-cols-3">
          <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-2">Kalender konten bulanan</li>
          <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-2">Desain & copywriting</li>
          <li className="rounded-lg border border-white/10 bg-white/5 px-4 py-2">Posting & monitoring</li>
        </ul>

        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Metasocial%2C%20saya%20ingin%20konsultasi%20pengelolaan%20sosial%20media."
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            <Rocket className="h-4 w-4" /> Konsultasi Gratis 30 Menit
          </a>
          <span className="text-xs text-white/60">Tanpa komitmen. Kami analisis akun Anda terlebih dahulu.</span>
        </div>
      </div>
    </section>
  );
}
