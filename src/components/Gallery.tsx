"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://placehold.co/600x400/1e293b/white?text=Manufacturing+Unit+1",
  "https://placehold.co/600x400/334155/white?text=Manufacturing+Unit+2",
  "https://placehold.co/600x400/1e293b/white?text=Manufacturing+Unit+3",
  "https://placehold.co/600x400/334155/white?text=Manufacturing+Unit+4",
  "https://placehold.co/600x400/1e293b/white?text=Manufacturing+Unit+5",
  "https://placehold.co/600x400/334155/white?text=Manufacturing+Unit+6",
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const open = (i: number) => setSelected(i);
  const close = () => setSelected(null);
  const prev = () =>
    setSelected((s) => (s === 0 ? images.length - 1 : s! - 1));
  const next = () =>
    setSelected((s) => (s === images.length - 1 ? 0 : s! + 1));

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-solar" />
            <span className="text-solar text-sm font-medium tracking-widest uppercase">
              Our Facility
            </span>
            <div className="h-px w-8 bg-solar" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Manufacturing Unit
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => open(i)}
              className="aspect-[3/2] rounded-xl overflow-hidden group"
            >
              <img
                src={img}
                alt={`Manufacturing Unit ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={close}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <img
            src={images[selected]}
            alt={`Manufacturing Unit ${selected + 1}`}
            className="max-w-full max-h-[80vh] rounded-xl object-contain"
          />

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          <div className="absolute bottom-4 text-white/70 text-sm">
            {selected + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
