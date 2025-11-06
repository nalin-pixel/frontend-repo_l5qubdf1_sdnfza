import React from 'react';

const logos = [
  {
    name: 'NovaBank',
    src: 'https://dummyimage.com/140x40/0b1220/ffffff&text=NovaBank',
  },
  {
    name: 'FitDaily',
    src: 'https://dummyimage.com/140x40/0b1220/ffffff&text=FitDaily',
  },
  {
    name: 'GlowSkin',
    src: 'https://dummyimage.com/140x40/0b1220/ffffff&text=GlowSkin',
  },
  {
    name: 'KopiTepi',
    src: 'https://dummyimage.com/140x40/0b1220/ffffff&text=KopiTepi',
  },
  {
    name: 'TechHive',
    src: 'https://dummyimage.com/140x40/0b1220/ffffff&text=TechHive',
  },
];

export default function ClientLogos() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm text-slate-500">Dipercaya oleh brand dan bisnis berkembang</p>
        <div className="mt-6 grid grid-cols-2 items-center justify-center gap-8 opacity-70 md:grid-cols-5">
          {logos.map((l) => (
            <img
              key={l.name}
              src={l.src}
              alt={l.name}
              className="mx-auto h-8 w-auto grayscale"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
