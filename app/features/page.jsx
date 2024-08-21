import CallToAction from "@/components/call_to_action_component/CallToActionComponent";
import FeatureSection from "@/components/feture_section_component/FeatureSectionComponent";
import Story from "@/components/story_component/StoryComponent";
export default function Home() {
    const storyData = [
        {
          'imageLink': '/assets/features/desktop/hero.jpg',
          'imageWidth': 830,
          'imageHeight': 650,
          'storyTitle': 'FEATURES',
          'storyDescription': "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
          'linkText': 'read the story',
          'link': ''
        }
      ]
  return (
    <main className="min-h-screen">
        <Story storyData={storyData}/>
        <FeatureSection/>
        <CallToAction/>
    </main>
  );
}
