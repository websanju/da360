"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./style.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";
import CaseStudiesCard from "@components/widgets/caseStudiesCard";

import { CaseStudiesSection } from "../../types/caseStudies";

interface CaseStudiesSliderProps {
  data: CaseStudiesSection;
}

export default function CaseStudiesSlider({ data }: CaseStudiesSliderProps) {
  return (
    <section className={`${styles.caseStudiessection} caseStudiessection`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              titleMarginBottom={{ desktop: "20px", mobile: "10px" }}
              title={data.heading}
              description={data.subheading ?? ""}
            />
          </div>
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <div className={styles.sliderInnerc}>
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides={data.items.length <= 2}
            loop={false}
            scrollbar={
              data.items.length > 2
                ? { draggable: true, el: "#customScrollbar5" }
                : false
            }
            navigation={
              data.items.length > 2
                ? {
                    prevEl: "#customPrev5",
                    nextEl: "#customNext5",
                  }
                : false
            }
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            breakpoints={{
              0: { spaceBetween: 16, slidesOffsetBefore: 16 },
              768: { spaceBetween: 16, slidesOffsetBefore: 16 },
              992: { spaceBetween: 16 },
              1440: { spaceBetween: 40 },
              1840: { spaceBetween: 40 },
            }}
            className={styles.swiper}
          >
            {data.items.map((study) => (
              <SwiperSlide key={study.id} className={styles.customSlide}>
                <CaseStudiesCard study={study} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
