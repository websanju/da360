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

import socialContentCreatorAndVideoProduction from "@/data/courses/socialContentCreatorAndVideoProduction";
import BottomNav from "@/components/bottomNav";
import TrustedByLearners from "@/components/trustedByLearners";

export const metadata = {
  title: "AI-Driven Leadership In Social Media Content Creation Course",
  description:
    "100% Placement Guaranteed* Course In Social Content Creation, Video Production, Editing, AI, Brand Partnership. Approved by MESC & Skill India. Upto 30K Scholarship",
  keywords: [
    "social media courses, social media classes, content creator course, content creation course for social media, social media content creation course, social media video editing course, social media editing course, social media content creator course, video editing for social media course",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical:
      "https://digitalacademy360.com/social-media-content-video-creator-course",
  },
  openGraph: {
    title: "AI-Driven Leadership In Social Media Content Creation Course",
    description:
      "100% Placement Guaranteed* Course In Social Content Creation, Video Production, Editing, AI, Brand Partnership. Approved by MESC & Skill India. Upto 30K Scholarship",
    url: "https://digitalacademy360.com/social-media-content-video-creator-course",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Driven Leadership In Social Media Content Creation Course",
    description:
      "100% Placement Guaranteed* Course In Social Content Creation, Video Production, Editing, AI, Brand Partnership. Approved by MESC & Skill India. Upto 30K Scholarship",
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
        headingLineOne={
          socialContentCreatorAndVideoProduction.leadCapture.titleOne
        }
        headingLineTow={
          socialContentCreatorAndVideoProduction.leadCapture.titleTwo
        }
        descriptionLineOne={
          socialContentCreatorAndVideoProduction.leadCapture.subtitleOne
        }
        descriptionLineTow={
          socialContentCreatorAndVideoProduction.leadCapture.subtitleTwo
        }
        tags={socialContentCreatorAndVideoProduction.leadCapture.tags || []}
        applyLabel="Launching soon"
        courseId={socialContentCreatorAndVideoProduction.courseId}
      />
      <CohortDetails
        section="section1"
        cohorts={socialContentCreatorAndVideoProduction.Cohort}
        heading={socialContentCreatorAndVideoProduction.cohortSectionHeading}
      />
      <CourseHighlights
        section="section2"
        highlights={socialContentCreatorAndVideoProduction.highlights}
      />
      <TrustedByLearners
        padding={{ desktop: "40px 0 140px 0", mobile: "0 0 60px 0" }}
      />
      <OurSuccessStories
        section="section3"
        headerTitle={
          socialContentCreatorAndVideoProduction.StoryHeader.headerTitle
        }
        description={
          socialContentCreatorAndVideoProduction.StoryHeader.description
        }
      />
      <CounterOnScroll />
      {/* <LifeAtDA360
        headerTitle={
          socialContentCreatorAndVideoProduction.LifeAtDA360Header.headerTitle
        }
        description={
          socialContentCreatorAndVideoProduction.LifeAtDA360Header.description
        }
      /> */}
      <TeamSection section="section4" />
      {/* <VideoSection /> */}
      <Highlights section="section5" />

      <LearningRoadmap
        headerTitle={
          socialContentCreatorAndVideoProduction.LearningRoadmapProps
            .headerTitle
        }
        description={
          socialContentCreatorAndVideoProduction.LearningRoadmapProps
            .description
        }
      />
      <LiveProjectsSlider
        section={socialContentCreatorAndVideoProduction.liveProjects!.section}
        heading={socialContentCreatorAndVideoProduction.liveProjects!.heading}
        description={
          socialContentCreatorAndVideoProduction.liveProjects!.description
        }
        projects={socialContentCreatorAndVideoProduction.liveProjects!.projects}
      />
      <CaseStudies data={socialContentCreatorAndVideoProduction.caseStudies} />
      <Banner
        desktopSrc="/images/scholarship/leadership-min.jpg"
        mobileSrc="/images/scholarship/leadership-min.jpg"
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
