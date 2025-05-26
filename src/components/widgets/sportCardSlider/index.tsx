"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./styles.module.scss";
import Image from "next/image";

interface SportCardSliderProps {
  title: string;
  images: string[];
  color: string;
}

const SportCardSlider = ({ title, images, color }: SportCardSliderProps) => {
  return (
    <div className={styles.card}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        className={`${styles.swipers} swipers-sport `}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.cardImg}>
              <Image
                src={img}
                alt={`${title} image ${idx + 1}`}
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.label}>
          <span style={{ backgroundColor: color }}>{title}</span>
        </div>
      </Swiper>
    </div>
  );
};

export default SportCardSlider;
