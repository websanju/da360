"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";
import Live from "@components/Ui/svg/live";
import Plus from "@components/Ui/svg/plus";
import Minus from "@components/Ui/svg/minus";

const modulesData = [
  {
    number: 1,
    title: "Digital Marketing Introduction & Fundamentals",
    badges: [
      { icon: <Live />, label: "10 Live Sessions" },
      { icon: <Live />, label: "2 Assignments" },
      { icon: <Live />, label: "1 Case Study" },
      { icon: <Live />, label: "2 Assessments" },
    ],
    topics: [
      "Marketing & Principles of Marketing",
      "Introduction to Digital Marketing",
      "Branding, Designing & Business Fundamentals",
      "Owned, Earned & Paid Media",
      "Market Research & Analysis",
      "Customer Journey & Building Customer Persona",
      "Advanced Level Keyword Research",
      "AI Keyword Research Tools",
      "Importance of AI in Digital Marketing",
      "AI Content Generation",
    ],
  },
  {
    number: 2,
    title: "Website Planning & WordPress Development",
    badges: [
      { icon: <Live />, label: "8 Live Sessions" },
      { icon: <Live />, label: "3 Assignments" },
      { icon: <Live />, label: "2 Case Studies" },
      { icon: <Live />, label: "1 Assessment" },
    ],
    topics: [
      "Website Planning",
      "Domain, Hosting, and CMS",
      "Installing WordPress",
      "WordPress Theme Selection",
      "Plugin Installation and Setup",
      "Building a Website with WordPress",
      "SEO Settings for WordPress",
      "Website Launch Checklist",
    ],
  },
  {
    number: 3,
    title: "Search Engine Optimization (SEO)",
    badges: [
      { icon: <Live />, label: "12 Live Sessions" },
      { icon: <Live />, label: "4 Assignments" },
      { icon: <Live />, label: "1 Case Study" },
      { icon: <Live />, label: "2 Assessments" },
    ],
    topics: [
      "Introduction to SEO",
      "Keyword Research Techniques",
      "On-Page SEO",
      "Technical SEO",
      "Off-Page SEO",
      "SEO Tools Overview",
      "Google Algorithm Updates",
      "Content Strategy for SEO",
    ],
  },
  {
    number: 4,
    title: "Paid Media Marketing (Google Ads & Facebook Ads)",
    badges: [
      { icon: <Live />, label: "15 Live Sessions" },
      { icon: <Live />, label: "5 Assignments" },
      { icon: <Live />, label: "2 Case Studies" },
      { icon: <Live />, label: "3 Assessments" },
    ],
    topics: [
      "Introduction to Paid Media",
      "Creating Google Search Campaigns",
      "Google Display & Video Campaigns",
      "Facebook Ads Setup",
      "Audience Targeting",
      "Retargeting Campaigns",
      "Analyzing Campaign Performance",
    ],
  },
];

const Curriculum = () => {
  const [activeModule, setActiveModule] = useState<number>(1);

  const toggleModule = (moduleNumber: number) => {
    if (activeModule === moduleNumber) {
      setActiveModule(0);
    } else {
      setActiveModule(moduleNumber);
    }
  };

  return (
    <section className={styles.curriculumSection}>
      <h2>Latest Curriculum Vetted By Industry Experts</h2>
      <p>
        Explore a comprehensive offline and online digital marketing syllabus
        designed by corporate trainers and vetted by industry-renowned experts &
        recruiters.
      </p>

      <div className={styles["info-line"]}>
        <div className={styles["Learning"]}>
          <label>Learning Modes</label>
          <p>Online / Offline</p>
        </div>
        <div className={styles["timings"]}>
          <label> Batch Timings</label>
          <p className={styles.batchTimings}>
            <span>07:30AM - 09:30AM (Online) | </span>
            <span>10:30AM - 01:00PM (Classroom) | </span>
            <span>08:30PM - 10:30PM (Online)</span>
          </p>
        </div>
      </div>

      {/* Modules */}
      {modulesData.map((module) => (
        <div
          key={module.number}
          className={`${styles.module} ${
            activeModule === module.number ? styles.active : ""
          }`}
        >
          <div
            className={styles["module-header"]}
            onClick={() => toggleModule(module.number)}
          >
            <div className={styles["module-left"]}>
              <div className={styles.moduleHeader}>
                <div className={styles["module-number"]}>
                  <label>Module</label>
                  <span>{module.number}</span>
                </div>
                <div className={styles["toggle-icon-mobile"]}>
                  {activeModule === module.number ? <Minus /> : <Plus />}
                </div>
              </div>
              <div className={styles["module-title"]}>
                {module.title}
                <div className={styles.badges}>
                  {module.badges.map((badge, idx) => (
                    <div key={idx} className={styles["badge-item"]}>
                      {badge.icon} {badge.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles["toggle-icon"]}>
              {activeModule === module.number ? <Minus /> : <Plus />}
            </div>
          </div>

          {/* Expanded content */}
          {activeModule === module.number && (
            <div className={styles["module-content"]}>
              <div className={styles.contentLeft}></div>
              <ul>
                {module.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
              <div className={styles.contentRight}></div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Curriculum;
