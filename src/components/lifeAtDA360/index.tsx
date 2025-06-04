"use client";
import React, { useState } from "react";
// import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./style.module.scss";
import { auto } from "@popperjs/core";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";
import SectionHeader from "@components/widgets/sectionHeader";

const LifeAtDA360 = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const slides = [
    {
      title: "AI IN DIGITAL MARKETING BOOTCAMP",
      img: "/images/video-1.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "STATE OF THE ART FACILITIES",
      img: "/images/video-2.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "EVENTS & WORKSHOPS",
      img: "/images/video-3.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "EVENTS & WORKSHOPS",
      img: "/images/video-1.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
  };
  const handleBack = () => {
    setPlayingIndex(null);
  };
  return (
    <section className={styles.lifeAtDA360Section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              titleMarginBottom={{ desktop: "24px", mobile: "10px" }}
              title={<>Students @ DA360</>}
              maxWidth="580px"
              description="An Ecosystem of Learning, Competition & Growth
Explore Creativity and strategic thinking through exclusive student competitions"
            />
          </div>
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderInnerWrapper}>
          <Swiper
            slidesPerView={auto}
            spaceBetween={20}
            scrollbar={{ draggable: true, el: "#customScrollbar2" }}
            slidesOffsetBefore={16}
            slidesOffsetAfter={20}
            navigation={{
              prevEl: "#customPrev8",
              nextEl: "#customNext8",
            }}
            breakpoints={{
              768: {
                spaceBetween: 20,
                slidesOffsetAfter: 20,
              },
              992: {
                spaceBetween: 20,
                slidesOffsetAfter: 20,
              },
              1440: {
                spaceBetween: 20,
                slidesOffsetAfter: 20,
              },
              1840: {
                spaceBetween: 20,
                slidesOffsetAfter: 20,
              },
            }}
            modules={[Scrollbar, Navigation]}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className={styles.customSlide}>
                <div
                  className={`${styles.videoBoxBlock} position-relative overflow-hidden`}
                >
                  {playingIndex === index ? (
                    <div
                      className={`${styles.videoBox} ratio ratio-16x9`}
                      style={{ minHeight: "420px" }}
                    >
                      <iframe
                        src={`${slide.videoUrl}?autoplay=1`}
                        title="Video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-100 h-100"
                        style={{ minHeight: "420px" }}
                      ></iframe>
                      {/* Back Button */}
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{
                          opacity: 0,
                          transition: "opacity 0.3s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.opacity = "0")
                        }
                      >
                        <button className={styles.plaYbtn} onClick={handleBack}>
                          <Image
                            src={"/images/push-btn.svg"}
                            alt={"slide.title"}
                            width={72}
                            height={72}
                          />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className={`${styles.videoImgBox} `}>
                        <Image
                          src={slide.img}
                          alt={slide.title}
                          className="img-fluid w-100"
                          width={600}
                          height={420}
                          style={{ objectFit: "cover", height: "420px" }}
                        />
                      </div>
                      <div className="position-absolute top-50 start-50 translate-middle">
                        <button
                          className={styles.plaYbtn}
                          onClick={() => handlePlay(index)}
                        >
                          <Image
                            src={"/images/play-btn.svg"}
                            alt={"slide.title"}
                            width={72}
                            height={72}
                          />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={`${styles.controls} controls`}>
              <button id="customPrev8" className={`prevBtn ${styles.navBtn}`}>
                {" "}
                <RightArrow width={16} height={16} color="#000" />
              </button>
              <div
                id="customScrollbar2"
                className={`${styles.scrollbar} customScrollbar swiper-scrollbar`}
              ></div>
              <button id="customNext8" className={`nextBtn ${styles.navBtn}`}>
                {" "}
                <LeftArrow width={16} height={16} color="#000" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtDA360;
