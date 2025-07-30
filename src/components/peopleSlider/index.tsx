"use client";
// import React, { useRef, useState, useEffect } from "react";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import styles from "./style.module.scss";
import Image from "next/image";
import { auto } from "@popperjs/core";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";
import SectionHeader from "@components/widgets/sectionHeader";

type Person = {
  id: number;
  name: string;
  designation?: string;
  image: string;
  profileImage?: string;
  type: "text" | "video" | "noBgVideo";
  modalHTML?: string;
  videoUrl?: string;
  bgColor: string;
  textColor?: string;
};

type SlideContent = Person[];

const slides: SlideContent[] = [
  [
    {
      id: 1,
      name: "Nivedth",
      image: "/images/video-testimonials/nivedth.jpg",
      designation: "Marketing Executive",
      type: "video",
      videoUrl: "/images/video-testimonials/nivedh.mp4",
      bgColor: "#E9492D",
    },
    {
      id: 2,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-1.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#4b896a",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 3,
      name: "Vinayak V",
      image: "/images/video-testimonials/vinayakvv.jpg",
      designation: "Social Media Marketing Specialist",
      type: "video",
      videoUrl: "/images/video-testimonials/vinayak.mp4",
      bgColor: "#9554CA",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 4,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#F6B39F",
      textColor: "#000",
    },
  ],
  [
    {
      id: 5,
      name: "Megha Lodha",
      image: "/images/video-testimonials/meghalodha.jpg",
      type: "video",
      videoUrl: "/images/video-testimonials/megha.mp4",
      designation: "Marketing Executive",
      bgColor: "#3ACFAF",
      textColor: "#fff",
    },
  ],

  [
    {
      id: 6,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-3.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#063F2E",
      textColor: "#fff",
    },
    {
      id: 7,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-4.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#8588E6",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 8,
      name: "Akshay",
      image: "/images/video-testimonials/meghalodha.jpg",
      type: "noBgVideo",
      videoUrl: "/images/video-testimonials/akshay.mp4",
      designation: "Marketing Executive",
      bgColor: "#3ACFAF",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 9,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#C5EBD4",
      textColor: "#000",
    },
  ],
  [
    {
      id: 1,
      name: "Ankita",
      image: "/images/video-testimonials/nivedth.jpg",
      designation: "Marketing Executive",
      type: "video",
      videoUrl: "/images/video-testimonials/ankita.mp4",
      bgColor: "#E9492D",
    },
    {
      id: 2,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-1.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#4b896a",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 3,
      name: "kesar",
      image: "/images/video-testimonials/vinayakvv.jpg",
      designation: "Social Media Marketing Specialist",
      type: "video",
      videoUrl: "/images/video-testimonials/kesar.mp4",
      bgColor: "#9554CA",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 4,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#FED3DA",
      textColor: "#000",
    },
  ],
  [
    {
      id: 5,
      name: "Madhu",
      image: "/images/video-testimonials/meghalodha.jpg",
      type: "video",
      videoUrl: "/images/video-testimonials/madhu.mp4",
      designation: "Marketing Executive",
      bgColor: "#3ACFAF",
      textColor: "#fff",
    },
  ],

  [
    {
      id: 6,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-3.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#063F2E",
      textColor: "#fff",
    },
    {
      id: 7,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-4.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#8588E6",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 8,
      name: "Nayil",
      image: "/images/video-testimonials/meghalodha.jpg",
      type: "noBgVideo",
      videoUrl: "/images/video-testimonials/nayil.mp4",
      designation: "Marketing Executive",
      bgColor: "#F6B39F",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 9,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#C5EBD4",
      textColor: "#000",
    },
  ],
  [
    {
      id: 1,
      name: "Ruchika",
      image: "/images/video-testimonials/nivedth.jpg",
      designation: "Marketing Executive",
      type: "video",
      videoUrl: "/images/video-testimonials/ruchika.mp4",
      bgColor: "#E9492D",
    },
    {
      id: 2,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-1.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#4b896a",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 3,
      name: "Sanyam",
      image: "/images/video-testimonials/vinayakvv.jpg",
      designation: "Social Media Marketing Specialist",
      type: "video",
      videoUrl: "/images/video-testimonials/sanyam.mp4",
      bgColor: "#9554CA",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 4,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#F6B39F",
      textColor: "#000",
    },
  ],
  [
    {
      id: 5,
      name: "Snehal",
      image: "/images/video-testimonials/meghalodha.jpg",
      type: "video",
      videoUrl: "/images/video-testimonials/snehal.mp4",
      designation: "Marketing Executive",
      bgColor: "#3ACFAF",
      textColor: "#fff",
    },
  ],

  [
    {
      id: 6,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-3.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#063F2E",
      textColor: "#fff",
    },
    {
      id: 7,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-4.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#8588E6",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 8,
      name: "Zeenath",
      image: "/images/video-testimonials/meghalodha.jpg",
      type: "noBgVideo",
      videoUrl: "/images/video-testimonials/zeenath.mp4",
      designation: "Marketing Executive",
      bgColor: "#3ACFAF",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 9,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#C5EBD4",
      textColor: "#000",
    },
  ],
];

