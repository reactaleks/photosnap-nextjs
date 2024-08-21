import Link from "next/link";

export default function NavMenuItems({navMenuOpen}) {
  return (
    <div
      className={` h-[253px] w-full  flex-col absolute bg-white left-0 top-[72px] z-20 items-center justify-around ${
        !navMenuOpen ? "hidden" : "flex"
      }`}
    >
      <div className="text-[15px] tracking-[2.5px] font-bold uppercase w-[310px] h-[20px] flex items-center justify-center">
        Stories
      </div>
      <div className="text-[15px] tracking-[2.5px] font-bold uppercase w-[310px] h-[20px] flex items-center justify-center">
        Features
      </div>
      <div className="text-[15px] tracking-[2.5px] font-bold uppercase w-[310px] h-[20px] flex items-center justify-center">
        Pricing
      </div>
      <div className="w-[310px] h-[1px] bg-black"></div>
      <div className="w-[310px] h-[48px] flex items-center justify-center text-white font-bold text-[15px] tracking-[2.5px] bg-black">
        Get an invite
      </div>
    </div>
  );
}
