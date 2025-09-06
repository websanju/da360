import styles from "./styles.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

const steps = [
  {
    icon: "images/sign-up.svg", // Replace with your actual icon path
    title: "Sign Up For The Program",
    description: "To Become A Digital Academy 360 Learning Ambassador",
  },
  {
    icon: "images/share-program.svg",
    title: "Share The Program",
    description: "With Anyone Looking To Upskill Their Knowledge & Career",
  },
  {
    icon: "images/earn-referral.svg",
    title: "Earn Referral Bonus",
    description: "Upon Successful Enrollment Enjoy Amazing Incentives",
  },
];

const HowToEarn = () => {
  return (
    <section className={styles.howToEarnSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "24px" }}
              title={<>How to earn?</>}
            />
          </div>
        </div>
        <div className={`${styles.row} row justify-content-center`}>
          {steps.map((step, index) => (
            <div key={index} className={`${styles.stepCol} col-lg-4`}>
              <div className={styles.stepCard}>
                <div className={styles.stepIcon}>
                  <Image src={step.icon} alt="icon" width={90} height={90} />
                </div>
                <h5>{step.title}</h5>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <span className={styles.arrow}>
                  <Image
                    src="/images/icons/earn-arrow.svg"
                    width={20}
                    height={20}
                    alt="earn-arrow"
                  />
                </span>
              )}
            </div>
          ))}
        </div>
        <div className={`${styles.tncLinkBox} text-end`}>
          Referral T&C{" "}
          <a href="/terms-conditions" className={styles.tncLink}>
            Click here
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToEarn;
