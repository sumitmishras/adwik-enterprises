export default function ProductBrackets() {
  const brackets = [
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
    { name: "Base Plates", size: "M.S. & G.I." },
    { name: "Parker Lord Adhesives", size: "As Per Requirement" },
    { name: "FRP Walkway", size: "Custom sizes" },
    { name: "Adhesive EPDM Rubber", size: "25 x 3 x 90 mm" },
    { name: "Solar Mounting Rail Nut", size: "M8" },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-solar" />
            <span className="text-solar text-sm font-medium tracking-widest uppercase">
              Accessories
            </span>
            <div className="h-px w-8 bg-solar" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Solar Accessories & Brackets
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {brackets.map((item, i) => (
            <a
              key={i}
              href="/products"
              className="group bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-solar/10 flex items-center justify-center group-hover:bg-solar transition-colors duration-300">
                <span className="text-solar group-hover:text-white text-lg font-bold transition-colors duration-300">
                  {item.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-medium text-gray-900 text-xs leading-tight">
                {item.name}
              </h3>
              <p className="text-[10px] text-gray-500 mt-1">{item.size}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
