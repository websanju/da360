// import styles from "./style.module.scss";
import JoinTeam from "@components/joinTeam";
import CurrentOpenings from "@components/currentOpenings";
import WhyWorkWithUs from "@components/whyWorkWithUs";
import TeamSpeaksSlider from "@components/teamSpeaksSlider";
import LifeAtDA360Gallery from "@components/lifeAtDA360Gallery";
export default function Career() {
  return (
    <main>
      <JoinTeam />
      <CurrentOpenings />
      <WhyWorkWithUs />
      <TeamSpeaksSlider />
      <LifeAtDA360Gallery />
    </main>
  );
}
