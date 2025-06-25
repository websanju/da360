"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import SectionHeader from "@/components/widgets/sectionHeader";

const features = [
  {
    icon: "/images/whyhireDa360/palcement-success-rate.svg",
    title: "95% Placement Success Rate",
  },
  {
    icon: "/images/whyhireDa360/trained-by-industry-experts.svg",
    title: "Trained By Industry Experts",
  },
  {
    icon: "/images/whyhireDa360/real-time-projects.svg",
    title: "Real-Time Projects & Hands-On Experience",
  },
  {
    icon: "/images/whyhireDa360/strong-soft-skills-presentation.svg",
    title: "Strong Soft Skills & Presentation Skills",
  },
];

const WhyHireDA360 = () => {
  return (
    <section className={styles.whyHireSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              title={"Why Hire from DA360?"}
              titleMarginBottom={{ desktop: "16px", mobile: "10px" }}
              description={
                "DA360 courses are crafted in collaboration with top industry leaders, ensuring that the skills and knowledge you gain reflect the latest trends, tools, and best practices in digital marketing for your professional growth."
              }
              wrapperMarginBottom={{ desktop: "60px", mobile: "24px" }}
            />
            <div className={styles.featureGrid}>
              {features.map((item, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.cardImg}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={125}
                      height={125}
                    />
                  </div>
                  <h4>{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireDA360;
