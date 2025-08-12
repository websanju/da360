// components/AiTools.tsx
"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { ToolCategories, CategoryName } from "@/types/aiTools";

interface AiToolsProps {
  heading: string;
  description?: string;
  categories: ToolCategories;
}

export default function AiTools({
  heading,
  description,
  categories = {},
}: AiToolsProps) {
  const categoryNames = Object.keys(categories) as CategoryName[];
  const [activeTab, setActiveTab] = useState<CategoryName>("All");
  if (categoryNames.length === 0) {
    return null; // or some fallback UI
  }
  return (
    <section className={styles.digitalToolsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{heading}</h2>
        {description && (
          <p className={styles.sectionDescription}>{description}</p>
        )}

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
          {categories[activeTab].map((tool, index) => (
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
}
