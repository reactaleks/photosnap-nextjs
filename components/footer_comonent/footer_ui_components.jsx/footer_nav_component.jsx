import Link from "next/link";
export default function FooterNav() {
  const navItems = ['home', 'Stories', 'Features', 'Pricing']

  const componentLst = navItems.map((item, index) => {
    return (
      <div key={index} className="  w-[310px] h-[20px] md:w-[61px] md:h-[16px] xl:justify-start h flex items-center justify-center hover:opacity-30 cursor-pointer">
        
        <Link href={item == 'home' ? '/' : item.toLowerCase()}>{item}</Link>
        
      </div>
    )
  })
  return (
    <div
      className={`w-[310px] h-[121px] md:w-full md:h-[16px] text-[15px] md:text-[12px] font-bold uppercase  tracking-[2.5px] flex flex-col items-center justify-around text-white md:flex-row md:justify-between xl:flex-col xl:h-full`}
    >
      {componentLst}
    </div>
  );
}
