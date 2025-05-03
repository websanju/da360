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

export default function courseDetail() {
  return (
    <main>
      <LeadCaptureSection />
      <CohortDetails />
      <CourseHighlights />
      <OurSuccessStories />
      <CounterOnScroll />
      <LifeAtDA360 />
      <TeamSection />
      <VideoSection />
      <Highlights />
      <LearningRoadmap />
      <LiveProjectsSlider />
      <CaseStudies />
      <Banner />
      <PeopleSlider />
      <AlumniSlider />
      <BrandLogos />
      <RewardGrid />
      <UnlockBonuses />
      <LatestBlogPosts />
      <MediaAwards />
      <LearnerEnquiry />
    </main>
  );
}
