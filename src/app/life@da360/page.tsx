import CourseJourney from "@components/courseJourney";
import CampusTour from "@components/campusTour";
import LiveProjectsSlider from "@components/liveProjectsSlider";
import GuestFaculty from "@components/guestFaculty";
import TrendReportsSlider from "@components/trendReportsSlider";
import SportsEvent from "@components/sportsEvent";
import LifeAtDA360Gallery from "@components/lifeAtDA360Gallery";
import GraduationGallery from "@components/graduationGallery";
import CallToActionBanner from "@components/callToActionBanner";

export default function Lifeda360() {
  return (
    <main>
      <CourseJourney />
      <CampusTour videoUrl="/images/videos/classroom-video-2.mp4" />
      <LiveProjectsSlider />
      <GuestFaculty />
      <TrendReportsSlider />
      <SportsEvent />
      <LifeAtDA360Gallery />
      <GraduationGallery />
      <CallToActionBanner />
    </main>
  );
}
