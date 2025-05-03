"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import styles from "./style.module.scss";
import Image from "next/image";

type Person = {
  id: number;
  name: string;
  designation?: string;
  image: string;
  profileImage?: string;
  type: "text" | "video";
  modalHTML?: string;
  videoUrl?: string;
  bgColor: string;
};

type SlideContent = Person[];

const slides: SlideContent[] = [
  [
    {
      id: 1,
      name: "Nishank Koushak",
      image: "/images/Ambitious/video-1.png",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      bgColor: "#000",
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
    },
  ],
  [
    {
      id: 3,
      name: "Nishank Koushak",
      image: "/images/Ambitious/video-2.png",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      bgColor: "#000",
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
    },
  ],
  [
    {
      id: 5,
      name: "Nishank Koushak",
      image: "/images/Ambitious/video-3.png",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      bgColor: "#000",
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
    },
  ],
  [
    {
      id: 1,
      name: "Nishank Koushak",
      image: "/images/Ambitious/video-1.png",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      bgColor: "#000",
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
    },
  ],
  [
    {
      id: 5,
      name: "Nishank Koushak",
      image: "/images/Ambitious/video-3.png",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      bgColor: "#000",
    },
  ],
];

const PeopleSlider = () => {
  const [selected, setSelected] = useState<Person | null>(null);
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

  return (
    <>
      <section className={styles.peopleSliderSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.sectionheader}>
                <h2>Ambitious People @DA360</h2>
                <p>Hear it from them</p>
              </div>
            </div>
          </div>
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderNavigation}>
              <button className="swiper-button-prev" id="customPrev6"></button>
              <button className="swiper-button-next" id="customNext6"></button>
            </div>
            <div
              ref={containerRef}
              className={`${styles.sliderInnerWrapper} peoplesliderWrapper`}
              style={{
                width: "100vw",
                marginLeft: `-${containerPaddingLeft}px`,
                paddingLeft: containerPaddingLeft,
                boxSizing: "border-box",
              }}
            >
              <Swiper
                modules={[Navigation, Scrollbar]}
                scrollbar={{ draggable: true, el: "#customScrollbar6" }}
                spaceBetween={20}
                slidesPerView={5.5}
                className={styles.slider}
                slidesOffsetBefore={0}
                slidesOffsetAfter={250}
                navigation={{
                  prevEl: "#customPrev6",
                  nextEl: "#customNext6",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 40,
                  },
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 40,
                  },
                  992: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 40,
                  },
                  1440: {
                    slidesPerView: 4.5,
                    spaceBetween: 20,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 40,
                  },
                  1840: {
                    slidesPerView: 5.5,
                    spaceBetween: 20,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 40,
                  },
                }}
              >
                {slides.map((group, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.peopleItem}>
                      {group.map((person) => (
                        <div
                          key={person.id}
                          className={styles.card}
                          onClick={() => setSelected(person)}
                        >
                          <Image
                            src={person.image}
                            width={243}
                            height={193}
                            alt={person.name}
                            className={styles.image}
                          />
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div id="customScrollbar6" className="swiper-scrollbar"></div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="modal show d-block"
          tabIndex={-1}
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className={`${styles.modalContent} modal-content`}
              style={{ backgroundColor: selected.bgColor }}
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
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={selected.videoUrl}
                      title={selected.name}
                      allowFullScreen
                      style={{ width: "100%", height: "100%", border: "none" }}
                    ></iframe>
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
