"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import DownArrow from "@/components/Ui/svg/downArrow";
import QuickMenu from "@/components/widgets/quickMenu";
import MegaMenu from "./megaMenu";
import { usePathname } from "next/navigation";
import MobileMenu from "./mobileMenu";
import MegaMenuMobile from "./megaMenuMobile";

export default function Header() {
  const pathname = usePathname();
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isQuickOpen, setIsQuickOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownQuickRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const toggleCourses = (e?: React.MouseEvent | boolean) => {
    if (typeof e === "boolean") {
      setIsCoursesOpen(e);
      return;
    }

    e?.stopPropagation();
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
                  } ${styles.hamburgerdesktopMenu}`}
                  onClick={(e) => {
                    e.stopPropagation();
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
                  className={`${styles.dropdownToggle} ${
                    isCoursesOpen ? styles.open : ""
                  } ${styles.hamburgermobileMenu}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setMegaMenuOpen(true);
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
                  <MegaMenu closeMenu={() => toggleCourses(false)} />
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
                    <Link
                      href="/life@da360"
                      className={`${styles.navItem} ${
                        pathname === "/life@da360" ? styles.active : ""
                      }`}
                    >
                      Life@da360
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/trainers"
                      className={`${styles.navItem} ${
                        pathname === "/trainers" ? styles.active : ""
                      }`}
                    >
                      Trainers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hackathon"
                      className={`${styles.navItem} ${
                        pathname === "/hackathon" ? styles.active : ""
                      }`}
                    >
                      Hackathon
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hire-from-da360"
                      className={`${styles.navItem} ${
                        pathname === "/hire-from-da360" ? styles.active : ""
                      }`}
                    >
                      Hire From Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/placements"
                      className={`${styles.navItem} ${
                        pathname === "/placements" ? styles.active : ""
                      }`}
                    >
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
                  className={`${styles.hamburgerMenu} ${styles.hamburgerdesktopMenu}`}
                >
                  <Image
                    src="/images/hamburger.svg"
                    alt="menu"
                    width={17}
                    height={11}
                  />
                </div>
                <div
                  className={`${styles.hamburgerMenu} ${styles.hamburgermobileMenu}`}
                  onClick={() => setMenuOpen(true)}
                >
                  <Image
                    src="/images/hamburger.svg"
                    alt="menu"
                    width={17}
                    height={11}
                  />
                </div>

                {megaMenuOpen && (
                  <MegaMenuMobile onClose={() => setMegaMenuOpen(false)} />
                )}
                {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
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
