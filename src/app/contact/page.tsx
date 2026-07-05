"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-solar transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold">Contact Us</h1>
          <p className="text-gray-400 mt-2">We would love to hear from you</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get In <span className="text-solar">Touch</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question, need a quote, or want to discuss a project?
                Fill out the form or reach us directly. We will get back to you
                as soon as possible.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    lines: ["+91 73801 30740"],
                    href: "tel:+917380130740",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: ["contact@adwikenterprises.com"],
                    href: "mailto:contact@adwikenterprises.com",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    lines: ["Industrial Area, Near Gill Road", "Ludhiana - 141003, Punjab, India"],
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-solar/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-solar" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-gray-600 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
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
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar focus:ring-2 focus:ring-solar/20 outline-none transition-all text-sm mb-4 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-solar hover:bg-solar-dark text-white py-3.5 rounded-xl text-sm font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2"
              >
                {submitted ? "Message Sent ✓" : (
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

      {/* Map placeholder */}
      <section className="h-80 bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-10 h-10 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500 font-medium">Map will be integrated here</p>
          <p className="text-sm text-gray-400">Industrial Area, Near Gill Road, Ludhiana - 141003</p>
        </div>
      </section>
    </div>
  );
}
