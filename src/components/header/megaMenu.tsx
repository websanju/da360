"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
type MegaMenuProps = {
  closeMenu: () => void;
};
export default function MegaMenu({ closeMenu }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Leadership Courses", "PGCP Courses", "Certification Courses"];

  const router = useRouter();

  const handleClickMasterDigitalMarketingLeadershipCourse = () => {
    closeMenu(); // call your custom function
    router.push("/master-digital-marketing-leadership-course");
  };

  const handleClickMasterSocialContentCreatorAndVideoProduction = () => {
    closeMenu(); // call your custom function
    router.push("/social-content-creator-and-video-production");
  };

  //

  const handleClickOline = () => {
    closeMenu(); // call your custom function
    router.push("/online-digital-marketing-courses");
  };

  const handleClickDigitalMarketing = () => {
    closeMenu(); // call your custom function
    router.push("/digital-marketing-training-institute");
  };

  const handleClickPerformanceMarketingAndMediaBuying = () => {
    closeMenu(); // call your custom function
    router.push("/performance-marketing-and-media-buying");
  };

  const handleClickSocialMediaInfluencerMarketing = () => {
    closeMenu(); // call your custom function
    router.push("/social-media-and-Influencer-marketing");
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
        {/* Leadership Courses */}
        {activeTab === 2 && (
          <div className={styles.dropdownColumnGroup}>
            <div
              onClick={handleClickOline}
              className={`${styles.navbarDropdownColumn}`}
            >
              <h4>AI Vibe Marketing</h4>

              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>2 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}> Advance Specialist Certification</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 80+ Hours of Learning</Link>
                  </li>
                  <li>
                    <Link href={"#"}> 8+ Case Studies</Link>
                  </li>
                  <li>
                    <Link href={"#"}>10+ Tools</Link>
                  </li>
                  <li>
                    <Link href={"#"}>2 AI Flows</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              onClick={handleClickOline}
              className={`${styles.navbarDropdownColumn}`}
            >
              <h4>Youtube & Instagram Influencer</h4>
              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>2 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}>Advance Specialist Certification</Link>
                  </li>
                  <li>
                    <Link href={"#"}>80+ Hours of Learning</Link>
                  </li>
                  <li>
                    <Link href={"#"}>8+ Case Studies</Link>
                  </li>
                  <li>
                    <Link href={"#"}>5+ Specialised Tools</Link>
                  </li>
                  <li>
                    <Link href={"#"}>2 Creator Flow</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              onClick={handleClickOline}
              className={`${styles.navbarDropdownColumn}`}
            >
              <h4>LinkedIn & Personal Branding</h4>

              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>2 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}> Advance Specialist Certification</Link>
                  </li>
                  <li>
                    <Link href={"#"}>80+ Hours of Learning</Link>
                  </li>
                  <li>
                    <Link href={"#"}>8+ Case Studies</Link>
                  </li>
                  <li>
                    <Link href={"#"}>10+ Tools</Link>
                  </li>
                  <li>
                    <Link href={"#"}>2 Linkedin Outreach Flow</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              onClick={handleClickOline}
              className={`${styles.navbarDropdownColumn}`}
            >
              <h4>Performance Marketing & MarTech</h4>

              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>2 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}>Advance Specialist Certification</Link>
                  </li>
                  <li>
                    <Link href={"#"}>80+ Hours of Learning</Link>
                  </li>
                  <li>
                    <Link href={"#"}>8+ Case Studies</Link>
                  </li>
                  <li>
                    <Link href={"#"}>10+ Tools</Link>
                  </li>
                  <li>
                    <Link href={"#"}>2 Funnel Blueprints</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* PGCP Courses */}
        {activeTab === 1 && (
          <div className={styles.dropdownColumnGroup}>
            <div
              onClick={handleClickDigitalMarketing}
              className={`${styles.navbarDropdownColumn}`}
            >
              <h4>PGCP in Digital Marketing, E‑Comm & AI</h4>

              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>6 Months</span>
                <span className={styles.dropdownTag}>Online / Classroom</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>PG Level Certification</li>
                  <li>240+ Hours of Learning</li>
                  <li>20+ Case Studies</li>
                  <li>30+ Tools</li>
                  <li>15+ Certifications</li>
                </ul>
              </div>
            </div>

            <div
              onClick={handleClickSocialMediaInfluencerMarketing}
              className={`${styles.navbarDropdownColumn}`}
            >
              <h4>PGCP in Social Media & Influencer Marketing</h4>

              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>6 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>PG Level Certification</li>
                  <li>240+ Hours of Learning</li>
                  <li>20+ Case Studies</li>
                  <li>18+ Specialised Tools</li>
                  <li>15+ Certifications</li>
                </ul>
              </div>
            </div>
            <div
              onClick={handleClickPerformanceMarketingAndMediaBuying}
              className={`${styles.navbarDropdownColumn}`}
            >
              <h4>PGCP in Performance Marketing & Media Buying</h4>

              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>6 Months</span>
                <span className={styles.dropdownTag}>Online</span>
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>PG Level Certification</li>
                  <li>240+ Hours of Learning</li>
                  <li>20+ Case Studies</li>
                  <li>20+ Specialised Tools</li>
                  <li>15+ Certifications</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Certification Courses */}
        {activeTab === 0 && (
          <div
            className={`${styles.dropdownColumnGroup} ${styles.leadershipColumnGroup}`}
          >
            <div
              onClick={handleClickMasterDigitalMarketingLeadershipCourse}
              className={`${styles.navbarDropdownColumn}`}
            >
              <h4>Leadership in Digital Marketing, AI & Entrepreneurship</h4>

              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>12 Months</span>
                {/* <span className={styles.dropdownTag}>Online</span> */}
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}>3 Months Internship Included</Link>
                  </li>
                  <li>
                    <Link href={"#"}>1920+ Hours of Learning</Link>
                  </li>
                  <li>
                    <Link href={"#"}>50+ Case Studies</Link>
                  </li>
                  <li>
                    <Link href={"#"}>70+ Tools</Link>
                  </li>
                  <li>
                    <Link href={"#"}>25+ Certifications</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              onClick={handleClickMasterSocialContentCreatorAndVideoProduction}
              className={`${styles.navbarDropdownColumn}`}
            >
              <h4>Leadership in Social Content Creator & Video Production</h4>

              <div className={styles.navbarTags}>
                <span className={styles.dropdownTag}>12 Months</span>
                {/* <span className={styles.dropdownTag}>Online</span> */}
              </div>
              <div className={styles.navbarDropdownList}>
                <ul>
                  <li>
                    <Link href={"#"}>3 Months Internship Included</Link>
                  </li>
                  <li>
                    <Link href={"#"}>1920+ Hours of Learning</Link>
                  </li>
                  <li>
                    <Link href={"#"}>50+ Case Studies</Link>
                  </li>
                  <li>
                    <Link href={"#"}>55+ Specialised Tools</Link>
                  </li>
                  <li>
                    <Link href={"#"}>20+ Certifications</Link>
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
