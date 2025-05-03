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
  companyLogo: string;
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
                  <div className={styles.memberCard}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={member.img}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="img-fluid"
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.memberContent}>
                        <h5>{member.name}</h5>
                        <div className={styles.companyLogo}>
                          <Image
                            src={member.companyLogo}
                            alt="Company Logo"
                            width={80}
                            height={40}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className={styles.memberInfo}>
                        <label>{member.role}</label>
                        <p className={styles.experience}>{member.experience}</p>
                      </div>
                    </div>
                  </div>
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
