"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail: string;
  playIcon?: string;
  pushIcon?: string;
}

const isYouTubeUrl = (url: string) => /youtube\.com|youtu\.be/.test(url);

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  thumbnail,
  playIcon = "/images/play-btn.svg",
  pushIcon = "/images/push-btn.svg",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [iframeKey, setIframeKey] = useState(0); // force video reset

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setHovered(false);
    setIframeKey((prev) => prev + 1);
  };

  const renderVideo = () => {
    if (isYouTubeUrl(videoUrl)) {
      const videoId = videoUrl.includes("embed")
        ? videoUrl.split("/embed/")[1]
        : new URL(videoUrl).searchParams.get("v");

      return (
        <iframe
          key={iframeKey}
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      );
    } else {
      return (
        <video key={iframeKey} className={styles.video} autoPlay controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <div className={styles.videoSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {!isPlaying ? (
              <div
                className={styles.thumbnail}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={handlePlay}
              >
                <Image
                  src={thumbnail}
                  alt="Video thumbnail"
                  width={800}
                  height={450}
                  className={styles.img}
                />
                <button className={styles.playButton}>
                  <Image src={playIcon} alt="Play" width={40} height={40} />
                </button>
              </div>
            ) : (
              <div
                className={styles.videoWrapper}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {renderVideo()}
                {hovered && (
                  <button className={styles.pushButton} onClick={handleStop}>
                    <Image
                      src={pushIcon}
                      alt="Stop Video"
                      width={40}
                      height={40}
                    />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
