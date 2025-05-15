"use client";
import React, { useEffect } from "react";
import WidgetCard from "@components/widgets/skills";
import styles from "./style.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ProgramsShowcase: React.FC = () => {
  useEffect(() => {
    console.clear();
    gsap.registerPlugin(ScrollTrigger);

    const wrappers = gsap.utils.toArray<HTMLElement>(".card-wrapper");
    const cards = gsap.utils.toArray<HTMLElement>(".card1, .card2, .card3");

    wrappers.forEach((wrapper, i) => {
      const card = cards[i];

      gsap.fromTo(
        card,
        {
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
          transformOrigin: "center center",
        },
        {
          scaleX: 0.8,
          scaleY: 0.8,
          scaleZ: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapper,
            start: `top ${150 + 20 * i}`,
            end: "bottom 680",
            endTrigger: ".wrapper",
            scrub: true,
            pin: wrapper,
            pinSpacing: false,
            markers: false, // turn true if you want to debug
            id: `card-${i + 1}`,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.programsShowcaseSection}>
      <div className="wrapper">
        <div className={styles.programsShowcaseHeader}>
          <h2>
            Our Programs & Skills <br /> To Master
          </h2>
          <p>Upskill Your Knowledge To Change Your Career Trajectory</p>
        </div>
        <div className={`${styles.container} container`}>
          <div className="card-wrapper">
            <div className="card1">
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
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card2">
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
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card3">
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
        </div>
      </div>
    </section>
  );
};

export default ProgramsShowcase;
