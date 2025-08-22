"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

const TrustedByLearners = ({
  padding = { desktop: "0 0 140px 0", mobile: "0 0 60px 0" },
}) => {
  return (
    <section
      className={styles.trustedByLearnersSection}
      style={
        {
          "--padding-mobile": padding.mobile,
          "--padding-desktop": padding.desktop,
        } as React.CSSProperties & Record<string, string>
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              titleMarginBottom={{ desktop: "20px", mobile: "10px" }}
              maxWidthTitle="630px"
              title={<>Trusted by Learners Across the Globe</>}
              maxWidth="680px"
              description="With a thriving community of 50,000+ alumni, Digital Academy 360 has empowered learners from all over the world to build successful careers in the digital world."
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.reviewCards}>
              {/* Card 3 */}
              <div className={styles.card}>
                <div className={styles.skillIcon}>
                  <Image
                    src="/images/skill-india.svg"
                    alt="Skill India"
                    width={74}
                    height={98}
                    unoptimized
                  />
                  <Image
                    src="/images/media.svg"
                    alt="Media Skill Council India"
                    width={95}
                    height={84}
                    unoptimized
                  />
                </div>
              </div>
              {/* Card 3 */}
              <div className={styles.card}>
                <div className={styles.reviewIcon}>
                  <Image
                    src="images/icons/fb.svg"
                    alt="Facebook"
                    width={43}
                    height={43}
                    unoptimized
                  />
                </div>
                <div className={styles.reviewDetails}>
                  <div className={styles.rating}>
                    4.8*
                    <Image
                      alt="round"
                      width={24}
                      height={24}
                      src="images/icons/round-star.svg"
                      unoptimized
                    />
                  </div>
                  <p className={styles.reviewText}>4.8* 143+ reviews</p>
                </div>
              </div>
              {/* Card 1 */}
              <div className={styles.card}>
                <div className={styles.reviewIcon}>
                  <Image
                    src="images/icons/google.svg"
                    alt="Google"
                    width={43}
                    height={43}
                    unoptimized
                  />
                </div>
                <div className={styles.reviewDetails}>
                  <div className={styles.rating}>
                    4.7*
                    <Image
                      alt="round"
                      width={24}
                      height={24}
                      src="images/icons/round-star.svg"
                      unoptimized
                    />
                  </div>
                  <p className={styles.reviewText}>4.7* 750+ reviews</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className={styles.card}>
                <div className={styles.reviewIcon}>
                  <Image
                    src="images/icons/star.svg"
                    alt="TrustPilot"
                    width={43}
                    height={43}
                    unoptimized
                  />
                </div>
                <div className={styles.reviewDetails}>
                  <div className={styles.rating}>
                    4.5*
                    <Image
                      alt="round"
                      width={24}
                      height={24}
                      src="images/icons/round-star.svg"
                      unoptimized
                    />
                  </div>
                  <p className={styles.reviewText}>4.5* 30+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByLearners;
