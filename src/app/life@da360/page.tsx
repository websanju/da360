import HeroVideoSection from "@components/heroVideoSection";
import CourseJourney from "@components/courseJourney";
import CampusTour from "@components/campusTour";
import LiveProjectsSlider from "@components/liveProjectsSlider";
import GuestFaculty from "@components/guestFaculty";
import TrendReportsSlider from "@components/trendReportsSlider";
import SportsEvent from "@components/sportsEvent";
import LifeAtDA360Gallery from "@components/lifeAtDA360Gallery";
import GraduationGallery from "@components/graduationGallery";
import CallToActionBanner from "@components/callToActionBanner";
import ToobGrid from "@components/toobGrid";
import FreelancerSteps from "@components/freelancerSteps";
import styles from "./styles.module.scss";

export default function Lifeda360() {
  return (
    <main>
      <HeroVideoSection videoUrl="/images/videos/classroom-video-2.mp4" />
      <div className={styles.textContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-8">
              <h2>
                Get a glimpse into the vibrant student life, collaborative
                learning, and inspiring culture that make Digital Academy 360
                more than just a classroom.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <CourseJourney />
      <CampusTour videoUrl="/images/videos/classroom-video-2.mp4" />
      <LiveProjectsSlider />
      <GuestFaculty />
      <TrendReportsSlider />
      <SportsEvent />
      <LifeAtDA360Gallery />
      <ToobGrid />
      <FreelancerSteps videoUrl="/images/videos/classroom-video-2.mp4" />
      <GraduationGallery />
      <CallToActionBanner />
    </main>
  );
}
