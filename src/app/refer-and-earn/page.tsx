import ReferHero from "@components/referHero";
import HowToEarn from "@components/howToEarn";
import CallToActionBanner from "@components/callToActionBanner";
import LearningPrograms from "@components/learningPrograms";
import Faq from "@components/faq";

export default function ReferEarn() {
  return (
    <main>
      <ReferHero />
      <HowToEarn />
      <LearningPrograms />
      <Faq />
      <CallToActionBanner />
    </main>
  );
}
