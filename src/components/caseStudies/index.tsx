"use client";
import React from "react";
// import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./style.module.scss";
import CaseStudiesCard from "@components/widgets/caseStudiesCard";
// import LeftArrow from "@components/Ui/svg/leftArrow";
// import RightArrow from "@components/Ui/svg/rightArrowLine";
import SectionHeader from "@components/widgets/sectionHeader";
// import LeftArrow from "@components/Ui/svg/leftArrow";

const caseStudies = [
  {
    id: 1,
    logo: "/images/mcdonalds-logo.png",
    title: "McDonald’s India – Localizing a Global Brand",
    description:
      "McDonald’s India adapted its global brand strategy to meet local market preferences—replacing beef-based offerings, introducing aloo tikki burgers, and launching value pricing to capture the price-sensitive  ",
    tags: [
      "Marketing Strategy",
      "Consumer Segmentation",
      "Localization in Campaigns",
      "Social Media Planning",
    ],
  },
  {
    id: 2,
    logo: "/images/motherdairy-logo.png",
    title: "Mother Dairy – Building Trust Through Content",
    description:
      "Mother Dairy strengthened its brand presence by focusing on emotional storytelling and purpose-driven marketing. Campaigns like `Rishton Ka Swad Badhaiye` positioned the brand as a part of Indian family life.",
    tags: [
      "Content Marketing",
      "SEO & Organic Reach",
      "Video Marketing Strategy",
      "Influencer Marketing",
    ],
  },
  {
    id: 3,
    logo: "/images/mcdonalds-logo.png",
    title: "Zomato – Data-Driven Performance Marketing",
    description:
      "Zomato scaled its customer acquisition by running high-performing campaigns during IPL seasons, using data-backed insights to target users based on cuisine preferences, location, and time of day. ",
    tags: [
      "Performance Marketing",
      "Google & Meta Ad Strategy",
      "Retargeting Campaigns",
      "A/B Testing & Optimization",
    ],
  },
];

export default function CaseStudiesSlider() {
  return (
    <section className={`${styles.caseStudiessection} caseStudiessection `}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              titleMarginBottom={{ desktop: "20px", mobile: "10px" }}
              title={
                <>
                  Glimpse of Brand <br /> Case Studies
                </>
              }
              description="Learn Through Real Business Challenges from Industry-Leading Brands"
            />
          </div>
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderInnerc}>
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides={caseStudies.length <= 2}
            loop={false}
            scrollbar={
              caseStudies.length > 2
                ? { draggable: true, el: "#customScrollbar5" }
                : false
            }
            navigation={
              caseStudies.length > 2
                ? {
                    prevEl: "#customPrev5",
                    nextEl: "#customNext5",
                  }
                : false
            }
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

      {/* <div className={`${styles.controls} controls`}>
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
      </div> */}
    </section>
  );
}
