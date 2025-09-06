import styles from "./styles.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

const programs = [
  {
    title: "Leadership in Digital Marketing, AI & Entrepreneurship",
    duration: "",
    mode: "",
    bonus: "20,000",
    imageDesktop: "/images/course-list/leadeship-course-min.png",
    imageMobile: "/images/course-list/leadeship-course-min.png",
  },
  {
    title: "PGCP in Digital Marketing, E‑Comm & AI",
    duration: "",
    mode: "",
    bonus: "10,000",
    imageDesktop: "/images/course-list/PGCP-in-digital-marketing-e‑comm-aI.jpg",
    imageMobile: "/images/course-list/PGCP-in-digital-marketing-e‑comm-aI.jpg",
  },
  {
    title: "AI Vibe Marketing",
    duration: "",
    mode: "",
    bonus: "5,000",
    imageDesktop: "/images/course-list/skill-diploma-in-digital-marketing.png",
    imageMobile: "/images/course-list/skill-diploma-in-digital-marketing.png",
  },
  {
    title: "MBA in Digital Marketing & AI",
    duration: "",
    mode: "",
    bonus: " 75,000",
    imageDesktop: "/images/svavsa-vertical.jpg",
    imageMobile: "/images/svavsa-vertical.jpg",
  },
  {
    title: "BBA in Digital Marketing & AI",
    duration: "",
    mode: "",
    bonus: "50,000",
    imageDesktop: "/images/svavsa-vertical.jpg",
    imageMobile: "/images/svavsa-vertical.jpg",
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
