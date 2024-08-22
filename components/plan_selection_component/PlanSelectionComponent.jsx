"use client";
import { useState } from "react";
import Button from "../shared_ui_components/ButtonComponent";
export default function PlanSelection() {
  const [enabled, setEnabled] = useState(false);
  
  const switchControl = () => {
    setEnabled(!enabled);
  };

  const planData = [
    {
      title: "Basic",
      description:
        "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      ppm: "19.00",
    },
    {
      title: "Pro",
      description:
        "More advanced features available. Recommended for photography veterans and professionals.",
      ppm: "39.00",
    },
    {
      title: "Business",
      description:
        "Additional features available such as more detailed metrics. Recommended for business owners.",
      ppm: "99.00",
    },
  ];
  const componentList = planData.map((item, index) => {
    return (
      <div
        key={index}
        className={`w-[318px] h-[407px] md:w-[90vw] flex flex-col justify-around items-center text-center ${
          index == 1 ? "bg-black text-white xl:h-[470px] xl:mx-6" : "bg-[#F5F5F5]"
        }  my-6 relative md:grid md:grid-cols-12 md:grid-rows-12 xl:w-[350px]`}
      >
        <div
          className={`w-full h-[6px] md:w-[6px] md:h-full md:left-0 ${
            index == 1 ? "block" : "hidden"
          } absolute  top-0 bg-gradient-to-tr from-[#FFC593] from-0% via-[#BC7198] via-45% to-[#5A77FF]`}
        ></div>

        <div className="h-[118px] w-[275px] flex flex-col justify-between md:text-start md:grid-col-span-4 md:row-start-5 md:col-start-2 xl:text-center xl:row-start-3 xl:col-span-10 xl:col-start-2 xl:row-span-3">
          <div className="text-[24px] leading-[25px] font-bold">
            {item.title}
          </div>
          <div className="text-[15px] leading-[25px] opacity-60">
            {item.description}
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-9 md:row-start-4 xl:row-start-7 xl:col-start-4 xl:col-span-6">
          <div className="text-[40px] leading-[48px] tracking-[4.17px] font-bold">
            {enabled ? "$" + (parseInt(item.ppm) * 12).toFixed(2) : "$" + item.ppm}
          </div>
          <div className="text-[15px] opacity-60">{enabled ? 'Per year' : 'Per month'}</div>
        </div>

        <div className="w-[245px] h-[40px] md:row-start-10 md:col-start-2 xl:col-start-3 xl:row-start-10 ">
          <Button btnText={"pick plan"} darkMode={index == 1 ? true : false}/>
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center justify-center h-auto py-14">
      <div className="flex w-[255px] justify-between text-[18px] font-bold items-center mx-auto">
        <div className={`${!enabled ? 'opacity-100' : 'opacity-50'}`} >Monthly</div>
        <div className="">
          <button
            onClick={switchControl}
            className={`group relative flex h-[32px] w-[64px] cursor-pointer rounded-full bg-[#979797]  p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1`}
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none inline-block size-6 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out ${
                enabled ? "translate-x-8" : "translate-x-0"
              }`}
            />
          </button>
        </div>
        <div className={`${enabled ? 'opacity-100' : 'opacity-50'}`}>Yearly</div>
      </div>

      <div className="xl:flex xl:flex-row xl:items-center">{componentList}</div>
    </div>
  );
}
