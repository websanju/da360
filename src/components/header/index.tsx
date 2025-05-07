"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import DownArrow from "@components/Ui/svg/downArrow";

export default function Header() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  // Check scroll position to toggle sticky class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true); // Add sticky class when scrolling
      } else {
        setIsSticky(false); // Remove sticky class when at top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-9 col-9 d-flex align-items-center">
            <div className={styles.logoBlock}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={177.64}
                  height={52.43}
                />
              </Link>
              {/* Courses Dropdown */}
              <div className={styles.courseDropdown}>
                <div
                  className={`${styles.dropdownToggle} ${
                    isCoursesOpen ? styles.open : ""
                  }`}
                  onClick={toggleCourses}
                >
                  <span>Courses</span>
                  <span
                    className={`${styles.arrow} ${
                      isCoursesOpen ? styles.open : ""
                    }`}
                  >
                    <DownArrow />
                  </span>
                </div>

                {isCoursesOpen && (
                  <div className={styles.dropdownMenu}>
                    <div className={styles.dropdownColumn}>
                      <h5>Digital Business Program</h5>
                      <Link href="#">
                        Bachelors/UG in Digital Business & Entrepreneurship
                      </Link>
                    </div>
                    <hr />
                    <div className={styles.dropdownColumn}>
                      <h5>Digital Marketing Courses</h5>
                      <Link href="#">MBA-Level Post Graduation Program</Link>
                      <Link href="#">Online Digital Marketing Course</Link>
                    </div>
                    <hr />
                    <div className={styles.dropdownColumn}>
                      <h5>Free Masterclass</h5>
                      <Link href="#">Recorded Masterclass</Link>
                      <Link href="#">Live Masterclass</Link>
                    </div>
                    <div className={styles.findCourse}>
                      <Link href="#">Find A Course ↗</Link>
                    </div>
                  </div>
                )}
              </div>
              {/* End Courses Dropdown */}
            </div>
          </div>
          <div className="col-lg-7 col-md-3 col-3 d-flex align-items-center justify-content-end">
            <div className={styles.menu}>
              <nav className="d-none d-lg-block">
                <ul>
                  <li>
                    <Link href="/" className={styles.navItem}>
                      Life@da360
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className={styles.navItem}>
                      Performmers
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className={styles.navItem}>
                      Hackathon
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className={styles.navItem}>
                      Placements
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className={styles.navItem}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className={styles.dropdownWrapper}>
                <div className={styles.hamburgerMenu}>
                  <Image
                    src="/images/hamburger.svg"
                    alt="menu"
                    width={17}
                    height={11}
                  />
                </div>

                <div className={`${styles.dropdownMenu} `}>
                  <ul>
                    <li>
                      <Link href="/">Refer &amp; Earn</Link>
                    </li>
                    <li>
                      <Link href="/">Career@da360</Link>
                    </li>
                    <li>
                      <Link href="/">Contact Us</Link>
                    </li>
                    <li className={styles.loginAction}>
                      <span>
                        <Link href="/">Login</Link>
                      </span>
                      <span>
                        <Link href="/">Call</Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
