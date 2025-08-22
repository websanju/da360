"use client";
import React from "react";
import styles from "./style.module.scss";
import CourseCard from "@components/widgets/courseCard";
import SectionHeader from "@components/widgets/sectionHeader";

const courses = [
  {
    title: "AI Marketing / MarTech / Video",
    duration: "2 Month Course",
    assignments: "80+ Hours of Learning",
    projects: "10+ Tools",
    bgColor: "#8BBAE3",
    imgSrc: "/images/bootcamps/course01.jpg",
    link: "/ai-vibe-marketing",
  },
  {
    title: "Influencer Marketing",
    duration: "2 Month Course",
    assignments: "80+ Hours of Learning",
    projects: "5+ Specialised Tools",
    bgColor: "#93EABF",
    imgSrc: "/images/bootcamps/course02.jpg",
    link: "/youtube-and-instagram-and-influencer",
  },
  // {
  //   title: "LinkedIn Marketing Bootcamp",
  //   duration: "2 Month Course",
  //   assignments: "80+ Hours of Learning",
  //   projects: "10+ Tools",
  //   bgColor: "#FFEAB2",
  //   imgSrc: "/images/bootcamps/course03.jpg",
  // },
  {
    title: "Performance Marketing & MarTech",
    duration: "2 Month Course",
    assignments: "Online",
    projects: "10+ Tools",
    bgColor: "#FFD6DA",
    imgSrc: "",
    link: "/performance-marketing-and-martech",
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
                duration={course.duration}
                assignments={course.assignments}
                projects={course.projects}
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
