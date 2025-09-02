import coursesData, { CourseSection } from "@/data/courseData";
import styles from "./style.module.scss";

import AiMarketingBanner from "@components/aiMarketingBanner";
import LeadershipSection from "@/components/courseList/leadershipSection";
import PostGraduateSection from "@components/courseList/postGraduateSection";
import CertificationSection from "@components/courseList/certificationSection";

import OurSuccessStories from "@components/ourSuccessStories";
// import styles from "./page.module.scss";
import CommunityMeetupSlider from "@components/communityMeetupSlider";
import GlobalCommunity from "@components/globalCommunity";
import MarqueeBanner from "@components/widgets/marqueeBanner";
import Comparison from "@components/comparison";
// import LifeAtDA360 from "@components/lifeAtDA360";
import LatestBlogPosts from "@components/latestBlogPosts";
import MediaAwards from "@components/mediaAwards";
import PaddingWrapper from "@components/widgets/PaddingWrapper";
import GuestFacultySlider from "@components/guestFacultySlider";
import BrandLogos from "@components/brandLogos";

export const metadata = {
  title: "Digital Marketing Courses in Jayanagar | 100% Job-Guaranteed",
  description:
    "Learn Digital Marketing Courses in Jayanagar. In a Classroom or Online or Near You. Live Project, Certification, Internship & 100% Guaranteed Placement.",
  keywords: [
    "digital marketing courses in Jayanagar, digital marketing course in Jayanagar, digital marketing course fees in Jayanagar,digital marketing courses in Jayanagar with placement , digital marketing certification courses in Jayanagar, digital marketing course near me in Jayanagar",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical:
      "https://digitalacademy360.com/digital-marketing-courses-jayanagar",
  },
  openGraph: {
    title: "Digital Marketing Courses in Jayanagar | 100% Job-Guaranteed",
    description:
      "Learn Digital Marketing Courses in Jayanagar. In a Classroom or Online or Near You. Live Project, Certification, Internship & 100% Guaranteed Placement.",
    url: "https://digitalacademy360.com/digital-marketing-courses-jayanagar",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Courses in Jayanagar | 100% Job-Guaranteed",
    description:
      "Learn Digital Marketing Courses in Jayanagar. In a Classroom or Online or Near You. Live Project, Certification, Internship & 100% Guaranteed Placement.",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
};

export default function About() {
  return (
    <main>
      <div className={styles.container}>
        <AiMarketingBanner />
        {coursesData.map((section: CourseSection) => {
          switch (section.componentType) {
            case "Leadership":
              return (
                <LeadershipSection key={section.sectionId} section={section} />
              );
            case "PostGraduate":
              return (
                <PostGraduateSection
                  key={section.sectionId}
                  section={section}
                />
              );
            case "Certification":
              return (
                <CertificationSection
                  key={section.sectionId}
                  section={section}
                />
              );
            default:
              return null;
          }
        })}
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
      </div>
    </main>
  );
}
