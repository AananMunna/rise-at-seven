import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Digital PR", img: "/assets/svc-pr.jpg" },
  { title: "Organic Social & Content", img: "/assets/news-chocolate.jpg" },
  { title: "Search Growth Strategy", img: "/assets/work-bmw.jpg" },
  { title: "Content Experience", img: "/assets/work-dojo.jpg" },
  { title: "Data & Insights", img: "/assets/work-magnet.jpg" },
  { title: "Onsite SEO", img: "/assets/services-thumb.jpg" },
];

export function Services() {
  return (
    <section className="px-6 py-2">
      <h2 className=" mt-14 text-[48px] font-[500] leading-[0.95] tracking-tight text-ink">
        Our
        <Image
          src="/assets/redbull-thumb.jpg"
          alt=""
          width={60}
          height={60}
          className="inline-block mt-1 ml-1 h-[58px] w-[58px] translate-y-[-6px] rounded-xl object-cover align-middle"
        />
        <br />
        Services
      </h2>

      <ul className="mt-2">
        {services.map((s) => (
          <li
            key={s.title}
            className="flex items-center gap-4 border-b border-ink/15 py-2 "
          >
            <Image
              src={s.img}
              alt=""
              width={46}
              height={46}
              loading="lazy"
              className="h-13 w-13 rounded-xl object-cover"
            />
            <span className=" whitespace-pre-line text-[26px] leading-[0.05] text-ink font-medium">
              {s.title}
            </span>
          </li>
        ))}
      </ul>


         <button className="flex w-full mt-4 items-center justify-center gap-2 rounded-full bg-white py-3 text-[15px] font-medium text-ink shadow-sm transition-transform active:scale-95">
        View All Services <ArrowUpRight className="h-4 w-4" />
        </button>
    </section>
  );
}
