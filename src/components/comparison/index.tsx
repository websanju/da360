// components/Comparison.tsx
import Image from "next/image";
import styles from "./style.module.scss";

const Comparison = () => {
  return (
    <section className={styles.comparisonSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionHeader}>
              <h2>
                Digital Academy 360 <br />
                <span>
                  {" "}
                  VS <br /> Traditional Education
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.cards}>
              <div className={styles.labels}>
                <ul>
                  <li>
                    <span>Curriculum</span>
                  </li>
                  <li>
                    <span>Instructors</span>
                  </li>
                  <li>
                    <span>Assignments</span>
                  </li>
                  <li>
                    <span>Mentorship</span>
                  </li>
                  <li>
                    <span>Intership</span>
                  </li>
                  <li>
                    <span>Employability</span>
                  </li>
                  <li>
                    <span>Graduate</span>
                  </li>
                </ul>
              </div>
              <div
                className={`${styles.card} ${styles.highlight} d-block d-lg-none`}
              >
                <h3>
                  Digital Academy 360 <br /> Advantages
                </h3>
                <hr />
                <ul>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>
                    Real-world, ready for 2029 & beyond
                  </li>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>{" "}
                    Worked at Google, Meta, Metasoft…
                  </li>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>{" "}
                    50+ Apps and products to be coded
                  </li>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>{" "}
                    Mentorship session with top industry professionals
                  </li>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>{" "}
                    Compulsory paid internship for 1 year
                  </li>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>{" "}
                    Ready to work at Top Tech Companies
                  </li>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>{" "}
                    Senior SDE
                  </li>
                </ul>
              </div>
              <div className={styles.card}>
                <h3>
                  Traditional <br /> Education
                </h3>
                <hr />
                <ul>
                  <li>
                    <span>
                      <Image
                        width={22}
                        height={22}
                        alt="close"
                        src={"/images/icons/tick-close.svg"}
                      />
                    </span>
                    Real-world, ready for 2029 & beyond
                  </li>
                  <li>
                    <span>
                      <Image
                        width={22}
                        height={22}
                        alt="close"
                        src={"/images/icons/tick-close.svg"}
                      />
                    </span>{" "}
                    Worked at Google, Meta, Metasoft…
                  </li>
                  <li>
                    <span>
                      <Image
                        width={22}
                        height={22}
                        alt="close"
                        src={"/images/icons/tick-close.svg"}
                      />
                    </span>{" "}
                    50+ Apps and products to be coded
                  </li>
                  <li>
                    <span>
                      <Image
                        width={22}
                        height={22}
                        alt="close"
                        src={"/images/icons/tick-close.svg"}
                      />
                    </span>{" "}
                    Mentorship session with top industry professionals
                  </li>
                  <li>
                    <span>
                      <Image
                        width={22}
                        height={22}
                        alt="close"
                        src={"/images/icons/tick-close.svg"}
                      />
                    </span>{" "}
                    Compulsory paid internship for 1 year
                  </li>
                  <li>
                    <span>
                      <Image
                        width={22}
                        height={22}
                        alt="close"
                        src={"/images/icons/tick-close.svg"}
                      />
                    </span>{" "}
                    Ready to work at Top Tech Companies
                  </li>
                  <li>
                    <span>
                      <Image
                        width={22}
                        height={22}
                        alt="close"
                        src={"/images/icons/tick-close.svg"}
                      />
                    </span>{" "}
                    Senior SDE
                  </li>
                </ul>
              </div>

              <div
                className={`${styles.card} ${styles.highlight} d-none d-lg-block`}
                style={{
                  backgroundImage: 'url("/images/icons/compare.svg")',
                  backgroundSize: "360px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top right",
                }}
              >
                <h3>
                  Digital Academy 360 <br /> Advantages
                </h3>
                <hr />
                <ul>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>
                    Real-world, ready for 2029 & beyond
                  </li>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>{" "}
                    Worked at Google, Meta, Metasoft…
                  </li>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>{" "}
                    50+ Apps and products to be coded
                  </li>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>{" "}
                    Mentorship session with top industry professionals
                  </li>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>{" "}
                    Compulsory paid internship for 1 year
                  </li>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>{" "}
                    Ready to work at Top Tech Companies
                  </li>
                  <li>
                    <span>
                      <Image
                        width={30}
                        height={30}
                        alt="close"
                        src={"/images/icons/tick-circle.svg"}
                      />
                    </span>{" "}
                    Senior SDE
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
