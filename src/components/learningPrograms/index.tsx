import styles from "./styles.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

const programs = [
  {
    title: "Leadership in Digital Marketing, AI & Entrepreneurship",
    duration: "6 Months",
    mode: "Classroom / Online",
    bonus: "₹3000",
    image: "/images/skill-1.png", // Replace with your actual images
  },
  {
    title: "PGCP In Digital Marketing & ECommerce",
    duration: "6 Months",
    mode: "Classroom / Online",
    bonus: "₹3000",
    image: "/images/skill-2.png",
  },
  {
    title: "Skill Diploma in Digital Marketing & Analytics",
    duration: "6 Months",
    mode: "Classroom / Online",
    bonus: "₹3000",
    image: "/images/skill-3.png",
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
                    <div className={styles.programInfo}>
                      <span className={styles.badge}>{program.duration}</span>
                      <span className={styles.badge}>{program.mode}</span>
                    </div>
                    <p className={styles.programBonus}>
                      Earn Bonus Upto <span>{program.bonus}</span>
                    </p>
                  </div>
                  <div className={styles.imageCol}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={program.image}
                        alt={program.title}
                        width={300}
                        height={180}
                        className="img-fluid"
                      />
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
