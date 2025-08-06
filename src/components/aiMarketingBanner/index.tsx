import styles from "./styles.module.scss";

export default function AiMarketingBanner() {
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
              <button className={`btn btn-danger btn-lg px-4 ${styles.btn}`}>
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
