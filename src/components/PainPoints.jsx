import React from 'react';

const items = [
  'Bingung mau posting apa setiap hari',
  'Feed berantakan, desain seadanya',
  'Sudah rajin upload tapi engagement sepi',
  'Waktu habis buat ngurus konten, bisnis utama jadi terbengkalai',
  'Mau rekrut tim social media? Budgetnya bikin mikir dua kali',
];

export default function PainPoints() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Ngaku deh, Pernah Alami Hal Ini Saat Kelola Sosmed Bisnis?
        </h2>
        <p className="mt-3 text-gray-600">
          Kami paham tantangannya. Tenang, ada solusinya.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((text) => (
          <div key={text} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-500" />
              <p className="text-gray-800">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
