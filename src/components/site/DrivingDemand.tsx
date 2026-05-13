"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function Logo({
  children,
  opacity,
}: {
  children: React.ReactNode;
  opacity?: boolean;
}) {
  return (
    <span
      className={`text-[28px] font-bold text-ink flex-shrink-0 whitespace-nowrap px-6 ${
        opacity ? "opacity-30" : ""
      }`}
    >
      {children}
    </span>
  );
}

export function DrivingDemand() {
  const logos = [
    { name: "𝙋𝙎", opacity: false },
    { name: "AXA", opacity: false },
    { name: "SIXT", opacity: true },
    { name: "SONY", opacity: false },
    { name: "DELL", opacity: true },
  ];

  return (
    <section className="bg-background px-4 pt-10 pb-16 overflow-hidden">
      <p className="text-[15px] text-black">The agency behind …</p>

      {/* 
          Wrapper: 
          1. snap-x for manual sliding feel
          2. mask-image for those smooth premium edges
          3. overflow-x-auto so users can drag it 
      */}
      <div className="mt-4 relative w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <div className="flex overflow-x-auto no-scrollbar scroll-smooth active:cursor-grabbing">
          <div className="flex w-max animate-infinite-scroll py-2 hover:[animation-play-state:paused] active:[animation-play-state:paused]">
            {/* Set 1 */}
            {logos.map((logo, index) => (
              <Logo key={`set1-${index}`} opacity={logo.opacity}>
                {logo.name}
              </Logo>
            ))}
            {/* Set 2 (for seamless loop) */}
            {logos.map((logo, index) => (
              <Logo key={`set2-${index}`} opacity={logo.opacity}>
                {logo.name}
              </Logo>
            ))}
            {/* Set 3 (extra buffer for wide screens) */}
            {logos.map((logo, index) => (
              <Logo key={`set3-${index}`} opacity={logo.opacity}>
                {logo.name}
              </Logo>
            ))}
          </div>
        </div>
      </div>

      <h2 className=" mt-14 text-[48px] font-[500] leading-[0.95] tracking-tight text-ink">
        Driving Demand
        <br />& Discovery
        <Image
          src="/assets/redbull-thumb.jpg"
          alt=""
          width={60}
          height={60}
          className="inline-block mt-1 ml-1 h-[58px] w-[58px] translate-y-[-6px] rounded-xl object-cover align-middle"
        />
      </h2>

      <p className="mt-2 text-[18px] leading-[1.45] text-ink">
        A global team of search-first content marketers engineering semantic
        relevancy & category signals for both the internet and people
      </p>

      <div className="mt-8 space-y-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-[15px] font-medium text-ink shadow-sm transition-transform active:scale-95">
          Our Story <ArrowUpRight className="h-4 w-4" />
        </button>
        <button className="flex w-full items-center justify-center gap-2 py-2 text-[15px] font-medium text-ink hover:opacity-70 transition-opacity">
          Our Services <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
