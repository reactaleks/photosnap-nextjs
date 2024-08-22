import Image from "next/image"
export default function Feature({icon, iconWidth, iconHeight, title, description}) {
    return (
        <div className="w-[310px] h-[236px] flex flex-col justify-between items-center my-6 md:mx-auto">
            <div className="w-[72px] h-[72px] flex items-center"><Image src={icon} width={iconWidth} height={iconHeight} alt=""/> </div>
            <div className="text-[18px] leading-[25px] font-bold">{title}</div>
            <div className="text-[15px] leading-[25px] opacity-50">{description}</div>
        </div>
    )
}