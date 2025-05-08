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
    design: "default",
    icon: "star",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "7+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/jeet.png",
    tab: "Super Mentors",
    design: "default",
    icon: "star",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "7+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/jeet.png",
    tab: "Super Mentors",
    design: "default",
    icon: "star",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "7+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/jeet.png",
    tab: "Super Mentors",
    design: "default",
    icon: "star",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "7+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/jeet.png",
    tab: "Super Mentors",
    design: "default",
    icon: "star",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "7+ years Experience",
    img: "/images/team/new-design.png",
    tab: "Super Mentors",
    textColor: "#FFF12D",
    design: "new",
    icon: "sparkle",
    iconImg: "/images/team/starpng.png",
    iconPosition: "right",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "7+ years Experience",
    img: "/images/team/team-2.png",
    tab: "Super Mentors",
    textColor: "#9E89FF",
    design: "new",
    icon: "sparkle",
    iconImg: "/images/team/circle.png",
    iconPosition: "left",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "7+ years Experience",
    img: "/images/team/team-3.png",
    tab: "Super Mentors",
    textColor: "#51FF74",
    design: "new",
    icon: "sparkle",
    iconImg: "/images/team/sparkle.png",
    iconPosition: "right",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "7+ years Experience",
    img: "/images/team/team-3.png",
    companyLogo: "/images/jeet.png",
    textColor: "#9E89FF",
    tab: "AI Tools Specialist",
    design: "new",
    icon: "bolt",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "7+ years Experience",
    img: "/images/deepak-1.png",
    companyLogo: "/images/jeet.png",
    tab: "Project Managers",
    design: "default",
    icon: "circle",
  },
  {
    name: "Deepak Soni",
    role: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    img: "/images/team/team-3.png",
    companyLogo: "/images/zer.png",
    textColor: "#9E89FF",
    tab: "Placements",
    design: "new",
    icon: "diamond",
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
              <h2>Your Success, Our People Meet the Team</h2>
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
          </div>
        </div>
      </div>
      <TeamSlider members={filteredMembers} />
    </section>
  );
};

export default TeamSection;
