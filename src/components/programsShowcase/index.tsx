"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WidgetCard from "@components/widgets/skills";
import styles from "./style.module.scss";

gsap.registerPlugin(ScrollTrigger);

const ProgramsShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".widget-card") as HTMLElement[];

    if (!sectionRef.current || !cards.length) return;

    // Set only the first visible by default
    gsap.set(cards, {
      autoAlpha: 0,
      position: "absolute",
      top: 100,
      left: 0,
      right: 0,
    });
    gsap.set(cards[0], { autoAlpha: 1 });

    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: () => `top+=${index * window.innerHeight} top`,
        end: () => `top+=${(index + 1) * window.innerHeight} top`,
        scrub: true,
        onEnter: () => showCard(index),
        onEnterBack: () => showCard(index),
      });
    });

    function showCard(index: number) {
      cards.forEach((card, i) => {
        gsap.to(card, {
          autoAlpha: i === index ? 1 : 0,
          duration: 0.5,
          overwrite: true,
        });
      });
    }

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${cards.length * window.innerHeight}`,
      pin: true,
      scrub: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.programsShowcaseSection} ref={sectionRef}>
      <div className={styles.programsShowcaseHeader}>
        <h2>
          Our Programs & Skills <br /> To Master
        </h2>
        <p>Upskill Your Knowledge To Change Your Career Trajectory</p>
      </div>
      <div className="container">
        <div className={styles.cardWrapper} ref={cardsRef}>
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
