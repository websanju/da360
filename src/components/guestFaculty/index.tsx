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
    name: `Deepak <br/> Soni`,
    title: "Digital Marketing Trainer",
    experience: "12+ years Experience",
    linkedinLink: "#",
    bgColor: "bgPink",
    image: {
      desktop: "/images/trainers/deepak.png",
      mobile: "/images/trainers/deepak.png",
    },
  },
  {
    name: `Madhuraj P`,
    title: "Digital Marketing Trainer",
    experience: "8+ years Experience",
    linkedinLink: "https://www.linkedin.com/in/madhuraj-p/",
    bgColor: "bgBlue",
    image: {
      desktop: "/images/trainers/madhu.png",
      mobile: "/images/trainers/madhu.png",
    },
  },
  {
    name: `Sathiyaseelan S`,
    title: "Digital Marketing Trainer",
    experience: "3+ years Experience",
    linkedinLink: "https://www.linkedin.com/in/sathiyaseelan1/",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/sathya.png",
      mobile: "/images/trainers/sathya.png",
    },
  },
  {
    name: `Swanand <br/> Patwardhan`,
    title: "Digital Marketing Trainer",
    experience: "8+ years Experience",
    linkedinLink: "https://www.linkedin.com/in/swanand-p/",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/swanand.png",
      mobile: "/images/trainers/swanand.png",
    },
  },
  {
    name: `Monisha Jain`,
    title: "Digital Marketing Trainer",
    experience: "3+ years Experience",
    linkedinLink: "https://www.linkedin.com/in/monishajainss/",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/monisha.png",
      mobile: "/images/trainers/monisha.png",
    },
  },
  {
    name: `Sujeeth H D`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    linkedinLink: "https://www.linkedin.com/in/sujeeth-hd-7988921b8/",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/sujeeth.png",
      mobile: "/images/trainers/sujeeth.png",
    },
  },
  {
    name: `Anush Raj K`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/anush.png",
      mobile: "/images/trainers/anush.png",
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
