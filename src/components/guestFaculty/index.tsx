"use client";

import React from "react";
import GuestFacultyCard from "@components/widgets/guestFacultyCard";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import SectionHeader from "@components/widgets/sectionHeader";
import "swiper/css";

const data = [
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "12+ years Experience",
    bgColor: "bgPink",
    profileImage: "/images/guestMentor/riya-tiwari.png",
  },
  {
    name: `Madhuraj P`,
    title: "Digital Marketing Trainer",
    bgColor: "bgBlue",
    profileImage: "/images/guestMentor/riya-tiwari.png",
  },
  {
    name: `Sathiyaseelan S`,
    title: "Digital Marketing Trainer",
    bgColor: "bgGreen",
    profileImage: "/images/guestMentor/riya-tiwari.png",
  },
  {
    name: `Swanand`,
    title: "Digital Marketing Trainer",
    bgColor: "bgGreen",
    profileImage: "/images/guestMentor/riya-tiwari.png",
  },
  {
    name: `Monisha Jain`,
    title: "Digital Marketing Trainer",
    bgColor: "bgGreen",
    profileImage: "/images/guestMentor/riya-tiwari.png",
  },
  {
    name: `Sujeeth H D`,
    title: "Digital Marketing Trainer",
    bgColor: "bgGreen",
    profileImage: "/images/guestMentor/riya-tiwari.png",
  },
  {
    name: `Anush Raj K`,
    title: "Digital Marketing Trainer",
    bgColor: "bgGreen",
    profileImage: "/images/guestMentor/riya-tiwari.png",
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
              title={<>Guest Faculty</>}
              maxWidth="650px"
              description="Gain Insights from World-Class Guest Faculty"
            />
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
