"use client";
import React, { useState } from "react";
// import Link from "next/link";
import styles from "./style.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { coursesData } from "@/data/megamenu";
import Link from "next/link";
type MegaMenuProps = {
  closeMenu: () => void;
};

const tabs = [
  { name: "Leadership Courses", key: "leadership" },
  { name: "PGCP Courses", key: "pgcp" },
  { name: "Certification Courses", key: "certification" },
  { name: "University Program", key: "college" },
];

export default function MegaMenu({ closeMenu }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  const handleCourseClick = (path: string) => {
    closeMenu();
    router.push(path);
  };

  const renderCourses = () =>
    coursesData[tabs[activeTab].key].map((course, idx) => (
      <div
        key={idx}
        onClick={() => handleCourseClick(course.onClick)}
        className={styles.navbarDropdownColumn}
      >
        <h4>{course.title}</h4>
        <div className={styles.navbarTags}>
          <span className={styles.dropdownTag}>{course.duration}</span>
          {course.mode && (
            <span className={styles.dropdownTag}>{course.mode}</span>
          )}
        </div>
        <div className={styles.navbarDropdownList}>
          <ul>
            {course.list.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    ));

  return (
    <div className={styles.megaMenu}>
      <div className={styles.megaMenuTab}>
        <ul>
          {tabs.map((tab, index) => {
            // pick the first course for this tab (or undefined if none)
            // const firstCourse = coursesData[tab.key]?.[0];

            return (
              <li
                key={index}
                className={index === activeTab ? styles.active : ""}
                onClick={() => setActiveTab(index)}
              >
                <div className={styles.menuItem}>
                  {tab.name}
                  <span className={styles.navbarTags}>
                    {/* {firstCourse?.duration && (
                      <span className={styles.dropdownTag}>
                        {firstCourse.duration}
                      </span>
                    )} */}
                    <Image
                      alt="leftArrow"
                      height={11}
                      width={7}
                      src="/images/leftArrow.svg"
                    />
                  </span>
                </div>
              </li>
            );
          })}
          <li>
            <Link className={styles.menuItem} href={"/courses"}>
              Explore Programs
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`${styles.dropdownColumnGroup} ${
          coursesData[tabs[activeTab].key].length === 2
            ? styles.leadershipColumnGroup
            : ""
        }`}
      >
        {renderCourses()}
      </div>
    </div>
  );
}
