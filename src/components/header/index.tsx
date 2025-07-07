"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import DownArrow from "@/components/Ui/svg/downArrow";
import QuickMenu from "@/components/widgets/quickMenu";
import MegaMenu from "./megaMenu";
// import { useRouter } from "next/navigation";

export default function Header() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isQuickOpen, setIsQuickOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownQuickRef = useRef<HTMLDivElement>(null);

  const toggleCourses = (e?: React.MouseEvent) => {
    e?.stopPropagation(); // works only if e exists
    setIsCoursesOpen((prev) => !prev);
  };

  const toggleQuickMenu = (e?: React.MouseEvent) => {
    e?.stopPropagation(); // works only if e exists
    setIsQuickOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // OR "click"

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownQuickRef.current &&
        !dropdownQuickRef.current.contains(event.target as Node)
      ) {
        setIsQuickOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // OR "click"

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // Check scroll position to toggle sticky class

  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop <= 0) {
        // At the very top — remove sticky
        setIsSticky(false);
        lastScrollTop = 0;
        return;
      }

      if (currentScrollTop < lastScrollTop) {
        // Scrolling up
        setIsSticky(true);
      } else if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsSticky(false);
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const router = useRouter();

  // const handleClickMasterDigital = () => {
  //   toggleCourses(); // call your custom function
  //   router.push("/master-digital-marketing-leadership-course");
  // };

  // const handleClickOline = () => {
  //   toggleCourses(); // call your custom function
  //   router.push("/online-digital-marketing-courses");
  // };

  // const handleClickDigitalMarketing = () => {
  //   toggleCourses(); // call your custom function
  //   router.push("/digital-marketing-training-institute");
  // };

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
              <div
                className={`${styles.navbarDropdownOverlay} ${
                  isCoursesOpen ? styles.open : ""
                } `}
              ></div>
              <div className={styles.courseDropdown} ref={dropdownRef}>
                <div
                  className={`${styles.dropdownToggle} ${
                    isCoursesOpen ? styles.open : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent bubbling
                    toggleCourses();
                  }}
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

                <div
                  className={`${styles.dropdownContainer} ${
                    isCoursesOpen ? styles.open : ""
                  }`}
                >
                  <MegaMenu />
                  {/* <div>
                    <div className={styles.dropdownContainerHeader}>
                      <h3>Digital Marketing Programs & Skills To Master</h3>
                    </div>
                    <div className={styles.dropdownColumnGroup}>
                      <div
                        onClick={handleClickMasterDigital}
                        className={`${styles.navbarDropdownColumn}`}
                      >
                        <h4>Leadership & AI Course</h4>
                        <span className={styles.dropdownTag}>9 Months</span>
                        <div className={styles.navbarDropdownList}>
                          <span className={styles.navbarTitle}>
                            Leadership in Digital Marketing, <br /> AI &
                            Entrepreneurship
                          </span>
                          <ul>
                            <li>
                              <Link href={"#"}>
                                {" "}
                                Masters Level Certification
                              </Link>
                            </li>
                            <li>
                              <Link href={"#"}>
                                {" "}
                                10 Advanced Specialisations
                              </Link>
                            </li>
                            <li>
                              <Link href={"#"}> 30 Courses in 1 Program</Link>
                            </li>
                            <li>
                              <Link href={"#"}>
                                15+ Projects & Case Studies
                              </Link>
                            </li>
                            <li>
                              <Link href={"#"}>22+ Certifications</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        onClick={handleClickOline}
                        className={`${styles.navbarDropdownColumn}`}
                      >
                        <h4>PGCP Course</h4>
                        <span className={styles.dropdownTag}>9 Months</span>
                        <div className={styles.navbarDropdownList}>
                          <span className={styles.navbarTitle}>
                            PGCP In Digital Marketing & <br /> E-Commerce
                          </span>
                          <ul>
                            <li>
                              <Link href={"#"}>
                                {" "}
                                Masters Level Certification
                              </Link>
                            </li>
                            <li>
                              <Link href={"#"}>
                                {" "}
                                10 Advanced Specialisations
                              </Link>
                            </li>
                            <li>
                              <Link href={"#"}> 30 Courses in 1 Program</Link>
                            </li>
                            <li>
                              <Link href={"#"}>
                                15+ Projects & Case Studies
                              </Link>
                            </li>
                            <li>
                              <Link href={"#"}>22+ Certifications</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        onClick={handleClickDigitalMarketing}
                        className={`${styles.navbarDropdownColumn}`}
                      >
                        <h4>SDCP Course</h4>
                        <span className={styles.dropdownTag}>9 Months</span>
                        <div className={styles.navbarDropdownList}>
                          <span className={styles.navbarTitle}>
                            Skill Diploma in Digital Marketing <br /> &
                            Analytics
                          </span>
                          <ul>
                            <li>
                              <Link href={"#"}>
                                {" "}
                                Masters Level Certification
                              </Link>
                            </li>
                            <li>
                              <Link href={"#"}>
                                {" "}
                                10 Advanced Specialisations
                              </Link>
                            </li>
                            <li>
                              <Link href={"#"}> 30 Courses in 1 Program</Link>
                            </li>
                            <li>
                              <Link href={"#"}>
                                15+ Projects & Case Studies
                              </Link>
                            </li>
                            <li>
                              <Link href={"#"}>22+ Certifications</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* End Courses Dropdown */}
            </div>
          </div>
          <div className="col-lg-7 col-md-3 col-3 d-flex align-items-center justify-content-end">
            <div className={styles.menu}>
              <nav className="d-none d-lg-block">
                <ul>
                  <li>
                    <Link href="/life@da360" className={styles.navItem}>
                      Life@da360
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className={styles.navItem}>
                      #TOOB
                    </Link>
                  </li>
                  <li>
                    <Link href="/trainers" className={styles.navItem}>
                      Trainers
                    </Link>
                  </li>
                  <li>
                    <Link href="/hackathon" className={styles.navItem}>
                      Hackathon
                    </Link>
                  </li>
                  <li>
                    <Link href="/placements" className={styles.navItem}>
                      Placements
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                className={`${styles.navbarQuickOverlay} ${
                  isQuickOpen ? styles.open : ""
                } `}
              ></div>
              <div className={styles.dropdownWrapper} ref={dropdownQuickRef}>
                <div
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent bubbling
                    toggleQuickMenu();
                  }}
                  className={styles.hamburgerMenu}
                >
                  <Image
                    src="/images/hamburger.svg"
                    alt="menu"
                    width={17}
                    height={11}
                  />
                </div>
                <div
                  className={`${styles.dropdownMenu} ${
                    isQuickOpen ? styles.open : ""
                  }`}
                >
                  <QuickMenu toggleQuickMenu={toggleQuickMenu} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
