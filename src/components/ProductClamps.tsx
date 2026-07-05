export default function ProductClamps() {
  const clamps = [
    {
      name: "Z Degree Bracket Structure",
      desc: "Customise",
      img: "https://placehold.co/400x300/d97706/white?text=Z+Bracket",
    },
    {
      name: "Proflex Clamp",
      desc: "Aluminium T6 6063",
      img: "https://placehold.co/400x300/d97706/white?text=Proflex+Clamp",
    },
    {
      name: "Kalzip Clamp",
      desc: "Aluminium T6 6063",
      img: "https://placehold.co/400x300/d97706/white?text=Kalzip+Clamp",
    },
    {
      name: "Standing Seam Clamp",
      desc: "Aluminium T6 6063",
      img: "https://placehold.co/400x300/d97706/white?text=Seam+Clamp",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-amber" />
            <span className="text-amber text-sm font-medium tracking-widest uppercase">
              Solar Clamps
            </span>
            <div className="h-px w-8 bg-amber" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Premium Solar Clamps
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clamps.map((item, i) => (
            <a
              key={i}
              href="/products"
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
