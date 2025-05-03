"use client";

import { useState } from "react";
import TeamSlider from "./teamSlider";
import styles from "./style.module.scss";

const tabs = [
  "Super Mentors",
  "Guest Faculty",
  "AI Tools Specialist",
  "Project Managers",
  "Placements",
];

const members = [
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "7+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/jeet.png",
    tab: "Super Mentors",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "7+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/jeet.png",
    tab: "Guest Faculty",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "7+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/jeet.png",
    tab: "AI Tools Specialist",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "7+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/jeet.png",
    tab: "Project Managers",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/zer.png",
    tab: "Placements",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/zer.png",
    tab: "Super Mentors",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/zer.png",
    tab: "Super Mentors",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/zer.png",
    tab: "Super Mentors",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/zer.png",
    tab: "Super Mentors",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/zer.png",
    tab: "Super Mentors",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/zer.png",
    tab: "Super Mentors",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/zer.png",
    tab: "Super Mentors",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "6+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/value.png",
    tab: "Super Mentors",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "1+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/jeet.png",
    tab: "Super Mentors",
  },
];

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filteredMembers = members.filter((m) => m.tab === activeTab);

  return (
    <section className={styles.teamSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionHeader}>
              <h2>Meet the Team That Drives Your Success</h2>
            </div>
            {/* Tabs */}
            <div className={styles.tabs}>
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`${styles.tabButton} ${
                    activeTab === tab ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Child Component */}
          </div>
        </div>
        <TeamSlider members={filteredMembers} />
      </div>
    </section>
  );
};

export default TeamSection;
