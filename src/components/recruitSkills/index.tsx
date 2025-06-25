"use client";
import React from "react";
import styles from "./style.module.scss";
import SectionHeader from "@/components/widgets/sectionHeader";

const categories = [
  {
    title: "Digital Marketing",
    tags: [
      "SEO Intern",
      "SMO Intern",
      "SEM Intern",
      "Digital Marketing Intern",
      "Direct Marketing Analyst",
      "SMM Intern",
      "SEO Executive",
      "SMO Executive",
      "SEM Executive",
      "SMM Executive",
      "Digital Marketing Executive",
    ],
  },
  {
    title: "SEO",
    tags: [
      "SEO Intern",
      "SMO Intern",
      "SEM Intern",
      "Digital Marketing Intern",
      "Direct Marketing Analyst",
      "SMM Intern",
      "SEO Executive",
      "SMO Executive",
      "SEM Executive",
      "SMM Executive",
      "Digital Marketing Executive",
    ],
  },
  {
    title: "Social Media",
    tags: [
      "SEO Intern",
      "SMO Intern",
      "SEM Intern",
      "Digital Marketing Intern",
      "Direct Marketing Analyst",
      "SMM Intern",
      "SEO Executive",
      "SMO Executive",
      "SEM Executive",
      "SMM Executive",
      "Digital Marketing Executive",
    ],
  },
  {
    title: "Performance Marketing",
    tags: [
      "SEO Intern",
      "SMO Intern",
      "SEM Intern",
      "Digital Marketing Intern",
      "Direct Marketing Analyst",
      "SMM Intern",
      "SEO Executive",
      "SMO Executive",
      "SEM Executive",
      "SMM Executive",
      "Digital Marketing Executive",
    ],
  },
];

const RecruitSkills = () => {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              title={"Skills You Can Recruite For"}
              titleMarginBottom={{ desktop: "12px", mobile: "10px" }}
              description={
                "Developing your own employee training courses in-house can be daunting. We work with your business to create custom learning experiences that match your needs and meet your goals"
              }
              wrapperMarginBottom={{ desktop: "60px", mobile: "24px" }}
            />
            {categories.map((category, idx) => (
              <div className={styles.card} key={idx}>
                <h3>{category.title}</h3>
                <div className={styles.tagList}>
                  {category.tags.map((tag, index) => (
                    <span className={styles.tag} key={index}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitSkills;
