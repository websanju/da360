"use client";
import React, { useEffect, useState } from "react";
import WidgetCard from "@components/widgets/skills";
import styles from "./style.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionHeader from "@components/widgets/sectionHeader";
import Link from "next/link";
import ArrowUp from "@/components/Ui/svg/arrowUp";

const ProgramsShowcase: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Handle resize to update isMobile
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    handleResize(); // Initialize on first render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP Animation effect based on isMobile
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up before re-initializing

    if (isMobile) return; // 🚫 Skip animation on mobile

    const wrappers = gsap.utils.toArray<HTMLElement>(".card-wrapper");
    const cards = gsap.utils.toArray<HTMLElement>(".card1, .card2, .card3");

    wrappers.forEach((wrapper, i) => {
      const card = cards[i];
      if (!card) return;

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
            markers: false,
            id: `card-${i + 1}`,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <section className={styles.programsShowcaseSection}>
      <div className="wrapper">
        <SectionHeader
          wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
          titleMarginBottom={{ desktop: "20px", mobile: "10px" }}
          title={
            <>
              Programs Crafted for <br /> Real-World Success
            </>
          }
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.exploreBtn}>
              <Link href="/courses" className="btn btnWhite btn-lg px-4">
                Explore Programs <ArrowUp />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsShowcase;
