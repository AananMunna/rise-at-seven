"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Search, TrendingUp, ArrowUpRight } from "lucide-react";

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
  const panelRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const panel = panelRef.current;
    const list = listRef.current;
    if (!container || !panel || !list) return;

    const onScroll = () => {
      const { top, height } = container.getBoundingClientRect();
      // how far we've scrolled INTO the sticky zone (0 → stickyScrollable)
      const stickyScrollable = height - window.innerHeight;
      const scrolled = Math.max(0, Math.min(-top, stickyScrollable));
      const progress = scrolled / stickyScrollable;

      const maxTranslate = list.scrollHeight - panel.clientHeight + 48; // +48px to reveal last card fully
      list.style.transform = `translateY(${-progress * maxTranslate}px)`;

      // navbar event
      const isActive = progress > 0.01 && progress < 0.99;
      window.dispatchEvent(
        new CustomEvent("featured-work-status", { detail: isActive }),
      );
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div ref={containerRef} className="relative h-[380vh] w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center p-3">
          <section
            ref={panelRef}
            className="flex h-[calc(100vh-24px)] w-full flex-col rounded-[28px] bg-ink px-5 text-white shadow-2xl overflow-hidden"
          >
            {/* No overflow, no spring, no transform chain — raw translateY on scroll */}
            <div className="flex-1 overflow-hidden relative">
              <div
                ref={listRef}
                className="space-y-4 pb-8 will-change-transform"
                style={{ transform: "translateY(0px)" }}
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
            </div>
          </section>
        </div>
      </div>

      <div className="mt-1 mx-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-[15px] font-medium text-ink shadow-sm transition-transform active:scale-95">
          Explore Our Work <ArrowUpRight className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
