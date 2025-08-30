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
import youtubeAndInstagramInfluencer from "@/data/courses/youtubeAndInstagramInfluencer";

export const metadata = {
  title: "Youtube & Instagram Influencer Certification Course Online",
  description:
    "Enroll in Youtube & Instagram Influencer Certification Course. 80+ Hours Training, Case Study, AI Tool, Influencer Strategy & Certification. Apply Now!",
  keywords: [
    "instagram courses, youtube courses, instagram training, youtube training, youtube certification courses",
    "instagram classes",
    "youtube classes",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical:
      "https://digitalacademy360.com/youtube-instagram-influencer-courses",
  },
  openGraph: {
    title: "Youtube & Instagram Influencer Certification Course Online",
    description:
      "Enroll in Youtube & Instagram Influencer Certification Course. 80+ Hours Training, Case Study, AI Tool, Influencer Strategy & Certification. Apply Now!",
    url: "https://digitalacademy360.com/youtube-instagram-influencer-courses",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youtube & Instagram Influencer Certification Course Online",
    description:
      "Enroll in Youtube & Instagram Influencer Certification Course. 80+ Hours Training, Case Study, AI Tool, Influencer Strategy & Certification. Apply Now!",
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
        headingLineOne={youtubeAndInstagramInfluencer.leadCapture.titleOne}
        headingLineTow={youtubeAndInstagramInfluencer.leadCapture.titleTwo}
        descriptionLineOne={
          youtubeAndInstagramInfluencer.leadCapture.subtitleOne
        }
        descriptionLineTow={
          youtubeAndInstagramInfluencer.leadCapture.subtitleTwo
        }
        tags={youtubeAndInstagramInfluencer.leadCapture.tags || []}
      />
      <CohortDetails
        section="section1"
        cohorts={youtubeAndInstagramInfluencer.Cohort}
        heading={youtubeAndInstagramInfluencer.cohortSectionHeading}
      />
      <CourseHighlights
        section="section2"
        highlights={youtubeAndInstagramInfluencer.highlights}
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
        section={youtubeAndInstagramInfluencer.liveProjects!.section}
        heading={youtubeAndInstagramInfluencer.liveProjects!.heading}
        description={youtubeAndInstagramInfluencer.liveProjects!.description}
        projects={youtubeAndInstagramInfluencer.liveProjects!.projects}
      /> */}
      <CaseStudies data={youtubeAndInstagramInfluencer.caseStudies} />
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
