import Link from "next/link";
import { ChevronRight, Sun, Cable, Zap, Grip, Cpu } from "lucide-react";

const categories = [
  {
    id: "solar",
    title: "Solar Panel Mounting Structures & Accessories",
    icon: Sun,
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    products: [
      { name: "Solar Panel Mounting Mid Clamp", img: "https://5.imimg.com/data5/ANDROID/Default/2025/5/513525679/CD/NY/UV/224216350/fb-img-1748151467707-jpg-500x500.jpg" },
      { name: "Solar Panel Mounting End Clamp", img: "https://5.imimg.com/data5/SELLER/Default/2026/5/605259999/ZF/ZW/NZ/224216350/solar-panel-mounting-end-clamp-500x500.jpg" },
      { name: "Solar Panel End Clamp", img: "https://5.imimg.com/data5/SELLER/Default/2026/4/597957730/OE/XC/XA/224216350/solar-panel-end-clamp-500x500.jpg" },
      { name: "Jointer Clip In Profile And C Channel", img: "https://5.imimg.com/data5/SELLER/Default/2026/5/605286723/DC/AT/BV/224216350/c-channel-500x500.jpg" },
      { name: "Solar Structure Accessories", img: "https://5.imimg.com/data5/ANDROID/Default/2025/5/513527344/GB/UB/EB/224216350/product-jpeg-500x500.jpg" },
      { name: "Solar Panel Mounting Structure", img: "https://5.imimg.com/data5/ANDROID/Default/2025/5/513525683/VV/ZK/DP/224216350/fb-img-1748151453590-jpg-500x500.jpg" },
      { name: "Spring Nuts Channel Nuts", img: "https://5.imimg.com/data5/ANDROID/Default/2025/5/513525681/CT/CM/XF/224216350/fb-img-1748151457172-jpg-500x500.jpg" },
      { name: "Galvanized Iron 5mm GI Solar Panel Mid Clamps", img: "https://5.imimg.com/data5/SELLER/Default/2026/5/605278604/WS/OR/QU/224216350/solar-panel-mid-clamps-500x500.jpg" },
      { name: "Solar Panel Mid Clamps", img: "https://5.imimg.com/data5/ANDROID/Default/2026/5/605266108/CH/TA/BK/224216350/product-jpeg-500x500.jpg" },
      { name: "Mead Clam Z Clam Solar", img: "https://5.imimg.com/data5/ANDROID/Default/2025/5/513525682/CA/FY/QF/224216350/fb-img-1748151447390-jpg-500x500.jpg" },
      { name: "Solar Panel Mid Clamp And End Clamp", img: "https://5.imimg.com/data5/ANDROID/Default/2025/5/513525680/GE/JS/LO/224216350/fb-img-1748151470506-jpg-500x500.jpg" },
      { name: "Solar Panels Mounting Accesaries", img: "https://5.imimg.com/data5/ANDROID/Default/2025/5/513527226/TF/DW/GQ/224216350/product-jpeg-500x500.jpg" },
      { name: "Gi U Clamp", img: "https://5.imimg.com/data5/ANDROID/Default/2026/5/605265956/FI/CO/BA/224216350/product-jpeg-500x500.jpg" },
      { name: "Gi Z Clamps", img: "https://5.imimg.com/data5/ANDROID/Default/2025/5/513525675/ZO/GF/AW/224216350/fb-img-1748151481318-jpg-500x500.jpg" },
      { name: "Z Type Clamp", img: "https://5.imimg.com/data5/ANDROID/Default/2026/5/605277974/LK/NB/CH/224216350/product-jpeg-500x500.jpg" },
      { name: "Solar Panel Base Plate", img: "https://5.imimg.com/data5/ANDROID/Default/2025/5/513527226/TF/DW/GQ/224216350/product-jpeg-500x500.jpg" },
      { name: "Solar Structure Base Plate", img: "https://5.imimg.com/data5/ANDROID/Default/2026/5/605278320/IL/PV/ML/224216350/product-jpeg-500x500.jpg" },
      { name: "Solar Studs", img: "https://5.imimg.com/data5/ANDROID/Default/2024/12/470442800/DK/ZK/ME/224216350/product-jpeg-500x500.jpg" },
      { name: "Solar Structure Fabrication", img: "https://5.imimg.com/data5/ANDROID/Default/2024/12/470443305/ZK/NA/AZ/224216350/product-jpeg-500x500.jpg" },
      { name: "Gi Earthing Strip", img: "https://5.imimg.com/data5/ANDROID/Default/2025/5/509863386/SE/LB/EQ/224216350/product-jpeg-500x500.jpg" },
    ],
  },
  {
    id: "cable",
    title: "Cable Trays",
    icon: Cable,
    img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80",
    products: [
      { name: "Galvanized Iron Channels", img: "https://5.imimg.com/data5/SELLER/Default/2024/6/429021118/UO/FG/UF/224216350/steel-cable-tray-500x500.jpg" },
      { name: "Slotted C Channel", img: "https://5.imimg.com/data5/SELLER/Default/2026/5/605286723/DC/AT/BV/224216350/c-channel-500x500.jpg" },
      { name: "Galvanized Cable Trays", img: "https://5.imimg.com/data5/SELLER/Default/2024/6/429345872/JZ/RO/JW/224216350/galvanized-perforated-cable-500x500.jpg" },
      { name: "Ms Cable Tray", img: "https://5.imimg.com/data5/SELLER/Default/2024/6/429021118/UO/FG/UF/224216350/steel-cable-tray-500x500.jpg" },
      { name: "Stainless Steel Cable Trays", img: "https://5.imimg.com/data5/SELLER/Default/2024/6/429346587/IZ/QY/XG/224216350/steel-perforated-cable-tray-500x500.jpg" },
      { name: "Silver GI Perforated Cable Tray", img: "https://5.imimg.com/data5/SELLER/Default/2024/6/429345872/JZ/RO/JW/224216350/galvanized-perforated-cable-500x500.jpg" },
      { name: "Mild Steel Perforated Cable Tray", img: "https://5.imimg.com/data5/SELLER/Default/2024/6/429346088/MS/AW/CH/224216350/whatsapp-image-2024-06-22-at-12-28-40-pm-2-500x500.jpg" },
      { name: "G.P Cable Tray", img: "https://5.imimg.com/data5/SELLER/Default/2024/6/429345872/JZ/RO/JW/224216350/galvanized-perforated-cable-500x500.jpg" },
      { name: "GI Ladder Type Cable Trays", img: "https://5.imimg.com/data5/SELLER/Default/2024/6/429437620/BI/UK/YM/224216350/gi-ladder-type-cable-trays-500x500.jpg" },
    ],
  },
  {
    id: "earthing",
    title: "Earthing & Lightning Protection",
    icon: Zap,
    link: "/earthing",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    products: [
      { name: "Copper Solar Lightning Arrester", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80" },
      { name: "Lightning Arresters Mast", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80" },
      { name: "Solid Copper Earth Rods", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/432891348/GG/GZ/BK/224216350/gi-pipe-earthing-electrode-500x500.jpg" },
      { name: "Copper Earthing Electrodes", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/432891348/GG/GZ/BK/224216350/gi-pipe-earthing-electrode-500x500.jpg" },
      { name: "Gi Earthing Electrode / Pipe", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/434821776/RT/YT/YB/224216350/gi-earthing-pipe-500x500.jpg" },
      { name: "Copper Bonded Earth Electrode", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/432891348/GG/GZ/BK/224216350/gi-pipe-earthing-electrode-500x500.jpg" },
      { name: "Gi Pipe Earthing Electrode", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/434821776/RT/YT/YB/224216350/gi-earthing-pipe-500x500.jpg" },
      { name: "Copper Chemical Earthing Electrode", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/432891348/GG/GZ/BK/224216350/gi-pipe-earthing-electrode-500x500.jpg" },
      { name: "GI Strip Pipe Earthing Electrode", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/434821776/RT/YT/YB/224216350/gi-earthing-pipe-500x500.jpg" },
      { name: "Chemical Earthing Electrode", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/432891348/GG/GZ/BK/224216350/gi-pipe-earthing-electrode-500x500.jpg" },
      { name: "Copper Bonded Rods", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/432891348/GG/GZ/BK/224216350/gi-pipe-earthing-electrode-500x500.jpg" },
      { name: "Earthing Rod", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/434821776/RT/YT/YB/224216350/gi-earthing-pipe-500x500.jpg" },
    ],
  },
  {
    id: "fasteners",
    title: "Anchors & Fasteners",
    icon: Grip,
    img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80",
    products: [
      { name: "Anchor Fasteners M8 & M10", img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=600&q=80" },
    ],
  },
  {
    id: "transformers",
    title: "Distribution Transformers",
    icon: Cpu,
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    products: [
      { name: "Three Phase Servo Distribution Transformers", img: "https://5.imimg.com/data5/SELLER/Default/2025/1/480975709/JJ/SV/NS/224216350/three-phase-servo-distribution-transformers-500x500.jpg" },
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
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-solar/10 flex items-center justify-center">
                <cat.icon className="w-5 h-5 text-solar" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {cat.link ? (
                  <Link href={cat.link} className="hover:text-solar transition-colors">
                    {cat.title} <span className="text-sm font-normal">→</span>
                  </Link>
                ) : cat.title}
              </h2>
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
