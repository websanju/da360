import HeroSection from "@components/heroSection";
import LearnersSection from "@components/learnersSection";
// import Accreditation from "@components/widgets/accreditationSection/accreditation";
import BrandLogos from "@components/brandLogos";
import ProgramsShowcase from "@components/programsShowcase";
import SelfPacedPrograms from "@components/selfPacedPrograms";
import OurSuccessStories from "@components/ourSuccessStories";
// import styles from "./page.module.scss";
import TrustedByLearners from "@components/trustedByLearners";
import CommunityMeetupSlider from "@components/communityMeetupSlider";
import GlobalCommunity from "@components/globalCommunity";
import MarqueeBanner from "@components/widgets/marqueeBanner";
import Comparison from "@components/comparison";
// import LifeAtDA360 from "@components/lifeAtDA360";
import LatestBlogPosts from "@components/latestBlogPosts";
import MediaAwards from "@components/mediaAwards";
import PaddingWrapper from "@components/widgets/PaddingWrapper";
import GuestFacultySlider from "@components/guestFacultySlider";

export const metadata = {
  title: "Digital Marketing Academy | #1 AI School & Coaching Institute",
  description:
    "Asia's Leading Digital Marketing, AI School. Academy With 50K+ Alumni. NSDC & Skill India Approved Coaching, Internship, Certification & 100% Placement*",
  keywords: [
    "digital marketing school",
    "digital marketing academy",
    "digital marketing coaching",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/",
  },
  openGraph: {
    title: "Digital Marketing Academy | #1 AI School & Coaching Institute",
    description:
      "Asia's Leading Digital Marketing, AI School. Academy With 50K+ Alumni. NSDC & Skill India Approved Coaching, Internship, Certification & 100% Placement*",
    url: "https://digitalacademy360.com/",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Academy | #1 AI School & Coaching Institute",
    description:
      "Asia's Leading Digital Marketing, AI School. Academy With 50K+ Alumni. NSDC & Skill India Approved Coaching, Internship, Certification & 100% Placement*",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PaddingWrapper desktopPaddingBottom="130px" mobilePaddingBottom="60px">
        <LearnersSection />
      </PaddingWrapper>
      <TrustedByLearners padding={{ desktop: "0 0 0 0", mobile: "0 0 0 0" }} />
      {/* <Accreditation /> */}
      <ProgramsShowcase />
      <SelfPacedPrograms />
      <OurSuccessStories
        headerTitle={"Our Alumni Achievements"}
        description={"Real People, Real Transitions, Real Success"}
        // breakpoints={{
        //   480: { slidesPerView: 1.3 },
        //   768: { slidesPerView: 2.3 },
        //   1200: { slidesPerView: 4.3 },
        // }}
      />
      <BrandLogos />
      <PaddingWrapper desktopPaddingBottom="130px" mobilePaddingBottom="60px">
        <GuestFacultySlider />
      </PaddingWrapper>
      <CommunityMeetupSlider />
      <GlobalCommunity />
      <MarqueeBanner />
      <Comparison />
      {/* <LifeAtDA360 /> */}
      <MediaAwards />
      <PaddingWrapper desktopPaddingBottom="130px" mobilePaddingBottom="60px">
        <LatestBlogPosts />
      </PaddingWrapper>
    </main>
  );
}
