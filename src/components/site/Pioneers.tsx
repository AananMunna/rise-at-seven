"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const originalCards = [
  {
    title: "Pioneers",
    image: "/assets/pioneers.jpg",
    description:
      "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search.",
    bgColor: "bg-ink",
    textColor: "text-white",
  },
  {
    title: "Award Winning",
    image: "/assets/work-dojo.jpg",
    description:
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards.",
    bgColor: "bg-[#B2F5E1]",
    textColor: "text-ink",
  },
  {
    title: "Speed",
    image: "/assets/work-magnet.jpg",
    description:
      "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster.",
    bgColor: "bg-[#F3F3F3]",
    textColor: "text-ink",
  },
];

const cards = [...originalCards, ...originalCards, ...originalCards];

export function Pioneers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({
    container: scrollRef,
  });

  const progressValue = useTransform(scrollXProgress, [0, 1], [0.33, 1]);

  const scaleX = useSpring(progressValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const startScroll = el.offsetWidth * originalCards.length;
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

  const marqueeText = (
    <>
      Not Algorithms
      <Image
        src="/assets/redbull-thumb.jpg"
        alt=""
        width={60}
        height={60}
        className="inline-block mx-3 h-[58px] w-[58px] translate-y-[-6px] rounded-xl object-cover align-middle"
      />
      Chasing Consumers
      <Image
        src="/assets/redbull-thumb.jpg"
        alt=""
        width={60}
        height={60}
        className="inline-block mx-3 h-[58px] w-[58px] translate-y-[-6px] rounded-xl object-cover align-middle"
      />
    </>
  );

  return (
    <section className="bg-background overflow-hidden pb-">
      <div className="mt-14 flex overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <motion.div
          animate={{ translateX: "-33.33%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex py-2 pr-4"
        >
          <h2 className="text-[48px] font-[500] leading-[0.95] tracking-tight text-ink">
            {marqueeText} {marqueeText} {marqueeText}
          </h2>
        </motion.div>
      </div>

      <p className="text-center mt-8 text-[15px] font-medium opacity-80 uppercase tracking-widest">
        Legacy In The Making
      </p>

      <div
        ref={scrollRef}
        className="no-scrollbar mt-6 flex w-full gap-5 overflow-x-auto px-4 snap-x snap-mandatory"
      >
        {cards.map((card, i) => (
          <div key={i} className="w-[380px] flex-shrink-0 shadow snap-center">
            <div
              className={`rounded-[28px] p-6 h-[560px] flex flex-col ${card.bgColor} ${card.textColor}`}
            >
              <div className="overflow-hidden rounded-2xl h-[320px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-display mt-8 text-center text-[36px] font-bold">
                {card.title}
              </h3>
              <p className="mt-4 text-center text-[15px] leading-[1.55] opacity-90">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-6 mt-10 h-[4px] bg-gray-200 rounded-full overflow-hidden relative">
        <motion.div
          className="absolute left-0 top-0 h-full bg-ink origin-left w-full"
          style={{ scaleX }}
        />
      </div>

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
