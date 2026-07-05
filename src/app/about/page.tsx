import Link from "next/link";
import { ChevronRight, Sun, Shield, Leaf, Award, Users, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-solar transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">About Us</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold">About Aadwik Enterprises</h1>
          <p className="text-gray-400 mt-2">Know more about our company and our mission</p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Who <span className="text-solar">We Are</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Aadwik Enterprises is a trusted manufacturer of solar panel mounting
                structures and accessories based in Ludhiana, Punjab, India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We make strong, durable, and easy-to-install solar structures for
                projects of all sizes. Our products are made from high-quality
                Aluminum T6-6063, ensuring long life and reliability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in the solar industry, we serve customers
                across India with top-quality products and excellent service.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80"
                alt="About Aadwik Enterprises"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <Target className="w-10 h-10 text-solar mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide high-quality, affordable solar mounting solutions that
                make clean energy accessible to everyone. We are committed to
                quality, innovation, and customer satisfaction.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <Eye className="w-10 h-10 text-solar mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be India&apos;s most trusted solar mounting structure manufacturer
                and play a key role in building a greener, more sustainable future
                through reliable solar energy solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-solar">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Quality", desc: "We never compromise on quality. Every product is made to last." },
              { icon: Users, title: "Customer First", desc: "Our customers are our priority. We listen and deliver." },
              { icon: Award, title: "Integrity", desc: "We believe in honest business and transparent dealings." },
              { icon: Leaf, title: "Sustainability", desc: "We are committed to a greener planet through solar energy." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-solar/10 flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-solar" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-solar to-solar-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Want to Work With Us?</h2>
          <p className="text-white/80 mb-6">Get in touch for quotes, inquiries, or partnerships</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-solar-dark px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
