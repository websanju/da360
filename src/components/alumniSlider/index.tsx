"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./style.module.scss";
import VideoCard from "./VideoCard";

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
    videoUrl: "/images/videos/classroom-video-2.mp4",
    videoThumbnail: "/images/video-thumb-1.jpg",
    classTitle: "Paid Ads",
    classBtn: "Watch Now",
    feedback:
      "The stakes I took were very high. So, I wanted the program tio be very strict and into us. And, thats what i got. Because there were long hours, 8-10 hours per day. It was very systematic and it was very well organised.",
    name: "Preethi Sharma",
    role: "Media Planner @ Madison world",
    industry: "Madison World",
  },
  {
    id: 2,
    videoUrl: "/images/videos/classroom-video-2.mp4",
    videoThumbnail: "/images/video-thumb-1.jpg",
    classTitle: "Alumni 2",
    classBtn: "Watch Now",
    feedback:
      "The stakes I took were very high. So, I wanted the program tio be very strict and into us. And, thats what i got. Because there were long hours, 8-10 hours per day. It was very systematic and it was very well organised.",
    name: "Rohan Mehta",
    role: "Digital Marketer",
    industry: "Zeno Group",
  },
];

export default function AlumniSlider() {
  return (
    <section className={styles.alumniSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionheader}>
              <h2>Hear from Our Alumni</h2>
            </div>
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
