"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://placehold.co/800x500/16a34a/white?text=Mounting+Structure+1",
  "https://placehold.co/800x500/15803d/white?text=Mounting+Structure+2",
  "https://placehold.co/800x500/16a34a/white?text=Mounting+Structure+3",
  "https://placehold.co/800x500/15803d/white?text=Mounting+Structure+4",
  "https://placehold.co/800x500/16a34a/white?text=Mounting+Structure+5",
  "https://placehold.co/800x500/15803d/white?text=Mounting+Structure+6",
  "https://placehold.co/800x500/16a34a/white?text=Mounting+Structure+7",
];

export default function MountingStructure() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () =>
    setStartIndex((prev) => (prev === 0 ? images.length - 3 : prev - 1));
  const next = () =>
    setStartIndex((prev) => (prev >= images.length - 3 ? 0 : prev + 1));

  const visible = images.slice(startIndex, startIndex + 3);
  while (visible.length < 3) {
    visible.push(images[visible.length]);
  }

  return (
    <section className="py-20 lg:py-28 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-solar" />
            <span className="text-solar text-sm font-medium tracking-widest uppercase">
              Mounting Structure
            </span>
            <div className="h-px w-8 bg-solar" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Solar Panel Module Mounting Structure
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            High-quality aluminum mounting structures designed for durability and
            easy installation
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {visible.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Mounting Structure ${startIndex + i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-8">
          <a
            href="/products"
            className="inline-flex items-center gap-2 text-solar hover:text-solar-light font-medium transition-colors"
          >
            View All Structures
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
