import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-3 py-1 text-xs font-medium tracking-wide">
            <Rocket className="h-3.5 w-3.5" /> Metasocial
          </span>
          <h1 className="mt-5 text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
            Ga punya waktu buat ngurusin sosmed dan belum ada budget buat bangun team sosmed sendiri?
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Serahkan pada tim Metasocial! Konten rutin terposting, desain lebih menarik, dan brand semakin dikenal lebih luas. Semua tanpa perlu hire tim in-house yang mahal!
          </p>

          <ul className="mt-6 grid gap-2 text-sm md:text-base text-gray-700">
            <li>👉 Konten rutin terposting</li>
            <li>👉 Konten dan Desain lebih menarik</li>
            <li>👉 Brand semakin dikenal lebih luas</li>
          </ul>

          <div className="mt-8">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Metasocial%2C%20saya%20ingin%20punya%20Team%20Social%20Media"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors"
            >
              👉 Miliki Team Social Media Sekarang!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
