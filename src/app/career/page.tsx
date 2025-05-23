// import styles from "./style.module.scss";
import JoinTeam from "@components/joinTeam";
import CurrentOpenings from "@components/currentOpenings";
import WhyWorkWithUs from "@components/whyWorkWithUs";
import TeamSpeaksSlider from "@components/teamSpeaksSlider";
export default function Career() {
  return (
    <main>
      <JoinTeam />
      <CurrentOpenings />
      <WhyWorkWithUs />
      <TeamSpeaksSlider />
    </main>
  );
}
