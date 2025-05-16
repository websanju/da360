"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import styles from "./style.module.scss";
import Image from "next/image";
import ArrowLeft from "@components/Ui/svg/arrowLeft";

interface SlideProps {
  id: number;
  image: string;
  name: string;
  course: string;
  resumeLink: string;
}

const slides: SlideProps[] = [
  {
    id: 1,
    image: "/images/month-slider/slider.jpg",
    name: "Anushobikha S",
    course: "PGCP Course",
    resumeLink: "#",
  },
  {
    id: 2,
    image: "/images/month-slider/slider-1.jpg",
    name: "John Doe",
    course: "MBA Program",
    resumeLink: "#",
  },
  {
    id: 3,
    image: "/images/month-slider/slider-1.jpg",
    name: "Jane Smith",
    course: "Software Engineering",
    resumeLink: "#",
  },
];

const TopperOfMonthSlider = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sliderWrapper}>
              <div
                className={`${styles.container} container position-relative`}
              >
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
              </div>

              <div className={styles.sliderInnerWrapper}>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation={{
                    prevEl: "#customPrev9",
                    nextEl: "#customNext9",
                  }}
                  className={styles.swiper}
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className={styles.imageSlider}>
                        <Image
                          src={slide.image}
                          alt={slide.name}
                          width={1280}
                          height={500}
                          className={styles.sliderImage}
                        />
                        <div className={styles.monthBelt}>
                          <div className={styles.dektop}>
                            <Image
                              src="/images/month-slider/month-belt.svg"
                              alt={slide.name}
                              width={1411.66}
                              height={533.8}
                            />
                          </div>
                          <div className={styles.mobile}>
                            <Image
                              src="/images/month-slider/mobile-month-belt.svg"
                              alt={slide.name}
                              className={styles.monthmobile}
                              width={642.41}
                              height={242.92}
                            />
                          </div>
                        </div>
                        <div className={styles.slideContent}>
                          <span className={styles.name}>{slide.name}</span>
                          <span className={styles.course}>{slide.course}</span>
                        </div>
                        <div className={styles.viewResume}>
                          <a href={slide.resumeLink}>
                            View Resume{" "}
                            <i>
                              {" "}
                              <ArrowLeft />
                            </i>
                          </a>
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
    </section>
  );
};

export default TopperOfMonthSlider;
