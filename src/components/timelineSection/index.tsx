"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { timelineSteps } from "./timelineData";

const Timeline = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepRefs.current.findIndex((el) => el === entry.target);

          if (index !== -1) {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => [...new Set([...prev, index])]);
            } else {
              setVisibleSteps((prev) => prev.filter((i) => i !== index));
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -200px",
      }
    );

    const timeout = setTimeout(() => {
      stepRefs.current.forEach((el) => el && observer.observe(el));
    }, 100); // Give time for layout/render

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.timeline}>
      <div className="container">
        <div className="row">
          <div>
            <div className={styles.sectionHeader}>
              <h2>
                Your Path to Placement <br /> at DA360
              </h2>
            </div>
          </div>
          <div className="col-lg-12 d-flex justify-content-center">
            <div className={styles.container}>
              {timelineSteps.map((step, i) => (
                <div
                  key={i}
                  className={`${styles.step} ${
                    visibleSteps.includes(i) ? styles.active : ""
                  }`}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                >
                  <div className={styles.label}>{step.title}</div>
                  <div className={styles.dot}></div>
                  <div className={styles.text}>
                    <p>{step.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
