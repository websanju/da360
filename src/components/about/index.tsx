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
                Asia’s Leading AI
                <br />
                Digital Marketing Academy
              </h1>
              <p>Making Opportunities Knock On Your Door</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
