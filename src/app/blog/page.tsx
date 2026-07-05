import Link from "next/link";
import { ChevronRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "High Quality Solar Aluminium Structure for Industries in India",
    date: "28 Oct 2025",
    category: "Solar Structure",
    excerpt:
      "Learn about high-quality solar aluminium structures and why they are the best choice for industrial solar installations in India.",
    img: "https://placehold.co/800x500/16a34a/white?text=Solar+Aluminium+Structure",
  },
  {
    title: "Solar Panel Clamps That Last: Mid & End Clamp Guide",
    date: "13 Oct 2025",
    category: "Solar Clamps",
    excerpt:
      "A complete guide to solar panel mid clamps and end clamps — what they are, how they work, and how to choose the right ones.",
    img: "https://placehold.co/800x500/15803d/white?text=Solar+Clamps+Guide",
  },
  {
    title: "Best Module Mounting Structure for Solar in India",
    date: "01 Oct 2025",
    category: "Mounting Structure",
    excerpt:
      "Find out what makes a good solar module mounting structure and which type works best for different kinds of solar projects.",
    img: "https://placehold.co/800x500/16a34a/white?text=Module+Mounting+Structure",
  },
  {
    title: "Why Aluminum T6-6063 is the Best Choice for Solar Mounting",
    date: "15 Sep 2025",
    category: "Materials",
    excerpt:
      "Aluminum T6-6063 is widely used in solar mounting structures. Here is why it is the preferred material for strength and durability.",
    img: "https://placehold.co/800x500/15803d/white?text=Aluminum+T6-6063",
  },
  {
    title: "How to Choose the Right Solar Panel Mounting Structure",
    date: "05 Sep 2025",
    category: "Guide",
    excerpt:
      "Choosing the right mounting structure is important for your solar panel system. This guide helps you understand the key factors.",
    img: "https://placehold.co/800x500/16a34a/white?text=Choose+Right+Structure",
  },
  {
    title: "Benefits of Solar Energy for Indian Businesses",
    date: "20 Aug 2025",
    category: "Solar Energy",
    excerpt:
      "Solar energy is becoming popular among Indian businesses. Here are the top benefits of switching to solar power for your business.",
    img: "https://placehold.co/800x500/15803d/white?text=Solar+Energy+Benefits",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-solar transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Blog</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold">Our Blog</h1>
          <p className="text-gray-400 mt-2">Latest news, guides, and updates from Adwik Enterprises</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-medium text-solar bg-solar/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-solar transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-xs text-solar hover:text-solar-dark font-medium mt-3 transition-colors"
                  >
                    Read More
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
