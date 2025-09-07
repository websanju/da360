import LeadCaptureSection from "@components/leadCaptureSection";
import CohortDetails from "@components/cohortDetails";
import CourseHighlights from "@components/courseHighlights";
import OurSuccessStories from "@components/ourSuccessStories";
import CounterOnScroll from "@components/counterOnScroll";
// import LifeAtDA360 from "@components/lifeAtDA360";
import TeamSection from "@components/teamSection";
// import VideoSection from "@components/videoSection";
import LearnerEnquiry from "@components/learnerEnquiry";
import MediaAwards from "@components/mediaAwards";
import LatestBlogPosts from "@components/latestBlogPosts";
// import UnlockBonuses from "@components/unlockBonuses";
import Highlights from "./highlights";
import LearningRoadmap from "@components/learningRoadmap";
// import RewardGrid from "@components/rewardGrid";
import BrandLogos from "@components/brandLogos";
import CaseStudies from "@components/caseStudies";
import Banner from "@components/banner";
import AlumniSlider from "@components/alumniSlider";
import PeopleSlider from "@components/peopleSlider";
import LiveProjectsSlider from "@components/liveProjectsSlider";

import BottomNav from "@components/bottomNav";
import onlineDigitalMarketingCourses from "@/data/courses/onlineDigitalMarketingCourses";
import TrustedByLearners from "@/components/trustedByLearners";

export const metadata = {
  title: "Digital Marketing PG Program | Ranked #1 Academy & Class",
  description:
    "Elevate your skills at #1 Digital Marketing Academy. Our PG Digital Marketing program offers live coaching, internships, and placement support",
  keywords: [
    "PG Digital Marketing, Digital Marketing Programs, Digital Marketing Academy, Digital Marketing Coaching, Digital Marketing Class, Digital Marketing Degree",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/online-digital-marketing-courses",
  },
  openGraph: {
    title: "Digital Marketing PG Program | Ranked #1 Academy & Class",
    description:
      "Elevate your skills at #1 Digital Marketing Academy. Our PG Digital Marketing program offers live coaching, internships, and placement support",
    url: "https://digitalacademy360.com/online-digital-marketing-courses",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing PG Program | Ranked #1 Academy & Class",
    description:
      "Elevate your skills at #1 Digital Marketing Academy. Our PG Digital Marketing program offers live coaching, internships, and placement support",
  },
};

export default function courseDetail() {
  const sections = [
    { id: "section1", label: "Overview" },
    { id: "section2", label: "Course Highlights" },
    { id: "section3", label: "Success Stories" },
    { id: "section4", label: "Our People" },
    { id: "section5", label: "Curriculam" },
    { id: "section6", label: "Projects" },
    { id: "section7", label: "Rewards" },
  ];
  return (
    <main>
      <LeadCaptureSection
        headingLineOne={onlineDigitalMarketingCourses.leadCapture.titleOne}
        headingLineTow={onlineDigitalMarketingCourses.leadCapture.titleTwo}
        descriptionLineOne={
          onlineDigitalMarketingCourses.leadCapture.subtitleOne
        }
        descriptionLineTow={
          onlineDigitalMarketingCourses.leadCapture.subtitleTwo
        }
        tags={onlineDigitalMarketingCourses.leadCapture.tags || []}
        courseId={onlineDigitalMarketingCourses.courseId}
      />
      <CohortDetails
        section="section1"
        cohorts={onlineDigitalMarketingCourses.Cohort}
        heading={onlineDigitalMarketingCourses.cohortSectionHeading}
      />
      <CourseHighlights
        section="section2"
        highlights={onlineDigitalMarketingCourses.highlights}
      />
      <TrustedByLearners
        padding={{ desktop: "40px 0 140px 0", mobile: "0 0 60px 0" }}
      />
      <OurSuccessStories
        section="section3"
        headerTitle={onlineDigitalMarketingCourses.StoryHeader.headerTitle}
        description={onlineDigitalMarketingCourses.StoryHeader.description}
      />
      <CounterOnScroll />
      {/* <LifeAtDA360 /> */}
      <TeamSection section="section4" />
      {/* <VideoSection /> */}
      <Highlights section="section5" />
      <LearningRoadmap />
      <LiveProjectsSlider
        section={onlineDigitalMarketingCourses.liveProjects!.section}
        heading={onlineDigitalMarketingCourses.liveProjects!.heading}
        description={onlineDigitalMarketingCourses.liveProjects!.description}
        projects={onlineDigitalMarketingCourses.liveProjects!.projects}
      />
      <CaseStudies data={onlineDigitalMarketingCourses.caseStudies} />
      <Banner
        desktopSrc={"/images/scholarship/pgcp-min.jpg"}
        mobileSrc={"/images/scholarship/pgcp-min.jpg"}
      />
      <PeopleSlider />
      <AlumniSlider />
      <BrandLogos />
      {/* <RewardGrid section="section7" /> */}
      {/* <UnlockBonuses /> */}
      <LatestBlogPosts />
      <MediaAwards />
      <LearnerEnquiry />

      <BottomNav sections={sections} showContactButtons={true} />
    </main>
  );
}
