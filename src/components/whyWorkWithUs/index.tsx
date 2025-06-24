import styles from "./styles.module.scss";
import Image from "next/image";
import ArrowUp from "@components/Ui/svg/arrowUp";

export default function WhyWorkWithUs() {
  return (
    <section className={`${styles.whyWorkSection}`}>
      <div className="container">
        <div className="row">
          <div className={`col-md-6 ${styles.contentImg}`}>
            <Image
              src={`/images/whywork.png`}
              width={904}
              height={603}
              alt="Why work with us"
              className={`img-fluid ${styles.image}`}
            />
          </div>
          <div className={`col-md-6 ${styles.contentBox}`}>
            <div className={styles.contentInfo}>
              <div>
                <h2>Why Work With Us?</h2>
                <div className={styles.list}>
                  <ul>
                    <li>
                      <span>Innovative Work Culture</span> – Collaborate on
                      industry-first programs in digital marketing and AI.
                    </li>
                    <li>
                      <span> Growth Opportunities</span> – Clear career paths,
                      internal promotions, and professional development.
                    </li>
                    <li>
                      <span> Impactful Work </span>– Help transform thousands of
                      lives through quality education.
                    </li>
                    <li>
                      <span> Flexible & Inclusive </span> – A dynamic
                      environment that values diversity and creativity.
                    </li>
                    <li>
                      <span>Recognition & Rewards </span> – Your contributions
                      are seen, celebrated, and rewarded.
                    </li>
                  </ul>
                </div>
              </div>
              <a href="#" className={styles.ctaBtn}>
                Apply Now{" "}
                <span className={styles.arrow}>
                  {" "}
                  <ArrowUp width={32} height={32} color="#fff" />{" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
