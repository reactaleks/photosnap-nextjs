import Link from "next/link";

export default function NavMenuItems({navMenuOpen}) {
  return (
    <div
      className={` h-[253px] md:h-[72px] w-full text-[15px] md:text-[12px]   flex-col absolute bg-white left-0 top-[72px] z-20 items-center justify-around ${
        !navMenuOpen ? "hidden" : "flex"
      } md:flex md:flex-row md:w-[70%]  md:top-0 md:right-0 md:left-auto`}
    >
      <div className=" tracking-[2.5px] font-bold uppercase w-[310px] h-[20px] md:w-[61px] md:h-[16px] flex items-center justify-center">
        Stories
      </div>
      <div className=" tracking-[2.5px] font-bold uppercase w-[310px] h-[20px] md:w-[61px] md:h-[16px] flex items-center justify-center">
        Features
      </div>
      <div className=" tracking-[2.5px] font-bold uppercase w-[310px] h-[20px] md:w-[61px] md:h-[16px] flex items-center justify-center">
        Pricing
      </div>
      <div className="w-[310px] h-[1px] bg-black md:hidden"></div>
      <div className="w-[310px] h-[48px] md:w-[158px] md:h-[40px] flex items-center justify-center text-white font-bold  tracking-[2.5px] bg-black">
        Get an invite
      </div>
    </div>
  );
}
