"use client";
import LinkMore from "@/components/shared_ui_components/Link_MoreComponent";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
export default function StoryContent({ item, storyPage }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {}, [isInView]);
  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
      className="w-[318px] h-[275px] xl:w-[387px] flex flex-col justify-around xl:justify-center m-auto"
    >
      <motion.div className="text-[32px] xl:text-[40px] xl:tracking-[4.17px] font-bold tracking-[3.33px] leading-[40px] uppercase md:mb-6">
        {item.storyTitle}
      </motion.div>

      <motion.div className="text-[15px] leading-[25px] opacity-60">
        {item.storyDescription}
      </motion.div>
      <div className={`w-[205px] ${storyPage ? "block" : "hidden"} md:mt-6`}>
        <LinkMore linkText={item.linkText} />
      </div>
    </div>
  );
}
