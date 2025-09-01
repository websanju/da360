import LeadCaptureSection from "@components/leadCaptureSection";
import CohortDetails from "@components/cohortDetails";
import CourseHighlights from "@components/courseHighlights";
import TeamSection from "@components/teamSection";
import LatestBlogPosts from "@components/latestBlogPosts";
import Highlights from "./highlights";
import CaseStudies from "@components/caseStudies";
import CampusTour from "@components/campusTour";
import BottomNav from "@components/bottomNav";
import BBAInDigitalMarketingAndAi from "@/data/courses/bba-in-digital-marketing-and-ai";
import LiveProjectsSlider from "@/components/liveProjectsSlider";
import PaddingWrapper from "@/components/widgets/PaddingWrapper";
import BrandLogos from "@/components/brandLogos";
import FeeStructure from "@/components/feeStructure";
import AdmissionProcess from "@/components/admissionProcess";
import TOOBGrid from "@/components/toobGrid";
import UniversityGallery from "@/components/universityGallery";
import ReasonsToJoin from "@/components/reasonsToJoin";

export const metadata = {
  title: "BBA in Digital Marketing With University Degree & Placement",
  description:
    "3 Years Bachelors in Digital Marketing & AI. NAAC Grade A+ & AICTE Approved. Get BBA University Degree With 100% Guaranteed Placement*",
  keywords: [
    "BBA In Digital Marketing, Bachelors Degree In Digital Marketing, BBA In Digital Marketing and AI, BBA In Digital Marketing With Placement Guarantee",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical:
      "https://digitalacademy360.com/bba-digital-marketing-degree-course",
  },
  openGraph: {
    title: "BBA in Digital Marketing With University Degree & Placement",
    description:
      "3 Years Bachelors in Digital Marketing & AI. NAAC Grade A+ & AICTE Approved. Get BBA University Degree With 100% Guaranteed Placement*",
    url: "https://digitalacademy360.com/bba-digital-marketing-degree-course",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BBA in Digital Marketing With University Degree & Placement",
    description:
      "3 Years Bachelors in Digital Marketing & AI. NAAC Grade A+ & AICTE Approved. Get BBA University Degree With 100% Guaranteed Placement*",
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
        headingLineOne={BBAInDigitalMarketingAndAi.leadCapture.titleOne}
        headingLineTow={BBAInDigitalMarketingAndAi.leadCapture.titleTwo}
        descriptionLineOne={BBAInDigitalMarketingAndAi.leadCapture.subtitleOne}
        descriptionLineTow={BBAInDigitalMarketingAndAi.leadCapture.subtitleTwo}
        tags={BBAInDigitalMarketingAndAi.leadCapture.tags || []}
        showCollageItemsBox={true}
      />
      <CohortDetails
        section="section1"
        cohorts={BBAInDigitalMarketingAndAi.Cohort}
        heading={BBAInDigitalMarketingAndAi.cohortSectionHeading}
      />
      <CourseHighlights
        section="section2"
        highlights={BBAInDigitalMarketingAndAi.highlights}
      />
      <ReasonsToJoin
        section="section5"
        sectionTitle="20 Reasons to Join the S-VYASA BBA in Digital Marketing"
      />
      <Highlights section="section5" />
      <CampusTour
        section="section3"
        videoUrl="/images/videos/classroom-video-3.mp4"
      />
      <UniversityGallery />
      <TeamSection section="section4" />

      <LiveProjectsSlider
        section={BBAInDigitalMarketingAndAi.liveProjects!.section}
        heading={BBAInDigitalMarketingAndAi.liveProjects!.heading}
        description={BBAInDigitalMarketingAndAi.liveProjects!.description}
        projects={BBAInDigitalMarketingAndAi.liveProjects!.projects}
      />
      <CaseStudies data={BBAInDigitalMarketingAndAi.caseStudies} />
      <TOOBGrid />
      <AdmissionProcess program="BBA" />
      <FeeStructure
        firstHeading="Program Fee structure"
        secondHeading="Explore flexible financing options through India's leading education financing platforms and banking networks, ensuring seamless assistance throughout your educational journey."
      />
      <BrandLogos staticGrid />
      <PaddingWrapper desktopPaddingBottom="130px" mobilePaddingBottom="60px">
        <LatestBlogPosts />
      </PaddingWrapper>
      <BottomNav sections={sections} showContactButtons={true} />
    </main>
  );
}
