import Image from "next/image";
import LinkMore from "../shared_ui_components/Link_MoreComponent";

export default function Story({ storyData, expanded, storyPage }) {
  const componentList = storyData.map((item, index) => {
    // Normal story
    if (!expanded) {
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
            className={`object-cover w-screen h-[317px] md:h-full xl:h-[650px] md:col-span-4 ${
              index % 2 == 0
                ? "md:col-start-9 xl:col-start-6"
                : "md:col-start-1 "
            } xl:col-span-7`}
          />
          <div
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

            <div className="w-[318px] h-[275px] xl:w-[387px] flex flex-col justify-around xl:justify-center m-auto">
              <div className="text-[32px] xl:text-[40px] xl:tracking-[4.17px] font-bold tracking-[3.33px] leading-[40px] uppercase">
                {item.storyTitle}
              </div>
              <div className="text-[15px] leading-[25px] opacity-60">
                {item.storyDescription}
              </div>
              <div className={`w-[205px] ${storyPage ? 'block' : 'hidden'}`}>
                <LinkMore linkText={item.linkText} />
              </div>
            </div>
          </div>
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
            className={`object-cover w-screen h-[317px] md:h-full xl:h-[650px] md:col-span-12`}
          />
          <div
            className={`h-[419px] md:h-full md:absolute md:bg-transparent  ${
              index == 0 ? "bg-black text-white" : "bg-white text-black"
            } ${
              index % 2 == 0
                ? "md:col-start-1 md:row-start-1"
                : "md:col-start-5"
            } flex flex-col items-cener justify-center relative`}
          >


          <div className="w-[318px] h-[275px] md:h-[408px] xl:w-[387px] flex flex-col justify-around m-auto absolute text-white left-6 md:left-24  md:top-36">
            <div className="test-[12px] tracking-[2px] uppercase font-bold">LAST MONTH’S FEATURED STORY</div>
            <div className="text-[32px] xl:text-[40px] xl:tracking-[4.17px] font-bold tracking-[3.33px] leading-[40px] uppercase">
              {item.storyTitle}
            </div>
            <div className="text-[15px] leading-[25px] opacity-60">
              {item.storyDescription}
            </div>
            <div className="w-[205px]">
              <LinkMore linkText={item.linkText} />
            </div>
          </div>


          </div>

        </div>
      );
    }
  });
  return <div>{componentList}</div>;
}
