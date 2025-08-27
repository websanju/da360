"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const features = [
  {
    icon: "/images/course/icon01.svg",
    title: "HANDS-ON LEARNING",
    text: "Build real skills through projects, not just theory. Learn by doing — like pros in the field.",
  },
  {
    icon: "/images/course/icon02.svg",
    title: "REAL-WORLD CAMPAIGNS",
    text: "Work on live campaigns that mimic agency life. Gain experience recruiters truly value.",
  },
  {
    icon: "/images/course/icon03.svg",
    title: "SOFT SKILLS + CONFIDENCE",
    text: "Master communication, teamwork, and presentation — skills that set you apart in interviews.",
  },
  {
    icon: "/images/course/icon04.svg",
    title: "INDUSTRY MENTORSHIP",
    text: "Learn from professionals who’ve done it all. Get guidance, feedback, and real career insights.",
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
