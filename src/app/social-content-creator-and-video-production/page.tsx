import LeadCaptureSection from "@components/leadCaptureSection";
import CohortDetails from "@components/cohortDetails";
import CourseHighlights from "@components/courseHighlights";
import OurSuccessStories from "@components/ourSuccessStories";
import CounterOnScroll from "@components/counterOnScroll";
import LifeAtDA360 from "@components/lifeAtDA360";
import TeamSection from "@components/teamSection";
import VideoSection from "@components/videoSection";
import LearnerEnquiry from "@components/learnerEnquiry";
import MediaAwards from "@components/mediaAwards";
import LatestBlogPosts from "@components/latestBlogPosts";
// import UnlockBonuses from "@components/unlockBonuses";
import Highlights from "./highlights";
import LearningRoadmap from "@components/learningRoadmap";
import RewardGrid from "@components/rewardGrid";
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
  title: "Digital Marketing & AI Leadership Course | MBA Level Program",
  description:
    "Leadership in Digital Marketing, AI & Entrepreneurship To Master Digital Marketing Projects & Strategies In 12 Mo With Interview & Paid Internship",
  keywords: [
    "Master Degree In Digital Marketing, Masters In Digital Marketing, Digital Marketing Masters Programs, Digital Marketing Master Course, Digital Marketing With AI Course",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/",
  },
  openGraph: {
    title: "Digital Marketing & AI Leadership Course | MBA Level Program",
    description:
      "Leadership in Digital Marketing, AI & Entrepreneurship To Master Digital Marketing Projects & Strategies In 12 Mo With Interview & Paid Internship",
    url: "https://digitalacademy360.com/",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & AI Leadership Course | MBA Level Program",
    description:
      "Leadership in Digital Marketing, AI & Entrepreneurship To Master Digital Marketing Projects & Strategies In 12 Mo With Interview & Paid Internship",
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
      <LifeAtDA360
        headerTitle={
          socialContentCreatorAndVideoProduction.LifeAtDA360Header.headerTitle
        }
        description={
          socialContentCreatorAndVideoProduction.LifeAtDA360Header.description
        }
      />
      <TeamSection section="section4" />
      <VideoSection />
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
      <Banner />
      <PeopleSlider />
      <AlumniSlider />
      <BrandLogos />
      <RewardGrid section="section7" />
      {/* <UnlockBonuses /> */}
      <LatestBlogPosts />
      <MediaAwards />
      <LearnerEnquiry />
      <BottomNav sections={sections} showContactButtons={true} />
    </main>
  );
}
