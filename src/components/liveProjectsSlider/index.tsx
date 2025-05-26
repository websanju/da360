"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";
import styles from "./style.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TickBlack from "@/components/Ui/svg/tickBlack";
import ArrowUp from "@/components/Ui/svg/arrowUp";
import { auto } from "@popperjs/core";

interface Project {
  id: number;
  title: string;
  duration: string;
  heading: string;
  details: string[];
  steps: string[];
  note: string;
  logos: string[];
  bgGradient: string;
  bgsolid: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Meta & Google Ads 1",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "Here, you’ll be creating and executing an ad campaign for the brand Unleavables* which will include:",
    details: [
      "Understanding the brand and business objectives",
      "Understanding the target audience",
      "Creating media plan, ad copies, bidding strategies, placement strategies and delivery methods",
    ],
    steps: [
      "Project Briefing",
      "Meeting with the industry experts",
      "Making the campaigns live with given budget",
      "Media strategy submission & campaign optimization",
      "Campaign ends and final reports are created",
    ],
    note: "Presentations and Mock Interviews",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 217, 205, 0) 0%, #CDFFDE 53.35%)",
    bgsolid: "#CDFFDE",
  },
  {
    id: 2,
    title: "Meta & Google Ads 2",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "Here, you’ll be creating and executing an ad campaign for the brand Unleavables* which will include:",
    details: [
      "Understanding the brand and business objectives",
      "Understanding the target audience",
      "Creating media plan, ad copies, bidding strategies, placement strategies and delivery methods",
    ],
    steps: [
      "Project Briefing",
      "Meeting with the industry experts",
      "Making the campaigns live with given budget",
      "Media strategy submission & campaign optimization",
      "Campaign ends and final reports are created",
    ],
    note: "Presentations and Mock Interviews",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 240, 205, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 3,
    title: "Meta & Google Ads 3",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "Here, you’ll be creating and executing an ad campaign for the brand Unleavables* which will include:",
    details: [
      "Understanding the brand and business objectives",
      "Understanding the target audience",
      "Creating media plan, ad copies, bidding strategies, placement strategies and delivery methods",
    ],
    steps: [
      "Project Briefing",
      "Meeting with the industry experts",
      "Making the campaigns live with given budget",
      "Media strategy submission & campaign optimization",
      "Campaign ends and final reports are created",
    ],
    note: "Presentations and Mock Interviews",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(205, 255, 236, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 4,
    title: "Meta & Google Ads 4",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "Here, you’ll be creating and executing an ad campaign for the brand Unleavables* which will include:",
    details: [
      "Understanding the brand and business objectives",
      "Understanding the target audience",
      "Creating media plan, ad copies, bidding strategies, placement strategies and delivery methods",
    ],
    steps: [
      "Project Briefing",
      "Meeting with the industry experts",
      "Making the campaigns live with given budget",
      "Media strategy submission & campaign optimization",
      "Campaign ends and final reports are created",
    ],
    note: "Presentations and Mock Interviews",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(205, 255, 236, 0) 0%, #CECDFF 53.35%)",
    bgsolid: "#CECDFF",
  },
];

export default function LiveProjectsSlider() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(1); // Default to slide 2

  const handleTabClick = (index: number) => {
    swiperRef.current?.slideTo(index); // Simplified tab navigation without loop
  };

  return (
    <section className={styles.liveProjectsSlider}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionHeader}>
              <h2>Digital Marketing Live Projects</h2>
            </div>
          </div>
        </div>

        <div className={`${styles.tabButtons}`}>
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
      <div className="swiper-pagination text-center" />

      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className={styles.btnAction}>
              <button className="btnWhite">
                Download The Project Report <ArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
