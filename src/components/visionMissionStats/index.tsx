import styles from "./style.module.scss";
import Counter, { CounterProps } from "@components/widgets/counter";

const counters: CounterProps[] = [
  {
    to: 1000,
    suffix: "+",
    label: "Participants",
  },
  {
    to: 93,
    suffix: "%",
    label: "Job Interview Shortlisting",
  },
  {
    to: 200,
    suffix: "+",
    label: "Brands Engaged",
  },
];
// import Image from "next/image";
const VisionMissionStats = () => {
  return (
    <section className={styles.visionMissionSection}>
      <div
        className={styles.sectionBg}
        style={{
          backgroundImage: `url("/images/line.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "bottom",
        }}
      >
        {/* <Image
          src="/images/line.svg"
          alt="Magnify user icon"
          width={1440}
          height={700}
        /> */}
      </div>
      <div className={styles.counterBox}>
        <div className="container">
          <div className="row">
            {counters.map((counter, index) => (
              <div key={index} className="col-6 col-md-4">
                <Counter {...counter} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.cardsContainer}>
              <div className={styles.card}>
                <h2>
                  <span>Our</span> Vision
                </h2>
                <p>
                  Inspire more people to pursue their dreams, by combining fun
                  and rewards while enriching them with quality training and
                  world-class certifications*
                </p>
              </div>
              <div className={styles.card}>
                <h2>
                  <span>Our</span> Mission
                </h2>
                <p>
                  Nurture the learner’s upskilling journey with the most
                  sought-after digital learning platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionStats;
