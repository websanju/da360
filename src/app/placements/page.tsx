// import styles from "./style.module.scss";
import Faq from "@components/faq";
import HireTalentBanner from "@components/hireTalentBanner";
import TimelineSection from "@/components/timelineSection/";
import PeopleSlider from "@components/peopleSlider";
import PaddingWrapper from "@components/widgets/PaddingWrapper";
import BrandLogos from "@components/brandLogos";
import PlacementStats from "@components/placementStats";
import StudentShowcase from "@components/studentShowcase";

export default function Career() {
  return (
    <main>
      <StudentShowcase />
      <PlacementStats />
      <BrandLogos />
      <PaddingWrapper desktopPaddingBottom="130px" mobilePaddingBottom="60px">
        <PeopleSlider />
      </PaddingWrapper>
      <TimelineSection />
      <HireTalentBanner />
      <Faq />
    </main>
  );
}
