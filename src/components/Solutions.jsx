import React from 'react';

const points = [
  'Posting konsisten sesuai jadwal',
  'Desain profesional yang bikin feed rapi & menarik',
  'Konten video dengan style kekinian',
  'Brand awareness meningkat dengan konten tepat sasaran',
  'Anda fokus ke bisnis, kami urus sosial medianya',
  'Hemat biaya tanpa hire karyawan khusus',
];

export default function Solutions() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Tenang, Semua Bisa Diurus Tim Metasocial
            </h3>
            <p className="mt-3 text-gray-600">
              Dengan jasa kelola social media dari Metasocial, Anda bisa:
            </p>
            <ul className="mt-6 grid gap-2 text-gray-800">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Metasocial%2C%20saya%20ingin%20konsultasi%20gratis"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors"
              >
                📲 Konsultasi Gratis via WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              {points.slice(0, 6).map((p) => (
                <div key={p} className="rounded-lg bg-gray-50 p-4">
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
