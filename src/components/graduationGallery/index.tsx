"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./styles.module.scss";
import Image from "next/image";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";
const images = [
  "/images/graduation/graduation-1.jpg",
  "/images/graduation/graduation-2.jpg",
  "/images/graduation/graduation-3.jpg",
  "/images/graduation/graduation-3.jpg",
];

const GraduationGallery: React.FC = () => {
  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionHeader}>
              <h2>
                Graduation Day <br />
                <span>Gallery</span>
              </h2>

              <p>
                Lorem Ipsum is simply dummy text of the printing and <br />
                typesetting industry. Lorem Ipsum has been.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={20}
          scrollbar={{ draggable: true, el: "#customScrollbar21" }}
          slidesPerView="auto" // Same as the working slider
          slidesOffsetBefore={20}
          slidesOffsetAfter={20}
          navigation={{
            prevEl: "#customPrev21",
            nextEl: "#customNext21",
          }}
          className={styles.swiperContainer}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <Image
                width={550}
                height={380}
                src={src}
                alt={`Graduation ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`${styles.controls} controls`}>
          <button id="customPrev21" className={`prevBtn ${styles.navBtn}`}>
            {" "}
            <RightArrow width={16} height={16} color="#000" />
          </button>
          <div
            id="customScrollbar21"
            className={`${styles.scrollbar} customScrollbar swiper-scrollbar`}
          ></div>
          <button id="customNext21" className={`nextBtn ${styles.navBtn}`}>
            {" "}
            <LeftArrow width={16} height={16} color="#000" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GraduationGallery;
