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
import LiveProjectsSlider from "@components/liveProjectsSlider";

import digitalMarketingLeadership from "@/data/digitalMarketingLeadership";
import { Cohort } from "@/components/cohortDetails";
import BottomNav from "@/components/bottomNav";
import TrustedByLearners from "@/components/trustedByLearners";

export const metadata = {
  title: "#1 Top Ranked Digital Marketing Training Institute in Asia",
  description:
    "Join the #1 Top-Ranked AI Digital Marketing Training Institute in India, Asia. Approved by NSDC & Skill India. Learn AI Digital Marketing & Get Certified Today",
  keywords: [
    "Digital Academy 360",
    "Digital Marketing Courses in India",
    "Digital Marketing Training in India",
    "Digital Marketing Institute in India",
    "Learn Digital Marketing",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/",
  },
  openGraph: {
    title: "#1 Top Ranked Digital Marketig Training Instiute in Asia",
    description:
      "Join the #1 Top-Ranked AI Digital Marketing Training Institute in India, Asia. Approved by NSDC & Skill India. Learn AI Digital Marketing & Get Certified Today",
    url: "https://digitalacademy360.com/",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Top Ranked Digital Marketig Training Instiute in Asia",
    description:
      "Join the #1 Top-Ranked AI Digital Marketing Training Institute in India, Asia. Approved by NSDC & Skill India. Learn AI Digital Marketing & Get Certified Today",
  },
};

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
      />
      <CohortDetails
        section="section1"
        cohorts={cohortData}
        heading={digitalMarketingLeadership.cohortSectionHeading}
      />
      <CourseHighlights
        section="section2"
        highlights={digitalMarketingLeadership.highlights}
      />
      <OurSuccessStories
        section="section3"
        headerTitle={digitalMarketingLeadership.StoryHeader.headerTitle}
        description={digitalMarketingLeadership.StoryHeader.description}
      />
      <CounterOnScroll />
      <LifeAtDA360
        headerTitle={digitalMarketingLeadership.LifeAtDA360Header.headerTitle}
        description={digitalMarketingLeadership.LifeAtDA360Header.description}
      />
      <TeamSection section="section4" />
      <VideoSection />
      <Highlights section="section5" />
      <TrustedByLearners
        padding={{ desktop: "140px 0 60px 0", mobile: "60px 0 0 0" }}
      />
      <LearningRoadmap
        headerTitle={
          digitalMarketingLeadership.LearningRoadmapProps.headerTitle
        }
        description={
          digitalMarketingLeadership.LearningRoadmapProps.description
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
