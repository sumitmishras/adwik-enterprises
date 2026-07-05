"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Users, Briefcase, Star } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 500, suffix: "+", label: "Project Done" },
  { icon: Users, value: 300, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 15, suffix: "+", label: "Award Winning" },
  { icon: Star, value: 4.9, suffix: "", label: "Rating Customer" },
];

function Counter({
  end,
  suffix,
  duration = 2000,
}: {
  end: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl lg:text-5xl font-bold text-white">
        {count}
        {suffix}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-solar to-solar-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/15 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-white/80 text-sm mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
