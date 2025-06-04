"use client";
import { useEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Sora } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";

import UpArrow from "@/components/Ui/svg/arrowUp";
import StudentArrow from "@/components/Ui/svg/studentArrow";
import AccreditationSection from "@components/widgets/accreditationSection";
import LearnSlider from "@components/learnSlider";

// Font configuration for Sora
const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

// Define TypeScript interface for student data
interface Student {
  name: string;
  designation: string;
  company: string;
  bgColor: string;
  iconColor: string;
  cardClass: string;
}

// Sample student data
const students: Student[] = [
  {
    name: "Praveen",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#4A6EE6",
    iconColor: "#4A6EE6",
    cardClass: "cardOne",
  },
  {
    name: "Anjali",
    designation: "PPC TRAINEE",
    company: "VALUELEAF",
    bgColor: "#4CCE6D",
    iconColor: "#4CCE6D",
    cardClass: "cardTwo",
  },
  {
    name: "Mayank",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#FFCD5E",
    iconColor: "#FFCD5E",
    cardClass: "cardThree",
  },
  {
    name: "Mayank",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#945EFF",
    iconColor: "#945EFF",
    cardClass: "cardFour",
  },
  {
    name: "Mayank",
    designation: "Ass. Manager - Marketing",
    company: "INTELLIPAT",
    bgColor: "#E53F43",
    iconColor: "#E53F43",
    cardClass: "cardFive",
  },
];

// Student Card Component
const StudentCard = ({
  name,
  designation,
  company,
  bgColor,
  iconColor,
  cardClass,
}: Student) => (
  <div
    className={`${styles.studentCard} ${cardClass}`}
    data-parallax-strength="0.1"
  >
    <div className={styles.studentBlock}>
      <div className={styles.studentIcon}>
        <StudentArrow color={iconColor} />
      </div>
      <div className={styles.studentName} style={{ backgroundColor: bgColor }}>
        {name}
      </div>
    </div>
    <div className={`${styles.studentDetails} ${sora.className}`}>
      <p>{designation}</p>
      <span>{company}</span>
    </div>
  </div>
);

export default function LearnersSection() {
  useEffect(() => {
    AOS.init({
      duration: 20,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    // === Parallax Logic (Vanilla JS) ===
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll(
        "[data-parallax-strength]"
      );
      parallaxElements.forEach((element) => {
        const strength = parseFloat(
          element.getAttribute("data-parallax-strength") || "0.1"
        );
        const scrollY = window.scrollY;
        const offsetTop = element.getBoundingClientRect().top + scrollY;
        const translateY = (scrollY - offsetTop) * strength;

        (
          element as HTMLElement
        ).style.transform = `translateY(${translateY}px)`;
      });
    };

    // Attach scroll event
    window.addEventListener("scroll", handleParallax);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <section className={`${styles.learnersSection}`}>
      {/* Image Container */}
      <div className={styles.accreditationSection}>
        <AccreditationSection />
      </div>
      <LearnSlider />

      <div className={styles.imageContainer}>
        <div className={styles.imageBox}>
          <Image
            src="/images/hero-section.png"
            alt="Learners Group"
            width={1456}
            height={1456}
            className="object-cover"
            priority
          />

          {/* Student Names Container */}
          <div className={styles.studentNames}>
            <div className={`container position-relative ${styles.container}`}>
              {students.map((student, index) => (
                <StudentCard
                  key={index}
                  {...student}
                  cardClass={styles[student.cardClass]}
                />
              ))}
            </div>
          </div>

          {/* View All Button */}
          <div className="container position-relative">
            <Link href="#" className={styles.viewAllBtn}>
              View All <UpArrow color="#fff" />
            </Link>
          </div>
        </div>
      </div>

      {/* Information Bar */}
      <div className={`${styles.infoBar} ${sora.className}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.infobox}>
                <div className={styles.infoLable}>
                  <span>Be A Skilled Professional</span>
                  <p>Lead the Digital Future.</p>
                </div>

                <div className={styles.infoNumbers}>
                  <div className={styles.companies}>
                    <h5>1000+</h5>
                    <small>
                      Companies our <br /> learners work in
                    </small>
                  </div>
                  <div className={styles.placed}>
                    <h5>93%</h5>
                    <small>
                      Learners placed
                      <br /> on average
                    </small>
                  </div>
                  <div className={styles.freelancers}>
                    <h5>300+</h5>
                    <small>
                      Entrepreneurs & <br /> freelancers created
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
