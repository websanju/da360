"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/scrollbar";
import styles from "./style.module.scss";

interface Member {
  name: string;
  role: string;
  experience: string;
  img: string;
  companyLogo?: string | null;
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
  const [containerPaddingLeft, setContainerPaddingLeft] = useState(20);

  useEffect(() => {
    function updatePadding() {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerPaddingLeft(rect.left);
      }
    }
    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  if (members.length === 0) {
    return <p>No team members available.</p>;
  }

  return (
    <div
      ref={containerRef}
      className={styles.sliderWrapper}
      style={{ position: "relative", width: "100%" }}
    >
      <div className="row">
        <div className="col-md-12">
          <div
            className={styles.sliderInnerWrapper}
            style={{
              width: "100vw",
              marginLeft: `-${containerPaddingLeft}px`,
              paddingLeft: containerPaddingLeft,
              boxSizing: "border-box",
            }}
          >
            <Swiper
              slidesPerView={1.5}
              spaceBetween={10}
              scrollbar={{ draggable: true, el: "#customScrollbar" }}
              modules={[Scrollbar]}
              slidesOffsetBefore={0}
              slidesOffsetAfter={50}
              breakpoints={{
                768: { slidesPerView: 2.3, spaceBetween: 20 },
                992: { slidesPerView: 3.5, spaceBetween: 20 },
                1440: { slidesPerView: 3.5, spaceBetween: 20 },
                1840: { slidesPerView: 4.5, spaceBetween: 20 },
              }}
            >
              {members.map((member, index) => (
                <SwiperSlide key={index}>
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
                          {member.companyLogo && (
                            <div className={styles.companyLogo}>
                              <Image
                                src={member.companyLogo}
                                alt="Company Logo"
                                width={80}
                                height={40}
                                className="img-fluid"
                              />
                            </div>
                          )}
                        </div>
                        <div className={styles.memberInfo}>
                          <label>{member.role}</label>
                          <p className={styles.experience}>
                            {member.experience}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Custom scrollbar */}
      <div id="customScrollbar" className="swiper-scrollbar"></div>
    </div>
  );
};

export default TeamSlider;
