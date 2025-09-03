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
    const cards = gsap.utils.toArray<HTMLElement>(
      ".card1, .card2, .card3, .card4"
    );

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
          description="Program Endorsed By Industry Leaders"
        />

        <div className={`${styles.container} container`}>
          <div className="card-wrapper">
            <div className="card1">
              <WidgetCard
                title="Leadership in Digital Marketing, AI & Entrepreneurship"
                category={[
                  "12-Month Full Time Program",
                  "Immersive Classroom Learning",
                ]}
                stats={[
                  {
                    icon: "/images/course-list/icons/icon01.svg",
                    label: "50+ Case Studies",
                  },
                  {
                    icon: "/images/course-list/icons/icon02.svg",
                    label: "1900+ hrs Practical Training",
                  },
                  {
                    icon: "/images/course-list/icons/icon03.svg",
                    label: "70+ Tools",
                  },
                  {
                    icon: "/images/course-list/icons/icon04.svg",
                    label: "25+ Certifications",
                  },
                ]}
                buttonText="View Course"
                courseLink="/digital-marketing-leadership-entrepreneurship-program"
                expertText="Avail Scholarship"
                image="/images/course-list/leadeship-course-min.png"
              />
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card4">
              <WidgetCard
                title="Leadership in Social Content Creator & Video Production"
                category={["Coming Soon"]}
                stats={[
                  {
                    icon: "/images/course-list/icons/icon01.svg",
                    label: "50+ Case Studies",
                  },
                  {
                    icon: "/images/course-list/icons/icon02.svg",
                    label: "1920+ Hours of Learning",
                  },
                  {
                    icon: "/images/course-list/icons/icon03.svg",
                    label: "55+ Specialised Tools",
                  },
                  {
                    icon: "/images/course-list/icons/icon04.svg",
                    label: "20+ Certifications",
                  },
                ]}
                buttonText="View Course"
                courseLink="/digital-marketing-training-institute"
                //
                expertText="Avail Scholarship"
                image="/images/course-list/performance-marketing-and-media-buying.jpg"
              />
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card2">
              <WidgetCard
                title="PGCP in Digital Marketing, E‑Comm & AI"
                category={["6-Month Flagship Program", "Online / Classroom"]}
                stats={[
                  {
                    icon: "/images/course-list/icons/icon01.svg",
                    label: "240+ Hours of Learning",
                  },
                  {
                    icon: "/images/course-list/icons/icon02.svg",
                    label: "20+ Case Studies",
                  },
                  {
                    icon: "/images/course-list/icons/icon03.svg",
                    label: "30+ Tools",
                  },
                  {
                    icon: "/images/course-list/icons/icon04.svg",
                    label: "15+ Certifications",
                  },
                ]}
                buttonText="View Course"
                courseLink="/digital-marketing-class-ai-ecomerce-pgcp-course"
                expertText="Avail Scholarship"
                image="/images/course-list/PGCP-in-digital-marketing-e‑comm-aI.jpg"
              />
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card3">
              <WidgetCard
                title="PGCP in Performance Marketing & Media Buying"
                category={["6-Month PG Program", "Online / Classroom"]}
                stats={[
                  {
                    icon: "/images/course-list/icons/icon01.svg",
                    label: "20+ Case Studies",
                  },
                  {
                    icon: "/images/course-list/icons/icon02.svg",
                    label: "240+ Hours of Learning",
                  },
                  {
                    icon: "/images/course-list/icons/icon03.svg",
                    label: "20+ Specialised Tools",
                  },
                  {
                    icon: "/images/course-list/icons/icon04.svg",
                    label: "15+ Certifications",
                  },
                ]}
                buttonText="View Course"
                courseLink="/digital-marketing-training-institute"
                //
                expertText="Avail Scholarship"
                image="/images/course-list/performance-marketing-and-media-buying.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.exploreBtn}>
              <Link
                href="/digital-marketing-courses"
                className="btn btnWhite btn-lg"
              >
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
