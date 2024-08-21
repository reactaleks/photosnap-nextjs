import Image from "next/image";
import LinkMore from "../shared_ui_components/Link_MoreComponent";

export default function Story() {

  const storyData = [
    {
      'imageLink': '/assets/home/desktop/create-and-share.jpg',
      'imageWidth': 830,
      'imageHeight': 650,
      'storyTitle': ' Create and share your photo stories.',
      'storyDescription': "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      'linkText': 'get an invite',
      'link': ''
    },
    {
      'imageLink': '/assets/home/desktop/beautiful-stories.jpg',
      'imageWidth': 830,
      'imageHeight': 650,
      'storyTitle': 'BEAUTIFUL STORIES EVERY TIME',
      'storyDescription': "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
      'linkText': 'view the stories',
      'link': ''
    },
    {
      'imageLink': '/assets/home/desktop/designed-for-everyone.jpg',
      'imageWidth': 830,
      'imageHeight': 650,
      'storyTitle': ' DESIGNED FOR EVERYONE',
      'storyDescription': "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
      'linkText': 'view the stories',
      'link': ''
    }
  ]

  const componentList = storyData.map((item, index) => {
    return <div className="relative w-full" key={index}>
      <Image
        src={item.imageLink}
        width={item.imageWidth}
        height={item.imageHeight}
        alt=""
        className="object-cover w-screen"
      />
      <div className={`h-[419px]  ${index == 0 ? 'bg-black text-white' : 'bg-white text-black'}  flex flex-col items-cener justify-center relative`}>

        <div className={`${index != 0 ? 'hidden' : 'block'} w-[128px] h-[6px] absolute top-0 left-8 bg-gradient-to-tr from-[#FFC593] from-0% via-[#BC7198] via-45% to-[#5A77FF]`}></div>
        
        <div className="w-[318px] h-[275px] flex flex-col justify-around m-auto">
          <div className="text-[32px] font-bold tracking-[3.33px] leading-[40px] uppercase">
            {item.storyTitle}
          </div>
          <div className="text-[15px] leading-[25px] text-opacity-60">
            {item.storyDescription}
          </div>
          <div className="w-[205px]">
            <LinkMore linkText={item.linkText} />
          </div>
        </div>
      </div>
    </div>
  })
  return (
    <>
      {componentList}
    </>
  );
}
