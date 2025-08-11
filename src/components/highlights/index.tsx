// components/Highlights.tsx
"use client";

import React from "react";
import styles from "./style.module.scss";
import TickMark from "@/components/Ui/svg/tickMark";

// Define the type for a single skill
export interface HighlightSkill {
  name: string;
}

interface HighlightsProps {
  heading: string;
  subheading?: string;
  skills: HighlightSkill[];
}

export default function Highlights({
  heading,
  subheading,
  skills,
}: HighlightsProps) {
  return (
    <section className={styles.highlightsSection}>
      <h2>{heading}</h2>
      {subheading && <p>{subheading}</p>}

      <div className={styles.highlightsList}>
        {(skills ?? []).map((skill, index) => (
          <div key={index} className={styles.highlightItem}>
            <span className={styles.checkIcon}>
              <TickMark />
            </span>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}
