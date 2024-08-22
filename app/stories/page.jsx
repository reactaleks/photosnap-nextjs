import Story from "@/components/story_component/StoryComponent";
import ImageStory from "@/components/image_story_component/ImageStoryComponent";
export default function Home() {
    const storyData = [
        {
          'imageLink': '/assets/stories/desktop/moon-of-appalacia.jpg',
          'imageWidth': 830,
          'imageHeight': 650,
          'storyTitle': ' HAZY FULL MOON OF APPALACHIA',
          'storyDescription': "The dissected plateau area, while not actually made up of geological mountains, is popularly called mountains, especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.",
          'linkText': 'read the story',
          'link': ''
        }
      ]
  return (
    <main className="min-h-screen">
        <Story storyData={storyData} expanded={true}/>
        <ImageStory numberToDisplay={16}/>
    </main>
  );
}