type PeopleSliderProps = {
  title?: string;
  description?: string;
};

const PeopleSlider: React.FC<PeopleSliderProps> = ({ title, description }) => {
  const [selected, setSelected] = useState<Person | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (selected?.type === "video" && videoRef.current) {
      const video = videoRef.current;
      video.muted = false;
      video.play().catch((err) => {
        console.log("Autoplay with sound failed", err);
      });
    }
  }, [selected]);
  return (
    <>
      <section className={styles.peopleSliderSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHeader
                wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
                titleMarginBottom={{ desktop: "20px", mobile: "10px" }}
                title={
                  title ? (
                    <span dangerouslySetInnerHTML={{ __html: title }} />
                  ) : (
                    "Ambitious People @DA360"
                  )
                }
                maxWidthTitle="480px"
                description={description || "Hear it from them"}
              />
            </div>
          </div>
        </div>
        <div className={styles.sliderWrapper}>
          <div
            ref={containerRef}
            className={`${styles.sliderInnerWrapper} peoplesliderWrapper`}
          >
            <Swiper
              modules={[Navigation, Scrollbar]}
              scrollbar={{ draggable: true, el: "#customScrollbar6" }}
              spaceBetween={16}
              slidesPerView={auto}
              className={styles.slider}
              slidesOffsetBefore={20}
              slidesOffsetAfter={20}
              // slidesOffsetAfter={250}
              navigation={{
                prevEl: "#customPrev6",
                nextEl: "#customNext6",
              }}
              breakpoints={{
                0: {
                  spaceBetween: 16,
                },
                768: {
                  spaceBetween: 16,
                },
                992: {
                  spaceBetween: 20,
                },
                1440: {
                  spaceBetween: 20,
                },
                1840: {
                  spaceBetween: 20,
                },
              }}
            >
              {slides.map((group, index) => (
                <SwiperSlide key={index} className={styles.customSlide}>
                  <div className={styles.peopleItem}>
                    {group.map((person) => (
                      <div
                        key={person.id}
                        className={styles.card}
                        onClick={() => setSelected(person)}
                      >
                        {person.type === "video" ? (
                          <div
                            style={{ backgroundColor: person.bgColor }}
                            className={styles.videoContainer}
                          >
                            <div className={styles.videoItem}>
                              <div className={styles.videoImg}>
                                <Image
                                  src={person.image}
                                  width={243}
                                  height={193}
                                  alt={person.name}
                                  className={styles.image}
                                />
                                <div className={styles.videoIConBox}>
                                  <div className={styles.videoIcon}>
                                    <Image
                                      alt="play icon"
                                      width={22}
                                      height={22}
                                      src="images/play-btn.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.videoDetails}>
                                <strong>{person.name}</strong>
                                <p>{person.designation}</p>
                              </div>
                            </div>
                          </div>
                        ) : person.type === "text" ? (
                          <div
                            className={styles.textContainer}
                            style={{ backgroundColor: person.bgColor }}
                          >
                            <div className={styles.profileInfo}>
                              <div className={styles.modalImg}>
                                <Image
                                  src={
                                    person.profileImage ||
                                    "/images/Ambitious/default-avatar.svg"
                                  }
                                  alt={person.name}
                                  width={40}
                                  height={40}
                                  className={styles.profileImage}
                                />
                              </div>
                              <div className={styles.profileDetails}>
                                <strong style={{ color: person.textColor }}>
                                  {person.name}
                                </strong>
                                <p style={{ color: person.textColor }}>
                                  {person.designation}
                                </p>
                              </div>
                            </div>
                            <div
                              style={{ color: person.textColor }}
                              className={styles.textContent}
                              dangerouslySetInnerHTML={{
                                __html: person.modalHTML as string,
                              }}
                            />
                          </div>
                        ) : person.type === "noBgVideo" ? (
                          <div
                            className={`${styles.videoContainer} ${styles.videoBgBox}`}
                          >
                            <div className={styles.videoImg}>
                              <Image
                                src={person.image}
                                width={243}
                                height={193}
                                alt={person.name}
                                className={styles.image}
                              />
                              <div className={styles.videoIConBox}>
                                <div className={styles.videoIcon}>
                                  <Image
                                    alt="play icon"
                                    width={22}
                                    height={22}
                                    src="images/play-btn.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.videoDetails}>
                              <strong>{person.name}</strong>
                              <p>{person.designation}</p>
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={person.image}
                            width={243}
                            height={193}
                            alt={person.name}
                            className={styles.image}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* <div id="customScrollbar6" className="swiper-scrollbar"></div> */}
        <div className={`${styles.controls} controls`}>
          <button id="customPrev6" className={`prevBtn ${styles.navBtn}`}>
            {" "}
            <RightArrow width={16} height={16} color="#000" />
          </button>
          <div
            id="customScrollbar6"
            className={`${styles.scrollbar} customScrollbar swiper-scrollbar`}
          ></div>
          <button id="customNext6" className={`nextBtn ${styles.navBtn}`}>
            {" "}
            <LeftArrow width={16} height={16} color="#000" />
          </button>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="modal show d-block"
          tabIndex={-1}
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div
            className={`modal-dialog modal-dialog-centered ${styles.modalDialogCentered}`}
          >
            <div
              className={`${styles.modalContent} modal-content ${
                (selected?.type === "video" ||
                  selected?.type === "noBgVideo") &&
                !selected.videoUrl?.startsWith("http")
                  ? styles.customVideoModal
                  : ""
              }`}
              style={
                selected.type === "text"
                  ? { backgroundColor: selected.bgColor }
                  : {}
              }
            >
              <button
                type="button"
                className={`${styles.btnClose} btn-close btn-close2`}
                onClick={() => setSelected(null)}
              ></button>
              <div className={`${styles.modalbody} modal-body`}>
                {selected.type === "text" && selected.modalHTML && (
                  <div className={styles.modalTextbody}>
                    <div
                      style={{ color: selected.textColor }}
                      className={styles.modalText}
                      dangerouslySetInnerHTML={{ __html: selected.modalHTML }}
                    />
                    <div className={styles.modalFooter}>
                      <div className={styles.modalImg}>
                        <Image
                          src={
                            selected.profileImage ||
                            "/images/Ambitious/default-avatar.svg"
                          }
                          alt={selected.name}
                          width={40}
                          height={40}
                          className={styles.profileImage}
                        />
                      </div>
                      <div className={styles.modaldesignation}>
                        <strong>{selected.name}</strong>
                        <p className={styles.designation}>
                          {selected.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selected.type === "video" && selected.videoUrl && (
                  <div className={styles.videoBox}>
                    {selected.videoUrl.startsWith("http") ? (
                      <div className="ratio ratio-16x9">
                        <iframe
                          src={selected.videoUrl}
                          title={selected.name}
                          allowFullScreen
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                          }}
                        ></iframe>
                      </div>
                    ) : (
                      <video
                        ref={videoRef}
                        autoPlay
                        controls
                        playsInline
                        style={{ width: "100%", height: "100%" }}
                        src={selected.videoUrl}
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                )}

                {selected.type === "noBgVideo" && selected.videoUrl && (
                  <div className={styles.noBgVideo}>
                    {selected.videoUrl.startsWith("http") ? (
                      <div className="ratio ratio-16x9">
                        <iframe
                          src={selected.videoUrl}
                          title={selected.name}
                          allowFullScreen
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                          }}
                        ></iframe>
                      </div>
                    ) : (
                      <video
                        ref={videoRef}
                        autoPlay
                        controls
                        playsInline
                        style={{ width: "100%", height: "100%" }}
                        src={selected.videoUrl}
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PeopleSlider;
