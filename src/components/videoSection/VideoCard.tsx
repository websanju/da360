"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss"; // optional for button custom styling

interface VideoCardProps {
  thumbnail: string; // Thumbnail image
  videoUrl: string; // Local video or YouTube embed link
  calssTitle: string; // Thumbnail image
  calssBtn: string; // Thumbnail image
  isYouTube?: boolean; // true for YouTube iframe
}

const VideoCard = ({
  thumbnail,
  videoUrl,
  calssTitle,
  calssBtn,
  isYouTube = false,
}: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleBack = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent click bubbling
    setIsPlaying(false);
  };

  return (
    <div
      className={`${styles.videoCard} `}
      style={{ cursor: "pointer", minHeight: "570px" }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={!isPlaying ? handlePlay : undefined}
    >
      {isPlaying ? (
        <div className="ratio ratio-16x9" style={{ minHeight: "570px" }}>
          {isYouTube ? (
            <iframe
              src={`${videoUrl}?autoplay=1&mute=1`}
              title="YouTube Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-100 h-100"
              style={{ minHeight: "570px" }}
            />
          ) : (
            <video
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-100 h-100"
              style={{ objectFit: "cover", minHeight: "570px" }}
            />
          )}
          {/* Hover to show back button */}
          {hovering && (
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <button className={styles.plaYbtn} onClick={handleBack}>
                <Image
                  src="/images/play-button.svg"
                  alt="Back"
                  width={70}
                  height={70}
                />
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <Image
            src={thumbnail}
            alt="Video Thumbnail"
            width={420}
            height={570}
            className="w-100"
            style={{ objectFit: "cover", height: "570px" }}
          />
          {/* Play button centered */}
          <div
            className={`${styles.videoBtn} position-absolute top-50 start-50 translate-middle`}
          >
            <button className={styles.plaYbtn}>
              <Image
                src="/images/play-button.svg"
                alt="Play"
                width={70}
                height={70}
              />
            </button>
          </div>
        </>
      )}

      {/* Content on thumbnail (title and badge) */}
      {!isPlaying && (
        <div
          className={`${styles.cardImgOverlay} d-flex flex-column justify-content-end p-3`}
        >
          <h5>{calssTitle}</h5>
          <span className={styles.calssBtn}>{calssBtn}</span>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
