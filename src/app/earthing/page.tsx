import Link from "next/link";
import { ChevronRight, Zap } from "lucide-react";

const earthingProducts = [
  { name: "Copper Solar Lightning Arrester", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80" },
  { name: "Lightning Arresters Mast", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80" },
  { name: "Solid Copper Earth Rods", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/432891348/GG/GZ/BK/224216350/gi-pipe-earthing-electrode-500x500.jpg" },
  { name: "Copper Earthing Electrodes", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/432891348/GG/GZ/BK/224216350/gi-pipe-earthing-electrode-500x500.jpg" },
  { name: "Gi Earthing Electrode / Pipe", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/434821776/RT/YT/YB/224216350/gi-earthing-pipe-500x500.jpg" },
  { name: "Copper Bonded Earth Electrode 50mm - 80mm", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/432891348/GG/GZ/BK/224216350/gi-pipe-earthing-electrode-500x500.jpg" },
  { name: "Gi Pipe Earthing Electrode", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/434821776/RT/YT/YB/224216350/gi-earthing-pipe-500x500.jpg" },
  { name: "Copper Chemical Earthing Electrode", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/432891348/GG/GZ/BK/224216350/gi-pipe-earthing-electrode-500x500.jpg" },
  { name: "GI Strip Pipe Earthing Electrode", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/434821776/RT/YT/YB/224216350/gi-earthing-pipe-500x500.jpg" },
  { name: "Chemical Earthing Electrode", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/432891348/GG/GZ/BK/224216350/gi-pipe-earthing-electrode-500x500.jpg" },
  { name: "Copper Bonded Rods", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/432891348/GG/GZ/BK/224216350/gi-pipe-earthing-electrode-500x500.jpg" },
  { name: "Earthing Rod", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/434821776/RT/YT/YB/224216350/gi-earthing-pipe-500x500.jpg" },
  { name: "Gi Earthing Strip", img: "https://5.imimg.com/data5/ANDROID/Default/2025/5/509863386/SE/LB/EQ/224216350/product-jpeg-500x500.jpg" },
];

export default function EarthingPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-solar">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-solar">Products</Link>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {earthingProducts.map((p, i) => (
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

      <section className="py-16 bg-gradient-to-r from-amber to-amber/80 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need Earthing Solutions?</h2>
          <p className="text-white/80 mb-6">Get expert advice on the right earthing products for your project</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-amber/90 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
