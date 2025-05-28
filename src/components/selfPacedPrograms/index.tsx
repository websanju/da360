"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import styles from "./style.module.scss";
import CourseCard from "@components/widgets/courseCard";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";

const courses = [
  {
    title: "SEO AI Version 5.0 & Content Marketing",
    duration: "1 Month Course",
    assignments: "2 Assignments",
    projects: "Live Projects",
    bgColor: "#FFEAB2",
    imgSrc: "/images/self-1.png", // Update with your image path
  },
  {
    title: "Social Media Marketing & Content Creator",
    duration: "1 Month Course",
    assignments: "2 Assignments",
    projects: "Live Projects",
    bgColor: "#93EABF",
    imgSrc: "/images/self-2.png", // Update with your image path
  },
  {
    title: "Meme & Influencer Marketing",
    duration: "1 Month Course",
    assignments: "2 Assignments",
    projects: "Live Projects",
    bgColor: "#65B8D8",
    imgSrc: "/images/self-3.png", // Update with your image path
  },
  {
    title: "Creative Designing Video Designing",
    duration: "1 Month Course",
    assignments: "2 Assignments",
    projects: "Live Projects",
    bgColor: "#FFD6DA",
    imgSrc: "/images/self-4.png", // Update with your image path
  },
  {
    title: "Social Media Marketing & Content Creator",
    duration: "1 Month Course",
    assignments: "2 Assignments",
    projects: "Live Projects",
    bgColor: "#FFEAB2",
    imgSrc: "/images/self-1.png", // Update with your image path
  },
  {
    title: "Meme & Influencer Marketing",
    duration: "1 Month Course",
    assignments: "2 Assignments",
    projects: "Live Projects",
    bgColor: "#93EABF",
    imgSrc: "/images/self-2.png", // Update with your image path
  },
  {
    title: "Creative Designing Video Designing",
    duration: "1 Month Course",
    assignments: "2 Assignments",
    projects: "Live Projects",
    bgColor: "#65B8D8",
    imgSrc: "/images/self-3.png", // Update with your image path
  },
];

const SelfPacedPrograms = () => {
  return (
    <section className={styles.selfPacedProgramsSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionHeader}>
              <h2>Self-Paced Programs</h2>
              <p>Upskill Your Knowledge To Change Your Career Trajectory</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        {/* <div className="container position-relative">
          <div className={styles.sliderNavigation}>
            <button
              className={`${styles.swiperPrev} swiper-button-prev`}
              id="customPrev9"
            ></button>
            <button
              className={`${styles.swiperNext} swiper-button-next`}
              id="customNext9"
            ></button>
          </div>
        </div> */}

        <div className={styles.sliderInnerWrapper}>
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={20}
            slidesPerView="auto" // Same as the working slider
            scrollbar={{ draggable: true, el: "#customScrollbar9" }}
            navigation={{
              prevEl: "#customPrev9",
              nextEl: "#customNext9",
            }}
            pagination={{ clickable: false }}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            breakpoints={{
              0: {
                spaceBetween: 10,
              },
              768: {
                spaceBetween: 10,
              },
              992: {
                spaceBetween: 16,
              },
              1440: {
                spaceBetween: 20,
              },
              1840: {
                spaceBetween: 20,
              },
            }}
            className={styles.swiper}
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index} className={styles.customSlide}>
                <CourseCard
                  title={course.title}
                  duration={course.duration}
                  assignments={course.assignments}
                  projects={course.projects}
                  bgColor={course.bgColor}
                  imgSrc={course.imgSrc}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Custom scrollbar */}
        {/* <div id="customScrollbar9" className="swiper-scrollbar"></div> */}
        <div className={`${styles.controls} controls`}>
          <button id="customPrev9" className={`prevBtn ${styles.navBtn}`}>
            {" "}
            <RightArrow width={16} height={16} color="#000" />
          </button>
          <div
            id="customScrollbar9"
            className={`${styles.scrollbar} customScrollbar swiper-scrollbar`}
          ></div>
          <button id="customNext9" className={`nextBtn ${styles.navBtn}`}>
            {" "}
            <LeftArrow width={16} height={16} color="#000" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SelfPacedPrograms;
