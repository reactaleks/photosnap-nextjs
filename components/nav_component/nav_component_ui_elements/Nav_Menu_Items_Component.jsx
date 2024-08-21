import Button from "@/components/shared_ui_components/ButtonComponent";
import Link from "next/link";

export default function NavMenuItems({navMenuOpen}) {
  const menuItems = [
    'Stories', 'Features', 'Pricing'
  ]

  const componentLst = menuItems.map((item, index) => {
    return (
      <div key={index} className="hover:opacity-30 cursor-pointer tracking-[2.5px] font-bold uppercase w-[310px] h-[20px] md:w-[61px] md:h-[16px] flex items-center justify-center">
        <Link href={`/${item.toLowerCase()}`}>{item}</Link>
      </div>
    )
  })


  return (
    <div
      className={` h-[253px] md:h-[72px] w-full text-[15px] md:text-[12px]   flex-col absolute bg-white left-0 top-[72px] z-20 items-center justify-around ${
        !navMenuOpen ? "hidden" : "flex"
      } md:flex md:flex-row md:w-[70%]  md:top-0 md:right-0 md:left-auto`}
    >
      {componentLst}
      <div className="w-[310px] h-[1px] bg-black md:hidden"></div>
      <div className="w-[310px] h-[48px] md:w-[148px] md:h-[40px]">
        <Button btnText={'Get an invite'}/>

      </div>
    </div>
  );
}
