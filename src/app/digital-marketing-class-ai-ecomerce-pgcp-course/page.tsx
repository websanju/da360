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
import TrustedByLearners from "@components/trustedByLearners";
import LiveProjectsSlider from "@components/liveProjectsSlider";
// import ContactButtonsSticky from "@/components/widgets/contactButtonsSticky";
import BottomNav from "@components/bottomNav";
import digitalNarketingTrainingInstitute from "@/data/courses/digitalNarketingTrainingInstitute";

export const metadata = {
  title: "PGCP Digital Marketing Class With Ecommerce, AI & Internship",
  description:
    "Transform Your Career With PG Certification In AI-Powered Digital Marketing & E-Commerce Class. 100% Placement Guaranteed*. Approved by MESC & Skill India",
  keywords: [
    "digital marketing class, digital marketing with ai course, ai digital marketing course, digital marketing and ecommerce course, ecommerce marketing course, digital marketing Ai course, digital marketing ecommerce course, ecommerce digital marketing course, pg digital marketing",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/",
  },
  openGraph: {
    title: "PGCP Digital Marketing Class With Ecommerce, AI & Internship",
    description:
      "Transform Your Career With PG Certification In AI-Powered Digital Marketing & E-Commerce Class. 100% Placement Guaranteed*. Approved by MESC & Skill India",
    url: "https://digitalacademy360.com/",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PGCP Digital Marketing Class With Ecommerce, AI & Internship",
    description:
      "Transform Your Career With PG Certification In AI-Powered Digital Marketing & E-Commerce Class. 100% Placement Guaranteed*. Approved by MESC & Skill India",
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
        headingLineOne={digitalNarketingTrainingInstitute.leadCapture.titleOne}
        headingLineTow={digitalNarketingTrainingInstitute.leadCapture.titleTwo}
        descriptionLineOne={
          digitalNarketingTrainingInstitute.leadCapture.subtitleOne
        }
        descriptionLineTow={
          digitalNarketingTrainingInstitute.leadCapture.subtitleTwo
        }
        tags={digitalNarketingTrainingInstitute.leadCapture.tags || []}
      />
      <CohortDetails
        section="section1"
        cohorts={digitalNarketingTrainingInstitute.Cohort}
        heading={digitalNarketingTrainingInstitute.cohortSectionHeading}
      />
      <CourseHighlights
        section="section2"
        highlights={digitalNarketingTrainingInstitute.highlights}
      />
      <TrustedByLearners
        padding={{ desktop: "40px 0 140px 0", mobile: "0 0 60px 0" }}
      />
      <OurSuccessStories
        section="section3"
        headerTitle={digitalNarketingTrainingInstitute.StoryHeader.headerTitle}
        description={digitalNarketingTrainingInstitute.StoryHeader.description}
      />
      <CounterOnScroll />
      {/* <LifeAtDA360
        headerTitle={
          digitalNarketingTrainingInstitute.LifeAtDA360Header.headerTitle
        }
        description={
          digitalNarketingTrainingInstitute.LifeAtDA360Header.description
        }
      /> */}
      <TeamSection section="section4" />
      {/* <VideoSection /> */}
      <Highlights section="section5" />

      <LearningRoadmap
        headerTitle={
          digitalNarketingTrainingInstitute.LearningRoadmapProps.headerTitle
        }
        description={
          digitalNarketingTrainingInstitute.LearningRoadmapProps.description
        }
      />
      <LiveProjectsSlider
        section={digitalNarketingTrainingInstitute.liveProjects!.section}
        heading={digitalNarketingTrainingInstitute.liveProjects!.heading}
        description={
          digitalNarketingTrainingInstitute.liveProjects!.description
        }
        projects={digitalNarketingTrainingInstitute.liveProjects!.projects}
      />
      <CaseStudies data={digitalNarketingTrainingInstitute.caseStudies} />
      <Banner />
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
