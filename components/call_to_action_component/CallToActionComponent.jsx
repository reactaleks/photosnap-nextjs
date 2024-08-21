import LinkMore from "../shared_ui_components/Link_MoreComponent"
import Image from "next/image"
export default function CallToAction() {
    return (
        <div className="h-[280px] w-full bg-orange-500 relative flex justify-center items-center">
        <div className={` w-[128px] h-[6px]  absolute top-0 left-8 md:top-auto md:left-0 md:h-full md:w-[6px] bg-gradient-to-tr from-[#FFC593] from-0% via-[#BC7198] via-45% to-[#5A77FF]`}></div>

          <div className="absolute text-white w-[310px] h-[160px] flex flex-col justify-between">
            <div className="text-[32px] leading-[40px] tracking-[3.33px] font-bold uppercase">We’re in beta.
            Get your invite today!</div>
            <div className="w-[168px]">
                <LinkMore linkText={'get an invite'}/>

            </div>
          </div>
          <Image src={'/assets/shared/desktop/bg-beta.jpg'} width={1440} height={280} className="object-fill w-full h-full"/>
        </div>
    )
}