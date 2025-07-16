"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const toolCategories = {
  All: [
    { name: "Canva", logo: "/images/aitools/canva.png" },
    { name: "Pixlr", logo: "/images/aitools/pixlr.png" },
    { name: "Designify", logo: "/images/aitools/designify.png" },
    { name: "Crello", logo: "/images/aitools/crello.png" },
    { name: "Hatchful", logo: "/images/aitools/hatchful.png" },
    { name: "Wix", logo: "/images/aitools/wix.png" },
    { name: "Weebly", logo: "/images/aitools/weebly.png" },
    { name: "Strikingly", logo: "/images/aitools/strikingly.png" },
    { name: "Carrd", logo: "/images/aitools/carrd.png" },
    { name: "Writesonic", logo: "/images/aitools/writesonic.png" },
    { name: "QuillBot", logo: "/images/aitools/quillbot.png" },
    { name: "Hemingway", logo: "/images/aitools/hemingway.png" },
    { name: "Rytr", logo: "/images/aitools/rytr.png" },
    { name: "Kapwing", logo: "/images/aitools/kapwing.png" },
    { name: "VEED.IO", logo: "/images/aitools/veedio.png" },
    { name: "Shortcut", logo: "/images/aitools/shortcut.png" },
  ],
  Design: [
    { name: "Canva", logo: "/images/aitools/canva.png" },
    { name: "Pixlr", logo: "/images/aitools/pixlr.png" },
    { name: "Designify", logo: "/images/aitools/designify.png" },
    { name: "Crello", logo: "/images/aitools/crello.png" },
    { name: "Hatchful", logo: "/images/aitools/hatchful.png" },
  ],
  Website: [
    { name: "Wix", logo: "/images/aitools/wix.png" },
    { name: "Weebly", logo: "/images/aitools/weebly.png" },
    { name: "Strikingly", logo: "/images/aitools/strikingly.png" },
    { name: "Carrd", logo: "/images/aitools/carrd.png" },
  ],
  Writing: [
    { name: "Writesonic", logo: "/images/aitools/writesonic.png" },
    { name: "QuillBot", logo: "/images/aitools/quillbot.png" },
    { name: "Hemingway", logo: "/images/aitools/hemingway.png" },
    { name: "Rytr", logo: "/images/aitools/rytr.png" },
  ],
  Video: [
    { name: "Kapwing", logo: "/images/aitools/kapwing.png" },
    { name: "VEED.IO", logo: "/images/aitools/veedio.png" },
    { name: "Shortcut", logo: "/images/aitools/shortcut.png" },
  ],
} as const;

type CategoryName = keyof typeof toolCategories;

const AiTools: React.FC = () => {
  const categoryNames = Object.keys(toolCategories) as CategoryName[];
  const [activeTab, setActiveTab] = useState<CategoryName>("All");

  return (
    <section className={styles.digitalToolsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Next-Gen AI-Powered Tools</h2>
        <p className={styles.sectionDescription}>
          Modern digital marketers thrive on automation and insights—master the
          latest AI-driven tools used by top brands in Digital Academy 360’s
          online marketing course.
        </p>

        {/* Tabs */}
        <div className={styles.tabs}>
          {categoryNames.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`${styles.tabButton} ${
                activeTab === category ? styles.activeTab : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={styles.digitalToolList}>
          {toolCategories[activeTab].map((tool, index) => (
            <div className={styles.digitalTooItems} key={index}>
              <div className={styles.digitalTooItem}>
                <Image
                  width={100}
                  height={80}
                  src={tool.logo}
                  alt={tool.name}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiTools;
