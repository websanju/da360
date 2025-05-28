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
import CaseStudiesCard from "@components/widgets/caseStudiesCard";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";
// import LeftArrow from "@components/Ui/svg/leftArrow";

const caseStudies = [
  {
    id: 1,
    logo: "/images/mcdonalds-logo.png",
    title: "McDonald's case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to...",
    tags: ["Marketing Strategy", "SEO"],
  },
  {
    id: 2,
    logo: "/images/motherdairy-logo.png",
    title: "MotherDairy case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to...",
    tags: ["Marketing Strategy", "SEO"],
  },
  {
    id: 3,
    logo: "/images/mcdonalds-logo.png",
    title: "McDonald's case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to...",
    tags: ["Marketing Strategy", "SEO"],
  },
  {
    id: 4,
    logo: "/images/mcdonalds-logo.png",
    title: "McDonald's case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to...",
    tags: ["Marketing Strategy", "SEO"],
  },
  {
    id: 5,
    logo: "/images/mcdonalds-logo.png",
    title: "McDonald's case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to...",
    tags: ["Marketing Strategy", "SEO"],
  },
];

export default function CaseStudiesSlider() {
  // const containerRef = useRef<HTMLDivElement>(null);
  // const [containerPaddingLeft, setContainerPaddingLeft] = useState(20);

  // useEffect(() => {
  //   function updatePadding() {
  //     if (containerRef.current) {
  //       const rect = containerRef.current.getBoundingClientRect();
  //       setContainerPaddingLeft(rect.left);
  //     }
  //   }
  //   updatePadding();
  //   window.addEventListener("resize", updatePadding);
  //   return () => window.removeEventListener("resize", updatePadding);
  // }, []);

  return (
    <section className={styles.caseStudiessection}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.sectionHeader}>
              <h2>Glimpse of Brand Case Studies</h2>
              <p>Learn with real case studies from brands across industries</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        {/* <div className="container position-relative">
          <div className={styles.sliderNavigation}>
            <button className="swiper-button-prev" id="customPrev5"></button>
            <button className="swiper-button-next" id="customNext5"></button>
          </div>
        </div> */}
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
                spaceBetween: 40,
                // slidesOffsetBefore: 0,
                // slidesOffsetAfter: 30,
              },
              1840: {
                // slidesPerView: 3.3,
                spaceBetween: 40,
              },
            }}
            className={styles.swiper}
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id} className={styles.customSlide}>
                <CaseStudiesCard study={study} />
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
