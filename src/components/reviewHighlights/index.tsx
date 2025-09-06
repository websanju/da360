"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

const ReviewHighlights = () => {
  const platforms = [
    {
      icon: "images/testimonials/facebook.svg",
      rating: "4.8",
      reviews: "143+",
    },
    { icon: "/images/testimonials/google.svg", rating: "4.7", reviews: "750+" },
    {
      icon: "/images/testimonials/trustpilot.svg",
      rating: "4.5",
      reviews: "30+",
    },
    {
      icon: "/images/testimonials/sulekha.svg",
      rating: "4.8",
      reviews: "80+",
    },
    {
      icon: "/images/testimonials/justdial.svg",
      rating: "4.8",
      reviews: "770+",
    },
    {
      icon: "/images/testimonials/glassdoor.svg",
      rating: "4.4",
      reviews: "100+",
    },
  ];

  const handleScroll = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const section = document.getElementById("testimonialSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                    <video
                      playsInline
                      autoPlay
                      loop
                      muted
                      preload="metadata"
                      className={styles.video}
                    >
                      <source
                        src={"/images/rating/reviewVideo2.mp4"}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <div className={styles.playVideo}>
                      <span>
                        <Image
                          src={"/images/play-btn.svg"}
                          alt={"slide.title"}
                          width={72}
                          height={72}
                        />
                      </span>
                    </div>
                  </div>
                  <Link
                    className={styles.link}
                    href={"#testimonialSection"}
                    onClick={handleScroll}
                  >
                    <span>
                      Read All <br /> Reviews
                    </span>
                    <Image
                      src="/images/testimonials/iconoir_arrow-up.svg"
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
                              src="/images/icons/rating.svg"
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
