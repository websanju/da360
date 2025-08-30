"use client";
import React from "react";
import styles from "./style.module.scss";
import CourseCard from "@components/widgets/courseCard";
import SectionHeader from "@components/widgets/sectionHeader";

const courses = [
  {
    title: "AI Vibe Marketing",
    details: [
      "2 Months / Online",
      "Advance Specialist Certification",
      "80+ Hours of Learning",
      "8+ Case Studies",
      "10+ Tools",
      "2 AI Flows",
    ],
    bgColor: "#8BBAE3",
    imgSrc: "/images/bootcamps/ai-vibe-marketing.jpg",
    link: "/ai-vibe-marketing-courses",
  },
  {
    title: "Youtube & Instagram Influencer",
    details: [
      "2 Months / Online",
      "Advance Specialist Certification",
      "80+ Hours of Learning",
      "8+ Case Studies",
      "5+ Specialised Tools",
      "2 Creator Flow",
    ],
    bgColor: "#93EABF",
    imgSrc: "/images/bootcamps/youtube-instagram-Influencer.jpg",
    link: "/youtube-instagram-influencer-courses",
  },
  {
    title: "Performance Marketing & MarTech",
    details: [
      "2 Months / Online",
      "Advance Specialist Certification",
      "80+ Hours of Learning",
      "8+ Case Studies",
      "10+ Tools",
      "2 Funnel Blueprints",
    ],
    bgColor: "#FFD6DA",
    imgSrc: "/images/bootcamps/performance-marketing-marTech.jpg",
    link: "/performance-marketing-automation-courses-online",
  },
];

const SelfPacedPrograms = () => {
  return (
    <section className={styles.selfPacedProgramsSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              titleMarginBottom={{ desktop: "16px", mobile: "10px" }}
              title={<>Digital Marketing Certification Courses</>}
              description="Deep Dive into Core Marketing Concepts "
            />
          </div>
        </div>

        <div className={`row ${styles.row}`}>
          {courses.map((course, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <CourseCard
                title={course.title}
                details={course.details}
                bgColor={course.bgColor}
                imgSrc={course.imgSrc}
                link={course.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelfPacedPrograms;
