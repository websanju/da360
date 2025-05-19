"use client";

import React from "react";
import styles from "./style.module.scss";
import TickMark from "@/components/ui/svg/tickMark";

const Highlights = () => {
  const skills = [
    "Digital Marketing",
    "WordPress Website Designing",
    "Ad Copy Writing",
    "Creative Designing",
    "Affiliate Marketing",
    "Content Marketing",
    "SEO Auditing",
    "Google Ads",
    "Bing Ads",
    "Mobile App Advertising",
    "Remarketing",
    "SEO",
    "Facebook",
    "Linkedin",
    "Instagram",
    "Youtube",
    "Quora",
    "Adsense",
    "Twitter",
    "Email Marketing",
    "Google Analytics",
    "Marketing Automation",
    "Whatsapp Marketing",
  ];

  return (
    <section className={styles.highlightsSection}>
      <h2>Key Highlights Of Our AI Digital Marketing Course</h2>
      <p>Digital Marketing Skills You ll Master</p>

      <div className={styles.highlightsList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.highlightItem}>
            <span className={styles.checkIcon}>
              <TickMark />
            </span>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
