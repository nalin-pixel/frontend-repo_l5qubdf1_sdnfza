import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const items = [
  {
    q: 'Apa yang didapat dalam paket pengelolaan sosial media?',
    a: 'Perencanaan kalender konten, desain visual, penulisan copy, penjadwalan posting, laporan performa bulanan, serta 1x sesi evaluasi strategi.',
  },
  {
    q: 'Apakah bisa request niche atau style tertentu?',
    a: 'Tentu. Kami sesuaikan dengan brand guideline dan preferensi Anda. Kami juga siap membuat guideline jika belum tersedia.',
  },
  {
    q: 'Bagaimana proses revisi?',
    a: 'Kami sediakan 1-2 round revisi per batch konten. Semua dikomunikasikan via WhatsApp/Notion agar transparan dan cepat.',
  },
  {
    q: 'Apakah ada kontrak minimal?',
    a: 'Direkomendasikan 3 bulan agar hasil terlihat konsisten, namun Anda bisa mulai bulanan untuk mencoba lebih dulu.',
  },
];

function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-slate-900">{q}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="mt-3 text-sm text-slate-600">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Pertanyaan yang sering diajukan</h2>
        <div className="mx-auto mt-8 grid gap-4">
          {items.map((it, idx) => (
            <FAQItem key={idx} q={it.q} a={it.a} defaultOpen={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
