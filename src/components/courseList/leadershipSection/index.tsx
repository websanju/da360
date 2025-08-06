import Image from "next/image";
import { CourseSection } from "../../../data/courseData";
import styles from "../style.module.scss";

const LeadershipSection = ({ section }: { section: CourseSection }) => (
  <section className={styles.leadershipSection}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={styles.sectionHeader}>
            <h2>
              Digital Marketing Leadership <br /> Programs{" "}
            </h2>
            <p>12 months full time program</p>
          </div>
          <div className="row">
            {section.courses.map((course) => (
              <div key={course.id} className={` col-12 col-md-6`}>
                <div key={course.id} className={styles.courseListCard}>
                  <div className={styles.courseImg}>
                    <Image
                      src={course.thumb}
                      alt={course.title}
                      width={630}
                      height={350}
                    />
                  </div>
                  <div className={`${styles.cardContent}`}>
                    <h3>{course.title}</h3>
                    <div className={styles.tagsRow}>
                      {course.tags?.map((d, i) => (
                        <span key={i} className={styles.tags}>
                          {d}
                        </span>
                      ))}
                    </div>
                    <ul>
                      {course.features.map((f, i) => (
                        <li key={i}>
                          <span>
                            <Image
                              src={"/images/icons/tick-solid.svg"}
                              alt={"tick"}
                              width={20}
                              height={20}
                            />
                          </span>{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button className={styles.btnCourse}>
                      {course.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default LeadershipSection;
