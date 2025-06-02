import Image from "next/image";
import styles from "./styles.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";
import Counter from "@components/widgets/counter";

const benefits = [
  {
    icon: "/images/benefits/practical.svg",
    title: "Practical Campaign Execution",
  },
  {
    icon: "/images/benefits/certification.svg",
    title: "Certification & Recognition",
  },
  {
    icon: "/images/benefits/real-time.svg",
    title: "Direct Placement Shortlisting",
  },
  {
    icon: "/images/benefits/real-time.svg",
    title: "Real-time Team Collaboration",
  },
  {
    icon: "/images/benefits/real-time.svg",
    title: "Mentorship from Experts",
  },
];

export default function WhoJoin() {
  return (
    <section className={` ${styles.benefitsSection}`}>
      <div className="container">
        <div className={` ${styles.benefitsBox}`}>
          <div className="row">
            <div className="col-lg-12">
              <SectionHeader
                wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
                title={<>Benefits</>}
              />
            </div>
          </div>
          <div className={` ${styles.benefitsItems}`}>
            {benefits.map((item, index) => (
              <div className={styles.benefitsItem} key={index}>
                <div className={styles.iconWrapper}>
                  <Image src={item.icon} alt="icon" width={58} height={58} />
                </div>
                <div className={styles.text}>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.benefitsCounters}>
              <div className={styles.countersItem}>
                <Counter to={1000} label="Participants" suffix="+" />
              </div>
              <div className={styles.countersItem}>
                <Counter
                  to={95}
                  label="Job Interview Shortlisting"
                  suffix="%"
                />
              </div>
              <div className={styles.countersItem}>
                <Counter to={200} label="Brands Engaged" suffix="+" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
