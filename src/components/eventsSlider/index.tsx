"use client";
import React from "react";
// import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./style.module.scss";
import { auto } from "@popperjs/core";
import EventCard from "@components/widgets/eventCard";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";
import SectionHeader from "@components/widgets/sectionHeader";
// import LeftArrow from "@components/Ui/svg/leftArrow";

const events = [
  {
    id: 1,
    title: "Campaign Clash 2024",
    subtitle: "Brand Strategy for a D2C Wellness Brand",
    image: "/images/hackstorm-one.png",
    location: "Bangalore",
    date: "02/06/25",
    duration: "36 Hours",
    participants: 120,
  },
  {
    id: 2,
    title: "Campaign Clash 2024",
    subtitle: "Brand Strategy for a D2C Wellness Brand",
    image: "/images/hackstorm-two.png",
    location: "Bangalore",
    date: "02/06/25",
    duration: "36 Hours",
    participants: 120,
  },
  {
    id: 3,
    title: "Campaign Clash 2024",
    subtitle: "Brand Strategy for a D2C Wellness Brand",
    image: "/images/hackstorm-three.png",
    location: "Bangalore",
    date: "02/06/25",
    duration: "36 Hours",
    participants: 120,
  },
  {
    id: 4,
    title: "Campaign Clash 2024",
    subtitle: "Brand Strategy for a D2C Wellness Brand",
    image: "/images/hackstorm-four.png",
    location: "Bangalore",
    date: "02/06/25",
    duration: "36 Hours",
    participants: 120,
  },
  {
    id: 5,
    title: "Campaign Clash 2024",
    subtitle: "Brand Strategy for a D2C Wellness Brand",
    image: "/images/hackstorm-five.png",
    location: "Bangalore",
    date: "02/06/25",
    duration: "36 Hours",
    participants: 120,
  },
  {
    id: 6,
    title: "Campaign Clash 2024",
    subtitle: "Brand Strategy for a D2C Wellness Brand",
    image: "/images/hackstorm-two.png",
    location: "Bangalore",
    date: "02/06/25",
    duration: "36 Hours",
    participants: 120,
  },
  {
    id: 7,
    title: "Campaign Clash 2024",
    subtitle: "Brand Strategy for a D2C Wellness Brand",
    image: "/images/hackstorm-two.png",
    location: "Bangalore",
    date: "02/06/25",
    duration: "36 Hours",
    participants: 120,
  },
  {
    id: 8,
    title: "Campaign Clash 2024",
    subtitle: "Brand Strategy for a D2C Wellness Brand",
    image: "/images/hackstorm-two.png",
    location: "Bangalore",
    date: "02/06/25",
    duration: "36 Hours",
    participants: 120,
  },
  {
    id: 9,
    title: "Campaign Clash 2024",
    subtitle: "Brand Strategy for a D2C Wellness Brand",
    image: "/images/hackstorm-two.png",
    location: "Bangalore",
    date: "02/06/25",
    duration: "36 Hours",
    participants: 120,
  },
];

export default function EventsSlider() {
  return (
    <section className={styles.eventsSlidersection}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              title={<>Previous Hackathon Events</>}
            />
          </div>
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderInnerc}>
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={20}
            slidesPerView={auto}
            scrollbar={{ draggable: true, el: "#customScrollbar5" }}
            navigation={{
              prevEl: "#customPrev5",
              nextEl: "#customNext5",
            }}
            pagination={{ clickable: false }}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            breakpoints={{
              0: {
                // slidesPerView: 1.2,
                spaceBetween: 16,
                slidesOffsetBefore: 16,
                // slidesOffsetAfter: 30,
              },
              768: {
                // slidesPerView: 2.5,
                spaceBetween: 16,
                slidesOffsetBefore: 16,
                // slidesOffsetBefore: 0,
                // slidesOffsetAfter: 30,
              },
              992: {
                // slidesPerView: 2.5,
                spaceBetween: 16,
                // slidesOffsetBefore: 5,
                // slidesOffsetAfter: 60,
              },
              1440: {
                // slidesPerView: 3.3,
                spaceBetween: 20,
                // slidesOffsetBefore: 0,
                // slidesOffsetAfter: 30,
              },
              1840: {
                // slidesPerView: 3.3,
                spaceBetween: 20,
              },
            }}
            className={styles.swiper}
          >
            {events.map((study) => (
              <SwiperSlide key={study.id} className={styles.customSlide}>
                <EventCard event={study} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Custom scrollbar */}

      <div className={`${styles.controls} controls`}>
        <button id="customPrev5" className={`prevBtn ${styles.navBtn}`}>
          {" "}
          <RightArrow width={16} height={16} color="#000" />
        </button>
        <div
          id="customScrollbar5"
          className={`${styles.scrollbar} customScrollbar swiper-scrollbar`}
        ></div>
        <button id="customNext5" className={`nextBtn ${styles.navBtn}`}>
          {" "}
          <LeftArrow width={16} height={16} color="#000" />
        </button>
      </div>
    </section>
  );
}
