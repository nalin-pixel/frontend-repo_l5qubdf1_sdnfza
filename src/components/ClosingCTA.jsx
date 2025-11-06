import React from 'react';
import { Rocket } from 'lucide-react';

export default function ClosingCTA() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-900 to-slate-950 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Siap buat akun Anda aktif dan konsisten?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Jadwalkan konsultasi Zoom 30 menit. Kita bahas tujuan, audiens, dan gaya konten yang paling cocok untuk brand Anda.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20jadwalkan%20konsultasi%20Zoom%2030%20menit."
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            <Rocket className="h-4 w-4" /> Jadwalkan Konsultasi
          </a>
        </div>
        <p className="mt-4 text-xs text-white/60">Respon cepat dalam jam kerja.</p>
      </div>
    </section>
  );
}
