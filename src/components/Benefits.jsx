import React from 'react';
import { Rocket, ShieldCheck, Sparkles, Clock } from 'lucide-react';

const benefits = [
  { icon: Rocket, title: 'Pertumbuhan Terukur', desc: 'Rencana yang fokus ke metrik yang penting: reach, engagement, dan leads.' },
  { icon: ShieldCheck, title: 'Brand Konsisten', desc: 'Tone visual dan voice dijaga agar kredibel dan mudah dikenali.' },
  { icon: Sparkles, title: 'Konten Relevan', desc: 'Ikuti tren tanpa kehilangan jati diri brand Anda.' },
  { icon: Clock, title: 'Hemat Waktu', desc: 'Anda fokus ke operasional bisnis, produksi konten kami urus.' },
];

export default function Benefits() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-emerald-600">Benefits</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Kenapa memilih kami</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
