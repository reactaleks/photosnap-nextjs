export default function FooterNav() {
  return (
    <div
      className={`w-[310px] h-[121px] md:w-full md:h-[16px] text-[15px] md:text-[12px] font-bold uppercase  tracking-[2.5px] flex flex-col items-center justify-around text-white md:flex-row md:justify-between xl:flex-col xl:h-full`}
    >
      <div className="  w-[310px] h-[20px] md:w-[61px] md:h-[16px] flex items-center justify-center">
        Home
      </div>
      <div className=" w-[310px] h-[20px] md:w-[61px] md:h-[16px] flex items-center justify-center">
        Stories
      </div>
      <div className="  w-[310px] h-[20px] md:w-[61px] md:h-[16px] flex items-center justify-center">
        Features
      </div>
      <div className="   w-[310px] h-[20px] md:w-[61px] md:h-[16px] flex items-center justify-center">
        Pricing
      </div>
    </div>
  );
}
