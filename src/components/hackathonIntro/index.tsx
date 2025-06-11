import SectionHeader from "@components/widgets/sectionHeader";
import styles from "./styles.module.scss";
import Image from "next/image";

const cards = [
  {
    title: "Why Participate",
    subtitle: "Win Cash. Get Branding Rights.",
    content:
      "As a Machine Learning Engineer, your mission is to build a data-driven model that estimates household carbon footprints with greater accuracy using synthetic lifestyle and consumption data. By analyzing diverse behavioral patterns—such as energy use, diet, transportation, and waste habits—your model should deliver personalized.",
    icon: "/images/warning.svg",
  },
  {
    title: "All About Community",
    subtitle: "Win Cash. Get Branding Rights.",
    content:
      "As a Machine Learning Engineer, your mission is to build a data-driven model that estimates household carbon footprints with greater accuracy using synthetic lifestyle and consumption data. By analyzing diverse behavioral patterns—such as energy use, diet, transportation, and waste habits—your model should deliver personalized.",
    icon: "/images/warning.svg",
  },
];

const HackathonIntro = () => {
  return (
    <section className={styles.hackathonSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              title="WHAT IS DIGIEDUHACK 2025"
              titleMarginBottom={"10px"}
              wrapperMarginBottom={{ desktop: "27px", mobile: "20px" }}
              description="Welcome to the largest Webflow hackathon 
on the planet"
              maxWidth="536px"
            ></SectionHeader>
          </div>
        </div>
        <p className={styles.description}>
          <a href="#">CloneComp</a> is a four day Webflow specific hackathon
          designed to test your skills and connect you with top makers in the no
          code community. Taking inspiration from popular online cooking shows,
          CloneComp blends time-capped web development with story-driven daily
          prompts that challenge participants to weave creative story lines into
          engaging digital experiences.
        </p>

        <div className={styles.cardGrid}>
          {cards.map((card, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.Image}>
                <Image src={card.icon} alt="Icon" width={100} height={100} />
              </div>
              <h4 className={styles.title}>
                <em>{card.title}</em>
              </h4>
              <p className={styles.subtitle}>{card.subtitle}</p>
              <p className={styles.content}>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonIntro;
