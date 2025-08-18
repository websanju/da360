import HeroSection from "@components/heroSection";
import LearnersSection from "@components/learnersSection";
// import Accreditation from "@components/widgets/accreditationSection/accreditation";
import BrandLogos from "@components/brandLogos";
import ProgramsShowcase from "@components/programsShowcase";
import SelfPacedPrograms from "@components/selfPacedPrograms";
import OurSuccessStories from "@components/ourSuccessStories";
import styles from "./page.module.scss";
import TrustedByLearners from "@components/trustedByLearners";
import CommunityMeetupSlider from "@components/communityMeetupSlider";
import GlobalCommunity from "@components/globalCommunity";
import MarqueeBanner from "@components/widgets/marqueeBanner";
import Comparison from "@components/comparison";
import LifeAtDA360 from "@components/lifeAtDA360";
import LatestBlogPosts from "@components/latestBlogPosts";
import MediaAwards from "@components/mediaAwards";
import PaddingWrapper from "@components/widgets/PaddingWrapper";
import GuestFacultySlider from "@components/guestFacultySlider";

export const metadata = {
  title: "#1 Top Ranked Digital Marketing Training Institute in Asia",
  description:
    "Join the #1 Top-Ranked AI Digital Marketing Training Institute in India, Asia. Approved by NSDC & Skill India. Learn AI Digital Marketing & Get Certified Today",
  keywords: [
    "Digital Academy 360",
    "Digital Marketing Courses in India",
    "Digital Marketing Training in India",
    "Digital Marketing Institute in India",
    "Learn Digital Marketing",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/",
  },
  openGraph: {
    title: "#1 Top Ranked Digital Marketig Training Instiute in Asia",
    description:
      "Join the #1 Top-Ranked AI Digital Marketing Training Institute in India, Asia. Approved by NSDC & Skill India. Learn AI Digital Marketing & Get Certified Today",
    url: "https://digitalacademy360.com/",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Top Ranked Digital Marketig Training Instiute in Asia",
    description:
      "Join the #1 Top-Ranked AI Digital Marketing Training Institute in India, Asia. Approved by NSDC & Skill India. Learn AI Digital Marketing & Get Certified Today",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PaddingWrapper desktopPaddingBottom="130px" mobilePaddingBottom="60px">
        <OurSuccessStories
          headerTitle={"Our Alumni Achievements"}
          description={"Real People, Real Transitions, Real Success"}
          className={styles.ourSuccessStorieshome}
          fullWidth
          className2={styles.successWrapperHome}
          breakpoints={{
            480: { slidesPerView: 1.3 },
            768: { slidesPerView: 2.3 },
            1200: { slidesPerView: 4.3 },
          }}
        />
        <LearnersSection />
      </PaddingWrapper>
      <TrustedByLearners padding={{ desktop: "0 0 0 0", mobile: "0 0 0 0" }} />
      {/* <Accreditation /> */}

      <ProgramsShowcase />
      <SelfPacedPrograms />

      <PaddingWrapper desktopPaddingBottom="130px" mobilePaddingBottom="60px">
        <BrandLogos />
      </PaddingWrapper>
      <CommunityMeetupSlider />
      <GuestFacultySlider />
      <GlobalCommunity />
      <MarqueeBanner />
      <Comparison />
      <LifeAtDA360 />
      <MediaAwards />
      <PaddingWrapper desktopPaddingBottom="130px" mobilePaddingBottom="60px">
        <LatestBlogPosts />
      </PaddingWrapper>
    </main>
  );
}
