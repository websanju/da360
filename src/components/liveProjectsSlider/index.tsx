// components/LiveProjectsSlider.tsx
"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";
import styles from "./style.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import TickBlack from "@/components/Ui/svg/tickBlack";
import ArrowUp from "@/components/Ui/svg/arrowUp";
import SectionHeader from "@components/widgets/sectionHeader";
import { auto } from "@popperjs/core";

export interface Project {
  id: number;
  title: string;
  duration: string;
  heading: string;
  details: string[];
  steps: string[];
  note?: string;
  logos: string[];
  bgGradient: string;
  bgsolid: string;
}

interface LiveProjectsSliderProps {
  section?: string;
  heading: string;
  description?: string;
  projects: Project[];
}

export default function LiveProjectsSlider({
  section,
  heading,
  description,
  projects,
}: LiveProjectsSliderProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <section className={styles.liveProjectsSlider} id={section}>
      <div className="container">
        <SectionHeader
          wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
          titleMarginBottom={{ desktop: "20px", mobile: "20px" }}
          description={description}
          title={<>{heading}</>}
        />

        {/* Tabs */}
        <div className={styles.tabButtons}>
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => handleTabClick(index)}
              className={`btn btn-outline-dark mx-1 ${
                index === activeIndex ? styles.activeTab : ""
              }`}
            >
              Project {project.id}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderNavigation}>
          <button className="swiper-button-prev" id="customPrev8"></button>
          <button className="swiper-button-next" id="customNext8"></button>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={auto}
          centeredSlides={true}
          slidesOffsetAfter={20}
          slidesOffsetBefore={20}
          spaceBetween={20}
          initialSlide={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Adjust for non-loop
          navigation={{
            prevEl: "#customPrev8",
            nextEl: "#customNext8",
          }}
          // pagination={{
          //   el: ".swiper-pagination",
          //   clickable: true,
          //   renderBullet: (index, className) =>
          //     `<span class="${className}">${index + 1}</span>`,
          // }}
          breakpoints={{
            0: {
              // slidesPerView: 1.2,
              spaceBetween: 20,
              // centeredSlides: false, // Mobile
              slidesOffsetBefore: 16,
              slidesOffsetAfter: 30,
            },
            768: {
              // slidesPerView: 1.3,
              spaceBetween: 20,
              // centeredSlides: false, // Tablet
              // slidesOffsetAfter: 140,
              slidesOffsetBefore: 16,
            },
            992: {
              // slidesPerView: 1.2,
              spaceBetween: 20,
              // centeredSlides: false, // Tablet
              // slidesOffsetAfter: 140,
              slidesOffsetBefore: 30,
            },
            1440: {
              // slidesPerView: 1.4,
              spaceBetween: 20,
              // slidesOffsetAfter: 340,
            },
            1840: {
              // slidesPerView: 1.8,
              spaceBetween: 20,
              // slidesOffsetAfter: 340,
            },
          }}
          className={styles.slider}
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={`project-${index}`}
              className={styles.swiperSlide}
            >
              <div
                className={`card ${styles.projectCard}`}
                style={{
                  ["--bg-color" as string]: project.bgGradient,
                  ["--bg-solidcolor" as string]: project.bgsolid,
                }}
              >
                <div className="row">
                  <div className="col-xl-6 ">
                    <div className={styles.projectDetils}>
                      <div>
                        <h5 className={styles.projectId}>
                          Project {project.id}
                        </h5>
                        <h4 className={styles.projectTitle}>{project.title}</h4>
                        <div className={styles.duration}>
                          <label>Duration</label>
                          <span>{project.duration}</span>
                        </div>
                        <div className={styles.heading}>{project.heading}</div>
                        <ul className={styles.details}>
                          {project.details.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={`${styles.logos} ${styles.logosDesktop}`}>
                        {project.logos.map((logo, idx) => (
                          <Image
                            key={idx}
                            src={`/images/${logo}`}
                            alt="logo"
                            height={50}
                            width={120}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 d-flex justify-content-center">
                    <div>
                      <div className={styles.floatingCard}>
                        <div className={styles.projectIcon}>
                          <Image
                            src={`/images/project-icon.svg`}
                            alt="logo"
                            height={97}
                            width={94}
                          />
                        </div>
                        <ul className="text-start">
                          {project.steps.map((step, idx) => (
                            <li key={idx}>
                              {" "}
                              <TickBlack />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                        <p>{project.note}</p>
                      </div>
                      <div className={`${styles.logos} ${styles.mobileLogos}`}>
                        {project.logos.map((logo, idx) => (
                          <Image
                            key={idx}
                            src={`/images/${logo}`}
                            alt="logo"
                            height={50}
                            width={120}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Call to Action */}
      <div className="container text-center mt-4">
        <button className="btnWhite">
          Download The Project Report <ArrowUp />
        </button>
      </div>
    </section>
  );
}
