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
import UnlockBonuses from "@components/unlockBonuses";
import Highlights from "./highlights";
import LearningRoadmap from "@components/learningRoadmap";
import RewardGrid from "@components/rewardGrid";
import BrandLogos from "@components/brandLogos";
import CaseStudies from "@components/caseStudies";
import Banner from "@components/banner";
import AlumniSlider from "@components/alumniSlider";
import PeopleSlider from "@components/peopleSlider";
import TrustedByLearners from "@components/trustedByLearners";
import LiveProjectsSlider from "@components/liveProjectsSlider";
// import ContactButtonsSticky from "@/components/widgets/contactButtonsSticky";
import BottomNav from "@components/bottomNav";
import digitalNarketingTrainingInstitute from "@/data/digitalNarketingTrainingInstitute";
import { Cohort } from "@/components/cohortDetails";

export const metadata = {
  title: "Best Digital Marketing Training Institute Online & Classroom",
  description:
    "Enroll In Job-Oriented Diploma Certification In Digital Marketing Training With Project & Interview Assistance From Best Online Digital Marketing Institute",
  keywords: [
    "Digital Marketing Institute, Institute of Digital Marketing, Digital Marketing Training, Digital Marketing Training Institute, Best Online Digital Marketing Training",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/",
  },
  openGraph: {
    title: "Best Digital Marketing Training Institute Online & Classroom",
    description:
      "Enroll In Job-Oriented Diploma Certification In Digital Marketing Training With Project & Interview Assistance From Best Online Digital Marketing Institute",
    url: "https://digitalacademy360.com/",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Training Institute Online & Classroom",
    description:
      "Enroll In Job-Oriented Diploma Certification In Digital Marketing Training With Project & Interview Assistance From Best Online Digital Marketing Institute",
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
  const cohortData: Cohort[] = [
    {
      date: "June 16th",
      mode: "Offline",
      weekday: "(Mon-Fri)",
      capacity: "30 Seats",
      campus: "Bengaluru",
    },
    {
      date: "June 16th",
      mode: "Online",
      weekday: "(Mon-Fri)",
      capacity: "30 Seats",
      campus: "Bengaluru",
    },
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
        cohorts={cohortData}
        heading={digitalNarketingTrainingInstitute.cohortSectionHeading}
      />
      <CourseHighlights
        section="section2"
        highlights={digitalNarketingTrainingInstitute.highlights}
      />
      <OurSuccessStories
        section="section3"
        headerTitle={digitalNarketingTrainingInstitute.StoryHeader.headerTitle}
        description={digitalNarketingTrainingInstitute.StoryHeader.description}
      />
      <CounterOnScroll />
      <LifeAtDA360
        headerTitle={
          digitalNarketingTrainingInstitute.LifeAtDA360Header.headerTitle
        }
        description={
          digitalNarketingTrainingInstitute.LifeAtDA360Header.description
        }
      />
      <TeamSection section="section4" />
      <VideoSection />
      <Highlights section="section5" />
      <TrustedByLearners
        padding={{ desktop: "140px 0 60px 0", mobile: "60px 0 0 0" }}
      />
      <LearningRoadmap
        headerTitle={
          digitalNarketingTrainingInstitute.LearningRoadmapProps.headerTitle
        }
        description={
          digitalNarketingTrainingInstitute.LearningRoadmapProps.description
        }
      />
      <LiveProjectsSlider section="section6" />
      <CaseStudies />
      <Banner />
      <PeopleSlider />
      <AlumniSlider />
      <BrandLogos />
      <RewardGrid section="section7" />
      <UnlockBonuses />
      <LatestBlogPosts />
      <MediaAwards />
      <LearnerEnquiry />
      <BottomNav sections={sections} showContactButtons={true} />
    </main>
  );
}
