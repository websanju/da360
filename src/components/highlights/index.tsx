"use client";

import React from "react";
import styles from "./style.module.scss";
import TickMark from "@/components/Ui/svg/tickMark";

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
      <h2>Key Highlights of Our AI-Driven Digital Marketing Program</h2>
      <p>Digital Marketing Skills You’ll Master to Lead the Future</p>

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
