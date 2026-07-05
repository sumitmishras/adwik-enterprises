"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    title: "Your Trusted Partner in Solar Energy",
    subtitle:
      "Manufacturer of Solar Panel Mounting Structures & Accessories in India",
    bg: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80",
  },
  {
    title: "Quality Solar Solutions for a Greener Tomorrow",
    subtitle:
      "High-quality solar mounting structures made in India",
    bg: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=1920&q=80",
  },
  {
    title: "Powering India's Solar Future",
    subtitle:
      "Premium Aluminum solar structures built to last",
    bg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&q=80",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-solar" />
              <span className="text-solar text-sm font-medium tracking-widest uppercase">
                Welcome to Aadwik Enterprises
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {slides[current].title.split(" ").map((word, i) =>
                word.toLowerCase() === "solar" ||
                word.toLowerCase() === "energy" ? (
                  <span key={i} className="text-solar">
                    {word}{" "}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-solar hover:bg-solar-dark text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:shadow-xl flex items-center gap-2"
              >
                Explore Products
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-full text-sm font-medium transition-all backdrop-blur-sm"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </a>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden sm:flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current
                ? "bg-solar w-8"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
