"use client";
import React from "react";
// import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./style.module.scss";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";
import SectionHeader from "@components/widgets/sectionHeader";
import Image from "next/image";
import { Black_Han_Sans } from "next/font/google";
// import LeftArrow from "@components/Ui/svg/leftArrow";
const BlackHanSans = Black_Han_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-Black_Han_Sans",
});

const events = [
  {
    id: 1,
    title: "DIGIEDUHACK",
    year: 2025,
    subtitle: "Data-Driven Decision Making",
    location: "Bangalore",
    date: "02/04/25",
    duration: "24 Hours",
    image: "/images/experience.png",
  },
  {
    id: 2,
    title: "TECHFEST",
    year: 2025,
    subtitle: "Future of AI",
    location: "Mumbai",
    date: "05/06/25",
    duration: "12 Hours",
    image: "/images/experience.png",
  },
];

export default function HackathonEventSlider() {
  return (
    <section className={styles.hackathonEventSlider}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              title={
                <>
                  Experience the Thrill of <br /> Real-Time Digital Challenges
                </>
              }
            />
            <div className={styles.sliderWrapper}>
              <div className={styles.sliderInnerc}>
                <Swiper
                  modules={[Navigation, Scrollbar]}
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  scrollbar={{ draggable: true, el: "#customScrollbar55" }}
                  navigation={{
                    prevEl: "#customPrev55",
                    nextEl: "#customNext55",
                  }}
                  pagination={{ clickable: false }}
                  className={styles.swiper}
                >
                  {events.map((event) => (
                    <SwiperSlide key={event.id}>
                      <div className={`${styles.slide}`}>
                        <div className={`${styles.row} row align-items-center`}>
                          <div
                            className={`${styles.col6} col-md-6 align-items-center`}
                          >
                            <div className={`${styles.slideInfo}`}>
                              <h2
                                className={`${styles.title} ${BlackHanSans.className}`}
                              >
                                <span className={styles.highlight}>
                                  {event.title}
                                </span>{" "}
                                <span className={styles.year}>
                                  {event.year}
                                </span>
                              </h2>
                              <p
                                className={`${styles.subtitle} ${BlackHanSans.className}`}
                              >
                                {event.subtitle}
                              </p>
                              <div className={styles.meta}>
                                <span className={styles.location}>
                                  {event.location}
                                </span>
                                <span className={styles.date}>
                                  {event.date}
                                </span>
                                <span className={styles.duration}>
                                  {event.duration}
                                </span>
                              </div>
                              <button
                                className={`${styles.knowMore} btn btn-danger`}
                              >
                                Know More
                              </button>
                            </div>
                          </div>
                          <div
                            className={`${styles.col6} col-md-6 align-items-end`}
                          >
                            <div className={styles.ImageSlide}>
                              <Image
                                src={event.image}
                                alt={event.title}
                                width={600}
                                height={400}
                                className={styles.fullImage}
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar */}

      <div className={`${styles.controls} controls`}>
        <button id="customPrev55" className={`prevBtn ${styles.navBtn}`}>
          {" "}
          <RightArrow width={16} height={16} color="#000" />
        </button>
        <div
          id="customScrollbar55"
          className={`${styles.scrollbar} customScrollbar swiper-scrollbar`}
        ></div>
        <button id="customNext55" className={`nextBtn ${styles.navBtn}`}>
          {" "}
          <LeftArrow width={16} height={16} color="#000" />
        </button>
      </div>
    </section>
  );
}
