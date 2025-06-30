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
    title: "PPC Manager",
    slug: "ppc-manager",
    location: "7+ years of experience | Bangalore",
    style: "yellow",
  },
  {
    title: "Counsellor",
    slug: "counsellor",
    location: "7+ years of experience | Bangalore",
    style: "white",
  },
  {
    title: "DM Trainer",
    slug: "dm-trainer",
    location: "7+ years of experience | Bangalore",
    style: "blue",
  },
  {
    title: "Sr Placement Ofc",
    slug: "sr-placement-ofc",
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
              <Link href={`/career/${job.slug}`}>
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
