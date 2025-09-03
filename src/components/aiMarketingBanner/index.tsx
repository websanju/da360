"use client";
import styles from "./styles.module.scss";
import { usePopup } from "@components/widgets/popup/PopupContext";
import ApplyForm from "../widgets/popups/ApplyForm";

export default function AiMarketingBanner() {
  const { closePopup } = usePopup();
  const { openPopup } = usePopup();

  return (
    <section className={styles.banner}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className={styles.bannerContent}>
              <p className={styles.tagline}>Learn from the Best</p>
              <h1 className={styles.title}>
                Asia’s Leading AI <br />
                Digital Marketing Academy
              </h1>
              <p className={styles.subtitle}>
                Youtube & Instagram Influencer Certification Course
              </p>
              <button
                onClick={() => {
                  closePopup(); // close current popup first
                  openPopup(
                    <ApplyForm title="Apply & Learn From Case Study" />,
                    {}
                  );
                }}
                className={`btn btn-danger btn-lg px-4 ${styles.btn}`}
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
