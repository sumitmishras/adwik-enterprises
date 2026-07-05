import Link from "next/link";
import { ChevronRight, Sun, Cable, Zap, Grip, Cpu } from "lucide-react";

const categories = [
  {
    id: "solar",
    title: "Solar Panel Mounting Structures & Accessories",
    icon: Sun,
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    products: [
      "Solar Panel Mounting Mid Clamp",
      "Solar Panel Mounting End Clamp",
      "Solar Panel End Clamp",
      "Jointer Clip In Profile And C Channel",
      "Solar Structure Accessories",
      "Solar Panel Mounting Structure",
      "Spring Nuts Channel Nuts",
      "Galvanized Iron 5mm GI Solar Panel Mid Clamps",
      "Solar Panel Mid Clamps",
      "Solar Panel Mid Clamp And End Clamp",
      "Mead Clam Z Clam Solar",
      "Solar Panels Mounting Accesaries",
      "Gi U Clamp",
      "Gi Z Clamps",
      "Z Type Clamp",
      "Solar Panel Base Plate",
      "Solar Structure Base Plate",
      "Solar Studs",
      "Solar Structure Fabrication",
      "Gi Earthing Strip",
    ],
  },
  {
    id: "cable",
    title: "Cable Trays",
    icon: Cable,
    img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80",
    products: [
      "Galvanized Iron Channels",
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
    id: "earthing",
    title: "Earthing & Lightning Protection",
    icon: Zap,
    link: "/earthing",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    products: [
      "Copper Solar Lightning Arrester",
      "Lightning Arresters Mast",
      "Solid Copper Earth Rods",
      "Copper Earthing Electrodes",
      "Gi Earthing Electrode / Pipe",
      "Copper Bonded Earth Electrode",
      "Gi Pipe Earthing Electrode",
      "Copper Chemical Earthing Electrode",
      "GI Strip Pipe Earthing Electrode",
      "Chemical Earthing Electrode",
      "Copper Bonded Rods",
      "Earthing Rod",
    ],
  },
  {
    id: "fasteners",
    title: "Anchors & Fasteners",
    icon: Grip,
    img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80",
    products: [
      "Anchor Fasteners M8 & M10",
    ],
  },
  {
    id: "transformers",
    title: "Distribution Transformers",
    icon: Cpu,
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    products: [
      "Three Phase Servo Distribution Transformers",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-solar">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Products</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold">Our Products</h1>
          <p className="text-gray-400 mt-2">Complete range of solar, cable tray, earthing and industrial products</p>
        </div>
      </section>

      {categories.map((cat, idx) => (
        <section key={cat.id} className={`py-16 lg:py-20 ${idx % 2 === 1 ? "bg-gray-50" : ""}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="w-full lg:w-96 shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-52 object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-solar/10 flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-solar" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {cat.link ? (
                      <Link href={cat.link} className="hover:text-solar transition-colors">
                        {cat.title} <span className="text-sm font-normal">→</span>
                      </Link>
                    ) : (
                      cat.title
                    )}
                  </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cat.products.map((p, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl px-4 py-3.5 shadow-sm border border-gray-100 hover:shadow-md hover:border-solar/30 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-solar/10 flex items-center justify-center shrink-0">
                          <span className="text-solar font-bold text-xs">{p.charAt(0)}</span>
                        </div>
                        <span className="font-medium text-gray-900 text-xs leading-snug">{p}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-gradient-to-r from-solar to-solar-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need a Custom Product?</h2>
          <p className="text-white/80 mb-6">Contact us for custom sizes, bulk orders, or special requirements</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-solar-dark px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
