"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./style.module.scss";
import VideoCard from "./VideoCard";
import SectionHeader from "@components/widgets/sectionHeader";

type Slide = {
  id: number;
  videoUrl: string;
  videoThumbnail: string;
  classTitle?: string;
  classBtn?: string;
  feedback?: string;
  name: string;
  role: string;
  industry: string;
};
const slides: Slide[] = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/X1vljuZ-Ua8?si=x6VO6ZKqIBrqyCAA",
    videoThumbnail: "/images/video-thumb-1.jpg",
    classTitle: "Paid Ads",
    classBtn: "Watch Now",
    feedback:
      "As a B.Com graduate seeking an exciting career, Digital Academy 360's PG program was perfect. The hands-on experience from live projects gave me the confidence to become a freelancer, and I quickly landed my first social media marketing client. This course truly shaped my professional journey.",
    name: "Ruchika",
    role: "Digital Marketing",
    industry: "",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/cvm8--I5waY?si=WXqmUs70NtBG4e5y",
    videoThumbnail: "/images/video-thumb-1.jpg",
    classTitle: "Alumni 2",
    classBtn: "Watch Now",
    feedback:
      "As a diploma holder new to digital marketing, Digital Academy 360's PG program was a game-changer. The hands-on experience from live projects helped me master the necessary skills quickly. Thanks to their job-oriented approach, I landed a position as a digital marketing executive right after the course.",
    name: "Khezar A",
    role: "Digital Marketer",
    industry: "",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/GCmz1yFkhDY?si=ZlCFExZSbE4csqNw",
    videoThumbnail: "/images/video-thumb-1.jpg",
    classTitle: "Alumni 2",
    classBtn: "Watch Now",
    feedback:
      "After a seven-year career break, I found it difficult to restart my professional journey. Digital Academy 360's job-oriented program was the perfect solution. Through live projects, I gained the practical skills needed to secure multiple job offers. I highly recommend them for kickstarting a career in digital marketing.",
    name: "Shruthi",
    role: "Digital Marketer",
    industry: "",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/2M5pOCCKD1M?si=WCJJLIYz6GpXqKWG",
    videoThumbnail: "/images/video-thumb-1.jpg",
    classTitle: "Alumni 2",
    classBtn: "Watch Now",
    feedback:
      "Digital Academy 360's PG program in digital marketing was a career-transforming experience. Transitioning from mechanical engineering, I gained immense practical knowledge through live projects. This job-oriented course directly led to my placement at War Performance Marketing. I highly recommend it for aspiring digital marketers.",
    name: "Dnananjaya",
    role: "Digital Marketer",
    industry: "",
  },
];

export default function AlumniSlider() {
  return (
    <section className={styles.alumniSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              title={<>Hear from Our Alumni</>}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              style={{
                backgroundImage: "url('/images/bg-Alumni.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className={`${styles.sliderWrapper} sliderAlumniSlider`}
            >
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="row">
                      <div className="col-lg-7 d-flex ">
                        <VideoCard
                          thumbnail={slide.videoThumbnail}
                          videoUrl={slide.videoUrl}
                          isYouTube={true}
                        />
                      </div>
                      <div className="col-lg-5 d-flex ">
                        <div className={styles.feedback}>
                          <h3>{slide.name}</h3>
                          <label>
                            {slide.role} @ {slide.industry}
                          </label>
                          <span>{slide.classTitle}</span>
                          <div className={styles.description}>
                            {slide.feedback}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
