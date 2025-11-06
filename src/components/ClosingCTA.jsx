import React from 'react';
import { Rocket } from 'lucide-react';

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Saatnya Punya Team Social Media yang bisa diandalkan untuk handle konten sosmed mu!
        </h3>
        <p className="mt-3 text-gray-600">
          Jangan biarkan kompetitor mendahuluimu. Saatnya tampil lebih profesional di media sosial dengan dukungan tim yang tepat, efisien, hemat waktu dan biaya.
        </p>
        <div className="mt-8 inline-flex flex-col items-center gap-3">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Metasocial%2C%20saya%20ingin%20Free%20Konsultasi%2030%20menit"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-emerald-700 transition-colors"
          >
            <Rocket className="h-4 w-4" /> 🚀 Dapatkan Free Konsultasi Strategi Konten via Zoom (30 menit)
          </a>
          <p className="text-xs text-gray-500">Berlaku untuk 3 pendaftar pertama</p>
        </div>
      </div>
    </section>
  );
}
