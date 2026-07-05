"use client";

import { useState } from "react";
import { Menu, X, Phone, Sun } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blogs", href: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Sun className="w-8 h-8 text-solar" />
            <span className="text-xl font-bold text-gray-900">
              Adwik <span className="text-solar">Enterprises</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-solar transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917380130740"
              className="flex items-center gap-2 text-sm font-medium text-solar hover:text-solar-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 73801 30740
            </a>
            <a
              href="/contact"
              className="bg-solar hover:bg-solar-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg"
            >
              Get Quote
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-solar transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+917380130740"
              className="flex items-center gap-2 py-2 text-sm font-medium text-solar"
            >
              <Phone className="w-4 h-4" />
              +91 73801 30740
            </a>
            <a
              href="/contact"
              className="block text-center bg-solar text-white px-5 py-2.5 rounded-full text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
