"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";

interface VideoCardProps {
  videoUrl: string;
  isYouTube?: boolean;
  section?: string;
}

const CampusTour = ({
  section,
  videoUrl,
  isYouTube = false,
}: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handleBack = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
  };

  return (
    <section className={styles.campusTourSection} id={section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className={`${styles.videoSection}`}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onClick={!isPlaying ? handlePlay : undefined}
            >
              {isPlaying ? (
                <div
                  className={`${styles.ratio} ratio`}
                  style={{ minHeight: "650px" }}
                >
                  {isYouTube ? (
                    <iframe
                      src={`${videoUrl}?autoplay=1&mute=1`}
                      title="YouTube Video"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-100 h-100"
                      style={{ height: "650px" }}
                    />
                  ) : (
                    <video
                      src={videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-100 h-100"
                      style={{ objectFit: "cover", height: "650px" }}
                    />
                  )}

                  {hovering && (
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    >
                      <button className={styles.plaYbtn} onClick={handleBack}>
                        <Image
                          alt="back icon"
                          width={20}
                          height={20}
                          src="/images/push-btn.svg"
                        />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Image
                    src="/images/campus-tour.png"
                    alt="Campus Tour Thumbnail"
                    width={2112}
                    height={1408}
                    className={`${styles.videoThumbnail} w-100`}
                    style={{ objectFit: "cover", height: "650px" }}
                  />
                  <div className={`${styles.overlayText}`}>
                    <div>
                      <h2>
                        Digital Academy 360 <br /> Campus Tour
                      </h2>
                      <button className={styles.playButton}>
                        <Image
                          alt="play icon"
                          width={26}
                          height={28}
                          src="images/play-btn.svg"
                        />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className={styles.infoSection}>
              <h3>DA360 Unplugged: Real Stories. Real People. Real Growth.</h3>
              <p>
                Step inside the action — explore our vibrant campus, connect
                with our passionate learners, and see why Digital Academy 360 is
                the launchpad for future digital leaders
              </p>
              <div className={styles.scheduleButton}>
                <a href="#" className="btn btnRed">
                  Schedule Campus Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusTour;
