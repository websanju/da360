"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./style.module.scss";
import Image from "next/image";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerPaddingLeft, setContainerPaddingLeft] = useState(20);

  useEffect(() => {
    function updatePadding() {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerPaddingLeft(rect.left);
      }
    }
    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

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
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderNavigation}>
            <button className="swiper-button-prev" id="customPrev5"></button>
            <button className="swiper-button-next" id="customNext5"></button>
          </div>
          <div
            className={styles.sliderInnerc}
            style={{
              width: "100vw",
              marginLeft: `-${containerPaddingLeft}px`,
              paddingLeft: containerPaddingLeft,
              boxSizing: "border-box",
            }}
          >
            <Swiper
              modules={[Navigation, Scrollbar]}
              spaceBetween={40}
              slidesPerView={2.5}
              scrollbar={{ draggable: true, el: "#customScrollbar5" }}
              navigation={{
                prevEl: "#customPrev5",
                nextEl: "#customNext5",
              }}
              pagination={{ clickable: false }}
              slidesOffsetBefore={0}
              slidesOffsetAfter={350}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 16,
                  slidesOffsetBefore: 0,
                  slidesOffsetAfter: 30,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 16,
                  slidesOffsetBefore: 0,
                  slidesOffsetAfter: 30,
                },
                992: {
                  slidesPerView: 2.5,
                  spaceBetween: 16,
                  slidesOffsetBefore: 5,
                  slidesOffsetAfter: 60,
                },
                1440: {
                  slidesPerView: 3.3,
                  spaceBetween: 40,
                  slidesOffsetBefore: 0,
                  slidesOffsetAfter: 30,
                },
                1840: {
                  slidesPerView: 3.3,
                  spaceBetween: 40,
                },
              }}
              className={styles.swiper}
            >
              {caseStudies.map((study) => (
                <SwiperSlide key={study.id}>
                  <div className={styles.card}>
                    <div className={styles.cardImg}>
                      <Image
                        src={study.logo}
                        alt={study.title}
                        width={82}
                        height={62}
                        className={styles.logo}
                      />
                    </div>
                    <div className={styles.cardDescription}>
                      <h3>{study.title}</h3>
                      <p className={styles.desc}>
                        {study.description} <a href="#">Know More</a>
                      </p>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.skills}>
                      <span className={styles.skillsLable}>Skills Learned</span>
                      <div className={styles.tags}>
                        {study.tags.map((tag, idx) => (
                          <span key={idx} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* Custom scrollbar */}
        <div id="customScrollbar5" className="swiper-scrollbar"></div>
      </div>
    </section>
  );
}
