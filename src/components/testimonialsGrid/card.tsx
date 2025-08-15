"use client";
import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { logoMap } from "./logoMap";
// import { usePopup } from "@components/widgets/popup/PopupContext";

type Testimonial = {
  brand?: string;
  id: number;
  type: "text" | "video" | "logo";
  name: string;
  review?: string;
  rating: number;
  avatar: string;
  source?: string;
  videoUrl?: string;
  logoUrl?: string;
};

const Card = ({ item }: { item: Testimonial }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const logoKey = item.brand?.toLowerCase() || "";
  // const { openPopup } = usePopup();
  // const { closePopup } = usePopup();
  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  // const handleReviewClick = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   if (item.review) {
  //     openPopup(
  //       <div className={styles.popupContent}>
  //         <button className={styles.closeButton} onClick={() => closePopup()}>
  //           <Image
  //             src="/images/icons/close.svg"
  //             alt="logo"
  //             width={14}
  //             height={14}
  //           />
  //         </button>
  //         <h3>{item.name}</h3>
  //         <p>{item.review}</p>
  //       </div>,
  //       {
  //         title: `Review`,
  //       }
  //     );
  //   }
  // };

  return (
    <div className={styles.card}>
      {item.type === "text" && (
        <>
          <div className={styles.cardHeader}>
            <div className={styles.quoteIcon}>
              <Image
                src="/images/icons/tquote.svg"
                width={53}
                height={53}
                alt={"tquote"}
                unoptimized
              />
            </div>
            <div className={styles.star}>
              {[...Array(item.rating)].map((_, i) => (
                <Image
                  key={i}
                  src="/images/icons/rating.svg"
                  alt="star"
                  width={24}
                  height={24}
                  unoptimized
                />
              ))}
            </div>
          </div>
          {/* onClick={handleReviewClick} */}
          <p className={styles.review}>{item.review}</p>
          <div className={styles.footer}>
            <Image
              src={item.avatar}
              width={40}
              height={40}
              alt={item.name}
              className={styles.avatar}
            />
            <div>
              <div className={styles.name}>{item.name}</div>
              {item.source && (
                <div className={styles.source}>{item.source}</div>
              )}
            </div>
          </div>
        </>
      )}

      {item.type === "video" && (
        <>
          <div
            className={styles.videoWrapper}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className={styles.cardHeader}>
              <div className={styles.quoteIcon}>
                <Image
                  src="/images/icons/tquote.png"
                  width={53}
                  height={53}
                  alt={item.name}
                />
              </div>
              <div className={styles.star}>
                {[...Array(item.rating)].map((_, i) => (
                  <Image
                    key={i}
                    src="/images/icons/rating.svg"
                    alt="star"
                    width={24}
                    height={24}
                    unoptimized
                  />
                ))}
              </div>
            </div>

            <div className={styles.videoContainer}>
              {/* {!isPlaying && (
                <div className={styles.videoThumbs}>
                  <Image
                    src="/images/testimonials/video-thumb.png"
                    alt="thumbnail"
                    width={500}
                    height={300}
                    unoptimized
                  />
                </div>
              )} */}
              <video
                ref={videoRef}
                playsInline
                preload="metadata"
                className={styles.video}
                // poster="/images/testimonials/digital-academy-360-testimonials-deepak.png"
              >
                <source src={item.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {!isPlaying && (
                <button className={styles.plaYbtn} onClick={handlePlay}>
                  <Image
                    src={"/images/play-btn.svg"}
                    alt={"Play"}
                    width={72}
                    height={72}
                  />
                </button>
              )}

              {isPlaying && hovered && (
                <button className={styles.plaYbtn} onClick={handleStop}>
                  <Image
                    src={"/images/push-btn.svg"}
                    alt={"Pause"}
                    width={72}
                    height={72}
                  />
                </button>
              )}
            </div>
          </div>
          <div className={styles.footer}>
            <Image
              src={item.avatar}
              width={40}
              height={40}
              alt={item.name}
              className={styles.avatar}
            />
            <div>
              <div className={styles.name}>{item.name}</div>
              {item.source && (
                <div className={styles.source}>{item.source}</div>
              )}
            </div>
          </div>
        </>
      )}

      {item.type === "logo" && (
        <>
          <div className={styles.cardHeader}>
            <div className={styles.quoteIcon}>
              <Image
                src="/images/icons/tquote.png"
                width={53}
                height={53}
                alt={"item.name"}
              />
            </div>
          </div>
          {/* onClick={handleReviewClick} */}
          <div
            className={styles.review}
            dangerouslySetInnerHTML={{ __html: item.review || "" }}
          />
          <div className={styles.footerBox}>
            <div className={styles.footer}>
              <span>
                <Image
                  src={item.avatar}
                  width={40}
                  height={40}
                  alt={item.name}
                  className={styles.avatar}
                />
              </span>
              <div>
                <div className={styles.name}>{item.name}</div>
                {item.source && (
                  <div className={styles.source}>{item.source}</div>
                )}
              </div>
            </div>
            <div className={styles.logobox}>
              <div className={styles.logoWrapper}>
                <Image
                  src={logoMap[logoKey] || "/images/devicon_google.svg"}
                  alt={item.brand || item.name}
                  width={32}
                  height={32}
                  className={styles.logo}
                  unoptimized
                />
              </div>
              <div className={styles.star}>
                {[...Array(item.rating)].map((_, i) => (
                  <Image
                    key={i}
                    src="/images/icons/rating.svg"
                    alt="star"
                    width={24}
                    height={24}
                    unoptimized
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
