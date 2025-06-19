import React from "react";
import styles from "./style.module.scss";

const AboutUs = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={`container`}>
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.headerSection}>
              <h1>
                Asia’s #1 Academy for <br /> AI-Powered Digital Marketing
              </h1>
              <p>Opportunities Don’t Knock. You Walk Right In.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
