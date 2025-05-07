// components/CourseHighlights.tsx
import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

interface Highlight {
  icon: string; // Image path
  title: string;
  value: string;
}

const highlights: Highlight[] = [
  { icon: "/images/icons/calendar.png", title: "Months", value: "6" },
  { icon: "/images/icons/clock.png", title: "Time", value: "Flexible" },
  {
    icon: "/images/icons/courses.png",
    title: "No Of Individual Courses",
    value: "15",
  },
  {
    icon: "/images/icons/template.png",
    title: "Template & Blueprints",
    value: "08",
  },
  { icon: "/images/icons/ai.png", title: "AI Learning Tools", value: "25+" },
  {
    icon: "/images/icons/hourglass.png",
    title: "Total Learning Hours",
    value: "240+ Hrs",
  },
  {
    icon: "/images/icons/case-study.png",
    title: "Live Case Studies",
    value: "35",
  },
  {
    icon: "/images/icons/interview.png",
    title: "Interview Assistance",
    value: "5",
  },
  {
    icon: "/images/icons/internship.png",
    title: "Internship (Optional)",
    value: "1 Month",
  },
  {
    icon: "/images/icons/project.png",
    title: "Real Time Projects",
    value: "6+",
  },
  {
    icon: "/images/icons/certificate.png",
    title: "Certifications",
    value: "18+",
  },
  {
    icon: "/images/icons/specialisation.png",
    title: "Specialisation",
    value: "4",
  },
  {
    icon: "/images/icons/trainer.png",
    title: "Domain Specialist Trainers",
    value: "07",
  },
  {
    icon: "/images/icons/specialisation.png",
    title: "Specialisation",
    value: "4",
  },
];

const CourseHighlights: React.FC = () => {
  return (
    <div className="container">
      <div className={`${styles.highlightWrapper} `}>
        <h2>Course Highlights</h2>
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
    </div>
  );
};

export default CourseHighlights;
