import React from 'react';

const plans = [
  { title: 'Promo 1', price: '1.500.000', badge: 'Sold Out', status: 'soldout' },
  { title: 'Promo 2', price: '2.350.000', badge: 'Order Now', status: 'active' },
  { title: 'Promo 3', price: '3.500.000', badge: 'Upcoming Price', status: 'upcoming' },
];

export default function Pricing() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Paket Harga Social Management</h3>
          <p className="mt-3 text-gray-600">Dapatkan paket terbaik sesuai kebutuhan Anda.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.title} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-gray-900">{p.title}</h4>
                <span className={`text-xs rounded-full px-2 py-1 font-medium ${
                  p.status === 'active' ? 'bg-emerald-100 text-emerald-700' : p.status === 'soldout' ? 'bg-gray-100 text-gray-600' : 'bg-amber-100 text-amber-700'
                }`}>
                  {p.badge}
                </span>
              </div>
              <p className="mt-4 text-3xl font-semibold text-gray-900">Rp {p.price}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>• Konten siap diposting secara konsisten</li>
                <li>• Team Profesional: PM, Social Media Officer, Designer, Video Editor</li>
              </ul>
              <div className="mt-6">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Metasocial%2C%20saya%20ingin%20ambil%20Promo%202"
                  className={`inline-flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                    p.status === 'active'
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {p.status === 'active' ? 'Jangan Tunda Lagi! Chat Kami Sekarang' : 'Tidak Tersedia'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
