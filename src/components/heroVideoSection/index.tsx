"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

interface VideoCardProps {
  videoUrl: string;
  isYouTube?: boolean;
}

const HeroSection = ({ videoUrl, isYouTube = false }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handleBack = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
  };

  const renderVideo = () => (
    <div
      className={styles.videoSection}
      onClick={!isPlaying ? handlePlay : undefined}
    >
      {isPlaying ? (
        <div className={`${styles.ratio} ratio`} style={{ minHeight: "800px" }}>
          {isYouTube ? (
            <iframe
              src={`${videoUrl}?autoplay=1&mute=1`}
              title="YouTube Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-100 h-100"
              style={{ height: "800px" }}
            />
          ) : (
            <video
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-100 h-100"
              style={{ objectFit: "cover", height: "800px" }}
            />
          )}
        </div>
      ) : (
        <div
          className={`${styles.thumbnailImage} w-100 ${
            !isPlaying ? styles.show : ""
          }`}
        >
          <Image
            src="/images/hero-video.png"
            alt="Campus Tour Thumbnail"
            width={1440}
            height={800}
            style={{ objectFit: "cover", height: "800px" }}
          />
        </div>
      )}
    </div>
  );

  return (
    <section
      className={styles.heroVideoSection}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {renderVideo()}

      <div className={styles.heroVideoInfo}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.content}>
                <h1>Learn. Connect. Grow.</h1>
                <p>Experience more than just a classroom.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonSection}>
          {!isPlaying && (
            <button className={styles.playButtonSection} onClick={handlePlay}>
              <Image
                alt="play icon"
                width={28}
                height={28}
                src="/images/play-btn.svg"
              />
            </button>
          )}

          {isPlaying && hovering && (
            <button className={styles.pushButtonSection} onClick={handleBack}>
              <Image
                alt="back icon"
                width={28}
                height={28}
                src="/images/push-btn.svg"
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
