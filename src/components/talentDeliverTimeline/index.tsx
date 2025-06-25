"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { timelineSteps } from "./timelineData";

const Timeline = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const CheckIcon = () => (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4694 7.1569C12.0319 9.3444 10.3825 11.4042 8.06812 11.8644C6.93937 12.0892 5.76846 11.9521 4.72213 11.4727C3.67579 10.9934 2.80738 10.1961 2.24053 9.19442C1.67368 8.19276 1.4373 7.0378 1.56504 5.89399C1.69279 4.75018 2.17814 3.67582 2.952 2.8239C4.53925 1.07565 7.21937 0.5944 9.40687 1.4694"
        stroke="#55B453"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.03125 6.28125L7.21875 8.46875L12.4688 2.78125"
        stroke="#55B453"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
          <div className="col-lg-12  d-flex justify-content-center">
            <div className={styles.timelineBox}>
              <div>
                <div className={styles.sectionHeader}>
                  <h2>
                    How We Ensure That The Talent Is <br /> Ready To Deliver
                  </h2>
                </div>
              </div>
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
                      <ul>
                        {Array.isArray(step.content) ? (
                          step.content.map((item, idx) => (
                            <li key={idx}>
                              {" "}
                              <span className={styles.icon}>
                                <CheckIcon />
                              </span>
                              {item}
                            </li>
                          ))
                        ) : (
                          <p>{step.content}</p>
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
