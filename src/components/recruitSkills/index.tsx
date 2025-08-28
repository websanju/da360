"use client";
import React from "react";
import styles from "./style.module.scss";
import SectionHeader from "@/components/widgets/sectionHeader";

const categories = [
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing professionals are trained across the full funnel—strategy, execution, and analytics.",
    tags: [
      "Digital Marketing Intern",
      "Digital Marketing Executive",
      "Digital Marketing Analyst",
      "Digital Marketing Strategist",
    ],
  },
  {
    title: "SEO (Search Engine Optimization)",
    description:
      "Specialists skilled in on-page, off-page, and technical SEO to help brands improve rankings and organic visibility.",
    tags: ["SEO Intern", "SEO Executive", "SEO Analyst", "SEO Specialist"],
  },
  {
    title: "Social MediaSocial Media Marketing (SMM & SMO)",
    description:
      "Creative minds who can build communities, engage audiences, and grow brand presence across platforms.",
    tags: [
      "Social Media Intern",
      "Social Media Executive",
      "Social Media Analyst",
      "Community Manager",
    ],
  },
  {
    title: "Performance Marketing (SEM & Paid Ads)",
    description:
      "Data-driven professionals trained in Google Ads, Meta Ads, and programmatic campaigns to maximize ROI.",
    tags: [
      "Performance Marketing Intern",
      "Performance Marketing Executive",
      "Paid Ads Analyst",
      "PPC Specialist",
      "Performance Marketing Manager",
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
          </div>
        </div>
      </div>
      <div className={styles.skillsCards}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {categories.map((category, idx) => (
                <div className={styles.card} key={idx}>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
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
      </div>
    </section>
  );
};

export default RecruitSkills;
