"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const features = [
  {
    icon: "/images/course/hands-on-learning.png",
    title: "HANDS-ON LEARNING",
    text: "Tired of “no experience” rejections? Learn skills that beat degrees.",
  },
  {
    icon: "/images/course/real-world-campaigns.png",
    title: "REAL-WORLD CAMPAIGNS",
    text: "Tired of “no experience” rejections? Learn skills that beat degrees.",
  },
  {
    icon: "/images/course/soft-skills-confidence.png",
    title: "SOFT SKILLS + CONFIDENCE",
    text: "Tired of “no experience” rejections? Learn skills that beat degrees.",
  },
  {
    icon: "/images/course/mentorship.png",
    title: "INDUSTRY MENTORSHIP",
    text: "Tired of “no experience” rejections? Learn skills that beat degrees.",
  },
];

interface CourseJourneyProps {
  section?: string;
}

export default function CourseJourney({ section }: CourseJourneyProps) {
  return (
    <section className={`${styles.journeySection}`} id={section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.headerSection}>
              <h2>
                More Than a Course — <br />
                <em>It’s a Journey</em>
              </h2>
              <p>
                At Digital Academy 360, learning isn’t limited to lectures. Our
                students collaborate, build, experiment, fail, and succeed —
                just like in real industry setups.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.row} row`}>
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className={`${styles.cardBox}`}>
                <div className={styles.cardImg}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={125}
                    height={125}
                  />
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
