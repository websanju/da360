import styles from "./styles.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

const programs = [
  {
    title: "Leadership Course referral Program",
    duration: "",
    mode: "",
    bonus: "15,000",
    imageDesktop: "/images/skill-1.png",
    imageMobile: "/images/skill-m-1.png",
  },
  {
    title: "PGCP In Digital Marketing & ECommerce",
    duration: "",
    mode: "",
    bonus: "7,500",
    imageDesktop: "/images/skill-2.png",
    imageMobile: "/images/skill-m-2.png",
  },
];

const LearningPrograms = () => {
  return (
    <section className={styles.programsSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              titleMarginBottom={{ desktop: "16px", mobile: "10px" }}
              title={
                <>
                  Why Should You Become A <br /> Learning Ambassador?
                </>
              }
              description="Check Out The Program Wise Benefits You Will Reap"
            />
          </div>
        </div>
        <div className={styles.program}>
          {programs.map((program, index) => (
            <div key={index} className={`${styles.row} row`}>
              <div className={`col-lg-12`}>
                <div className={`${styles.programCard} `}>
                  <div className={styles.programCardDetails}>
                    <h5>{program.title}</h5>
                    {/* <div className={styles.programInfo}>
                      <span className={styles.badge}>{program.duration}</span>
                      <span className={styles.badge}>{program.mode}</span>
                    </div> */}
                    <p className={styles.programBonus}>
                      Earn upto INR <span>{program.bonus}</span>
                    </p>
                  </div>
                  <div className={styles.imageCol}>
                    <div className={styles.imageWrapper}>
                      <picture>
                        <source
                          media="(max-width: 767px)"
                          srcSet={program.imageMobile}
                        />
                        <source
                          media="(min-width: 768px)"
                          srcSet={program.imageDesktop}
                        />
                        <Image
                          src={program.imageDesktop} // Fallback for no <picture> support
                          alt={program.title}
                          width={300}
                          height={180}
                          className="img-fluid"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPrograms;
