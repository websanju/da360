"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import styles from "./style.module.scss";
import StudentCard from "@components/widgets/studentCard";

const student = [
  {
    name: "Praveen",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#4A6EE6",
    imgSrc: "/images/student-1.png",
  },
  {
    name: "Anjali",
    designation: "PPC TRAINEE",
    company: "VALUELEAF",
    bgColor: "#4CCE6D",
    imgSrc: "/images/student-1.png",
  },
  {
    name: "Mayank",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#FFCD5E",
    imgSrc: "/images/student-1.png",
  },
  {
    name: "Mayank",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#945EFF",
    imgSrc: "/images/student-1.png",
  },
  {
    name: "Mayank",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#E53F43",
    imgSrc: "/images/student-1.png",
  },
  {
    name: "Mayank",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#FFCD5E",
    imgSrc: "/images/student-1.png",
  },
  {
    name: "Mayank",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#945EFF",
    imgSrc: "/images/student-1.png",
  },
  {
    name: "Mayank",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#E53F43",
    imgSrc: "/images/student-1.png",
  },
  {
    name: "Mayank",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#FFCD5E",
    imgSrc: "/images/student-1.png",
  },
  {
    name: "Mayank",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#945EFF",
    imgSrc: "/images/student-1.png",
  },
  {
    name: "Mayank",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#E53F43",
    imgSrc: "/images/student-1.png",
  },
];

const SelfPacedPrograms = () => {
  return (
    <section className={styles.learnSliderSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionHeader}>
              <h2>
                Our Learners
                <br /> Our Brand
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <div className="container position-relative">
          <div className={styles.sliderNavigation}>
            <button
              className={`${styles.swiperPrev} swiper-button-prev`}
              id="customPrev10"
            ></button>
            <button
              className={`${styles.swiperNext} swiper-button-next`}
              id="customNext10"
            ></button>
          </div>
        </div>

        <div className={styles.sliderInnerWrapper}>
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={10}
            slidesPerView="auto" // Same as the working slider
            scrollbar={{ draggable: true, el: "#customScrollbar10" }}
            navigation={{
              prevEl: "#customPrev10",
              nextEl: "#customNext10",
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
            {student.map((student, index) => (
              <SwiperSlide key={index} className={styles.customSlide}>
                <StudentCard
                  name={student.name}
                  designation={student.designation}
                  company={student.company}
                  bgColor={student.bgColor}
                  imgSrc={student.imgSrc}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Custom scrollbar */}
        <div id="customScrollbar10" className="swiper-scrollbar"></div>
      </div>
    </section>
  );
};

export default SelfPacedPrograms;
