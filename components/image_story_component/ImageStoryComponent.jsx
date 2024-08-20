import LinkMore from "../shared_ui_components/Link_MoreComponent";
import Image from "next/image";
export default function ImageStory() {
  return (
    <div className="w-full h-[375px] bg-orange-500 flex flex-col relative items-center">
      <Image
        src={"/assets/stories/desktop/mountains.jpg"}
        className="w-full h-[375px] object-cover brightness-50"
        width={360}
        height={500}
        alt=""
      />
      <div className="absolute bottom-12 text-white w-[310px] h-[99px] flex flex-col justify-around">
        <div className="flex flex-col">
          <div className="text-[18px] leading-[25px] font-bold">The Mountains</div>
          <div className="text-[13px]">by John Appleseed</div>
        </div>

        <div className="w-[310px] h-[1px] bg-white bg-opacity-25"></div>
        <LinkMore linkText={"read story"} />
      </div>
    </div>
  );
}
