"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Search, TrendingUp, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const items = [
  {
    img: "/assets/work-bmw.jpg",
    year: "[2024-2025]",
    title: "SXT",
    tag: "Car rental",
  },
  {
    img: "/assets/work-dojo.jpg",
    year: "[2021-2025]",
    title: "Dojo - B2B",
    tag: "Card Machines",
  },
  {
    img: "/assets/work-magnet.jpg",
    year: "[2023-2024]",
    title: "Magnet Trade - B2B",
    tag: "",
  },
  {
    img: "/assets/work-esim.jpg",
    year: "[2023-2025]",
    title: "Leading E Sim brand globally",
    tag: "Esims",
  },
  {
    img: "/assets/work-parkdean.jpg",
    year: "[2022-2024]",
    title: "JD Sports",
    tag: "FAMILY",
  },
  {
    img: "/assets/work-lake.jpg",
    year: "[2023-2025]",
    title: "Parkdean Resorts",
    tag: "",
  },
  {
    img: "/assets/work-pooky.jpg",
    year: "[2024]",
    title: "Pooky",
    tag: "Lighting",
  },
  {
    img: "/assets/work-lake.jpg",
    year: "[2023-2025]",
    title: "Parkdean Resorts",
    tag: "Holiday parks UK",
  },
  {
    img: "/assets/work-beauty.jpg",
    year: "[2024]",
    title: "Revolution Beauty",
    tag: "",
  },
  {
    img: "/assets/work-parkdean.jpg",
    year: "[2023-2024]",
    title: "Lloyds Pharmacy",
    tag: "Health",
  },
  {
    img: "/assets/work-plt.jpg",
    year: "[2022-2025]",
    title: "PrettyLittleThing",
    tag: "Gen Z",
  },
];

export function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableContentRef = useRef<HTMLDivElement>(null);

  // 1. Smooth Scroll Logic with Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Add a spring for that "premium" smooth lag-free feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Map the progress to scroll pixels
  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      if (scrollableContentRef.current) {
        const maxScroll =
          scrollableContentRef.current.scrollHeight -
          scrollableContentRef.current.clientHeight;
        scrollableContentRef.current.scrollTop = latest * maxScroll;
      }

      // 2. Navbar Toggle Logic
      // Dispatch a custom event so the Navbar knows we are in the 'Sticky Zone'
      const isEntering = latest > 0.01 && latest < 0.99;
      window.dispatchEvent(
        new CustomEvent("featured-work-status", { detail: isEntering }),
      );
    });
  }, [smoothProgress]);

  return (
    <>
      <div ref={containerRef} className="relative h-[450vh] w-full">
        <div className="sticky top-0 flex h-screen w-full flex-col justify-center p-3">
          <section className="flex h-[calc(100vh-24px)] w-full flex-col rounded-[28px] bg-ink px-5 py-0 text-white shadow-2xl">
            <div
              ref={scrollableContentRef}
              className="no-scrollbar mt-2 flex-1 space-y-4 overflow-hidden rounded-xl"
            >
              <div className="flex items-center justify-between py-2">
                <h3 className="font-display text-[22px] font-bold tracking-tight text-white">
                  Featured Work
                </h3>
              </div>
              {items.map((it, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl ring-1 ring-white/10"
                >
                  <Image
                    src={it.img}
                    alt={it.title}
                    width={400}
                    height={300}
                    className="h-[280px] w-full object-cover"
                  />
                  {it.tag && (
                    <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-[13px] backdrop-blur-xl">
                      <Search className="h-3.5 w-3.5" />
                      <span>{it.tag}</span>
                      <TrendingUp className="h-3.5 w-3.5" />
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6">
                    <p className="text-[12px] font-medium opacity-60 uppercase">
                      {it.year}
                    </p>
                    <p className="font-display text-[30px] leading-none font-bold mt-1">
                      {it.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="mt-1 space-y-4 mx-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-[15px] font-medium text-ink shadow-sm transition-transform active:scale-95">
          Explore Our Work <ArrowUpRight className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
