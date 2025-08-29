"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import magnifierIcon from "@public/images/talent-search-new.svg";
import Link from "next/link";

const HireTalentBanner = () => {
  return (
    <div className={styles.hireTalentBanner}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.hireTalentContent}>
              <div className={styles.hireTalentText}>
                <h2>
                  Looking to Hire Trained
                  <br />
                  Digital Talent?
                </h2>
                <p>
                  Fill out the form below or connect with our placement cell
                  directly to start hiring from our trained talent pool.
                </p>
                <div className={styles.buttonAction}>
                  <Link
                    href={"/hire-digital-marketer-fresher-intern"}
                    className={styles.hireButton}
                  >
                    Hire Now
                  </Link>
                </div>
              </div>
              <div className={styles.icon}>
                <Image
                  src={magnifierIcon}
                  alt="Magnifier Icon"
                  width={245}
                  height={237.28}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireTalentBanner;
