"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Certification Courses", "PGCP Courses", "Leadership Courses"];
  const toggleCourses = (e?: React.MouseEvent) => {
    e?.stopPropagation(); // works only if e exists
  };

  const router = useRouter();

  const handleClickMasterDigital = () => {
    toggleCourses(); // call your custom function
    router.push("/master-digital-marketing-leadership-course");
  };

  const handleClickOline = () => {
    toggleCourses(); // call your custom function
    router.push("/online-digital-marketing-courses");
  };

  const handleClickDigitalMarketing = () => {
    toggleCourses(); // call your custom function
    router.push("/digital-marketing-training-institute");
  };
  return (
    <div className={styles.megaMenu}>
      {/* tabs */}
      <div className={styles.megaMenuTab}>
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={index === activeTab ? styles.active : ""}
              onClick={() => setActiveTab(index)}
            >
              <div className={styles.menuItem}>
                {tab}
                <span>
                  <Image
                    alt="leftArrow"
                    height={11}
                    width={7}
                    src="/images/leftArrow.svg"
                  />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.dropdownColumnBox}>
        <div className={styles.dropdownContainerHeader}>
          <h3>Digital Marketing Programs & Skills To Master</h3>
        </div>
        {/* tab content */}
        {activeTab === 0 && (
          <div className={styles.dropdownColumnGroup}>
            <div
              onClick={handleClickMasterDigital}
              className={`${styles.navbarDropdownColumn}`}
            >
              <h4>AI Marketing / MarTech / Video</h4>
              <span className={styles.navbarTitle}>
                AI Vibe Marketing Certification Course
              </span>
              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>2 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}> Masters Level Certification</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 10 Advanced Specialisations</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 30 Courses in 1 Program</Link>
                  </li>
                  <li>
                    <Link href={"#"}>15+ Projects & Case Studies</Link>
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
              <h4>Influencer Marketing</h4>
              <span className={styles.navbarTitle}>
                Youtube & Instagram Influencer Certification Course
              </span>
              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>2 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}> Masters Level Certification</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 10 Advanced Specialisations</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 30 Courses in 1 Program</Link>
                  </li>
                  <li>
                    <Link href={"#"}>15+ Projects & Case Studies</Link>
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
              <h4>LinkedIn Marketing Bootcamp</h4>
              <span className={styles.navbarTitle}>
                LinkedIn & Personal Branding Certification Course
              </span>
              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>2 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}> Masters Level Certification</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 10 Advanced Specialisations</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 30 Courses in 1 Program</Link>
                  </li>
                  <li>
                    <Link href={"#"}>15+ Projects & Case Studies</Link>
                  </li>
                  <li>
                    <Link href={"#"}>22+ Certifications</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className={styles.dropdownColumnGroup}>
            <div
              onClick={handleClickMasterDigital}
              className={`${styles.navbarDropdownColumn}`}
            >
              <h4>MarTech / Video</h4>
              <span className={styles.navbarTitle}>
                AI Vibe Marketing Certification Course
              </span>
              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>2 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}> Masters Level Certification</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 10 Advanced Specialisations</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 30 Courses in 1 Program</Link>
                  </li>
                  <li>
                    <Link href={"#"}>15+ Projects & Case Studies</Link>
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
              <h4>Marketing</h4>
              <span className={styles.navbarTitle}>
                Youtube & Instagram Influencer Certification Course
              </span>
              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>2 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}> Masters Level Certification</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 10 Advanced Specialisations</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 30 Courses in 1 Program</Link>
                  </li>
                  <li>
                    <Link href={"#"}>15+ Projects & Case Studies</Link>
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
              <h4>Bootcamp</h4>
              <span className={styles.navbarTitle}>
                LinkedIn & Personal Branding Certification Course
              </span>
              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>2 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}> Masters Level Certification</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 10 Advanced Specialisations</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 30 Courses in 1 Program</Link>
                  </li>
                  <li>
                    <Link href={"#"}>15+ Projects & Case Studies</Link>
                  </li>
                  <li>
                    <Link href={"#"}>22+ Certifications</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className={styles.dropdownColumnGroup}>
            <div
              onClick={handleClickMasterDigital}
              className={`${styles.navbarDropdownColumn}`}
            >
              <h4>AI Marketing / MarTech / Video</h4>
              <span className={styles.navbarTitle}>
                AI Vibe Marketing Certification Course
              </span>
              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>2 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}> Masters Level Certification</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 10 Advanced Specialisations</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 30 Courses in 1 Program</Link>
                  </li>
                  <li>
                    <Link href={"#"}>15+ Projects & Case Studies</Link>
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
              <h4>Influencer Marketing</h4>
              <span className={styles.navbarTitle}>
                Youtube & Instagram Influencer Certification Course
              </span>
              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>2 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}> Masters Level Certification</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 10 Advanced Specialisations</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 30 Courses in 1 Program</Link>
                  </li>
                  <li>
                    <Link href={"#"}>15+ Projects & Case Studies</Link>
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
              <h4>LinkedIn Marketing Bootcamp</h4>
              <span className={styles.navbarTitle}>
                LinkedIn & Personal Branding Certification Course
              </span>
              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>2 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}> Masters Level Certification</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 10 Advanced Specialisations</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 30 Courses in 1 Program</Link>
                  </li>
                  <li>
                    <Link href={"#"}>15+ Projects & Case Studies</Link>
                  </li>
                  <li>
                    <Link href={"#"}>22+ Certifications</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
