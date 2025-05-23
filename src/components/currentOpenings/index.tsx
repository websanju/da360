"use client";
import React from "react";
import styles from "./styles.module.scss";
import ArrowUp from "@components/Ui/svg/arrowUp";

type Opening = {
  title: string;
  location: string;
  style?: "yellow" | "blue" | "white";
};

const openings: Opening[] = [
  {
    title: "PPC Manager",
    location: "7+ years of experience | Bangalore",
    style: "yellow",
  },
  {
    title: "Counsellor",
    location: "7+ years of experience | Bangalore",
    style: "white",
  },
  {
    title: "DM Trainer",
    location: "7+ years of experience | Bangalore",
    style: "blue",
  },
  {
    title: "Sr Placement Ofc",
    location: "7+ years of experience | Bangalore",
    style: "white",
  },
];

const CurrentOpenings = () => {
  return (
    <section className={`${styles.openingsSection}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionHeader}>
              <h2>Current Openings</h2>
            </div>
          </div>
        </div>
        <div className={`${styles.row} row`}>
          {openings.map((job, index) => (
            <div className="col-md-6" key={index}>
              <div
                className={`${styles.jobCard} ${styles[job.style || "white"]}`}
              >
                <div className={styles.jobDec}>
                  <h5>{job.title}</h5>
                  <small>{job.location}</small>
                </div>
                <div className={styles.arrow}>
                  <ArrowUp width={40} height={40} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ourHiringProcess}>
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.subheading}>
                <h2>Our Hiring Process</h2>
              </div>
            </div>
          </div>
          <div className={`${styles.row} row`}>
            <div className="col-lg-4">
              <div className={styles.ourHiringItem}>
                <div className={styles.ourHeading}>
                  <span>01</span>
                </div>
                <div className={styles.ourHiringDec}>
                  <span>CV Submission</span>
                  <p>
                    We commence the hiring process by getting to learn more
                    about you - your skills, experience, interests, & what
                    drives you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.ourHiringItem}>
                <div className={styles.ourHeading}>
                  <span>02</span>
                </div>
                <div className={styles.ourHiringDec}>
                  <span>Skill Assessment</span>
                  <p>
                    Depending on the role you’re applying for, we’ll send you an
                    interesting assignment with a stipulated deadline, a must-do
                    for the next phase.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.ourHiringItem}>
                <div className={styles.ourHeading}>
                  <span>03</span>
                </div>
                <div className={styles.ourHiringDec}>
                  <span>Final Interview</span>
                  <p>
                    Once you clear the assessment phase, you will be then
                    invited for the final round, aka, the Interview!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;
