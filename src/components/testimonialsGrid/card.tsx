"use client";
import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

type Testimonial = {
  id: number;
  type: "text" | "video";
  name: string;
  review?: string;
  rating: number;
  avatar: string;
  source?: string;
  videoUrl?: string;
};

const Card = ({ item }: { item: Testimonial }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

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

  return (
    <div className={styles.card}>
      {item.type === "text" ? (
        <>
          <div className={styles.cardHeader}>
            <div className={styles.quoteIcon}>
              <Image
                src="images/rating/tquote-filled.svg"
                width={53}
                height={53}
                alt={item.name}
                className={styles.avatar}
              />
            </div>
            <div className={styles.star}>
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/images/rating/round-star.svg"
                  alt="star"
                  width={24}
                  height={24}
                  unoptimized
                />
              ))}
            </div>
          </div>
          <p className={styles.review}>{item.review}</p>
        </>
      ) : (
        <div
          className={styles.videoWrapper}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className={styles.cardHeader}>
            <div className={styles.quoteIcon}>
              <Image
                src="images/rating/tquote-filled.svg"
                width={53}
                height={53}
                alt={item.name}
                className={styles.avatar}
              />
            </div>
            <div className={styles.star}>
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/images/rating/round-star.svg"
                  alt="star"
                  width={24}
                  height={24}
                  unoptimized
                />
              ))}
            </div>
          </div>

          <div className={styles.videoContainer}>
            {!isPlaying && (
              <div className={styles.videoThumbs}>
                <Image
                  src="/images/rating/digital-academy-360-testimonials-deepak.png"
                  alt="thumbnail"
                  width={500}
                  height={300}
                  unoptimized
                />
              </div>
            )}
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              className={styles.video}
              poster="/images/rating/digital-academy-360-testimonials-deepak.png"
            >
              <source src={item.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <button className={styles.plaYbtn} onClick={handlePlay}>
                <Image
                  src={"/images/play-btn.svg"}
                  alt={"slide.title"}
                  width={72}
                  height={72}
                />
              </button>
            )}

            {isPlaying && hovered && (
              <button className={styles.plaYbtn} onClick={handleStop}>
                <Image
                  src={"/images/push-btn.svg"}
                  alt={"slide.title"}
                  width={72}
                  height={72}
                />
              </button>
            )}
          </div>
        </div>
      )}

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
          {item.source && <div className={styles.source}>{item.source}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
