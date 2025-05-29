import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

const reviews = [
  {
    icon: "images/icons/fb.svg",
    rating: 4.9,
    platform: "Facebook",
    reviews: "700+ reviews",
  },
  {
    icon: "images/icons/google.svg",
    rating: 4.8,
    platform: "Google",
    reviews: "700+ reviews",
  },
  {
    icon: "images/icons/star.svg",
    rating: 5,
    platform: "Star",
    reviews: "700+ reviews",
  },
  {
    icon: "images/icons/b-review.svg",
    rating: 4.9,
    platform: "Platform",
    reviews: "700+ reviews",
  },
];

const TrustedByLearners = () => {
  return (
    <section className={styles.trustedByLearnersSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              titleMarginBottom={{ desktop: "20px", mobile: "10px" }}
              title={<>Trusted by Learners</>}
              maxWidth="650px"
              description="1,00,000+ Digital Academy 360 alumni from 1,100+ companies &
                4,400+ colleges working in top product companies"
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
