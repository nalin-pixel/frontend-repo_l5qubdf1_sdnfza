import React from 'react';
import { Image, Video, Type, Hash, Calendar, BarChart } from 'lucide-react';

const features = [
  { icon: Calendar, title: 'Kalender Konten', desc: 'Perencanaan bulanan yang jelas, mudah direview dan disetujui.' },
  { icon: Image, title: 'Desain Visual', desc: 'Feed rapi, konsisten, dan selaras dengan identitas brand.' },
  { icon: Type, title: 'Copywriting', desc: 'Teks yang engaging dan relevan, anti garing dan clickbait.' },
  { icon: Video, title: 'Short Video', desc: 'Reels/TikTok sesuai tren untuk ekspansi jangkauan.' },
  { icon: Hash, title: 'Hashtag & Caption', desc: 'Optimasi reach organik untuk visibilitas yang lebih besar.' },
  { icon: BarChart, title: 'Laporan', desc: 'Ringkas, mudah dibaca, dan berorientasi keputusan.' },
];

export default function Solutions() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-emerald-600">Solution</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Semua yang Anda butuhkan</h2>
          <p className="mt-3 text-slate-600">Kami gabungkan strategi, desain, dan eksekusi agar akun Anda berjalan konsisten setiap hari.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Metasocial%2C%20saya%20ingin%20demo%20alur%20kerja%20dan%20kalender%20kontennya."
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Lihat Contoh Kalender Konten
          </a>
        </div>
      </div>
    </section>
  );
}
