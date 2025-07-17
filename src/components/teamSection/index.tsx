"use client";

import { useState } from "react";
import TeamSlider from "./teamSlider";
import styles from "./style.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";

const tabs = [
  "Guest Faculty",
  "DA360 Faculty",
  "Project Advisors",
  "Placement Coaches",
];

const members = [
  {
    name: "Sujeeth",
    role: "Wordpress Expert ",
    experience: "5 Years Experience ",
    img: "/images/trainers/sujeeth.png",
    linkedinLink: "/images/jeet.png",
    tab: "DA360 Faculty",
    design: "default",
    icon: "star",
  },
  {
    name: "Anush",
    role: "Video & PR Specialist ",
    experience: "5 Years Experience",
    img: "/images/trainers/anush.png",
    linkedinLink: "/images/jeet.png",
    tab: "DA360 Faculty",
    design: "default",
    icon: "star",
  },
  {
    name: "Sowmya G",
    role: "SEO Specialist",
    experience: "7 Years Experience",
    img: "/images/trainers/deepak-1.png",
    linkedinLink: "/images/jeet.png",
    tab: "DA360 Faculty",
    design: "default",
    icon: "star",
  },
  {
    name: "Swanand",
    role: "Sr.Content Marketer",
    experience: "8 Years Experience",
    img: "/images/trainers/swanand.png",
    linkedinLink: "/images/jeet.png",
    tab: "DA360 Faculty",
    design: "default",
    icon: "star",
  },
  {
    name: "Deepak",
    role: "Head of Academics",
    experience: "12 years Experience",
    img: "/images/trainers/deepak.png",
    linkedinLink: "/images/jeet.png",
    tab: "DA360 Faculty",
    design: "default",
    icon: "star",
  },
  {
    name: "Madhuraj",
    role: "Sr.Seo Expert",
    experience: "8 years Experience",
    img: "/images/trainers/madhu.png",
    linkedinLink: "/images/jeet.png",
    tab: "DA360 Faculty",
    textColor: "#FFF12D",
    design: "default",
    icon: "sparkle",
    iconImg: "/images/team/starpng.png",
    iconPosition: "right",
  },
  {
    name: "Sathiyaseelan",
    role: "Performance Marketer",
    experience: "3 years Experience",
    img: "/images/trainers/sathya.png",
    linkedinLink: "/images/jeet.png",
    tab: "DA360 Faculty",
    textColor: "#9E89FF",
    design: "default",
    icon: "sparkle",
    iconImg: "/images/team/circle.png",
    iconPosition: "left",
  },
  {
    name: "Monisha",
    role: "Social Media Specialist ",
    experience: "3 years Experience",
    img: "/images/trainers/monisha.png",
    tab: "DA360 Faculty",
    textColor: "#51FF74",
    design: "default",
    icon: "sparkle",
    iconImg: "/images/team/sparkle.png",
    iconPosition: "right",
    linkedinLink: "/images/jeet.png",
  },
  {
    name: "Ashwin",
    role: "Placement Officer",
    experience: "7 Years Experience",
    img: "/images/trainers/deepak-1.png",
    linkedinLink: "/images/jeet.png",
    textColor: "#9E89FF",
    tab: "DA360 Faculty",
    design: "default",
    icon: "bolt",
  },
  {
    name: "Rashmi",
    role: "Placement Officer",
    experience: "8 Years Experience",
    img: "/images/trainers/deepak-1.png",
    linkedinLink: "/images/jeet.png",
    textColor: "#9E89FF",
    tab: "DA360 Faculty",
    design: "default",
    icon: "bolt",
  },
];

interface TeamSectionProps {
  section?: string;
}

const TeamSection = ({ section }: TeamSectionProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filteredMembers = members.filter((m) => m.tab === activeTab);

  return (
    <section className={styles.teamSection} id={section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              title={
                <>
                  Your Growth, Our Experts <br /> Meet the Team
                </>
              }
            />
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
