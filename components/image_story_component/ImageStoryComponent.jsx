import LinkMore from "../shared_ui_components/Link_MoreComponent";
import Image from "next/image";
export default function ImageStory({numberToDisplay}) {
  const storyData = [
    {
      link: "/assets/stories/desktop/mountains.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "The Mountains",
      author: "by John Appleseed",
    },
    {
      link: "/assets/stories/desktop/cityscapes.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Sunset Cityscapes",
      author: "by Benjamin Cruz",
    },
    {
      link: "/assets/stories/desktop/18-days-voyage.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "18 Days Voyage",
      author: "by Alexei Borodin",
    },
    {
      link: "/assets/stories/desktop/architecturals.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Architecturals",
      author: "by Samantha Brooke",
    },

    {
      link: "/assets/stories/desktop/world-tour.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "World Tour 2019",
      author: "by Timothy Wagner",
    },
    {
      link: "/assets/stories/desktop/unforeseen-corners.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Unforeseen Corners",
      author: "by William Malcolm",
    },
    {
      link: "/assets/stories/desktop/king-on-africa.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "King on Africa: Part II",
      author: "by Tim Hillenburg",
    },
    {
      link: "/assets/stories/desktop/rage-of-the-sea.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Rage of The Sea",
      author: "by Mohammed Abdul",
    },
    {
      link: "/assets/stories/desktop/running-free.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Running Free",
      author: "by Michelle",
    },
    {
      link: "/assets/stories/desktop/trip-to-nowhere.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "The Trip to Nowhere",
      author: "by Felicia Rourke",
    },
    {
      link: "/assets/stories/desktop/behind-the-waves.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Behind the Waves",
      author: "by Lamarr Wilson",
    },
    {
      link: "/assets/stories/desktop/calm-waters.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Calm Waters",
      author: "by Samantha Brooke",
    },
    {
      link: "/assets/stories/desktop/milky-way.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "The Milky Way",
      author: "by Benjamin Cruz",
    },
    {
      link: "/assets/stories/desktop/dark-forest.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Night at The Dark Forest",
      author: "by  Mohammed Abdul",
    },
    {
      link: "/assets/stories/desktop/somwarpet.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Somwarpet’s Beauty",
      author: "by Michelle",
    },
    {
      link: "/assets/stories/desktop/land-of-dreams.jpg",
      height: 500,
      width: 360,
      alt: "",
      title: "Land of Dreams",
      author: "by William Malcolm",
    },
  ];

  const componentList = storyData.slice(0, numberToDisplay).map((item, index) => {
    return (
      <div
        key={index}
        className="w-full h-[375px] md:h-[500px] xl:w-auto flex flex-col relative md:hover:bottom-12 items-center group"
      >
        <Image
          src={item.link}
          className="object-cover w-full h-full brightness-50"
          width={item.width}
          height={item.height}
          alt={item.alt}
        />
        <div className="absolute bottom-12 text-white w-[310px] h-[99px] flex flex-col justify-around">
          <div className="flex flex-col">
            <div className="text-[18px] leading-[25px] font-bold">
              {item.title}
            </div>
            <div className="text-[13px]">{item.author}</div>
          </div>

          <div className="w-[310px] h-[1px] bg-white bg-opacity-25"></div>
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
