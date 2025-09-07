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

import digitalMarketingLeadership from "@/data/courses/digitalMarketingLeadership";
import BottomNav from "@/components/bottomNav";
import TrustedByLearners from "@/components/trustedByLearners";

export const metadata = {
  title: "Digital Marketing Program With AI & Entrepreneurship",
  description:
    "100% Placement Guaranteed* Digital Marketing Leadership Program With AI & Entrepreneurship Course. Approved by MESC & Skill India. Upto 30K Scholarship",
  keywords: [
    "digital marketing leadership course, digital marketing programs, digital marketing course for entrepreneurs, digital marketing ai programs,",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical:
      "https://digitalacademy360.com/digital-marketing-leadership-entrepreneurship-program",
  },
  openGraph: {
    title: "Digital Marketing Program With AI & Entrepreneurship",
    description:
      "100% Placement Guaranteed* Digital Marketing Leadership Program With AI & Entrepreneurship Course. Approved by MESC & Skill India. Upto 30K Scholarship",
    url: "https://digitalacademy360.com/digital-marketing-leadership-entrepreneurship-program",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Program With AI & Entrepreneurship",
    description:
      "100% Placement Guaranteed* Digital Marketing Leadership Program With AI & Entrepreneurship Course. Approved by MESC & Skill India. Upto 30K Scholarship",
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
        headingLineOne={digitalMarketingLeadership.leadCapture.titleOne}
        headingLineTow={digitalMarketingLeadership.leadCapture.titleTwo}
        descriptionLineOne={digitalMarketingLeadership.leadCapture.subtitleOne}
        descriptionLineTow={digitalMarketingLeadership.leadCapture.subtitleTwo}
        tags={digitalMarketingLeadership.leadCapture.tags || []}
        courseId={digitalMarketingLeadership.courseId}
      />
      <CohortDetails
        section="section1"
        cohorts={digitalMarketingLeadership.Cohort}
        heading={digitalMarketingLeadership.cohortSectionHeading}
      />
      <CourseHighlights
        section="section2"
        highlights={digitalMarketingLeadership.highlights}
      />
      <TrustedByLearners
        padding={{ desktop: "40px 0 140px 0", mobile: "0 0 60px 0" }}
      />
      <OurSuccessStories
        section="section3"
        headerTitle={digitalMarketingLeadership.StoryHeader.headerTitle}
        description={digitalMarketingLeadership.StoryHeader.description}
      />
      <CounterOnScroll />
      {/* <LifeAtDA360
        headerTitle={digitalMarketingLeadership.LifeAtDA360Header.headerTitle}
        description={digitalMarketingLeadership.LifeAtDA360Header.description}
      /> */}
      <TeamSection section="section4" />
      {/* <VideoSection /> */}
      <Highlights section="section5" />

      <LearningRoadmap
        headerTitle={
          digitalMarketingLeadership.LearningRoadmapProps.headerTitle
        }
        description={
          digitalMarketingLeadership.LearningRoadmapProps.description
        }
      />
      <LiveProjectsSlider
        section={digitalMarketingLeadership.liveProjects!.section}
        heading={digitalMarketingLeadership.liveProjects!.heading}
        description={digitalMarketingLeadership.liveProjects!.description}
        projects={digitalMarketingLeadership.liveProjects!.projects}
      />
      <CaseStudies data={digitalMarketingLeadership.caseStudies} />
      <Banner
        desktopSrc={"/images/scholarship/leadership-min.jpg"}
        mobileSrc={"/images/scholarship/leadership-min.jpg"}
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
