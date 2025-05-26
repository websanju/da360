import CourseJourney from "@components/courseJourney";
import CampusTour from "@components/campusTour";
import LiveProjectsSlider from "@components/liveProjectsSlider";
import GuestFaculty from "@components/guestFaculty";
import TrendReportsSlider from "@components/trendReportsSlider";

export default function Lifeda360() {
  return (
    <main>
      <CourseJourney />
      <CampusTour videoUrl="/images/videos/classroom-video-2.mp4" />
      <LiveProjectsSlider />
      <GuestFaculty />
      <TrendReportsSlider />
    </main>
  );
}
