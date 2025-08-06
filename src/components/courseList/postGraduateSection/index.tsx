import { CourseSection } from "../../../data/courseData";
import styles from "../style.module.scss";
import Image from "next/image";

const LeadershipSection = ({ section }: { section: CourseSection }) => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={styles.sectionHeader}>
            <h2>
              Post Graduate Certification Program
              <br /> Courses
            </h2>
            <p>12 months full time program</p>
          </div>
          <div className="row">
            {section.courses.map((course) => (
              <div key={course.id} className={` col-12 col-md-4`}>
                <div className={`${styles.courseListCard}`}>
                  <div className={styles.courseImg}>
                    <Image
                      src={course.thumb}
                      alt={course.title}
                      width={422}
                      height={250}
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
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
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
