import Image from "next/image";
import LinkMore from "../shared_ui_components/Link_MoreComponent";

export default function Story() {
  return (
    <div className="relative w-full">
      <Image
        src={"/assets/home/desktop/create-and-share.jpg"}
        width={830}
        height={650}
        alt=""
        className="object-cover w-screen"
      />
      <div className="h-[419px] bg-black text-white flex flex-col items-cener justify-center relative">
        <div className="w-[128px] h-[6px] absolute top-0 left-8 bg-gradient-to-tr from-[#FFC593] from-0% via-[#BC7198] via-45% to-[#5A77FF]"></div>
        <div className="w-[318px] h-[275px] flex flex-col justify-around m-auto">
          <div className="text-[32px] font-bold tracking-[3.33px] leading-[40px] uppercase">
            Create and share your photo stories.{" "}
          </div>
          <div className="text-[15px] leading-[25px] text-opacity-60">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </div>
          <div className="w-[205px]">
            <LinkMore linkText={"get an invite"} />
          </div>
        </div>
      </div>
    </div>
  );
}
