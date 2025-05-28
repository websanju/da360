"use client";

import React from "react";
import GuestFacultyCard from "@components/widgets/guestFacultyCard";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";

const data = [
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    logo: "/images/jeet.png",
    bgColor: "bgPink",
    image: {
      desktop: "/images/faculty1.png",
      mobile: "/images/faculty1m.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    logo: "/images/zer.png",
    bgColor: "bgBlue",
    image: {
      desktop: "/images/faculty2.png",
      mobile: "/images/faculty1m.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    logo: "/images/value.png",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/faculty3.png",
      mobile: "/images/faculty1m.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    logo: "/images/value.png",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/faculty4.png",
      mobile: "/images/faculty1m.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    logo: "/images/value.png",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/faculty5.png",
      mobile: "/images/faculty1m.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    logo: "/images/value.png",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/faculty6.png",
      mobile: "/images/faculty1m.png",
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
            <div className={styles.sectionHeader}>
              <h2>Guest Faculty</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Grid */}
      <div className="container">
        <div className={`${styles.row} row d-none d-md-flex`}>
          {data.map((item, index) => (
            <div className="col-md-4" key={index}>
              <GuestFacultyCard {...item} />
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="row d-md-none">
          <div className="col-md-12">
            <Swiper
              modules={[Navigation, Scrollbar]}
              spaceBetween={10}
              slidesPerView="auto"
              scrollbar={{ draggable: true, el: "#customScrollbar16" }}
              slidesOffsetBefore={10}
              slidesOffsetAfter={0}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index} className={styles.customSlide}>
                  <GuestFacultyCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom scrollbar */}
            <div id="customScrollbar16" className="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestFacultySection;
