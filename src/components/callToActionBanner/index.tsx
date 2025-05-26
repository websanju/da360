import React from "react";
import styles from "./style.module.scss";

const CallToActionBanner: React.FC = () => {
  return (
    <section className={styles.callToActionBanner}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.callToAction}>
              <h2>
                Be Part of the Journey.
                <br />
                Build Your Digital Future
              </h2>
              <p>
                Experience learning that transforms not just your resume — but
                your life.
              </p>
              <div className={styles.buttons}>
                <button className={styles.btn}>Join the Experience</button>
                <button className={styles.btn}>Visit Campus</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
