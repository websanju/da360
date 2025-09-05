"use client";

import { useState } from "react";
import TeamSlider from "./teamSlider";
import styles from "./style.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";
import GuestFacultySlider from "../guestFacultySlider";

const tabs = [
  "Guest Faculty",
  "DA360 Faculty",
  "Project Advisors",
  "Placement / Support",
];

const members = [
  {
    name: "Deepak",
    role: "Head of Academics",
    experience: "12 years Experience",
    img: "/images/trainers/deepak.png",
    linkedinLink: "https://www.linkedin.com/in/deepakoddthinker/",
    tab: "DA360 Faculty",
    design: "default",
    icon: "star",
  },
  {
    name: "Madhuraj",
    role: "Sr. Trainer- Digital Marketing",
    experience: "8 years Experience",
    img: "/images/trainers/madhu.png",
    linkedinLink: "https://www.linkedin.com/in/madhuraj-p/",
    tab: "DA360 Faculty",
    textColor: "#FFF12D",
    design: "default",
    icon: "sparkle",
    iconImg: "/images/team/starpng.png",
    iconPosition: "right",
  },
  {
    name: "Swanand",
    role: "Sr. Trainer- Digital Marketing",
    experience: "8 Years Experience",
    img: "/images/trainers/swanand.png",
    linkedinLink: "http://www.linkedin.com/in/swanand-p",
    tab: "DA360 Faculty",
    design: "default",
    icon: "star",
  },
  {
    name: "Sujeeth",
    role: "Executive DM Trainer",
    experience: "5 Years Experience ",
    img: "/images/trainers/sujeeth.png",
    linkedinLink: "https://www.linkedin.com/in/sujeeth-hd-7988921b8/",
    tab: "DA360 Faculty",
    design: "default",
    icon: "star",
  },
  {
    name: "Anush Raj K",
    role: "Executive DM Trainer",
    experience: "5 Years Experience",
    img: "/images/trainers/anush.png",
    linkedinLink: "https://www.linkedin.com/in/hvr26/",
    tab: "DA360 Faculty",
    design: "default",
    icon: "star",
  },

  {
    name: "Sathiyaseelan",
    role: "Executive DM Trainer",
    experience: "3 years Experience",
    img: "/images/trainers/sathya.png",
    linkedinLink: "https://www.linkedin.com/in/sathiyaseelan1/",
    tab: "Project Advisors",
    textColor: "#9E89FF",
    design: "default",
    icon: "sparkle",
    iconImg: "/images/team/circle.png",
    iconPosition: "left",
  },
  {
    name: "Monisha",
    role: "Executive DM Trainer",
    experience: "3 years Experience",
    img: "/images/trainers/monisha.png",
    tab: "Project Advisors",
    textColor: "#51FF74",
    design: "default",
    icon: "sparkle",
    iconImg: "/images/team/sparkle.png",
    iconPosition: "right",
    linkedinLink: "https://www.linkedin.com/in/monishajainss/",
  },
  {
    name: "Roshan",
    role: "Sr. Trainer- Digital Marketing ",
    experience: "10+ years Experience ",
    img: "/images/trainers/roshan.jpg",
    tab: "Project Advisors",
    textColor: "#51FF74",
    design: "default",
    icon: "sparkle",
    iconImg: "/images/team/sparkle.png",
    iconPosition: "right",
    linkedinLink: "https://www.linkedin.com/in/kautilyaroshan/",
  },
  {
    name: "Asharufhi",
    role: "Sr. Trainer- Digital Marketing",
    experience: "9+ years Experience",
    img: "/images/trainers/azarudheen.jpg",
    tab: "Project Advisors",
    textColor: "#51FF74",
    design: "default",
    icon: "sparkle",
    iconImg: "/images/team/sparkle.png",
    iconPosition: "right",
    linkedinLink: "https://www.linkedin.com/in/mohammed-azarudheen/",
  },
  {
    name: "Ashwin",
    role: "Placement Officer",
    experience: "6+ Years of Experience",
    img: "/images/trainers/ashwin.jpg",
    linkedinLink: "https://www.linkedin.com/in/ashwinsatheesh/",
    textColor: "#9E89FF",
    tab: "Placement / Support",
    design: "default",
    icon: "bolt",
  },
  {
    name: "Ashwini",
    role: "Program Manager",
    experience: "7+ Years of Experience",
    img: "/images/trainers/ashwini.jpg",
    linkedinLink: "https://www.linkedin.com/in/ashwini-j-060202274/",
    textColor: "#9E89FF",
    tab: "Placement / Support",
    design: "default",
    icon: "bolt",
  },
  // {
  //   name: "Sumathi",
  //   role: "Placement Officer",
  //   experience: " ",
  //   img: "/images/trainers/deepak-1.png",
  //   linkedinLink: "#",
  //   textColor: "#9E89FF",
  //   tab: "Placement / Support",
  //   design: "default",
  //   icon: "bolt",
  // },
  {
    name: "Rashmi",
    role: "Placement Officer",
    experience: "8 Years Experience",
    img: "/images/trainers/rashmi.jpg",
    linkedinLink: "https://www.linkedin.com/in/rashmi-ramanna19/",
    textColor: "#9E89FF",
    tab: "Placement / Support",
    design: "default",
    icon: "bolt",
  },
  {
    name: "Vidhi Bhulani",
    role: "Sr. Trainer- Digital Marketing",
    experience: "7+ years Experience",
    img: "/images/trainers/vidhi.jpg",
    linkedinLink: "https://www.linkedin.com/in/vidhi-bhulani/",
    textColor: "#9E89FF",
    tab: "Project Advisors",
    design: "default",
    icon: "bolt",
  },
  {
    name: "Pallavi Joshi",
    role: "Sr. Trainer- Digital Marketing",
    experience: "10+ years Experience",
    img: "/images/trainers/pallavi.jpg",
    linkedinLink: "https://www.linkedin.com/in/pallavi-s-joshi/",
    textColor: "#9E89FF",
    tab: "Project Advisors",
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

      {/* 👇 Use different slider based on tab */}
      {activeTab === "Guest Faculty" ? (
        <GuestFacultySlider showHeader={false} />
      ) : (
        <TeamSlider members={filteredMembers} />
      )}
    </section>
  );
};

export default TeamSection;
