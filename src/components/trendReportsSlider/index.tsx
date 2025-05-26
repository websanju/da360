"use client";
import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";
import styles from "./styles.module.scss";
import CaseStudiesCard from "@components/widgets/caseStudiesCard";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";

const caseStudies = [
  {
    id: 1,
    logo: "/images/mcdonalds-logo.png",
    title: "McDonald's case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    tags: ["Marketing Strategy", "SEO"],
  },
  {
    id: 2,
    logo: "/images/motherdairy-logo.png",
    title: "MotherDairy case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    tags: ["Marketing Strategy", "SEO"],
  },
  {
    id: 3,
    logo: "/images/oneplus.png",
    title: "McDonald's case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    tags: ["Marketing Strategy", "SEO"],
  },
  {
    id: 4,
    logo: "/images/mcdonalds-logo.png",
    title: "McDonald's case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    tags: ["Marketing Strategy", "SEO"],
  },
  {
    id: 5,
    logo: "/images/mcdonalds-logo.png",
    title: "McDonald's case Study",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    tags: ["Marketing Strategy", "SEO"],
  },
];

// Utility to extract unique brands from logos
const getUniqueBrands = (data: typeof caseStudies) => {
  const seen = new Set();
  return data.filter(({ logo }) => {
    if (seen.has(logo)) return false;
    seen.add(logo);
    return true;
  });
};

export default function CaseStudySlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const uniqueBrands = getUniqueBrands(caseStudies);
  const [selectedLogo, setSelectedLogo] = useState<string>("");

  const handleBrandClick = (logo: string) => {
    setSelectedLogo(logo); // ⬅️ Track selected brand
    const index = caseStudies.findIndex((study) => study.logo === logo);
    if (index !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(index, 500); // Slide to that card
    }
  };

  return (
    <div className={styles.trendReportsSlider}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionHeader}>
              <h2>Unlock 25,000+ Case Studies & Trend Reports </h2>
            </div>
            <div className={styles.brandLogos}>
              {uniqueBrands.map((brand, idx) => (
                <button
                  key={idx}
                  onClick={() => handleBrandClick(brand.logo)}
                  className={`${styles.logoBtn} ${
                    selectedLogo === brand.logo ? styles.active : ""
                  }`}
                >
                  <span>
                    <Image
                      width={60}
                      height={60}
                      src={brand.logo}
                      alt={brand.title}
                    />
                  </span>
                </button>
              ))}
              <div className={styles.more}>
                <a href="#">More+</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brand Logos */}

      {/* Swiper Slider */}

      <div className={styles.sliderInnerc}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Scrollbar]}
          spaceBetween={20}
          slidesPerView="auto"
          scrollbar={{ draggable: true, el: "#customScrollbar20" }}
          navigation={{ prevEl: "#customPrev20", nextEl: "#customNext20" }}
          slidesOffsetBefore={16}
          slidesOffsetAfter={40}
          breakpoints={{
            0: { spaceBetween: 16, slidesOffsetBefore: 16 },
            768: { spaceBetween: 16, slidesOffsetBefore: 16 },
            992: { spaceBetween: 16 },
            1440: { spaceBetween: 40 },
            1840: { spaceBetween: 40 },
          }}
          className={styles.swiper}
        >
          {caseStudies.map((study) => (
            <SwiperSlide key={study.id} className={styles.customSlide}>
              <CaseStudiesCard study={study} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Custom Nav & Scrollbar */}
              <div className={`${styles.controls} controlsWhite`}>
                <button id="customPrev20" className={styles.navBtn}>
                  <RightArrow width={16} height={16} color="#fff" />
                  {/* <Image
                    src={"/images/icons/sliderLeft.svg"}
                    alt={"leftArrow"}
                    width={16}
                    height={16}
                    className={styles.cardImage}
                  /> */}
                </button>
                <div
                  id="customScrollbar20"
                  className={`${styles.scrollbar} customScrollbarWhite`}
                ></div>
                <button id="customNext20" className={styles.navBtn}>
                  <LeftArrow width={16} height={16} color="#fff" />
                  {/* <Image
                    src={"/images/icons/sliderRight.svg"}
                    alt={"leftArrow"}
                    width={16}
                    height={16}
                    className={styles.cardImage}
                  /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
