import styles from "./styles.module.scss";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.teamImage}>
        <Image
          src="/images/hackathon.png"
          alt="Team Collaborating"
          width={1440}
          height={541}
        />
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.details}>
          <h3 className={styles.header}>
            DIGIEDUHACK 2025: Where Ideas Turn into Reality!
          </h3>

          <div className={styles.participants}>
            <div className={styles.participantImage}>
              <Image
                src="/images/participating-3.png"
                alt="User1"
                width={32}
                height={32}
              />
            </div>
            <div className={styles.participantImage}>
              <Image
                src="/images/participating-2.png"
                alt="User2"
                width={32}
                height={32}
              />
            </div>
            <div className={styles.participantImage}>
              <Image
                src="/images/participating-1.png"
                alt="User3"
                width={32}
                height={32}
              />
            </div>
            <span className={styles.count}>+120 participating</span>
          </div>

          <div className={styles.infoTags}>
            <span className={styles.tag}>Bangalore</span>
            <span className={styles.tag}>02/05/25</span>
            <span className={styles.tag}>36 Hours</span>
          </div>
        </div>

        <div className={styles.buttonWrap}>
          <button className={`${styles.applyBtn} btn btnRed`}>Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
