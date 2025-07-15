"use client";

import React from "react";
import GuestFacultyCard from "@components/widgets/guestFacultyCard";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import SectionHeader from "@components/widgets/sectionHeader";
import { auto } from "@popperjs/core";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";
import "swiper/css";

const data = [
  {
    name: `Riya <br/> Tiwari`,
    title: "Founder at Authique",
    experience: "12+ years Experience",
    linkedinLink: "#",
    bgColor: "bgGreay",
    image: {
      desktop: "/images/guestMentor/riya-tiwari.png",
      mobile: "/images/guestMentor/riya-tiwari.png",
    },
  },
  {
    name: `Rajesh Choudhury`,
    title: "DGM Digital Marketing at Purvankara",
    experience: "8+ years Experience",
    linkedinLink: "#",
    bgColor: "bgGreay",
    image: {
      desktop: "/images/guestMentor/rajesh-choudhury.png",
      mobile: "/images/guestMentor/rajesh-choudhury.png",
    },
  },
];
interface GuestFacultySectionProps {
  section?: string;
}
const GuestFacultySection = ({ section }: GuestFacultySectionProps) => {
  return (
    <section className={styles.guestFaculty} id={section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              titleMarginBottom={{ desktop: "16px", mobile: "10px" }}
              title={<> Guest Mentors</>}
              maxWidth="650px"
              description="Gain Insights from World-Class Guest Faculty"
            />
          </div>
        </div>
      </div>
      {/* Desktop Grid */}
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderInnerWrapper}>
          <Swiper
            slidesPerView={auto}
            spaceBetween={20}
            scrollbar={{ draggable: true, el: "#GuestFaculty22" }}
            slidesOffsetBefore={16}
            slidesOffsetAfter={20}
            navigation={{
              prevEl: "#GuestFacultyPrev",
              nextEl: "#GuestFacultyNext",
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
            {data.map((item, index) => (
              <SwiperSlide key={index} className={styles.customSlide}>
                <GuestFacultyCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={`${styles.controls} controls`}>
              <button
                id="GuestFacultyPrev"
                className={`prevBtn ${styles.navBtn}`}
              >
                {" "}
                <RightArrow width={16} height={16} color="#000" />
              </button>
              <div
                id="GuestFaculty22"
                className={`${styles.scrollbar} customScrollbar swiper-scrollbar`}
              ></div>
              <button
                id="GuestFacultyNext"
                className={`nextBtn ${styles.navBtn}`}
              >
                {" "}
                <LeftArrow width={16} height={16} color="#000" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Custom scrollbar */}
    </section>
  );
};

export default GuestFacultySection;
