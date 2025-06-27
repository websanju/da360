"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

const ReviewHighlights = () => {
  const platforms = [
    { icon: "images/rating/facebook.svg", rating: "4.9", reviews: "700+" },
    { icon: "/images/rating/google.svg", rating: "4.8", reviews: "700+" },
    { icon: "/images/rating/trustpilot.svg", rating: "5", reviews: "700+" },
    { icon: "/images/rating/sulekha.svg", rating: "4.9", reviews: "700+" },
    {
      icon: "/images/rating/justdial.svg",
      rating: "4.8",
      reviews: "700+",
    },
    { icon: "/images/rating/urbanpro.svg", rating: "5", reviews: "700+" },
  ];

  return (
    <section className={styles.reviewHighlightsSection}>
      <div className={`${styles.container} container`}>
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.row}>
              <div className={styles.left}>
                <h1>Testimonials</h1>
                <p>
                  Unlock Your Potential At Digital Academy 360: Join A Community
                  Of Brilliant Minds, Where Creativity Meets Ambition. Together,
                  Let’s Chart A Course For Success In Your Career Journey.
                </p>
                <div className={styles.reviewer}>
                  <div className={styles.reviewerVideo}>
                    <Image
                      src="/images/rating/video.jpg"
                      alt="Reviewer"
                      width={145}
                      height={145}
                      unoptimized
                      className={styles.avatar}
                    />
                  </div>
                  <Link className={styles.link} href={""}>
                    <span>
                      Read All <br /> Reviews
                    </span>
                    <Image
                      src="/images/rating/iconoir_arrow-up.svg"
                      alt="Reviewer"
                      width={24}
                      height={24}
                      unoptimized
                      className={styles.avatar}
                    />
                  </Link>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.reviewContent}>
                  <h1>
                    Discover What People Say On <br /> Different Platforms
                  </h1>
                  <div className={styles.grid}>
                    {platforms.map((item, index) => (
                      <div className={styles.platform} key={index}>
                        <div className={styles.platformImg}>
                          <Image
                            src={item.icon}
                            alt="Platform"
                            width={43}
                            height={43}
                          />
                        </div>
                        <div className={styles.platformInfo}>
                          <span>
                            {item.rating}
                            <Image
                              src="/images/rating/round-star.svg"
                              alt="Platform"
                              width={24}
                              height={24}
                              unoptimized
                            />
                          </span>
                          <small>{item.reviews} reviews</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewHighlights;
