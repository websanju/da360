import styles from "./style.module.scss";
import Counter, { CounterProps } from "@components/widgets/counter";

const counters: CounterProps[] = [
  {
    to: 50000,
    from: 40000,
    suffix: "+",
    label: "Careers transformed",
  },
  {
    to: 30000,
    from: 20000,
    suffix: "+",
    label: "Successfully Placed",
  },
  {
    to: 2000,
    from: 1500,
    suffix: "+",
    label: "Hiring Partners",
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
          <div className="row row-gap-3 d-flex justify-content-center">
            {counters.map((counter, index) => (
              <div key={index} className="col-6 col-md-3">
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
                  To be the world’s leading catalyst for digital transformation
                  by empowering individuals with future-ready skills in AI,
                  digital marketing, and innovation — shaping tomorrow’s
                  workforce today.
                </p>
              </div>
              <div className={styles.card}>
                <h2>
                  <span>Our</span> Mission
                </h2>
                <p>
                  Our mission is to deliver industry-driven, immersive learning
                  experiences. We aim to create a global community of skilled
                  professionals, entrepreneurs, and leaders through practical
                  training, real-world projects, and a 360° approach to career
                  success.
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
