import LeadCaptureSection from "@components/leadCaptureSection";
import CohortDetails from "@components/cohortDetails";
import CourseHighlights from "@components/courseHighlights";
// import OurSuccessStories from "@components/ourSuccessStories";
import CounterOnScroll from "@components/counterOnScroll";
// import LifeAtDA360 from "@components/lifeAtDA360";
import TeamSection from "@components/teamSection";
// import VideoSection from "@components/videoSection";
import LearnerEnquiry from "@components/learnerEnquiry";
import MediaAwards from "@components/mediaAwards";
import LatestBlogPosts from "@components/latestBlogPosts";
// import UnlockBonuses from "@components/unlockBonuses";
import Highlights from "./highlights";
// import LearningRoadmap from "@components/learningRoadmap";
// import RewardGrid from "@components/rewardGrid";
// import BrandLogos from "@components/brandLogos";
import CaseStudies from "@components/caseStudies";
// import Banner from "@components/banner";
import AlumniSlider from "@components/alumniSlider";
import PeopleSlider from "@components/peopleSlider";
// import TrustedByLearners from "@components/trustedByLearners";
// import LiveProjectsSlider from "@components/liveProjectsSlider";
// import ContactButtonsSticky from "@/components/widgets/contactButtonsSticky";
import BottomNav from "@components/bottomNav";
import aiVibeMarketing from "@/data/courses/aiVibeMarketing";
import AiVibeMarketing from "@/data/courses/aiVibeMarketing";

export const metadata = {
  title: "Digital Marketing Certification In AI & Vibe Marketing",
  description:
    "Digital Marketing Certification Course With AI & Vibe Marketing. Get 10+ Tools, 8+ Case Study, 2 AI Flow, Certification, Paid Internship & Secure Your Career",
  keywords: [
    "Vibe Marketing Courses, Vibe Marketing Certification Courses, AI Vibe Marketing Courses, AI Vibe Marketing Certification Courses",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/",
  },
  openGraph: {
    title: "Digital Marketing Certification In AI & Vibe Marketing",
    description:
      "Digital Marketing Certification Course With AI & Vibe Marketing. Get 10+ Tools, 8+ Case Study, 2 AI Flow, Certification, Paid Internship & Secure Your Career",
    url: "https://digitalacademy360.com/",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Certification In AI & Vibe Marketing",
    description:
      "Digital Marketing Certification Course With AI & Vibe Marketing. Get 10+ Tools, 8+ Case Study, 2 AI Flow, Certification, Paid Internship & Secure Your Career",
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
        headingLineOne={aiVibeMarketing.leadCapture.titleOne}
        headingLineTow={aiVibeMarketing.leadCapture.titleTwo}
        descriptionLineOne={aiVibeMarketing.leadCapture.subtitleOne}
        descriptionLineTow={aiVibeMarketing.leadCapture.subtitleTwo}
        tags={aiVibeMarketing.leadCapture.tags || []}
      />
      <CohortDetails
        section="section1"
        cohorts={aiVibeMarketing.Cohort}
        heading={aiVibeMarketing.cohortSectionHeading}
      />
      <CourseHighlights
        section="section2"
        highlights={aiVibeMarketing.highlights}
      />
      {/* <TrustedByLearners
        padding={{ desktop: "40px 0 140px 0", mobile: "0 0 60px 0" }}
      /> */}

      <CounterOnScroll />
      {/* <LifeAtDA360
        headerTitle={
          aiVibeMarketing.LifeAtDA360Header.headerTitle
        }
        description={
          aiVibeMarketing.LifeAtDA360Header.description
        }
      /> */}
      <TeamSection section="section4" />
      {/* <VideoSection /> */}
      <Highlights section="section5" />

      {/* <LearningRoadmap
        headerTitle={
          aiVibeMarketing.LearningRoadmapProps.headerTitle
        }
        description={
          aiVibeMarketing.LearningRoadmapProps.description
        }
      /> */}

      {/* <LiveProjectsSlider
        section={AiVibeMarketing.liveProjects!.section}
        heading={AiVibeMarketing.liveProjects!.heading}
        description={AiVibeMarketing.liveProjects!.description}
        projects={AiVibeMarketing.liveProjects!.projects}
      /> */}
      <CaseStudies data={AiVibeMarketing.caseStudies} />
      {/* <Banner /> */}
      <PeopleSlider />
      <AlumniSlider />
      {/* <BrandLogos /> */}
      {/* <RewardGrid section="section7" /> */}
      {/* <UnlockBonuses /> */}
      <LatestBlogPosts />
      <MediaAwards />
      <LearnerEnquiry />
      <BottomNav sections={sections} showContactButtons={true} />
    </main>
  );
}
