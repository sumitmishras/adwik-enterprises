import Link from "next/link";
import { Sun, Cable, Zap, Grip, Cpu } from "lucide-react";

const categories = [
  {
    name: "Solar Mounting Structures",
    desc: "Mid clamps, end clamps, spring nuts, base plates, channel nuts & more",
    icon: Sun,
    href: "/products",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    name: "Cable Trays",
    desc: "GI, MS, SS, Perforated, Ladder type & G.P cable trays",
    icon: Cable,
    href: "/products",
    img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=600&q=80",
  },
  {
    name: "Earthing & Lightning",
    desc: "Copper rods, earthing electrodes, lightning arresters & masts",
    icon: Zap,
    href: "/products",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
  },
  {
    name: "Anchors & Transformers",
    desc: "Anchor fasteners M8/M10 & three phase distribution transformers",
    icon: Grip,
    href: "/products",
    img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=600&q=80",
  },
];

export default function ProductCategories() {
  return (
    <section id="products" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-solar" />
            <span className="text-solar text-sm font-medium tracking-widest uppercase">
              Our Range
            </span>
            <div className="h-px w-8 bg-solar" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Products We Offer
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Wide range of solar mounting structures, cable trays, earthing solutions, and industrial products
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={cat.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <cat.icon className="w-5 h-5 text-solar" />
                  <h3 className="font-bold text-gray-900 group-hover:text-solar transition-colors">
                    {cat.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-solar hover:bg-solar-dark text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all"
          >
            View All Products
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
