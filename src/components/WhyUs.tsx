import { Zap, Shield, DollarSign, Cpu } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      icon: Zap,
      title: "Quick And Easy Installation",
      desc: "All structures are designed for fast and simple installation.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Shield,
      title: "High Strength",
      desc: "Strong materials improve durability and long life.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: DollarSign,
      title: "Cost Efficient",
      desc: "Save money with our affordable pricing on all structures.",
      color: "bg-amber-50 text-amber-600",
    },
    {
      icon: Cpu,
      title: "Best Quality Aluminum",
      desc: "Every product is made with high-grade Aluminum T6-6063.",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-solar" />
            <span className="text-solar text-sm font-medium tracking-widest uppercase">
              Why Choose Us
            </span>
            <div className="h-px w-8 bg-solar" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why Work With Aadwik Enterprises
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-7 h-7" />
              </div>
              <span className="text-4xl font-bold text-gray-100 group-hover:text-solar/20 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold text-gray-900 mt-2 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
