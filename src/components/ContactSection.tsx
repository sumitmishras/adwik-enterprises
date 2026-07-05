"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-solar" />
            <span className="text-solar text-sm font-medium tracking-widest uppercase">
              Contact Us
            </span>
            <div className="h-px w-8 bg-solar" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a question or need a quote? We are here to help. Reach out to
            us and our team will get back to you soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: ["+91 73801 30740"],
                href: "tel:+917380130740",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: ["contact@adwikenterprises.com"],
                href: "mailto:contact@adwikenterprises.com",
              },
              {
                icon: MapPin,
                title: "Our Address",
                info: [
                  "Industrial Area, Near Gill Road",
                  "Ludhiana - 141003, Punjab, India",
                ],
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-solar/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-solar" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  {item.info.map((line, j) => (
                    <p key={j} className="text-gray-600 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-solar hover:text-solar-dark font-medium text-sm transition-colors"
            >
              <MapPin className="w-4 h-4" />
              View on Google Maps
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar focus:ring-2 focus:ring-solar/20 outline-none transition-all text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar focus:ring-2 focus:ring-solar/20 outline-none transition-all text-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar focus:ring-2 focus:ring-solar/20 outline-none transition-all text-sm mb-4"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar focus:ring-2 focus:ring-solar/20 outline-none transition-all text-sm mb-4 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-solar hover:bg-solar-dark text-white py-3.5 rounded-xl text-sm font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2"
            >
              {submitted ? (
                "Message Sent ✓"
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
