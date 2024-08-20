import Arrow from "./shared_images/Img_Arrow_Component";
export default function LinkMore({linkText}) {
  return (
    <div className=" w-[168px] h-[16px] flex justify-between items-center">
      <div className="text-[12px] font-bold tracking-[2px] uppercase">{linkText}</div>
      <div className="">
        <Arrow />
      </div>
    </div>
  );
}
