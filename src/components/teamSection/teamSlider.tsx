"use client";
import React, { useRef } from "react";
// import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/scrollbar";
import styles from "./style.module.scss";
import { auto } from "@popperjs/core";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";
import Link from "next/link";

interface Member {
  name: string;
  role: string;
  experience: string;
  img: string;
  linkedinLink?: string | null;
  design?: string; // new field
  icon?: string; // new field
  iconPosition?: string;
  textColor?: string;
  iconImg?: string;
}

interface TeamSliderProps {
  members: Member[];
}

const TeamSlider = ({ members }: TeamSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  if (members.length === 0) {
    return (
      <div className={styles.teamnoavailable}>No team members available.</div>
    );
  }

  return (
    <div ref={containerRef} className={styles.sliderWrapper}>
      <div className={styles.sliderInnerWrapper}>
        <Swiper
          slidesPerView={auto}
          spaceBetween={10}
          scrollbar={{ draggable: true, el: "#customScrollbar" }}
          modules={[Navigation, Scrollbar]}
          slidesOffsetBefore={20}
          slidesOffsetAfter={50}
          navigation={{
            prevEl: "#customPrev9",
            nextEl: "#customNext9",
          }}
          breakpoints={{
            768: { slidesPerView: auto, spaceBetween: 20 },
            992: { slidesPerView: auto, spaceBetween: 20 },
            1440: { slidesPerView: auto, spaceBetween: 20 },
            1840: { slidesPerView: auto, spaceBetween: 20 },
          }}
        >
          {members.map((member, index) => (
            <SwiperSlide key={index} className={styles.customSlide}>
              {member.design === "new" ? (
                // 🆕 NEW DESIGN LAYOUT
                <div
                  className={styles.newCard}
                  style={{
                    backgroundImage: 'url("/images/team/team-bg.svg")',
                  }}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="img-fluid"
                    />
                    {/* {member.iconImg && (
                      <div
                        className={`${styles.icon} ${
                          member.iconPosition === "right"
                            ? styles.iconRight
                            : styles.iconLeft
                        }`}
                      >
                        <Image
                          src={member.iconImg}
                          alt="Icon"
                          width={60}
                          height={60}
                          className="img-fluid"
                        />
                      </div>
                    )} */}
                  </div>
                  <div className={styles.cardContent}>
                    <h5
                      className={styles.newName}
                      style={{ color: member.textColor }}
                    >
                      {member.name}
                    </h5>
                    <p className={styles.newRole}>{member.role}</p>
                  </div>
                </div>
              ) : (
                // 🔵 DEFAULT DESIGN LAYOUT
                <div className={`${styles.memberCard} ${styles.default}`}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="img-fluid"
                    />
                    {member.iconImg && (
                      <div
                        className={`${styles.icon} ${
                          member.iconPosition === "right"
                            ? styles.iconRight
                            : styles.iconLeft
                        }`}
                      >
                        <Image
                          src={member.iconImg}
                          alt="Icon"
                          width={60}
                          height={60}
                          className="img-fluid"
                        />
                      </div>
                    )}
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.memberContent}>
                      <h5>{member.name}</h5>
                      {member.linkedinLink && (
                        <Link
                          href={member.linkedinLink}
                          className={styles.companyLogo}
                        >
                          <Image
                            src={"/images/devicon_linkedin.svg"}
                            alt="Company Logo"
                            width={80}
                            height={40}
                            className="img-fluid"
                          />
                        </Link>
                      )}
                    </div>
                    <div className={styles.memberInfo}>
                      <label>{member.role}</label>
                      <p className={styles.experience}>{member.experience}</p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom scrollbar */}

      <div className={`${styles.controls} controls`}>
        <button id="customPrev9" className={`prevBtn ${styles.navBtn}`}>
          <RightArrow width={16} height={16} color="#000" />
        </button>
        <div
          id="customScrollbar"
          className={`${styles.scrollbar} customScrollbar swiper-scrollbar`}
        ></div>
        <button id="customNext9" className={`nextBtn ${styles.navBtn}`}>
          <LeftArrow width={16} height={16} color="#000" />
        </button>
      </div>
    </div>
  );
};

export default TeamSlider;
