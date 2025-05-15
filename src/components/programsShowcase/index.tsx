"use client";
import React from "react";
import WidgetCard from "@components/widgets/skills";
import styles from "./style.module.scss";

const ProgramsShowcase: React.FC = () => {
  return (
    <section className={styles.programsShowcaseSection}>
      <div className={styles.programsShowcaseHeader}>
        <h2>
          Our Programs & Skills <br /> To Master
        </h2>
        <p>Upskill Your Knowledge To Change Your Career Trajectory</p>
      </div>
      <div className="container">
        <div className={styles.cardWrapper}>
          <WidgetCard
            title="Leadership in Digital Marketing, AI & Entrepreneurship"
            category={["Masters", "Executive"]}
            stats={[
              {
                icon: "/images/icons/certification.svg",
                label: "Masters Level Certification",
              },
              {
                icon: "/images/icons/certification.svg",
                label: "10 Advanced Specialisations",
              },
              {
                icon: "/images/icons/certification.svg",
                label: "30 Courses in 1 Program",
              },
              {
                icon: "/images/icons/certification.svg",
                label: "15+ Projects & Case Studies",
              },
            ]}
            buttonText="View Course"
            expertText="Talk To Our Expert"
            image="/images/skill-1.png"
          />
          <WidgetCard
            title="PGCP In Digital Marketing & Ecommerce"
            category={["Masters", "Executive"]}
            stats={[
              {
                icon: "/images/icons/certification.svg",
                label: "Masters Level Certification",
              },
              {
                icon: "/images/icons/certification.svg",
                label: "10 Advanced Specialisations",
              },
              {
                icon: "/images/icons/certification.svg",
                label: "30 Courses in 1 Program",
              },
              {
                icon: "/images/icons/certification.svg",
                label: "15+ Projects & Case Studies",
              },
            ]}
            buttonText="View Course"
            expertText="Talk To Our Expert"
            image="/images/skill-2.png"
          />
          <WidgetCard
            title="Skill Diploma in Digital Marketing & Analytics"
            category={["Diploma"]}
            stats={[
              {
                icon: "/images/icons/certification.svg",
                label: "Masters Level Certification",
              },
              {
                icon: "/images/icons/certification.svg",
                label: "10 Advanced Specialisations",
              },
              {
                icon: "/images/icons/certification.svg",
                label: "30 Courses in 1 Program",
              },
              {
                icon: "/images/icons/certification.svg",
                label: "15+ Projects & Case Studies",
              },
            ]}
            buttonText="View Course"
            expertText="Talk To Our Expert"
            image="/images/skill-3.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramsShowcase;
