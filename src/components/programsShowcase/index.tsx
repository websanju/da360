"use client";
import React, { useEffect } from "react";
import WidgetCard from "@components/widgets/skills";
import styles from "./style.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionHeader from "@components/widgets/sectionHeader";

const ProgramsShowcase: React.FC = () => {
  useEffect(() => {
    console.clear();
    gsap.registerPlugin(ScrollTrigger);

    // const isMobile = window.innerWidth <= 768;

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
            start: `top ${120 + 30 * i}`,
            end: "bottom 600",
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
        <SectionHeader
          wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
          titleMarginBottom={{ desktop: "20px", mobile: "10px" }}
          title={<>Programs Crafted for Real-World Success</>}
          description="Get Certified. Get Hired."
        />

        <div className={`${styles.container} container`}>
          <div className="card-wrapper">
            <div className="card1">
              <WidgetCard
                title="Leadership in Digital Marketing, AI & Entrepreneurship"
                category={[
                  "12-Month Full Time Program",
                  " In-Person, Immersive Learning",
                ]}
                stats={[
                  {
                    icon: "/images/icons/certification.svg",
                    label: "40+ Power-Packed Modules",
                  },
                  {
                    icon: "/images/icons/certification.svg",
                    label: "1900+ hrs Practical Training",
                  },
                  {
                    icon: "/images/icons/certification.svg",
                    label: "15 Specialized Career Tracks",
                  },
                  {
                    icon: "/images/icons/certification.svg",
                    label: "15+ Live Agency-Style Projects",
                  },
                ]}
                buttonText="View Course"
                expertText="Avail Scholarship"
                image="/images/skill-1.png"
              />
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card2">
              <WidgetCard
                title="PGCP in Digital Marketing & E-Commerce"
                category={[
                  "6.5-Month Flagship Program",
                  "Available Online & On-Campus",
                ]}
                stats={[
                  {
                    icon: "/images/icons/certification.svg",
                    label: "15+ Dynamic Learning Modules",
                  },
                  {
                    icon: "/images/icons/certification.svg",
                    label: "260+ Hours of Experiential Learning",
                  },
                  {
                    icon: "/images/icons/certification.svg",
                    label: "5 Specialisation",
                  },
                  {
                    icon: "/images/icons/certification.svg",
                    label: "8+ Real-Time Marketing Projects",
                  },
                ]}
                buttonText="View Course"
                expertText="Avail Scholarship"
                image="/images/skill-2.png"
              />
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card3">
              <WidgetCard
                title="Skill Diploma in Digital Marketing & Analytics"
                category={[
                  "3-Month Certification Program",
                  "Online Learning Only",
                ]}
                stats={[
                  {
                    icon: "/images/icons/certification.svg",
                    label: " 5+ Impact-Driven Modules",
                  },
                  {
                    icon: "/images/icons/certification.svg",
                    label: "120+ hrs Hands-On Learning",
                  },
                  {
                    icon: "/images/icons/certification.svg",
                    label: " 5+ Professional Certifications",
                  },
                  {
                    icon: "/images/icons/certification.svg",
                    label: "2+ Live Marketing Case Projects",
                  },
                ]}
                buttonText="View Course"
                expertText="Avail Scholarship"
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
