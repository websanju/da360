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
import performanceMarketingAndMartech from "@/data/courses/performanceMarketingAndMartech";

export const metadata = {
  title: "MarTech, Automation & Performance Marketing Courses Online",
  description:
    "Boost Your Career By Mastering Performance Marketing Course Online: Google Ads, Meta Ads, AI-powered MarTech, Marketing Automation & More. Apply Now!",
  keywords: [
    "performance marketing course online, marketing automation courses, Digital Ads Course , google ads course online, Meta Ads Course Online, Digital Ads Course Online , Marketing Automation Course Online",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical:
      "https://digitalacademy360.com/performance-marketing-automation-courses-online",
  },
  openGraph: {
    title: "MarTech, Automation & Performance Marketing Courses Online",
    description:
      "Enroll In Job-Oriented Diploma Certification In Digital Marketing Training With Project & Interview Assistance From Best Online Digital Marketing Institute",
    url: "https://digitalacademy360.com/performance-marketing-automation-courses-online",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Training Institute Online & Classroom",
    description:
      "Enroll In Job-Oriented Diploma Certification In Digital Marketing Training With Project & Interview Assistance From Best Online Digital Marketing Institute",
    images: ["https://digitalacademy360.com/og-image.jpg"],
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
        headingLineOne={performanceMarketingAndMartech.leadCapture.titleOne}
        headingLineTow={performanceMarketingAndMartech.leadCapture.titleTwo}
        descriptionLineOne={
          performanceMarketingAndMartech.leadCapture.subtitleOne
        }
        descriptionLineTow={
          performanceMarketingAndMartech.leadCapture.subtitleTwo
        }
        tags={performanceMarketingAndMartech.leadCapture.tags || []}
        courseId={performanceMarketingAndMartech.courseId}
      />
      <CohortDetails
        section="section1"
        cohorts={performanceMarketingAndMartech.Cohort}
        heading={performanceMarketingAndMartech.cohortSectionHeading}
      />
      <CourseHighlights
        section="section2"
        highlights={performanceMarketingAndMartech.highlights}
      />
      {/* <TrustedByLearners
        padding={{ desktop: "40px 0 140px 0", mobile: "0 0 60px 0" }}
      /> */}

      <CounterOnScroll />
      {/* <LifeAtDA360
        headerTitle={
          youtubeAndInstagramInfluencer.LifeAtDA360Header.headerTitle
        }
        description={
          youtubeAndInstagramInfluencer.LifeAtDA360Header.description
        }
      /> */}
      <TeamSection section="section4" />
      {/* <VideoSection /> */}
      <Highlights section="section5" />

      {/* <LearningRoadmap
        headerTitle={
          youtubeAndInstagramInfluencer.LearningRoadmapProps.headerTitle
        }
        description={
          youtubeAndInstagramInfluencer.LearningRoadmapProps.description
        }
      /> */}
      {/* <LiveProjectsSlider
        section={performanceMarketingAndMartech.liveProjects!.section}
        heading={performanceMarketingAndMartech.liveProjects!.heading}
        description={performanceMarketingAndMartech.liveProjects!.description}
        projects={performanceMarketingAndMartech.liveProjects!.projects}
      /> */}
      <CaseStudies data={performanceMarketingAndMartech.caseStudies} />
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
