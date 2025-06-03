import HackathonSection from "@components/hackathonSection";
import WhoJoin from "@components/whoJoin";
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
      <HackathonSection />
      <WhoJoin />
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
