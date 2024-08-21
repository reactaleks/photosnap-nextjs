import FeatureSection from "@/components/feture_section_component/FeatureSectionComponent";
import ImageStory from "@/components/image_story_component/ImageStoryComponent";
import Story from "@/components/story_component/StoryComponent";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Story/>
      <ImageStory/>
      <FeatureSection featuresToShow={6}/>
    </main>
  );
}
