"use client";
import React from "react";
// import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./style.module.scss";
import Image from "next/image";
import { auto } from "@popperjs/core";
// import LeftArrow from "@components/Ui/svg/leftArrow";

const digitalAcademy = [
  {
    id: 1,
    cardImg: "/images/digital-academy/digital-1.jpg",
    title: "Hackathon",
    description:
      "In a constant state of unlearning & learning, & sharing these with the design community.",
  },
  {
    id: 2,
    cardImg: "/images/digital-academy/digital-2.jpg",
    title: "Presentation Days & Pitch Nights",
    description:
      "In a constant state of unlearning & learning, & sharing these with the design community.",
  },
  {
    id: 3,
    cardImg: "/images/digital-academy/digital-3.jpg",
    title: "Cultural & Festive Celebrations",
    description:
      "In a constant state of unlearning & learning, & sharing these with the design community.",
  },
  {
    id: 4,
    cardImg: "/images/digital-academy/digital-3.jpg",
    title: "Workshops & Group Projects",
    description:
      "In a constant state of unlearning & learning, & sharing these with the design community.",
  },
  {
    id: 5,
    cardImg: "/images/digital-academy/digital-3.jpg",
    title: "McDonald's case Study",
    description:
      "In a constant state of unlearning & learning, & sharing these with the design community.",
  },
];

export default function DigitalAcademySlider() {
  return (
    <section className={styles.digitalAcademySection}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.sectionHeader}>
              <h2>Life at Digital Academy 360</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <div className="container position-relative">
          <div className={styles.sliderNavigation}>
            <button className="swiper-button-prev" id="customPrev14"></button>
            <button className="swiper-button-next" id="customNext14"></button>
          </div>
        </div>
        <div
          className={styles.sliderInnerc}
          // style={{
          //   width: "100vw",
          //   marginLeft: `-${containerPaddingLeft}px`,
          //   paddingLeft: containerPaddingLeft,
          //   boxSizing: "border-box",
          // }}
        >
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={20}
            slidesPerView={auto}
            scrollbar={{ draggable: true, el: "#customScrollbar14" }}
            navigation={{
              prevEl: "#customPrev14",
              nextEl: "#customNext14",
            }}
            pagination={{ clickable: false }}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            breakpoints={{
              0: {
                spaceBetween: 24,
                slidesOffsetBefore: 24,
              },
              768: {
                spaceBetween: 24,
                slidesOffsetBefore: 24,
              },
              992: {
                spaceBetween: 24,
              },
              1440: {
                spaceBetween: 24,
              },
              1840: {
                spaceBetween: 24,
              },
            }}
            className={styles.swiper}
          >
            {digitalAcademy.map((study) => (
              <SwiperSlide key={study.id} className={styles.customSlide}>
                <div className={styles.card}>
                  <div className={styles.cardImg}>
                    <Image
                      src={study.cardImg}
                      alt={study.title}
                      width={413}
                      height={450}
                      className={styles.logo}
                    />
                  </div>
                  <div className={styles.cardDescription}>
                    <h3>{study.title}</h3>
                    <p className={styles.desc}>{study.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Custom scrollbar */}
      <div id="customScrollbar14" className="swiper-scrollbar"></div>
    </section>
  );
}
