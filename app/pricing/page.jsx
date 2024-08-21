import Story from "@/components/story_component/StoryComponent";
export default function Home() {
    const storyData = [
        {
          'imageLink': '/assets/pricing/desktop/hero.jpg',
          'imageWidth': 830,
          'imageHeight': 650,
          'storyTitle': ' PRICING',
          'storyDescription': "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
          'linkText': 'read the story',
          'link': ''
        }
      ]
  return (
    <main className="min-h-screen">
        <Story storyData={storyData}/>
    </main>
  );
}
