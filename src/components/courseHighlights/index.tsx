// components/CourseHighlights.tsx
import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

interface Highlight {
  icon: string; // Image path
  title: string;
  value: string;
}

interface highlightsProps {
  highlights: Highlight[];
  section?: string;
}

const CourseHighlights: React.FC<highlightsProps> = ({
  highlights = [],
  section,
}) => {
  return (
    <section className="container" id={section}>
      <div className={`${styles.highlightWrapper} `}>
        <div className={`${styles.sectionHeader} `}>
          <h2>Course Highlights</h2>
          <p>A Snapshot of What Makes This Program a Game-Changer</p>
        </div>
        <div className={`${styles.rowWrapper} row g-4`}>
          {highlights.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className={`${styles.highlightCard} h-100`}>
                <span>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    height={40}
                    width={40}
                  />
                </span>
                <div className={styles.highlightItem}>
                  <h6 className="mb-1 fw-bold">{item.title}</h6>
                  <p className="mb-0">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
