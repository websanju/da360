"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./style.module.scss";

const mediaLogos = [
  { src: "/images/timesofindia.png", alt: "The Times of India" },
  { src: "/images/deccanherald.png", alt: "Deccan Herald" },
  { src: "/images/hindustantimes.png", alt: "Hindustan Times" },
  { src: "/images/economictimes.png", alt: "The Economic Times" },
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
        <h2 className={styles.title}>
          <em>Media & Awards</em>
        </h2>

        {isMobile ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            centeredSlides={false}
            loop={false}
            breakpoints={{
              320: {
                slidesPerView: 2.5,
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
              },
              480: {
                slidesPerView: 2.5,
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {mediaLogos.map((logo, index) => (
              <SwiperSlide key={index}>
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
          <div className="row justify-content-center align-items-center">
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
