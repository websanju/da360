import React from "react";
import styles from "./style.module.scss";

interface CallToActionBannerProps {
  section?: string;
}
const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ section }) => {
  return (
    <section className={styles.callToActionBanner} id={section}>
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
                <button className={styles.btn}>Book Campus Visit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
