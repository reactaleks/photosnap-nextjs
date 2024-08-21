export default function FooterNav() {
  return (
    <div
      className={`w-[310px] h-[121px] flex flex-col items-center justify-around text-white`}
    >
      <div className="text-[15px] tracking-[2.5px] font-bold uppercase w-[310px] h-[20px] flex items-center justify-center">
        Home
      </div>
      <div className="text-[15px] tracking-[2.5px] font-bold uppercase w-[310px] h-[20px] flex items-center justify-center">
        Stories
      </div>
      <div className="text-[15px] tracking-[2.5px] font-bold uppercase w-[310px] h-[20px] flex items-center justify-center">
        Features
      </div>
      <div className="text-[15px] tracking-[2.5px] font-bold uppercase w-[310px] h-[20px] flex items-center justify-center">
        Pricing
      </div>
    </div>
  );
}
