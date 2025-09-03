import HeroVideoSection from "@components/heroVideoSection";
import TextContent from "@components/textContent";
import CourseJourney from "@components/courseJourney";
import CampusTour from "@components/campusTour";
// import LiveProjectsSlider from "@components/liveProjectsSlider";
// import GuestFaculty from "@components/guestFaculty";
import TrendReportsSlider from "@components/trendReportsSlider";
import SportsEvent from "@components/sportsEvent";
import LifeAtDA360Gallery from "@components/lifeAtDA360Gallery";
import GraduationGallery from "@components/graduationGallery";
import CallToActionBanner from "@components/callToActionBanner";
import ToobGrid from "@components/toobGrid";
// import FreelancerSteps from "@components/freelancerSteps";
import BottomNav from "@components/bottomNav";

export const metadata = {
  title: "Classroom Experience, Life & Learning at Digital Academy 360",
  description:
    "Life@DA360 & Culture Is More Than A Course - Real-World Project, Mentor-Led Classes, Internship, Campus Events, Peer Collaboration, Mentor Support & More",
  keywords: [
    "Life at Digital Academy 360",
    "DA360 classroom experience",
    "Learning at DA360",
    "Digital Academy 360 culture",
    "DA360 learning journey",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/life-campus-digital-academy360",
  },
  openGraph: {
    title: "Classroom Experience, Life & Learning at Digital Academy 360",
    description:
      "Life@DA360 & Culture Is More Than A Course - Real-World Project, Mentor-Led Classes, Internship, Campus Events, Peer Collaboration, Mentor Support & More",
    url: "https://digitalacademy360.com/life-campus-digital-academy360",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Classroom Experience, Life & Learning at Digital Academy 360",
    description:
      "Life@DA360 & Culture Is More Than A Course - Real-World Project, Mentor-Led Classes, Internship, Campus Events, Peer Collaboration, Mentor Support & More",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
};

export default function Lifeda360() {
  const sections = [
    { id: "section1", label: "Overview" },
    { id: "section2", label: "Journey" },
    { id: "section3", label: "Campus Tour" },
    // { id: "section4", label: "Projects" },
    // { id: "section5", label: "Faculty" },
    { id: "section6", label: "Case Studies" },
    { id: "section7", label: "Sports" },
    { id: "section8", label: "Meetups" },
    { id: "section9", label: "TOOB" },
    { id: "section10", label: "Freelancer" },
    { id: "section11", label: "Graduation Day" },
  ];

  return (
    <main>
      <HeroVideoSection videoUrl="/images/videos/classroom-video-3.mp4" />
      <TextContent section="section1" />
      <CourseJourney section="section2" />
      <CampusTour
        section="section3"
        videoUrl="/images/videos/freecompress-campus-final.mp4"
      />
      <ToobGrid section="section9" />
      {/* <LiveProjectsSlider section="section4" /> */}
      {/* <GuestFaculty section="section5" /> */}
      <TrendReportsSlider section="section6" />
      <SportsEvent section="section7" />
      <LifeAtDA360Gallery
        title="Life@D360"
        description="Student life at Digital Academy 360 is far from ordinary – it’s extraordinary!"
        bgColor="rgba(245, 245, 245, 1);"
        section="section8"
      />

      {/* <FreelancerSteps
        section="section10"
        videoUrl="/images/videos/classroom-video-2.mp4"
      /> */}
      <GraduationGallery section="section11" />
      <CallToActionBanner />
      <BottomNav sections={sections} />
    </main>
  );
}
