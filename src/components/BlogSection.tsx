import { Calendar } from "lucide-react";

const posts = [
  {
    title: "High Quality Solar Aluminium Structure for Industries in India",
    date: "28 Oct 2025",
    category: "Solar Aluminium Structure",
    img: "https://placehold.co/600x400/16a34a/white?text=Solar+Aluminium",
  },
  {
    title: "Solar Panel Clamps That Last: Mid & End Clamp Guide",
    date: "13 Oct 2025",
    category: "Solar Clamp",
    img: "https://placehold.co/600x400/15803d/white?text=Solar+Clamps",
  },
  {
    title: "Best Module Mounting Structure for Solar in India",
    date: "01 Oct 2025",
    category: "Solar Module Structure",
    img: "https://placehold.co/600x400/16a34a/white?text=Module+Structure",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-solar" />
            <span className="text-solar text-sm font-medium tracking-widest uppercase">
              Our Blog
            </span>
            <div className="h-px w-8 bg-solar" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Latest News
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href="/blog"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
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
                <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-solar transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-solar hover:text-solar-dark font-medium text-sm transition-colors"
          >
            View All Posts
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
