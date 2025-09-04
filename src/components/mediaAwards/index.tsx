"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { auto } from "@popperjs/core";
import "swiper/css";
import styles from "./style.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";

const mediaLogos = [
  { src: "/images/media/timesOf-india-min.jpg", alt: "The Times of India" },
  { src: "/images/media/yourStory-min.jpg", alt: "Your Story" },
  { src: "/images/media/hindustantimes-min.jpg", alt: "hindustantimes" },
  { src: "/images/media/economictimes-min.jpg", alt: "Economictimes" },
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
        <SectionHeader
          wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
          titleMarginBottom={{ desktop: "24px", mobile: "10px" }}
          title={<>DA360 In Spotlight</>}
          description={"Media, Awards & Achievements "}
        />
        {isMobile ? (
          <Swiper
            spaceBetween={10}
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
                    width={183}
                    height={64}
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
                    width={283}
                    height={99}
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
