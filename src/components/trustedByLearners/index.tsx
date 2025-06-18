"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

const reviews = [
  {
    icon: "images/icons/google.svg",
    rating: 4.9,
    platform: "Google",
    reviews: "4.7* 750+ reviews",
  },
  {
    icon: "images/icons/star.svg",
    rating: 4.8,
    platform: "TrustPilot",
    reviews: "4.5* 30+ reviews",
  },
  {
    icon: "images/icons/b-review.svg",
    rating: 5,
    platform: "Ambition Box",
    reviews: "4.5* 85+ reviews",
  },
  {
    icon: "images/icons/fb.svg",
    rating: 4.9,
    platform: "Facebook",
    reviews: "4.8* 143+ reviews",
  },
];

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
              {reviews.map((review, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.reviewIcon}>
                    <Image
                      src={review.icon}
                      alt={review.platform}
                      width={43}
                      height={43}
                    />
                  </div>
                  <div className={styles.reviewDetails}>
                    <div className={styles.rating}>
                      {review.rating}
                      <Image
                        alt="round"
                        width={24}
                        height={24}
                        src={"images/icons/round-star.svg"}
                      />
                    </div>
                    <p className={styles.reviewText}>{review.reviews}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByLearners;
