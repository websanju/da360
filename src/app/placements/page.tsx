// import styles from "./style.module.scss";
import Faq from "@components/faq";
import HireTalentBanner from "@components/hireTalentBanner";
import TimelineSection from "@/components/timelineSection/";
import PeopleSlider from "@components/peopleSlider";
import PaddingWrapper from "@components/widgets/PaddingWrapper";
import BrandLogos from "@components/brandLogos";
import PlacementStats from "@components/placementStats";
import StudentShowcase from "@components/studentShowcase";
import PlacementsBanner from "@components/placementsBanner";

export const metadata = {
  title: "Digital Marketing Course Placements Report & Career Paths",
  description:
    "50K+ Learners Career Path Transformed Into Digital Marketers & Marketing Specialist. Explore Digital Marketing Career & Placement Record Of Digital Academy 360",
  keywords: [
    "Digital Marketing Career, Digital Marketing Specialists, Digital Marketing Career Path, Digital Marketing Placement",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/contact-us",
  },
  openGraph: {
    title: "Digital Marketing Course Placements Report & Career Path",
    description:
      "50K+ Learners Career Path Transformed Into Digital Marketers & Marketing Specialist. Explore Digital Marketing Career & Placement Record Of Digital Academy 360",
    url: "https://digitalacademy360.com/contact-us",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help & Support Details Of Digital Academy 360 | Contact Us",
    description:
      "Toll Free Number To Get In Touch With Digital Academy 360 Dedicated Team For Enquiry, Admission, Help Or Support. You Are Just A Click Away. Contact Us Now!",
  },
};

export default function Career() {
  return (
    <main>
      <PlacementsBanner />
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
