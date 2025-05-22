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
                <h2>
                  Why work with <br /> <span>DigitalAcademy360?</span>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an
                </p>
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
