import FeatureSection from "@/components/feture_section_component/FeatureSectionComponent";
import ImageStory from "@/components/image_story_component/ImageStoryComponent";
import Story from "@/components/story_component/StoryComponent";
export default function Home() {

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

  return (
    <main className="min-h-screen">
      <Story storyData={storyData}/>
      <ImageStory numberToDisplay={4}/>
      <FeatureSection featuresToShow={3}/>
    </main>
  );
}
