"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import StoryContent from "./story_component_ui_elements/StoryContentComponent";

export default function Story({ storyData, expanded, storyPage }) {
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 250px, rgba(0,0,0,1) 100px, rgba(0,0,0,1) 250px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 250px)`;
  const [isInView, setIsInView] = useState(false);

  const componentList = storyData.map((item, index) => {
    // Normal story
    if (!expanded) {
      return (
        <div
          className="relative w-full md:grid md:grid-cols-12 md:h-[650px] "
          key={index}
        >
          <motion.div
            initial={false}
            animate={
              isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
            className={` h-[317px] md:h-full xl:h-[650px] md:col-span-4 ${
              index % 2 == 0
                ? "md:col-start-9 xl:col-start-6"
                : "md:col-start-1 "
            } xl:col-span-7 relative`}
          >
            <Image
              src={item.imageLink}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"	
              alt=""
              priority
              className={`object-cover h-[100%] w-[100%] aspect-auto`}
            />
          </motion.div>

          <motion.div
            layout
            initial={{ width: '75vw', opacity: 0 }}
            animate={{ width: 'auto', opacity: 100 }}
            transition={{duration:1}}
            className={`h-[419px] md:h-full  ${
              index == 0 ? "bg-black text-white" : "bg-white text-black"
            } ${
              index % 2 == 0
                ? "md:col-start-1 md:row-start-1"
                : "md:col-start-5"
            } md:col-span-8 xl:col-span-5  flex flex-col items-cener justify-center relative`}
          >
            <div
              className={`${
                index != 0 ? "hidden" : "block"
              } w-[128px] h-[6px]  absolute top-0 left-8 md:top-auto md:left-0 md:h-[304px] md:w-[6px] bg-gradient-to-tr from-[#FFC593] from-0% via-[#BC7198] via-45% to-[#5A77FF]`}
            ></div>

            <StoryContent item={item} storyPage={storyPage} />
          </motion.div>
        </div>
      );
    } else {
      // Expanded story
      return (
        <div
          className="relative w-full md:grid md:grid-cols-12 md:h-[650px] "
          key={index}
        >
          <Image
            src={item.imageLink}
            width={item.imageWidth}
            height={item.imageHeight}
            alt=""
            className={`object-cover aspect-auto w-screen h-[317px] md:h-full xl:h-[650px] md:col-span-12`}
            priority
          />
          <div
            className={`h-[419px] md:h-full md:absolute md:bg-transparent  ${
              index == 0 ? "bg-black text-white" : "bg-white text-black"
            } ${
              index % 2 == 0
                ? "md:col-start-2 md:row-start-1"
                : "md:col-start-5"
            } flex flex-col items-cener justify-center relative`}
          >
            <StoryContent item={item} storyPage={storyPage} />
          </div>
        </div>
      );
    }
  });
  return <div>{componentList}</div>;
}
