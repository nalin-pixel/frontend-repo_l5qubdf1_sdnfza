import React from 'react';
import { Star, Image as ImageIcon, Video, Type, Hash, Calendar, BarChart } from 'lucide-react';

const benefits = [
  { icon: Star, text: 'Ide konten yang relate dengan target market Anda' },
  { icon: ImageIcon, text: 'Desain visual sesuai brand identity Anda' },
  { icon: Video, text: 'Editing video sesuai style' },
  { icon: Type, text: 'Caption yang engaging & mendorong interaksi' },
  { icon: Hash, text: 'Hashtag yang relevan & efektif' },
  { icon: Calendar, text: 'Konten kalender dan posting terjadwal' },
  { icon: BarChart, text: 'Laporan bulanan performa konten' },
];

export default function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Apa yang Akan Anda Dapatkan?</h3>
        <p className="mt-3 text-gray-600">Ringkas, jelas, dan langsung manfaatnya.</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-gray-800">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
