"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LinkMore from "../shared_ui_components/Link_MoreComponent";
import Image from "next/image";
export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="h-[280px] w-full  relative flex justify-center items-center"
    >
      <div
        className={` w-[128px] h-[6px]  absolute top-0 left-8 md:top-auto md:left-0 md:h-full md:w-[6px] bg-gradient-to-tr from-[#FFC593] from-0% via-[#BC7198] via-45% to-[#5A77FF]`}
      ></div>

      <div className="absolute text-white w-[310px] h-[160px] flex flex-col justify-between md:flex-row md:w-[90vw] md:items-center">
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-[32px] leading-[40px] tracking-[3.33px] font-bold uppercase md:w-[40vw] lg:w-[30vw]"
        >
          We’re in beta. Get your invite today!
        </div>
        <div className="w-[168px]">
          <LinkMore linkText={"get an invite"} />
        </div>
      </div>
      <Image
        src={"/assets/shared/desktop/bg-beta.jpg"}
        alt=""
        className="object-fill -z-20 aspect-auto"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
        fill
        priority
      />
    </div>
  );
}
