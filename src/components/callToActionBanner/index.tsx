"use client";
import React from "react";
import styles from "./style.module.scss";
import { usePopup } from "@components/widgets/popup/PopupContext";
import ApplyForm from "../widgets/popups/ApplyForm";
interface CallToActionBannerProps {
  section?: string;
}
const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ section }) => {
  const { openPopup } = usePopup();
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
                <button
                  onClick={() =>
                    openPopup(<ApplyForm title=" Book Campus Visit" />, {
                      title: `"Book Campus Visit"`,
                    })
                  }
                  className={styles.btn}
                >
                  Book Campus Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
