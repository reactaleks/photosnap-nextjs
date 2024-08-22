import LinkMore from "../shared_ui_components/Link_MoreComponent";
import Image from "next/image";
export default function ImageStory({numberToDisplay, expanded}) {
  const storyData = [
    {
      link: "/assets/stories/desktop/mountains.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "The Mountains",
      author: "by John Appleseed",
      datePublished: '16/04/2020'
    },
    {
      link: "/assets/stories/desktop/cityscapes.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Sunset Cityscapes",
      author: "by Benjamin Cruz",
      datePublished: '14/04/2020'

    },
    {
      link: "/assets/stories/desktop/18-days-voyage.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "18 Days Voyage",
      author: "by Alexei Borodin",
      datePublished: '11/04/2020'

    },
    {
      link: "/assets/stories/desktop/architecturals.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Architecturals",
      author: "by Samantha Brooke",
      datePublished: '9/04/2020'

    },

    {
      link: "/assets/stories/desktop/world-tour.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "World Tour 2019",
      author: "by Timothy Wagner",
      datePublished: '07/04/2020'

    },
    {
      link: "/assets/stories/desktop/unforeseen-corners.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Unforeseen Corners",
      author: "by William Malcolm",
      datePublished: '03/04/2020'

    },
    {
      link: "/assets/stories/desktop/king-on-africa.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "King on Africa: Part II",
      author: "by Tim Hillenburg",
      datePublished: '29/03/2020'

    },
    {
      link: "/assets/stories/desktop/rage-of-the-sea.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Rage of The Sea",
      author: "by Mohammed Abdul",
      datePublished: '21/03/2020'

    },
    {
      link: "/assets/stories/desktop/running-free.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Running Free",
      author: "by Michelle",
      datePublished: '19/03/2020'

    },
    {
      link: "/assets/stories/desktop/trip-to-nowhere.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "The Trip to Nowhere",
      author: "by Felicia Rourke",
      datePublished: '16/03/2020'

    },
    {
      link: "/assets/stories/desktop/behind-the-waves.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Behind the Waves",
      author: "by Lamarr Wilson",
      datePublished: '11/03/2020'

    },
    {
      link: "/assets/stories/desktop/calm-waters.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Calm Waters",
      author: "by Samantha Brooke",
      datePublished: '9/03/2020'

    },
    {
      link: "/assets/stories/desktop/milky-way.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "The Milky Way",
      author: "by Benjamin Cruz",
      datePublished: '5/03/2020'

    },
    {
      link: "/assets/stories/desktop/dark-forest.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Night at The Dark Forest",
      author: "by  Mohammed Abdul",
      datePublished: '4/03/2020'

    },
    {
      link: "/assets/stories/desktop/somwarpet.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Somwarpet’s Beauty",
      author: "by Michelle",
      datePublished: '1/03/2020'

    },
    {
      link: "/assets/stories/desktop/land-of-dreams.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Land of Dreams",
      author: "by William Malcolm",
      datePublished: "25/02/2020"
    },
  ];

  // Date converter helper function 
  function convertDateFormat(dateString) {
    // Split the date string into day, month, and year components
    const [day, month, year] = dateString.split("/");
  
    // Create a Date object from the components
    const dateObject = new Date(year, month - 1, day); // Month is 0-based
  
    // Get the month name
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = monthNames[dateObject.getMonth()];   
  
  
    // Add the ordinal suffix to the day
    let daySuffix;
    if (day.endsWith("1") && day !== "11") {
      daySuffix = "st";
    } else if (day.endsWith("2") && day !== "12") {
      daySuffix = "nd";
    } else if (day.endsWith("3") && day !== "13") {
      daySuffix = "rd";
    } else {
      daySuffix = "th";   
  
    }
  
    // Construct the new date string
    const newDateString = `${monthName} ${day}${daySuffix} ${year}`;
  
    return newDateString;
  }

  const componentList = storyData.slice(0, numberToDisplay).map((item, index) => {
    return (
      <div
        key={index}
        className="w-full h-[375px] md:h-[500px] xl:w-auto flex flex-col relative md:hover:bottom-12 items-center group"
      >
        <Image
          src={item.link}
          className="object-cover brightness-[80%]"

          alt={'item.alt'}
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute bottom-12 text-white w-[310px] h-[99px] md:w-[90%] flex flex-col justify-around">
          <div className="flex flex-col">
            <div className={`text-[13px] ${expanded ? 'block' : 'hidden'}`}>{convertDateFormat(item.datePublished)}</div>
            <div className="text-[18px] leading-[25px] font-bold">
              {item.title}
            </div>
            <div className="text-[13px]">{item.author}</div>
          </div>

          <div className="w-full h-[1px] bg-white bg-opacity-25"></div>
          <LinkMore linkText={"read story"} />
        </div>
        <div className="w-full h-[6px] md:group-hover:block cursor-pointer absolute hidden bottom-0 bg-gradient-to-tr from-[#FFC593] from-0% via-[#BC7198] via-45% to-[#5A77FF]"></div>
      </div>
    );
  });

  return (
    <div className="relative md:grid md:grid-cols-2 xl:grid-cols-4">
      {componentList}
    </div>
  );
}
