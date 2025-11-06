import React from 'react';

const items = [
  'Kehabisan ide konten setiap minggu',
  'Desain tidak konsisten dengan brand',
  'Caption generik dan kurang engaging',
  'Jadwal posting berantakan',
  'Tidak sempat analisis performa',
  'Tidak ada kalender konten yang rapi',
];

export default function PainPoints() {
  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-emerald-600">Pain Problem</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Masalah umum yang sering muncul</h2>
          <p className="mt-3 text-slate-600">Jika 2-3 poin di bawah ini relate, berarti saatnya serahkan pada tim yang fokus.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((it) => (
            <div key={it} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-700">{it}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
