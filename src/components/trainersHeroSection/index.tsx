import Image from "next/image";
import styles from "./styles.module.scss";
// import Link from "next/link";

const HeroSection = () => {
  return (
    <section className={styles.trainersHeroSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.content}>
              <h1>Meet Our Trainers</h1>
              <p>
                With more than 500,000 learners under our wing, IIDE’s digital
                marketing trainers are seasoned experts in their respective
                fields, each bringing years of industry experience. This
                commitment to practical learning has helped us stand out in the
                field of digital education.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.trainersImg}>
        <Image
          src="/images/meet-our-trainers.jpg"
          alt="trainers"
          width={1280}
          height={660}
          quality={100}
          unoptimized
          className={styles.bgImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
