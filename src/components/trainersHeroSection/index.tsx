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
              <h1>Mentors Who Make a Difference</h1>
              <p>
                At Digital Academy 360, our expert trainers have guided over
                500,000 learners to success. With deep industry experience and a
                passion for teaching, they bring real-world insights into every
                session — making learning practical, relevant, and impactful.
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
