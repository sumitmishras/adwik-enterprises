import Link from "next/link";
import { ChevronRight, Zap } from "lucide-react";

const earthingProducts = [
  {
    name: "Copper Solar Lightning Arrester",
    desc: "High-quality copper lightning arrester for solar installations",
  },
  {
    name: "Lightning Arresters Mast",
    desc: "Durable lightning arrester mast for effective protection",
  },
  {
    name: "Solid Copper Earth Rods",
    desc: "Solid copper earth rods for reliable grounding",
  },
  {
    name: "Copper Earthing Electrodes",
    desc: "Premium copper earthing electrodes for safe grounding",
  },
  {
    name: "Gi Earthing Electrode / Pipe",
    desc: "GI earthing electrode pipe for cost-effective earthing",
  },
  {
    name: "Copper Bonded Earth Electrode 50mm - 80mm",
    desc: "Copper bonded earth electrode in 50mm to 80mm sizes",
  },
  {
    name: "Gi Pipe Earthing Electrode",
    desc: "GI pipe earthing electrode for industrial grounding",
  },
  {
    name: "Copper Chemical Earthing Electrode",
    desc: "Chemical earthing electrode with copper for enhanced conductivity",
  },
  {
    name: "GI Strip Pipe Earthing Electrode",
    desc: "GI strip pipe earthing electrode for reliable earthing",
  },
  {
    name: "Chemical Earthing Electrode",
    desc: "Advanced chemical earthing electrode solution",
  },
  {
    name: "Copper Bonded Rods",
    desc: "Copper bonded rods for effective grounding systems",
  },
  {
    name: "Earthing Rod",
    desc: "Standard earthing rod for general grounding needs",
  },
  {
    name: "Gi Earthing Strip",
    desc: "GI earthing strip for grounding connections",
  },
];

export default function EarthingPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-solar transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-solar transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Earthing</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold">Earthing & Lightning Protection</h1>
          <p className="text-gray-400 mt-2">Complete range of earthing electrodes, rods, and lightning arresters</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-7 h-7 text-amber" />
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Earthing Products</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {earthingProducts.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-amber/10 flex items-center justify-center mb-4 group-hover:bg-amber group-hover:text-white transition-all">
                  <span className="text-amber text-xl font-bold group-hover:text-white transition-colors">
                    {p.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber to-amber/80 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need Earthing Solutions?</h2>
          <p className="text-white/80 mb-6">Get expert advice on the right earthing products for your project</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-amber/90 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
