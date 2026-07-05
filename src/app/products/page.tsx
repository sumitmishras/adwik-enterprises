import Link from "next/link";
import { ChevronRight, Sun } from "lucide-react";

const railProducts = [
  { name: "Short Rail 31mm", size: "41 x 31 mm" },
  { name: "Short Rail 60mm", size: "60mm Height" },
  { name: "Short Rail 70mm", size: "70mm Height" },
  { name: "Short Rail 75mm", size: "75mm Height" },
  { name: "Short Rail 100mm", size: "100mm Height" },
  { name: "Mini Rail 100mm", size: "100mm Height" },
  { name: "Strut Channel", size: "41 x 41mm" },
  { name: "Long Rail", size: "80mm Height" },
  { name: "HDG Solar Rails", size: "41 x 41 x 2.5mm" },
];

const clampProducts = [
  { name: "Z Degree Bracket Structure", desc: "Customise" },
  { name: "Proflex Clamp", desc: "Aluminium T6 6063" },
  { name: "Kalzip Clamp", desc: "Aluminium T6 6063" },
  { name: "Standing Seam Clamp", desc: "Aluminium T6 6063" },
];

const bracketProducts = [
  { name: "Mid Clamp", size: "10, 25, 30, 35mm" },
  { name: "End Clamp", size: "25, 30, 35mm" },
  { name: "Double Hole Mid Clamp", size: "25, 30, 35mm" },
  { name: "Double Hole End Clamp", size: "25, 30, 35mm" },
  { name: "Rail Nut & Channel Nut", size: "M8 x 25mm" },
  { name: "Aluminium L Clamp", size: "Aluminium T6 6063" },
  { name: "Walkway Mid Clamp", size: "SS & G.I." },
  { name: "Spring Nut", size: "M8" },
  { name: "Allen Key Bolt", size: "M8 x 20,25,30,50mm" },
  { name: "J Bolt Hook", size: "M6, M8" },
  { name: "U Bolt Hook", size: "SS 202, 304" },
  { name: "Pop Rivet and Blind Rivet", size: "Aluminium" },
  { name: "Pin Type Anchor Fastener", size: "SS & G.I." },
  { name: "Solar Base Plates", size: "M.S. & G.I." },
  { name: "Parker Lord Adhesives", size: "As Per Requirement" },
  { name: "FRP Walkway", size: "Custom sizes" },
  { name: "Adhesive EPDM Rubber", size: "25 x 3 x 90 mm" },
  { name: "Solar Panel Mounting Rail Nut", size: "M8" },
];

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-solar transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Products</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold">Our Products</h1>
          <p className="text-gray-400 mt-2">High-quality solar mounting solutions for every project</p>
        </div>
      </section>

      {/* Rails */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Sun className="w-6 h-6 text-solar" />
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Solar Rails</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {railProducts.map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-solar/10 flex items-center justify-center mb-3">
                  <span className="text-solar font-bold">{p.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{p.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{p.size}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clamps */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Sun className="w-6 h-6 text-solar" />
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Solar Clamps</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clampProducts.map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center mb-3">
                  <span className="text-amber font-bold">{p.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brackets & Accessories */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Sun className="w-6 h-6 text-solar" />
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Brackets & Accessories</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {bracketProducts.map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-solar/10 flex items-center justify-center">
                  <span className="text-solar font-bold text-sm">{p.name.charAt(0)}</span>
                </div>
                <h3 className="font-medium text-gray-900 text-xs">{p.name}</h3>
                <p className="text-[10px] text-gray-500 mt-1">{p.size}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-solar to-solar-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-white/80 mb-6">Contact us for custom sizes and bulk orders</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-solar-dark px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
