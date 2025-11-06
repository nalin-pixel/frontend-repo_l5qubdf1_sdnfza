import React from 'react';
import { Star, Quote, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Alya Pratama',
    role: 'Owner, Kopi Tepi Jalan',
    quote:
      'Engagement naik 3x dalam 2 bulan. Timnya responsif dan materi kontennya rapi banget.',
    rating: 5,
  },
  {
    name: 'Rafi Hidayat',
    role: 'Founder, FitDaily ID',
    quote:
      'Kalender kontennya jelas, proses revisi cepat, dan semua ter-posting tepat waktu.',
    rating: 5,
  },
  {
    name: 'Nadya Putri',
    role: 'Marketing, GlowSkin Clinic',
    quote:
      'Desain konsisten dengan brand, copy-nya menjual tapi tetap elegan. Recommended!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-emerald-600">Social Proof</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Apa kata klien kami</h2>
          </div>
          <Quote className="hidden h-10 w-10 text-emerald-600 md:block" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <User className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
