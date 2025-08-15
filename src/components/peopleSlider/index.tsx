"use client";
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
import { slides, Person } from "@/data/videoTestimonial";
import Link from "next/link";

// ----- COMPONENT -----
type PeopleSliderProps = {
  title?: string;
  description?: string;
};

const truncateHTML = (html: string, maxLength: number) => {
  if (!html) return "";

  // Remove all HTML tags to get plain text
  const text = html.replace(/<[^>]*>?/gm, "");

  // Truncate if needed
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";
};

const PeopleSlider: React.FC<PeopleSliderProps> = ({ title, description }) => {
  const [selected, setSelected] = useState<Person | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play video when modal opens
  useEffect(() => {
    if (
      (selected?.type === "video" || selected?.type === "noBgVideo") &&
      videoRef.current
    ) {
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
              navigation={{
                prevEl: "#customPrev6",
                nextEl: "#customNext6",
              }}
              breakpoints={{
                0: { spaceBetween: 16 },
                768: { spaceBetween: 16 },
                992: { spaceBetween: 20 },
                1440: { spaceBetween: 20 },
                1840: { spaceBetween: 20 },
              }}
            >
              {slides.map((group, index) => (
                <SwiperSlide key={index} className={styles.customSlide}>
                  <div className={styles.peopleItem}>
                    {group.map((person) => (
                      <div
                        key={`${index}-${person.id}`}
                        className={styles.card}
                        onClick={() => {
                          if (person.type !== "viewMore") {
                            setSelected(person);
                          }
                        }}
                      >
                        {person.type === "video" ? (
                          <div
                            style={{ backgroundColor: person.bgColor }}
                            className={`${styles.videoContainer} ${
                              person.calssName ? styles[person.calssName] : ""
                            }`}
                          >
                            <div className={styles.videoItem}>
                              <div className={styles.videoImg}>
                                <Image
                                  src={person.image as string}
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
                            className={` ${styles.textContainer} ${
                              person.calssName ? styles[person.calssName] : ""
                            }`}
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
                                __html: truncateHTML(
                                  person.modalHTML as string,
                                  120
                                ), // ~2–3 lines worth
                              }}
                            />
                          </div>
                        ) : person.type === "noBgVideo" ? (
                          <div
                            className={`${styles.videoContainer} ${styles.videoBgBox}`}
                          >
                            <div className={styles.videoImg}>
                              <Image
                                src={person.image as string}
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
                        ) : person.type === "viewMore" ? (
                          <div
                            className={styles.viewMoreCard}
                            style={{ backgroundColor: person.bgColor }}
                          >
                            <Link href={"/testimonial"}>View all</Link>
                          </div>
                        ) : (
                          <Image
                            src={person.image as string}
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

        <div className={`${styles.controls} controls`}>
          <button id="customPrev6" className={`prevBtn ${styles.navBtn}`}>
            <RightArrow width={16} height={16} color="#000" />
          </button>
          <div
            id="customScrollbar6"
            className={`${styles.scrollbar} customScrollbar swiper-scrollbar`}
          ></div>
          <button id="customNext6" className={`nextBtn ${styles.navBtn}`}>
            <LeftArrow width={16} height={16} color="#000" />
          </button>
        </div>
      </section>

      {/* --- HIDDEN PRELOAD SECTION --- */}
      {/* <div style={{ display: "none" }}>
        {slides.flat().map(
          (person) =>
            (person.type === "video" || person.type === "noBgVideo") &&
            person.videoUrl && (
              <video key={person.id} preload="auto">
                <source src={person.videoUrl} type="video/mp4" />
              </video>
            )
        )}
      </div> */}

      <div style={{ display: "none" }}>
        {[
          ...new Map(
            slides
              .flat()
              .filter(
                (p) =>
                  (p.type === "video" || p.type === "noBgVideo") && p.videoUrl
              )
              .map((p) => [p.videoUrl, p]) // use videoUrl as unique key
          ).values(),
        ].map((person, index) => (
          <video key={`${index}-${person.id}`} preload="auto">
            <source src={person.videoUrl} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* --- MODAL --- */}
      {selected && (
        <div
          className="modal show d-block"
          tabIndex={-1}
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div
            className={`modal-dialog modal-dialog-centered ${
              selected.type === "text"
                ? styles.modalDialogText // new class for text modals
                : styles.modalDialogCentered
            }`}
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

                {(selected.type === "video" || selected.type === "noBgVideo") &&
                  selected.videoUrl && (
                    <div
                      className={
                        selected.type === "noBgVideo"
                          ? styles.noBgVideo
                          : styles.videoBox
                      }
                    >
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
                          preload="auto"
                          autoPlay
                          controls
                          playsInline
                          className={styles.videoEmployee}
                          style={{ width: "368px", height: "650px" }}
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
