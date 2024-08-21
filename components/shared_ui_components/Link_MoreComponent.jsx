import Arrow from "./shared_images/Img_Arrow_Component";
export default function LinkMore({linkText}) {
  return (
    <div className="flex items-center justify-between w-full ">
      <div className="text-[12px] font-bold tracking-[2px] uppercase">{linkText}</div>
      <div className="">
        <Arrow />
      </div>
    </div>
  );
}
