export default function ProductRails() {
  const rails = [
    { name: "Short Rail", size: "41 x 31 mm", img: "https://placehold.co/400x300/16a34a/white?text=Short+Rail+31mm" },
    { name: "Short Rail", size: "60mm Height", img: "https://placehold.co/400x300/16a34a/white?text=Short+Rail+60mm" },
    { name: "Short Rail", size: "70mm Height", img: "https://placehold.co/400x300/16a34a/white?text=Short+Rail+70mm" },
    { name: "Short Rail", size: "75mm Height", img: "https://placehold.co/400x300/16a34a/white?text=Short+Rail+75mm" },
    { name: "Short Rail", size: "100mm Height", img: "https://placehold.co/400x300/16a34a/white?text=Short+Rail+100mm" },
    { name: "Mini Rail", size: "100mm Height", img: "https://placehold.co/400x300/16a34a/white?text=Mini+Rail+100mm" },
    { name: "Strut Channel", size: "41 x 41mm", img: "https://placehold.co/400x300/16a34a/white?text=Strut+Channel" },
    { name: "Long Rail", size: "80mm Height", img: "https://placehold.co/400x300/16a34a/white?text=Long+Rail" },
    {
      name: "HDG Solar Rails",
      size: "41 x 41 x 2.5mm",
      img: "https://placehold.co/400x300/16a34a/white?text=HDG+Rails",
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-solar" />
            <span className="text-solar text-sm font-medium tracking-widest uppercase">
              Our Products
            </span>
            <div className="h-px w-8 bg-solar" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Solar Long, Short & Mini Rails
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span>
              <strong className="text-gray-900">Height:</strong> 31mm, 41mm,
              60mm, 70mm, 75mm, 100mm
            </span>
            <span>
              <strong className="text-gray-900">Length:</strong> Customised
            </span>
            <span>
              <strong className="text-gray-900">Thickness:</strong> 1.2 to 2.5
              MM
            </span>
            <span>
              <strong className="text-gray-900">Material:</strong> Aluminium
              T6-6063
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {rails.map((rail, i) => (
            <a
              key={i}
              href="/products"
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={rail.img}
                  alt={rail.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {rail.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{rail.size}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
