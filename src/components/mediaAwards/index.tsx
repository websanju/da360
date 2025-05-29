"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { auto } from "@popperjs/core";
import "swiper/css";
import styles from "./style.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";

const mediaLogos = [
  { src: "/images/business-stanard.png", alt: "Business Stanard" },
  { src: "/images/brandequity.png", alt: "Brandequity" },
  { src: "/images/timesofindia.png", alt: "The Times of India" },
  { src: "/images/timesofindia.png", alt: "The Times of India" },
  { src: "/images/hindustantimes.png", alt: "Hindustan Times" },
  { src: "/images/your-story.png", alt: "Your Story" },
  { src: "/images/bloomberg.png", alt: "Bloomberg" },
  { src: "/images/financial-express.png", alt: "Financial Express" },
];

const MediaAwards = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.mediaAwardsSection}>
      <div className={`${styles.mediaAwardsContainer} container`}>
        {/* <h2 className={styles.title}>
          <em>Media & Awards</em>
        </h2> */}
        <SectionHeader
          wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
          title={<>DA360 In Spotlight</>}
        />
        {isMobile ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={auto}
            breakpoints={{
              320: {
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
              },
              480: {
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
              },
            }}
          >
            {mediaLogos.map((logo, index) => (
              <SwiperSlide key={index} className={styles.medialogoSize}>
                <div className={styles.medialogo}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={60}
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div
            className={`${styles.row} row justify-content-center align-items-center`}
          >
            {mediaLogos.map((logo, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className={styles.medialogo}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={60}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaAwards;
