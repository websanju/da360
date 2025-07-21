import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroImage}>
          <Image
            src="/images/palcements.svg"
            alt="Students"
            width={1440}
            objectFit="cover"
            objectPosition="top"
            height={800}
            quality={100}
            unoptimized
            className={styles.bgImage}
          />
        </div>
        <div className={styles.heroContentBox}>
          <div className="container">
            <div className={`row`}>
              <div className="col-lg-12">
                <div className={styles.content}>
                  <h1>
                    Our Students,
                    <br />
                    Your Next Hires.
                  </h1>
                  <p>
                    Meet the digital professionals who began their journey at
                    DA360 and are now thriving in top companies.
                  </p>
                  <div className={styles.applyAction}>
                    <Link
                      href="/hire-from-da360"
                      className="btn btn-danger btn-lg px-4"
                    >
                      Hire from DA360
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroPlacements}>
            <Image
              src="/images/placement-desk-min.png"
              width={2880}
              height={1278}
              alt="Students"
              unoptimized
              className={styles.deskPlacements}
            />
            <Image
              src="/images/placement-mobile-min.png"
              width={824}
              height={366}
              alt="Students"
              unoptimized
              className={styles.mobilePlacements}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
