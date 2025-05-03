"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";

interface VideoCardProps {
  thumbnail: string;
  videoUrl: string;
  isYouTube?: boolean;
}

const VideoCard = ({
  thumbnail,
  videoUrl,
  isYouTube = false,
}: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleBack = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
  };

  return (
    <div
      className={`${styles.videoCard}`}
      style={{ cursor: "pointer", minHeight: "432px" }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={!isPlaying ? handlePlay : undefined}
    >
      {isPlaying ? (
        <div
          className={`${styles.ratio16x9} ratio ratio-16x9`}
          style={{ minHeight: "432px" }}
        >
          {isYouTube ? (
            <iframe
              src={`${videoUrl}?autoplay=1&mute=1`}
              title="YouTube Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-100 h-100"
              style={{ minHeight: "432px" }}
            />
          ) : (
            <video
              src={videoUrl}
              autoPlay
              loop
              playsInline
              className="w-100 h-100"
              style={{ objectFit: "cover", minHeight: "432px" }}
            />
          )}
          {hovering && (
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <button className={styles.playBtn} onClick={handleBack}>
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
            style={{ objectFit: "cover", height: "432px" }}
          />
          <div
            className={`${styles.videoBtn} position-absolute top-50 start-50 translate-middle`}
          >
            <button className={styles.playBtn}>
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

      {!isPlaying && (
        <div
          className={`${styles.cardImgOverlay} d-flex flex-column justify-content-end p-3`}
        >
          {/* check style name */}
        </div>
      )}
    </div>
  );
};

export default VideoCard;
