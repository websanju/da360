"use client";
import React from "react";
import styles from "./styles.module.scss";
import ArrowUp from "@components/Ui/svg/arrowUp";
import Link from "next/link";

type Opening = {
  title: string;
  slug: string;
  location: string;
  style?: "yellow" | "blue" | "white";
};

const openings: Opening[] = [
  {
    title: "Academic Counsellor",
    slug: "https://docs.google.com/forms/u/0/d/1omETymjgq8O0bKSFAcGOHuJr5LLtFT3dYprMWXvyUfc/viewform?edit_requested=true",
    location: "1+ years of experience | Bangalore",
    style: "yellow",
  },
  {
    title: "SEO TL",
    slug: "https://docs.google.com/forms/d/14Hn4T-bDtQsxCEvqDOctiRrkZxy1JyojRV6V__BVUgY/edit",
    location: "5-8+ years of experience | Bangalore",
    style: "white",
  },
  {
    title: "Business Development Manager",
    slug: "https://docs.google.com/forms/d/13Cdg5adRPVqZ55QG1stQYyUhI8_MSPlbzTrcxts7ExU/edit",
    location: "2+ years of experience | Bangalore",
    style: "blue",
  },
  {
    title: "Content write",
    slug: "https://docs.google.com/forms/d/1eqC-5d_tu4IRcCWNluWo8b5iYiUKTaMEkgxjXiaFMrA/edit",
    location: "2+  years of experience | Bangalore",
    style: "white",
  },
  {
    title: "Video Editor",
    slug: "https://docs.google.com/forms/d/14EwHIq5ofVzFMegHCjRWFdNsfSuogRcitDI1NZBMJp0/edit",
    location: "2+ years of experience | Bangalore",
    style: "white",
  },
  {
    title: "Digital Marketing Trainer",
    slug: "https://docs.google.com/forms/d/1HUpENGhm496E4WWTQl-hCqy8tQ3ayHpnvrBArESw3p8/edit",
    location: "2+ years of experience | Bangalore",
    style: "white",
  },
];

const CurrentOpenings = () => {
  return (
    <section className={`${styles.openingsSection}`} id="openingsSection">
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
              <Link target="_black" href={job.slug}>
                <div
                  className={`${styles.jobCard} ${
                    styles[job.style || "white"]
                  }`}
                >
                  <div className={styles.jobDec}>
                    <h5>{job.title}</h5>
                    <small>{job.location}</small>
                  </div>
                  <div className={styles.arrow}>
                    <ArrowUp width={40} height={40} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Hiring Process Section */}
        <div className={styles.ourHiringProcess}>
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.subheading}>
                <h2>Our Hiring Process</h2>
              </div>
            </div>
          </div>
          <div className={`${styles.row} row`}>
            {[
              {
                step: "01",
                title: "CV Submission",
                desc: "We commence the hiring process by getting to learn more about you - your skills, experience, interests, & what drives you.",
              },
              {
                step: "02",
                title: "Skill Assessment",
                desc: "Depending on the role you’re applying for, we’ll send you an interesting assignment with a stipulated deadline, a must-do for the next phase.",
              },
              {
                step: "03",
                title: "Final Interview",
                desc: "Once you clear the assessment phase, you will be then invited for the final round, aka, the Interview!",
              },
            ].map((process, i) => (
              <div className="col-lg-4" key={i}>
                <div className={styles.ourHiringItem}>
                  <div className={styles.ourHeading}>
                    <span>{process.step}</span>
                  </div>
                  <div className={styles.ourHiringDec}>
                    <span>{process.title}</span>
                    <p>{process.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;
