// components/MobileMenu.tsx
"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./mega.module.scss";
import { useRouter } from "next/navigation";

type Props = {
  onClose: () => void;
};

const MobileMenu: React.FC<Props> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();
  const handleClick = (url: string) => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      router.push(url);
    }, 300);
  };
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  const renderListItem = (text: string) => (
    <li>
      <span>{text}</span>
    </li>
  );
  return (
    <div
      className={`${styles.mobileMenu} ${
        isClosing ? styles.slideOut : styles.slideIn
      }`}
    >
      <button className={styles.closeBtn} onClick={handleClose}>
        <Image
          src="/images/icons/close.svg"
          alt="logo"
          width={14}
          height={14}
        />
      </button>
      <div className={styles.columnBox}>
        {/* === Leadership Courses === */}
        <div
          className={`${styles.columnGroup} ${styles.leadershipColumnGroup}`}
        >
          <h3>Leadership Courses</h3>
          <div
            onClick={() =>
              handleClick("/master-digital-marketing-leadership-course")
            }
            className={styles.navbarDropdownColumn}
          >
            <h4>Leadership in Digital Marketing, AI & Entrepreneurship</h4>

            <div className={styles.navbarTags}>
              <span className={styles.dropdownTag}>12 Months</span>
            </div>
            <ul className={styles.navbarDropdownList}>
              {renderListItem("3 Months Internship Included")}
              {renderListItem("1920+ Hours of Learning")}
              {renderListItem("50+ Case Studies")}
              {renderListItem("70+ Tools")}
              {renderListItem("25+ Certifications")}
            </ul>
          </div>

          <div
            onClick={() =>
              handleClick("/social-content-creator-and-video-production")
            }
            className={styles.navbarDropdownColumn}
          >
            <h4>Leadership in Social Content Creator & Video Production</h4>

            <div className={styles.navbarTags}>
              <span className={styles.dropdownTag}>Coming Soon</span>
            </div>
            <ul className={styles.navbarDropdownList}>
              {renderListItem("3 Months Internship Included")}
              {renderListItem("1920+ Hours of Learning")}
              {renderListItem("50+ Case Studies")}
              {renderListItem("55+ Specialised Tools")}
              {renderListItem("20+ Certifications")}
            </ul>
          </div>
        </div>

        {/* === PGCP Courses === */}
        <div
          className={`${styles.columnGroup} ${styles.leadershipColumnGroup}`}
        >
          <h3>PGCP Courses</h3>
          <div
            onClick={() => handleClick("/digital-marketing-training-institute")}
            className={styles.navbarDropdownColumn}
          >
            <h4>PGCP in Digital Marketing, E‑Comm & AI</h4>

            <div className={styles.navbarTags}>
              <span className={styles.dropdownTag}>6 Months</span>
              <span className={styles.dropdownTag}>Online / Classroom</span>
            </div>
            <ul className={styles.navbarDropdownList}>
              {renderListItem("PG Level Certification")}
              {renderListItem("240+ Hours of Learning")}
              {renderListItem("20+ Case Studies")}
              {renderListItem("30+ Tools")}
              {renderListItem("15+ Certifications")}
            </ul>
          </div>
          <div
            onClick={() =>
              handleClick("/performance-marketing-and-media-buying")
            }
            className={styles.navbarDropdownColumn}
          >
            <h4>PGCP in Performance Marketing & Media Buying</h4>

            <div className={styles.navbarTags}>
              <span className={styles.dropdownTag}>6 Months</span>
              <span className={styles.dropdownTag}>Online</span>
            </div>
            <ul className={styles.navbarDropdownList}>
              {renderListItem("PG Level Certification")}
              {renderListItem("240+ Hours of Learning")}
              {renderListItem("20+ Case Studies")}
              {renderListItem("20+ Specialised Tools")}
              {renderListItem("15+ Certifications")}
            </ul>
          </div>
        </div>

        {/* === Certification Courses === */}
        <div className={styles.columnGroup}>
          <h3>Certification Courses</h3>

          <div
            onClick={() => handleClick("/ai-vibe-marketing-courses")}
            className={styles.navbarDropdownColumn}
          >
            <h4> AI Vibe Marketing</h4>

            <div className={styles.navbarTags}>
              <span className={styles.dropdownTag}>2 Months</span>
              <span className={styles.dropdownTag}>Online</span>
            </div>
            <ul className={styles.navbarDropdownList}>
              {renderListItem("Advance Specialist Certification")}
              {renderListItem("80+ Hours of Learning")}
              {renderListItem("8+ Case Studies")}
              {renderListItem("10+ Tools")}
              {renderListItem("2 AI Flows")}
            </ul>
          </div>

          <div
            onClick={() => handleClick("/youtube-instagram-influencer-courses")}
            className={styles.navbarDropdownColumn}
          >
            <h4>Youtube & Instagram Influencer</h4>
            <div className={styles.navbarTags}>
              <span className={styles.dropdownTag}>2 Months</span>
              <span className={styles.dropdownTag}>Online</span>
            </div>
            <ul className={styles.navbarDropdownList}>
              {renderListItem("Advance Specialist Certification")}
              {renderListItem("80+ Hours of Learning")}
              {renderListItem("8+ Case Studies")}
              {renderListItem("5+ Specialised Tools")}
              {renderListItem("2 Creator Flow")}
            </ul>
          </div>

          <div
            onClick={() => handleClick("/performance-marketing-and-martech")}
            className={styles.navbarDropdownColumn}
          >
            <h4>Performance Marketing & MarTech</h4>

            <div className={styles.navbarTags}>
              <span className={styles.dropdownTag}>2 Months</span>
              <span className={styles.dropdownTag}>Online</span>
            </div>
            <ul className={styles.navbarDropdownList}>
              {renderListItem("Advance Specialist Certification")}
              {renderListItem("80+ Hours of Learning")}
              {renderListItem("8+ Case Studies")}
              {renderListItem("10+ Tools")}
              {renderListItem("2 Linkedin Outreach Flow")}
            </ul>
          </div>
        </div>

        {/* === College Courses === */}
        <div
          className={`${styles.columnGroup} ${styles.leadershipColumnGroup}`}
        >
          <h3>University Program</h3>
          <div
            onClick={() => handleClick("/mba-digital-marketing-degree-course")}
            className={styles.navbarDropdownColumn}
          >
            <h4> MBA in Digital Marketing and AI </h4>

            <div className={styles.navbarTags}>
              <span className={styles.dropdownTag}>2 Years</span>
              <span className={styles.dropdownTag}>Classroom</span>
            </div>
            <ul className={styles.navbarDropdownList}>
              {renderListItem("S-Vyasa Deemed to be University")}
              {renderListItem("NAAC Grade A+")}
              {renderListItem("AICTE Approved")}
              {renderListItem("Accredited by N.S.D.C.")}
              {renderListItem("Job Guarantee Program*")}
            </ul>
          </div>
          <div
            onClick={() => handleClick("/bba-digital-marketing-degree-course")}
            className={styles.navbarDropdownColumn}
          >
            <h4>BBA in Digital Marketing & AI</h4>

            <div className={styles.navbarTags}>
              <span className={styles.dropdownTag}>3 Years</span>
              <span className={styles.dropdownTag}>Classroom</span>
            </div>
            <ul className={styles.navbarDropdownList}>
              {renderListItem("S-Vyasa Deemed to be University")}
              {renderListItem("NAAC Grade A+")}
              {renderListItem("AICTE Approved")}
              {renderListItem("Accredited by N.S.D.C.")}
              {renderListItem("Job Guarantee Program*")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
