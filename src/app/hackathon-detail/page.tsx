// import WhoJoin from "@components/whoJoin";
import Faq from "@components/faq";
import EventSponsors from "@components/eventSponsors";
import LocationMap from "@components/locationMap";
// import PaddingWrapper from "@components/widgets/PaddingWrapper";
import styles from "./style.module.scss";
import TeamCard from "@/components/widgets/teamCard";
import HackathonHero from "@/components/hackathonHero";
import HackathonIntro from "@/components/hackathonIntro";
import Prizes from "@/components/prizesSection";
import SectionHeader from "@/components/widgets/sectionHeader";
import EventSchedule from "@/components/eventSchedule";
import MarqueeBanner from "@/components/widgets/marqueeRegisterBanner";

export default function HackathonDetail() {
  return (
    <main>
      <HackathonHero />
      <HackathonIntro />
      <LocationMap />
      <EventSchedule />
      <MarqueeBanner />
      <Prizes />
      <div className={styles.accordionSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Faq
                title="Rules"
                description="Everything you need to know about the
Hackathon event."
              />
            </div>
            <div className="col-lg-6">
              <Faq />
            </div>
          </div>
        </div>
      </div>
      <section className={styles.meettheorganizers}>
        <div className="container">
          <div className={`row ${styles.row}`}>
            <div className="col-lg-12">
              <SectionHeader
                wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
                title={"Meet the organizers"}
              ></SectionHeader>
            </div>
          </div>
          <div className={`row ${styles.row}`}>
            <div className="col-lg-4">
              <TeamCard
                member={{
                  img: "/images/dipaksoni-1.png",
                  name: "Deepak Soni",
                  role: "Digital Marketing Trainer",
                  textColor: "#FFF12D",
                  iconPosition: "right",
                }}
              />
            </div>
            <div className="col-lg-4">
              <TeamCard
                member={{
                  img: "/images/dipaksoni-2.png",
                  name: "Deepak Soni",
                  role: "Digital Marketing Trainer",
                  textColor: "#9E89FF",

                  iconPosition: "right",
                }}
              />
            </div>
            <div className="col-lg-4">
              <TeamCard
                member={{
                  img: "/images/dipaksoni-3.png",
                  name: "Deepak Soni",
                  role: "Digital Marketing Trainer",
                  textColor: "#51FF74",
                  iconPosition: "right",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <EventSponsors />
    </main>
  );
}
