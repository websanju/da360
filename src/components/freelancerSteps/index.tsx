"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const steps = [
  {
    title: "Step 1",
    subtitle: "Learn How To Pitch Clients",
  },
  {
    title: "Step 2",
    subtitle: "Master Freelancer EcoSystem",
  },
  {
    title: "Step 3",
    subtitle: "Hunt For Freelancing Projects",
  },
];
interface VideoCardProps {
  videoUrl: string;
  isYouTube?: boolean;
}
const FreelancerSteps = ({ videoUrl, isYouTube = false }: VideoCardProps) => {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handleBack = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
  };

  return (
    <section className={styles.freelancerSteps}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.freelancerStepsBox}>
              <div className={styles.sectionHeader}>
                <h2>Become A Freelancer</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </p>
              </div>
              <div className={styles.freelancerContent}>
                <div className={styles.tabs}>
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`${styles.tab} ${
                        active === index ? styles.active : ""
                      }`}
                      onClick={() => setActive(index)}
                    >
                      <h3>{step.title}</h3>
                      <p>{step.subtitle}</p>
                      {index < steps.length - 1 && (
                        <div className={styles.arrow}>
                          <span>
                            <Image
                              src="/images/icons/double-down-arrow.svg"
                              alt="double down arrow"
                              width={18}
                              height={16}
                              className={styles.image}
                            />
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className={styles.videoContainer}>
                  {/* <video key={steps[active].video} controls>
                    <source src={steps[active].video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                  <div
                    className={`${styles.videoSection}`}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    onClick={!isPlaying ? handlePlay : undefined}
                  >
                    {isPlaying ? (
                      <div className="ratio" style={{ minHeight: "465px" }}>
                        {isYouTube ? (
                          <iframe
                            src={`${videoUrl}?autoplay=1&mute=1`}
                            title="YouTube Video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="w-100 h-100"
                            style={{ height: "465px" }}
                          />
                        ) : (
                          <video
                            src={videoUrl}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-100 h-100"
                            style={{ objectFit: "cover", height: "465px" }}
                          />
                        )}

                        {hovering && (
                          <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                          >
                            <button
                              className={styles.plaYbtn}
                              onClick={handleBack}
                            >
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
                          src="/images/brcomeFreelancer.png"
                          alt="Campus Tour Thumbnail"
                          width={768}
                          height={465}
                          className={`${styles.videoThumbnail} w-100`}
                          style={{ objectFit: "cover", height: "465px" }}
                        />
                        <div className={`${styles.overlayText}`}>
                          <div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerSteps;
