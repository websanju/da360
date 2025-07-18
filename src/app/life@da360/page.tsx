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
        videoUrl="/images/videos/classroom-video-3.mp4"
      />
      <ToobGrid section="section9" />
      {/* <LiveProjectsSlider section="section4" /> */}
      {/* <GuestFaculty section="section5" /> */}
      <TrendReportsSlider section="section6" />
      <SportsEvent section="section7" />
      <LifeAtDA360Gallery
        title="Digital Marketing Meetups"
        description="At DA360, we’re building India’s largest network of digital disruptors. Connect, collaborate, and grow alongside top industry professionals, mentors, and future leaders — all in one powerful community designed to supercharge your career."
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
