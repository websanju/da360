"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";

const unlockBonuses = [
  {
    imgSrc: "/images/unlock/designers.svg",
    title: "25+ AI Tools list for Designers",
    value: "Value ₹999/-",
  },
  {
    imgSrc: "/images/unlock/studies.svg",
    title: (
      <>
        30+ UX Case 
        <br /> Studies
      </>
    ),
    value: "Value ₹999/-",
  },
  {
    imgSrc: "/images/unlock/gtp.svg",
    title: (
      <>
        50+ Design-Specific <br /> ChatGPT Prompts
      </>
    ),
    value: "Value ₹999/-",
  },
  {
    imgSrc: "/images/unlock/figma.svg",
    title: (
      <>
        Curated Figma 
        <br /> Plugins List
      </>
    ),
    value: "Value ₹999/-",
  },
  {
    imgSrc: "/images/unlock/ui.svg",
    title: (
      <>
        AI Prompts for UI
        <br /> Asset Generation
      </>
    ),
    value: "Value ₹999/-",
  },
  {
    imgSrc: "/images/unlock/resources.svg",
    title: "Design System Resources for Figma",
    value: "Value ₹999/-",
  },
];

const UnlockBonuses = () => {
  return (
    <section className={`${styles.unlockBonusesSection}`}>
      <div className={`${styles.container} container`}>
        <div className="row">
          <div className="col-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              titleMarginBottom={{ desktop: "16px", mobile: "10px" }}
              title={
                <>
                  Unlock Bonuses Worth <br /> ₹5000+ for Free1
                </>
              }
              maxWidth="650px"
              description="Register before midnight of December 28, 2024"
            />
          </div>
        </div>
        <div className={`${styles.row} row`}>
          {unlockBonuses.map((unlock, index) => (
            <div key={index} className="col-6 col-md-6 col-lg-4">
              <div className={styles.unlockBonusesCard}>
                <div className={`${styles.unlockBonusesImage}`}>
                  <Image
                    src={unlock.imgSrc}
                    alt={unlock.value}
                    width={125}
                    height={125}
                  />
                </div>
                <div className={styles.unlockBonusesContent}>
                  <span className={styles.title}>{unlock.title}</span>
                  <h5 className={styles.value}>{unlock.value}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnlockBonuses;
