import { Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-solar to-solar-dark py-16 lg:py-20">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
          Have Questions? Call Us +91 73801 30740
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto mb-8 text-sm lg:text-base">
          Power your solar projects with high-quality mounting structures and
          accessories from Adwik Enterprises. Contact us today for reliable,
          durable, and affordable solar solutions!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+917380130740"
            className="inline-flex items-center gap-2 bg-white text-solar-dark px-8 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all"
          >
            Get Quote
          </a>
        </div>
      </div>
    </section>
  );
}
