export default function PlanComparison() {
  const comparisonData = [
    {
      title: "unlimited story posting",
      plans: ["basic", "pro", "business"],
    },
    {
      title: "UNLIMITED PHOTO UPLOAD",
      plans: ["basic", "pro", "business"],
    },
    {
      title: "EMBEDDING CUSTOM CONTENT",
      plans: ["pro", "business"],
    },
    {
      title: "CUSTOMIZE METADATA",
      plans: ["pro", "business"],
    },
    {
      title: "ADVANCED METRICS",
      plans: ["business"],
    },
    {
      title: "PHOTO DOWNLOADS",
      plans: ["business"],
    },
    {
      title: "SEARCH ENGINE INDEXING",
      plans: ["business"],
    },
    {
      title: "CUSTOM ANALYTICS",
      plans: ["business"],
    },
  ];

  const componentList = comparisonData.map((item, index) => {
    return (
        <div key={index} className="h-[112px] flex flex-col justify-around md:flex-row  items-center md:justify-around relative ">
          <div className="text-[12px] font-bold  w-full md:w-full tracking-[2px] uppercase ">
            {item.title}
          </div>

          <div className="flex w-full h-[33px] justify-between md:w-full md:grid-cols-3 md:grid">
            <div className="flex flex-col justify-around h-full">
              <div className="text-[10px] tracking-[1.67px] opacity-50 md:hidden">
                Basic
              </div>
              <div className="flex justify-center">
                {item.plans.includes("basic") ? (
                  item.plans.includes("business") ? (
                    <svg
                      width="17"
                      height="13"
                      viewBox="0 0 17 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8.12351L4.62323 13L16 1"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex flex-col justify-around h-full">
              <div className="text-[10px] tracking-[1.67px] opacity-50 md:hidden">
                Pro
              </div>
              <div className="flex justify-center">
                {item.plans.includes("pro") ? (
                  item.plans.includes("business") ? (
                    <svg
                      width="17"
                      height="13"
                      viewBox="0 0 17 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8.12351L4.62323 13L16 1"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex flex-col justify-around h-full">
              <div className=" text-[10px] tracking-[1.67px] opacity-50 md:hidden">
                Business
              </div>
              <div className="flex justify-center">
                {item.plans.includes("business") ? (
                  <svg
                    width="17"
                    height="13"
                    viewBox="0 0 17 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8.12351L4.62323 13L16 1"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#D8D8D8] bg-opacity-25 md:absolute md:bottom-0 md:bg-opacity-75"></div>
        </div>
    );
  });

  return (
    <div className="w-[318px] md:w-[90vw] xl:w-[50vw] mx-auto">
      <div className="text-[12px] tracking-[2px] font-bold uppercase flex justify-between md:grid md:grid-cols-2">
        <div className=""> The Features</div>
        <div className="flex">
          <div className="items-center hidden md:grid md:grid-cols-3 md:w-full">
            <div className="flex justify-center">basic</div>
            <div className="flex justify-center ">pro</div>
            <div className="flex justify-center ">business</div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#D8D8D8] my-6"></div>
      {componentList}
    </div>
  );
}
