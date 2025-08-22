"use client";
import { useEffect } from "react";
import styles from "./style.module.scss";
// import Image from "next/image";
// import Link from "next/link";
import { Sora } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";

// import UpArrow from "@/components/Ui/svg/arrowUp";
// import StudentArrow from "@/components/Ui/svg/studentArrow";
// import LearnSlider from "@components/learnSlider";

// Font configuration for Sora
const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

// Define TypeScript interface for student data
// interface Student {
//   name: string;
//   designation: string;
//   company: string;
//   bgColor: string;
//   iconColor: string;
//   cardClass: string;
// }

// Sample student data
// const students: Student[] = [
//   {
//     name: "Praveen",
//     designation: "Ass. Manager - Marketing",
//     company: "INTELLIPAT",
//     bgColor: "#4A6EE6",
//     iconColor: "#4A6EE6",
//     cardClass: "cardOne",
//   },
//   {
//     name: "Anjali",
//     designation: "PPC TRAINEE",
//     company: "VALUELEAF",
//     bgColor: "#4CCE6D",
//     iconColor: "#4CCE6D",
//     cardClass: "cardTwo",
//   },
//   {
//     name: "Mayank",
//     designation: "Ass. Manager - Marketing",
//     company: "INTELLIPAT",
//     bgColor: "#E53F43",
//     iconColor: "#E53F43",
//     cardClass: "cardThree",
//   },
//   {
//     name: "Mayank",
//     designation: "Ass. Manager - Marketing",
//     company: "INTELLIPAT",
//     bgColor: "#945EFF",
//     iconColor: "#945EFF",
//     cardClass: "cardFour",
//   },
//   {
//     name: "Mayank",
//     designation: "Ass. Manager - Marketing",
//     company: "INTELLIPAT",
//     bgColor: "#FFEC5E",
//     iconColor: "#FFEC5E",
//     cardClass: "cardFive",
//   },
// ];

// Student Card Component
// const StudentCard = ({
//   name,
//   designation,
//   company,
//   bgColor,
//   iconColor,
//   cardClass,
// }: Student) => (
//   <div
//     className={`${styles.studentCard} ${cardClass}`}
//     data-parallax-strength="0.1"
//   >
//     <div className={styles.studentBlock}>
//       <div className={styles.studentIcon}>
//         <StudentArrow color={iconColor} />
//       </div>
//       <div className={styles.studentName} style={{ backgroundColor: bgColor }}>
//         {name}
//       </div>
//     </div>
//     <div className={`${styles.studentDetails} ${sora.className}`}>
//       <p>{designation}</p>
//       <span>{company}</span>
//     </div>
//   </div>
// );

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

      {/* <LearnSlider /> */}

      {/* <div className={styles.imageContainer}>
        <div className={styles.imageBoxMobile}>
          <Image
            src="/images/hero-section-mobile.jpg"
            alt="Learners Group"
            width={786}
            height={640}
            className="object-cover"
            priority
          />
        </div>
        <div className={styles.imageBox}>
          <Image
            src="/images/hero-section.jpg"
            alt="Learners Group"
            width={2880}
            height={1900}
            className="object-cover"
            priority
          />

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

          <div className="container position-relative">
            <Link href="/placements" className={styles.viewAllBtn}>
              View All <UpArrow color="#fff" />
            </Link>
          </div>
        </div>
        <div className={styles.imageToppers}>
          <Image
            src="/images/toppers.svg"
            alt="Learners Group"
            width={670}
            height={286}
            className="object-cover"
            priority
          />
        </div>
      </div> */}

      {/* Information Bar */}
      <div className={`${styles.infoBar} ${sora.className}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.infobox}>
                <div className={styles.infoLable}>
                  {/* <span className={styles.experience}>
                    <span className={styles.marquee}>
                      · A Decade of Excellence · A Decade of Excellence · A
                      Decade of Excellence · A Decade of Excellence · A Decade
                      of Excellence · A Decade of Excellence · A Decade of
                      Excellence · A Decade of Excellence · A Decade of
                      Excellence · A Decade of Excellence · A Decade of
                      Excellence · A Decade of Excellence
                    </span>
                  </span> */}
                  <span>
                    Be A Skilled Professional
                    {/* <Image
                      src="/images/green-star.svg"
                      alt="Learners Group"
                      width={48}
                      height={48}
                      className="object-cover"
                      priority
                    /> */}
                  </span>
                  <p>Learn Today. Lead Tomorrow</p>
                </div>

                <div className={styles.infoNumbers}>
                  <div className={styles.companies}>
                    <h5>50,000+</h5>
                    <small>Careers transformed</small>
                  </div>
                  <div className={styles.companies}>
                    <h5>30,000+</h5>
                    <small>Successfully Placed</small>
                  </div>
                  <div className={styles.companies}>
                    <h5>2,000+</h5>
                    <small>Hiring Partners</small>
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
