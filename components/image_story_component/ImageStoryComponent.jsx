import LinkMore from "../shared_ui_components/Link_MoreComponent";
import Image from "next/image";
export default function ImageStory() {

  const storyData = [
    {
      'link': "/assets/stories/desktop/mountains.jpg",
      'height': 500,
      'width': 360,
      'alt': '',
      'title': 'The Mountains',
      'author': 'by John Appleseed',
    },
    {
      'link': '/assets/stories/desktop/cityscapes.jpg',
      'height': 500,
      'width': 360,
      'alt': '',
      'title': 'Sunset Cityscapes',
      'author': 'by Benjamin Cruz',
    },
    {
      'link': '/assets/stories/desktop/18-days-voyage.jpg',
      'height': 500,
      'width': 360,
      'alt': '',
      'title': '18 Days Voyage',
      'author': 'by Alexei Borodin',
    },
    {
      'link': '/assets/stories/desktop/architecturals.jpg',
      'height': 500,
      'width': 360,
      'alt': '',
      'title': 'Architecturals',
      'author': 'by Samantha Brooke',
    },
  ]

  const componentList = storyData.map((item, index) => { 
    return <div key={index} className="w-full h-[375px] md:h-[500px] xl:w-auto flex flex-col relative items-center">
      <Image
        src={item.link}
        className="object-cover w-full h-full brightness-50"
        width={item.width}
        height={item.height}
        alt={item.alt}
      />
      <div className="absolute bottom-12 text-white w-[310px] h-[99px] flex flex-col justify-around">
        <div className="flex flex-col">
          <div className="text-[18px] leading-[25px] font-bold">{item.title}</div>
          <div className="text-[13px]">{item.author}</div>
        </div>

        <div className="w-[310px] h-[1px] bg-white bg-opacity-25"></div>
        <LinkMore linkText={"read story"} />
      </div>
    </div>
  })

  return (
    <div className="md:grid md:grid-cols-2 xl:grid-cols-4">
        {componentList}
    </div>
  );
}
