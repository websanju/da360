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
  title: "Classroom Experience, Life & Learning at Digital Academy 360",
  description:
    "Life@DA360 & Culture Is More Than A Course - Real-World Project, Mentor-Led Classes, Internship, Campus Events, Peer Collaboration, Mentor Support & More",
  keywords: [
    "Life at Digital Academy 360",
    "DA360 classroom experience",
    "Learning at DA360",
    "Digital Academy 360 culture",
    "DA360 learning journey",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/",
  },
  openGraph: {
    title: "Classroom Experience, Life & Learning at Digital Academy 360",
    description:
      "Life@DA360 & Culture Is More Than A Course - Real-World Project, Mentor-Led Classes, Internship, Campus Events, Peer Collaboration, Mentor Support & More",
    url: "https://digitalacademy360.com/",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Classroom Experience, Life & Learning at Digital Academy 360",
    description:
      "Life@DA360 & Culture Is More Than A Course - Real-World Project, Mentor-Led Classes, Internship, Campus Events, Peer Collaboration, Mentor Support & More",
    images: ["https://digitalacademy360.com/og-image.jpg"],
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
