import HackathonSection from "@components/hackathonSection";
import HackathonSlider from "@/components/hackathonEventSlider";
import VideoCard from "@/components/widgets/VideoCard";
// import WhoJoin from "@components/whoJoin";
import Benefits from "@components/benefits";
import HackStorm from "@/components/hackStormEvent";
import EventsSlider from "@/components/eventsSlider";
import PeopleSlider from "@/components/peopleSlider";
import CommunityMeetupSlider from "@/components/communityMeetupSlider";
import Faq from "@components/faq";
import PaddingWrapper from "@components/widgets/PaddingWrapper";
export default function Hackathon() {
  return (
    <main>
      <HackathonSlider />
      <HackathonSection />
      {/* <WhoJoin /> */}
      <VideoCard
        videoUrl={"/images/videos/classroom-video-3.mp4"}
        thumbnail={"/images/videos/video.png"}
      />
      <Benefits />
      <HackStorm />
      <EventsSlider />
      <PaddingWrapper desktopPaddingBottom="140px" mobilePaddingBottom="60px">
        <PeopleSlider title="What Students <br />Say" />
      </PaddingWrapper>
      <CommunityMeetupSlider />
      <PaddingWrapper desktopPaddingTop="140px" mobilePaddingTop="60px">
        <Faq />
      </PaddingWrapper>
    </main>
  );
}
