"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Timer } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const originalPosts = [
  {
    img: "/assets/news-chocolate.jpg",
    tag: "Food/Hospitality/Drink",
    author: "Ray Saddiq",
    time: "2 mins",
    title:
      "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them in the Chocolate Confectionery Category",
  },
  {
    img: "/assets/news-team.jpg",
    tag: "Global Operations",
    author: "Carrie Rose",
    time: "3 mins",
    title: "Ryan McNamara is Now Rise at Seven's Global Operations Director",
  },
  {
    img: "/assets/work-bmw.jpg",
    tag: "Automotive",
    author: "Sarah Lane",
    time: "3 mins",
    title: "Rise at Seven Launches New Auto Strategy for Major Brands in 2026",
  },
  {
    img: "/assets/work-magnet.jpg",
    tag: "Retail",
    author: "Tom Hale",
    time: "4 mins",
    title: "Magnet Trade Sees Record Growth After Search-First Campaign",
  },
];

const posts = [...originalPosts, ...originalPosts, ...originalPosts];

export function WhatsNew() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({
    container: scrollRef,
  });

  const progressValue = useTransform(scrollXProgress, [0, 1], [0.25, 1]);

  const scaleX = useSpring(progressValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const startScroll = el.offsetWidth * originalPosts.length;
    el.scrollLeft = startScroll;

    const handleScroll = () => {
      const scrollPos = el.scrollLeft;
      const maxScroll = el.scrollWidth - el.offsetWidth;

      if (scrollPos >= maxScroll - 10) {
        el.scrollLeft = startScroll;
      } else if (scrollPos <= 10) {
        el.scrollLeft = startScroll;
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="px-4 pb-12 overflow-hidden">
      <h2 className="mt-14 text-[48px] font-[500] leading-[0.95] tracking-tight text-ink">
        What&apos;s
        <Image
          src="/assets/redbull-thumb.jpg"
          alt=""
          width={60}
          height={60}
          className="inline-block mt-1 ml-1 h-[58px] w-[58px] translate-y-[-6px] rounded-xl object-cover align-middle"
        />
        <br /> New
      </h2>

      {/* Both Side Scrollable Container */}
      <div
        ref={scrollRef}
        className="no-scrollbar mt-8  flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing px-6"
      >
        {posts.map((p, i) => (
          <article key={i} className="w-[350px] mx-auto shrink-0 snap-start">
            <div className="relative overflow-hidden rounded-2xl bg-white">
              <Image
                src={p.img}
                alt=""
                width={300}
                height={300}
                draggable={false}
                className="h-[300px] w-full object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/40 px-3 py-1 text-[12px] text-white backdrop-blur-md">
                {p.tag}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-[12px] font-medium text-ink shadow-sm">
                ● {p.author}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[12px] text-ink shadow-sm">
                <Timer className="h-3 w-3" /> {p.time}
              </span>
            </div>
            <h3 className="mt-3 text-[20px] font-semibold leading-[1.2] text-ink">
              {p.title}
            </h3>
          </article>
        ))}
      </div>

      {/* Progress Bar - Exactly same as Pioneers */}
      <div className="mx-0 mt-6 h-[4px] bg-gray-200 rounded-full overflow-hidden relative">
        <motion.div
          className="absolute left-0 top-0 h-full bg-ink origin-left w-full"
          style={{ scaleX }}
        />
      </div>

      <button className="flex mt-5 w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-[15px] font-medium text-ink shadow-sm transition-transform active:scale-95">
        Explore More Thoughts <ArrowUpRight className="h-4 w-4" />
      </button>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
