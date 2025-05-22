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
      </div>
    </section>
  );
};

export default CurrentOpenings;
