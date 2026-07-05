import Link from "next/link";
import { ChevronRight, Sun, Cable, Zap, Grip, Cpu, Wrench } from "lucide-react";

const img = (name: string) => `/products/${name}.jpg`;

const categories = [
  {
    id: "solar",
    title: "Solar Panel Mounting Structures & Accessories",
    icon: Sun,
    products: [
      { name: "Solar Panel Mounting Mid Clamp", img: img("Solar Panel Mounting Mid Clamp") },
      { name: "Solar Panel Mounting End Clamp", img: img("Solar Panel Mounting End Clamp") },
      { name: "Solar Panel End Clamp", img: img("Solar Panel End Clamp") },
      { name: "Jointer Clip In Profile And C Channel", img: img("Jointer Clip In Profile And C Channel") },
      { name: "Solar Structure Accessories", img: img("Solar Structure Accessories") },
      { name: "Solar Panel Mounting Structure", img: img("Solar Panel Mounting Structure") },
      { name: "Spring Nuts Channel Nuts", img: img("Spring Nuts Channel Nuts") },
      { name: "Galvanized Iron 5mm GI Solar Panel Mid Clamps", img: img("Galvanized Iron 5mm GI Solar Panel Mid Clamps") },
      { name: "Solar Panel Mid Clamps", img: img("Solar Panel Mid Clamps") },
      { name: "Mead Clam Z Clam Solar", img: img("Mead Clam Z Clam Solar") },
      { name: "Solar Panel Mid Clamp And End Clamp", img: img("Solar Panel Mid Clamp And End Clamp") },
      { name: "Solar Panels Mounting Accesaries", img: img("Solar Panels Mounting Accesaries") },
      { name: "Gi U Clamp", img: img("Gi U Clamp") },
      { name: "Gi Z Clamps", img: img("Gi Z Clamps") },
      { name: "Z Type Clamp", img: img("Z Type Clamp") },
      { name: "Solar Panel Base Plate", img: img("Solar Panel Base Plate") },
      { name: "Solar Structure Base Plate", img: img("Solar Structure Base Plate") },
      { name: "Solar Studs", img: img("Solar Studs") },
      { name: "Solar Structure Fabrication", img: img("Solar Structure Fabrication") },
      { name: "Gi Earthing Strip", img: img("Gi Earthing Strip") },
    ],
  },
  {
    id: "beam",
    title: "Beam Clamp & Pipe Clamp",
    icon: Wrench,
    products: [
      { name: "Beam Clamp Europe Design", img: img("Beam Clamp Europe Design") },
      { name: "C Type Beam Clamp", img: img("C Type Beam Clamp") },
      { name: "Channel Pipe Clamp", img: img("Channel Pipe Clamp") },
      { name: "Duct Flange Clamp", img: img("Duct Flange Clamp") },
      { name: "Hose Pipe Clamp White Zinc", img: img("Hose Pipe Clamp White Zinc") },
      { name: "Split Pipe Clamp With Rubber", img: img("Split Pipe Clamp With Rubber") },
    ],
  },
  {
    id: "cable",
    title: "Cable Trays",
    icon: Cable,
    products: [
      { name: "Galvanized Iron Channels", img: img("Galvanized Iron Channels") },
      { name: "Slotted C Channel", img: img("Slotted C Channel") },
      { name: "Galvanized Cable Trays", img: img("Galvanized Cable Trays") },
      { name: "Ms Cable Tray", img: img("Ms Cable Tray") },
      { name: "Stainless Steel Cable Trays", img: img("Stainless Steel Cable Trays") },
      { name: "Silver GI Perforated Cable Tray", img: img("Silver GI Perforated Cable Tray") },
      { name: "Mild Steel Perforated Cable Tray", img: img("Mild Steel Perforated Cable Tray") },
      { name: "G.P Cable Tray", img: img("G.P Cable Tray") },
      { name: "GI Ladder Type Cable Trays", img: img("GI Ladder Type Cable Trays") },
    ],
  },
  {
    id: "earthing",
    title: "Earthing & Lightning Protection",
    icon: Zap,
    products: [
      { name: "Copper Solar Lightning Arrester", img: img("Copper Solar Lightning Arrester") },
      { name: "Lightning Arresters Mast", img: img("Lightning Arresters Mast") },
      { name: "Solid Copper Earth Rods", img: img("Solid Copper Earth Rods") },
      { name: "Copper Earthing Electrodes", img: img("Copper Earthing Electrodes") },
      { name: "Gi Earthing Electrode / Pipe", img: img("Gi Earthing Electrode Pipe") },
      { name: "COPPER BONDED EARTHING ELECTRODE 50MM - 80 MM", img: img("COPPER BONDED EARTHING ELECTRODE 50MM - 80 MM") },
      { name: "Gi Pipe Earthing Electrode", img: img("Gi Pipe Earthing Electrode") },
      { name: "Copper Chemical Earthing Electrode", img: img("Copper Chemical Earthing Electrode") },
      { name: "GI Strip Pipe Earthing Electrode", img: img("GI Strip Pipe Earthing Electrode") },
      { name: "Chemical Earthing Electrode", img: img("Chemical Earthing Electrode") },
      { name: "Copper Bonded Rods", img: img("Copper Bonded Rods") },
      { name: "Earthing Rod", img: img("Earthing Rod") },
    ],
  },
  {
    id: "fasteners",
    title: "Anchors & Fasteners",
    icon: Grip,
    products: [
      { name: "Anchor Fasteners M8 & M10", img: img("Anchor Fasteners M8 & M10") },
    ],
  },
  {
    id: "transformers",
    title: "Distribution Transformers",
    icon: Cpu,
    products: [
      { name: "Three Phase Servo Distribution Transformers", img: img("Three Phase Servo Distribution Transformers") },
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
          <p className="text-gray-400 mt-2">Complete range of solar, cable tray, earthing, beam clamps and industrial products</p>
        </div>
      </section>

      {categories.map((cat, idx) => (
        <section key={cat.id} className={`py-16 lg:py-20 ${idx % 2 === 1 ? "bg-gray-50" : ""}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-solar/10 flex items-center justify-center">
                <cat.icon className="w-5 h-5 text-solar" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{cat.title}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {cat.products.map((p, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-gray-900 text-xs leading-snug text-center">{p.name}</h3>
                  </div>
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
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-solar-dark px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
