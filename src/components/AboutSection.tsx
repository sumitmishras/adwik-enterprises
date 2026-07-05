import { Sun, Shield, Leaf } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                alt="Solar Panel Installation"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-solar rounded-2xl p-6 shadow-xl hidden lg:block">
              <Sun className="w-10 h-10 text-white" />
              <p className="text-white text-3xl font-bold mt-2">10+</p>
              <p className="text-white/80 text-sm">Years Experience</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-solar" />
              <span className="text-solar text-sm font-medium tracking-widest uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Leading Manufacturer of{" "}
              <span className="text-solar">Solar Mounting Structures</span> in India
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Adwik Enterprises is a trusted manufacturer of solar panel mounting structures
              and accessories based in India. We make strong, durable, and easy-to-install
              solar structures for projects of all sizes.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our goal is to support clean energy with high-quality products that meet
              industry standards. We deliver reliable solar solutions for a greener future.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Quality Assured",
                  desc: "Premium Aluminum T6-6063 materials",
                },
                {
                  icon: Leaf,
                  title: "Eco-Friendly",
                  desc: "Sustainable energy solutions",
                },
                {
                  icon: Sun,
                  title: "Innovative Design",
                  desc: "Durable & efficient structures",
                },
                {
                  icon: Shield,
                  title: "Trusted Partner",
                  desc: "500+ happy clients across India",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-solar/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-solar" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-solar hover:text-solar-dark font-medium text-sm transition-colors"
            >
              Know More About Us
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
