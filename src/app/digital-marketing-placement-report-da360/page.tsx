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
  title: "Digital Marketing Career & Placements | DA360 Success Story ",
  description:
    "50K+ DA360 Learners Became Digital Marketers. Read Alumni Success Stories. View Placement Rate, Career Trajectorie, Top Hiring Partners & Real Success stories.",
  keywords: [
    "Digital Marketing Placement",
    "Digital Marketing Career",
    "Digital Marketing Career Path",
    "Digital Marketing Specialists",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical:
      "https://digitalacademy360.com/digital-marketing-placement-report-da360",
  },
  openGraph: {
    title: "Digital Marketing Career & Placements | DA360 Success Story ",
    description:
      "50K+ DA360 Learners Became Digital Marketers. Read Alumni Success Stories. View Placement Rate, Career Trajectorie, Top Hiring Partners & Real Success stories.",
    url: "https://digitalacademy360.com/digital-marketing-placement-report-da360",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Career & Placements | DA360 Success Story ",
    description:
      "50K+ DA360 Learners Became Digital Marketers. Read Alumni Success Stories. View Placement Rate, Career Trajectorie, Top Hiring Partners & Real Success stories.",
    images: ["https://digitalacademy360.com/og-image.jpg"],
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
