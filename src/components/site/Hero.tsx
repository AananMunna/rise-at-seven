import Image from "next/image";
import LaurelIcon from "../utils/LaurelIcon";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-t-[28px] rounded-b-[28px] mt-2 mx-2 h-screen">
      <Image
        src="/assets/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover scale-110 blur-2xl"
        sizes="430px"
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative px-6 pb-16 pt-70 text-white">
        <div className="text-center">
          <p className="text-[13px] font-semibold tracking-wide">
            #1 MOST RECOMMENDED
            <br />
            CONTENT MARKETING AGENCY
          </p>

          <div className="mt-0 flex items-center justify-center gap-4 opacity-90">
            <LaurelIcon />
            <Image
              src="/assets/global-search-awards.webp"
              width={40}
              height={10}
              alt="awards"
            />
            <Image
              src="/assets/Mask-group.webp"
              width={30}
              height={10}
              alt="awards"
            />
            <Image
              src="/assets/UKSocial-Media-Awards-White.webp"
              width={40}
              height={10}
              alt="awards"
            />

            <LaurelIcon flip />
          </div>
        </div>

        <h1 className=" mt-2 text-center text-[58px] font-bold leading-[0.92] tracking-tight">
          We Create
          <br />
          Category
 <Image
                      src="/assets/redbull-thumb.jpg"
                      alt=""
                      width={60}
                      height={60}
                      className="inline-block mt-1 ml-1 h-[58px] w-[58px] translate-y-[-6px] rounded-xl object-cover align-middle"
                    />
          <br />
          <span className="inline-flex items-center gap-2">
            Leaders
           
          </span>
        </h1>

        <p className="mt-1 text-center text-[19px]">
          on every searchable platform
        </p>

        <p className="mt-67 text-center text-[15px] font-semibold">
          4 Global Offices serving
          <br />
          UK, USA (New York) & EU
        </p>
      </div>
    </section>
  );
}

function Laurel({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 40"
      className={`h-10 w-6 fill-white/90 ${flip ? "-scale-x-100" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2c-1 6-4 8-8 9 4 1 7 4 7 9 1-5 3-7 7-8-4-2-5-5-6-10z"
        opacity=".7"
      />
      <path
        d="M16 14c-1 5-4 7-8 8 4 1 7 4 7 9 1-5 3-7 7-8-4-2-5-4-6-9z"
        opacity=".7"
      />
      <path
        d="M12 28c-1 4-3 6-6 7 3 1 5 3 5 7 1-4 2-5 5-6-3-2-3-4-4-8z"
        opacity=".7"
      />
    </svg>
  );
}
