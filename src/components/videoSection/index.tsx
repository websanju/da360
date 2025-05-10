"use client";
import React from "react";
// import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import VideoCard from "./VideoCard";
import styles from "./style.module.scss"; // optional for button custom styling
import { auto } from "@popperjs/core";

export default function VideoSection() {
  const videoData = [
    {
      thumbnail: "/images/video-c-1.png",
      videoUrl: "/images/videos/classroom-video-2.mp4",
      calssTitle: "Inside DA360",
      calssBtn: "CLASSROOM",
    },
    {
      thumbnail: "/images/video-c-1.png",
      videoUrl: "/images/videos/classroom-video-2.mp4",
      calssTitle: "Inside DA360",
      calssBtn: "CLASSROOM",
    },
    {
      thumbnail: "/images/video-c-2.png",
      videoUrl: "/images/videos/classroom-video-2.mp4",
      calssTitle: "Inside DA360",
      calssBtn: "CLASSROOM",
    },
    {
      thumbnail: "/images/video-c-3.png",
      videoUrl: "/images/videos/classroom-video-2.mp4",
      calssTitle: "Inside DA360",
      calssBtn: "CLASSROOM",
    },
    {
      thumbnail: "/images/video-c-1.png",
      videoUrl: "/images/videos/classroom-video-2.mp4",
      calssTitle: "Inside DA360",
      calssBtn: "CLASSROOM",
    },
    {
      thumbnail: "/images/video-c-1.png",
      videoUrl: "/images/videos/classroom-video-2.mp4",
      calssTitle: "Inside DA360",
      calssBtn: "CLASSROOM",
    },
    {
      thumbnail: "/images/video-c-1.png",
      videoUrl: "/images/videos/classroom-video-2.mp4",
      calssTitle: "Inside DA360",
      calssBtn: "CLASSROOM",
    },
  ];

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
    <section className={styles.videoSection}>
      <div className="container">
        <div className={`${styles.sectionHeader} row`}>
          <div className="col-md-12">
            <h2>Live Sessions Short Clips.</h2>
            <p>
              Sneak Peeks into Our Expert-Led Digital Marketing Training
              Sessions
            </p>
          </div>
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <div className="container position-relative">
          <div className={styles.sliderNavigation}>
            <button className="swiper-button-prev" id="customPrev8"></button>
            <button className="swiper-button-next" id="customNext8"></button>
          </div>
        </div>
        <div
          className={styles.sliderInnerWrapper}
          // style={{
          //   width: "100vw",
          //   marginLeft: `-${containerPaddingLeft}px`,
          //   paddingLeft: containerPaddingLeft,
          //   boxSizing: "border-box",
          // }}
        >
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={16}
            slidesPerView={auto}
            centeredSlides={false}
            slidesOffsetBefore={20}
            slidesOffsetAfter={20}
            navigation={{
              prevEl: "#customPrev8",
              nextEl: "#customNext8",
            }}
            loop={false}
            scrollbar={{ draggable: true, el: "#customScrollbar4" }}
            breakpoints={{
              768: {
                // slidesPerView: 2.5,
                spaceBetween: 20,
                // slidesOffsetAfter: 40,
              },
              992: {
                // slidesPerView: 2.8,
                spaceBetween: 20,
                // slidesOffsetAfter: 60,
              },
              1440: {
                // slidesPerView: 3.8,
                spaceBetween: 20,
                // slidesOffsetAfter: 340,
              },
              1840: {
                // slidesPerView: 4.5,
                // slidesPerView: 4.8,
                spaceBetween: 20,
                // slidesOffsetAfter: 440,
              },
            }}
          >
            {videoData.map((video, index) => (
              <SwiperSlide key={index} className={styles.customSlide}>
                <VideoCard
                  thumbnail={video.thumbnail}
                  videoUrl={video.videoUrl}
                  calssTitle={video.calssTitle}
                  calssBtn={video.calssBtn}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div id="customScrollbar4" className="swiper-scrollbar"></div>
    </section>
  );
}
