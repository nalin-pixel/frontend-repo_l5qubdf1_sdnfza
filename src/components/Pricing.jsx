import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Promo 1',
    price: 'Rp1,7jt',
    desc: 'Cocok untuk UKM yang ingin mulai konsisten.',
    features: ['12 feed/bulan', '8 story/bulan', 'Kalender konten', '1x laporan bulanan'],
    cta: { label: 'Pilih Promo 1', href: 'https://wa.me/6281234567890?text=Saya%20pilih%20Promo%201' },
  },
  {
    name: 'Promo 2',
    price: 'Rp2,5jt',
    desc: 'Best value untuk akselerasi pertumbuhan.',
    featured: true,
    features: ['16 feed/bulan', '12 story/bulan', 'Copywriting premium', '2x laporan & evaluasi'],
    cta: { label: 'Pilih Promo 2', href: 'https://wa.me/6281234567890?text=Saya%20pilih%20Promo%202' },
  },
  {
    name: 'Promo 3',
    price: 'Rp4,2jt',
    desc: 'Untuk brand yang ingin scale dengan agresif.',
    features: ['24 feed/bulan', '20 story/bulan', 'Manajemen kampanye', 'Monthly strategy call'],
    cta: { label: 'Diskusi Paket', href: 'https://wa.me/6281234567890?text=Diskusi%20Promo%203' },
  },
];

export default function Pricing() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-emerald-600">Pricing</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Paket yang fleksibel</h2>
          <p className="mt-3 text-slate-600">Pilih paket sesuai kebutuhan—semua sudah termasuk perencanaan dan eksekusi harian.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-6 shadow-sm transition hover:shadow-md ${
                p.featured ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white">
                  Best value
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-1 text-3xl font-bold text-slate-900">{p.price}</p>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.cta.href}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  p.featured
                    ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {p.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
