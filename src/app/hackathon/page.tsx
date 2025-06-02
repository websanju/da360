import HackathonSection from "@components/hackathonSection";
import WhoJoin from "@components/whoJoin";
import Benefits from "@components/benefits";
import HackStorm from "@/components/hackStormEvent";
import Faq from "@components/faq";
export default function Hackathon() {
  return (
    <main>
      <HackathonSection />
      <WhoJoin />
      <Benefits />
      <HackStorm />
      <Faq />
    </main>
  );
}
