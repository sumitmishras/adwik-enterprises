import Link from "next/link";
import { ChevronRight, Sun } from "lucide-react";

const categories = [
  {
    title: "Solar Panel Mounting Structures",
    icon: "🔧",
    products: [
      "Solar Panel Mounting Mid Clamp",
      "Solar Panel End Clamp",
      "Jointer Clip In Profile And C Channel",
      "Solar Structure Accessories",
      "Solar Panel Mounting Structure",
      "Spring Nuts Channel Nuts",
      "Galvanized Iron 5mm GI Solar Panel Mid Clamps",
      "Solar Panel Mid Clamp And End Clamp",
      "Mead Clam Z Clam Solar",
      "Gi U Clamp",
      "Z Type Clamp",
      "Solar Panel Base Plate",
      "Solar Structure Base Plate",
      "Gi Z Clamps",
      "Solar Studs",
      "Solar Panel Mounting Accesaries",
    ],
  },
  {
    title: "Cable Trays",
    icon: "🔌",
    products: [
      "Galvanized Iron Channels (Cable Tray)",
      "Slotted C Channel",
      "Galvanized Cable Trays",
      "Ms Cable Tray",
      "Stainless Steel Cable Trays",
      "Silver GI Perforated Cable Tray",
      "Mild Steel Perforated Cable Tray",
      "G.P Cable Tray",
      "GI Ladder Type Cable Trays",
    ],
  },
  {
    title: "Anchors & Fasteners",
    icon: "⚙️",
    products: [
      "Anchor Fasteners M8 & M10",
    ],
  },
  {
    title: "Solar Fabrication Services",
    icon: "🏗️",
    products: [
      "Solar Structure Fabrication",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-solar transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Products</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold">Our Products</h1>
          <p className="text-gray-400 mt-2">High-quality solar, cable tray, and industrial products</p>
        </div>
      </section>

      {categories.map((cat, idx) => (
        <section key={idx} className={`py-16 lg:py-20 ${idx % 2 === 1 ? "bg-gray-50" : ""}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{cat.title}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {cat.products.map((p, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-solar/10 flex items-center justify-center mb-3">
                    <span className="text-solar font-bold text-lg">{p.charAt(0)}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug">{p}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-gradient-to-r from-solar to-solar-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need a Custom Product?</h2>
          <p className="text-white/80 mb-6">Contact us for custom sizes, bulk orders, or special requirements</p>
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
