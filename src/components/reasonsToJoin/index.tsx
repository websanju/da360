import Image from "next/image";
import styles from "./styles.module.scss";
import SectionHeader from "../widgets/sectionHeader";

export default function ReasonsToJoin() {
  const reasons = [
    {
      title: "100% Job Guarantee Program",
      desc: "We don’t just teach, we commit to getting you placed in a job you deserve.",
    },
    {
      title: "Dedicated Placement Support Until You're Hired",
      desc: "From resume building to mock interviews, we guide you every step of the way.",
    },
    {
      title: "Career Mentorship by Industry Leaders",
      desc: "Get one-on-one career advice from professionals who work in top companies.",
    },
    {
      title: "3X More Interviews with Our Training",
      desc: "Our students get shortlisted more often—thanks to practical skills and certifications.",
    },
    {
      title: "Real Projects = Real Experience",
      desc: "Work on live client projects to build a strong portfolio that gets you hired.",
    },
    {
      title: "Career Mentorship by Industry Leaders",
      desc: "Get one-on-one career advice from professionals who work in top companies.",
    },
    {
      title: "Career Mentorship by Industry Leaders",
      desc: "Get one-on-one career advice from professionals who work in top companies.",
    },
    {
      title: "Career Mentorship by Industry Leaders",
      desc: "Get one-on-one career advice from professionals who work in top companies.",
    },
    {
      title: "Career Mentorship by Industry Leaders",
      desc: "Get one-on-one career advice from professionals who work in top companies.",
    },
    {
      title: "Career Mentorship by Industry Leaders",
      desc: "Get one-on-one career advice from professionals who work in top companies.",
    },
    {
      title: "Career Mentorship by Industry Leaders",
      desc: "Get one-on-one career advice from professionals who work in top companies.",
    },
    {
      title: "Career Mentorship by Industry Leaders",
      desc: "Get one-on-one career advice from professionals who work in top companies.",
    },
  ];

  return (
    <section className={`${styles.reasonsSection}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              maxWidthTitle="650px"
              title={"20 Reasons to Join Svyasa MBA Program"}
            />
            <div className={`${styles.reasonsBox}`}>
              <div className="row">
                {/* Left: Image */}
                <div className="col-lg-5">
                  <div className={styles.studentImg}>
                    <Image
                      src="/images/student.jpg" // Replace with your actual image
                      alt="Students holding books"
                      width={400}
                      height={500}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="col-lg-7">
                  <div className={styles.reasonsContent}>
                    <h3>Brand, Trust & Alumni Network</h3>
                    <ul>
                      {reasons.map((reason, i) => (
                        <li key={i}>
                          <span>{i + 1}.</span> {/* number in loop */}
                          <div className={styles.reasonsText}>
                            <p className={styles.reasonsTitle}>
                              {reason.title}
                            </p>
                            <p className={styles.reasonsDesc}>{reason.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
