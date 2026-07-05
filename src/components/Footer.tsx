import { Sun, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-8 h-8 text-solar" />
              <span className="text-xl font-bold text-white">
                Aadwik <span className="text-solar">Enterprises</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Trusted manufacturer of solar panel mounting structures, clamps,
              rails, and brackets based in Ludhiana, Punjab.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: FacebookIcon, href: "#" },
                { icon: InstagramIcon, href: "#" },
                { icon: LinkedinIcon, href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-solar flex items-center justify-center transition-all"
                >
                  <item.icon className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-solar transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Our Products</h3>
            <ul className="space-y-3">
              {[
                "Solar Panel Short & Mini Rails",
                "Solar Panel Clamps",
                "Solar Panel Brackets",
                "Solar Panel Mounting Structures",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="/products"
                    className="text-sm text-gray-400 hover:text-solar transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-solar mt-0.5 shrink-0" />
                <a
                  href="tel:+917380130740"
                  className="text-sm text-gray-400 hover:text-solar transition-colors"
                >
                  +91 73801 30740
                  <br />
                  +91 73801 30740
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-solar mt-0.5 shrink-0" />
                <a
                  href="mailto:contact@adwikenterprises.com"
                  className="text-sm text-gray-400 hover:text-solar transition-colors"
                >
                  contact@adwikenterprises.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-solar mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  Industrial Area, Near Gill Road
                  <br />
                  Ludhiana - 141003, Punjab
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; 2026 Aadwik Enterprises. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
