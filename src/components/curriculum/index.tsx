"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";
import Plus from "@/components/Ui/svg/plus";
import Minus from "@/components/Ui/svg/minus";
import type { CurriculumProps } from "@/types/curriculum";

export default function Curriculum({
  heading,
  description,
  learningMode,
  batchTimings,
  modules,
}: CurriculumProps) {
  const [activeModule, setActiveModule] = useState<number>(1);

  const toggleModule = (moduleNumber: number) => {
    setActiveModule((prev) => (prev === moduleNumber ? 0 : moduleNumber));
  };

  return (
    <section className={styles.curriculumSection}>
      <h2>{heading}</h2>
      <p>{description}</p>

      <div className={styles["info-line"]}>
        <div className={styles["Learning"]}>
          <label>Learning Mode</label>
          <p>{learningMode}</p>
        </div>

        <div className={styles["timings"]}>
          <label>Batch Timings</label>
          {batchTimings.map((batch, idx) => (
            <p key={idx} className={styles.batchTimings}>
              <span>{batch.label}</span>
              {batch.slots.map((slot, slotIdx) => (
                <span key={slotIdx}>
                  {slot}
                  {slotIdx < batch.slots.length - 1 && " | "}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      {modules.map((module) => (
        <div
          key={module.number}
          className={`${styles.module} ${
            activeModule === module.number ? styles.active : ""
          }`}
        >
          <div
            className={styles["module-header"]}
            onClick={() => toggleModule(module.number)}
          >
            <div className={styles["module-left"]}>
              <div className={styles.moduleHeader}>
                <div className={styles["module-number"]}>
                  <label>{module.moduleslable || "Module"}</label>
                  <span>{module.number}</span>
                </div>
                <div className={styles["toggle-icon-mobile"]}>
                  {activeModule === module.number ? <Minus /> : <Plus />}
                </div>
              </div>
              <div className={styles["module-title"]}>
                {module.title}
                <div className={styles.badges}>
                  {module.badges.map((badge, idx) => (
                    <div key={idx} className={styles["badge-item"]}>
                      {badge.icon} {badge.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles["toggle-icon"]}>
              {activeModule === module.number ? <Minus /> : <Plus />}
            </div>
          </div>

          {activeModule === module.number && (
            <div className={styles["module-content"]}>
              <div className={styles.contentLeft}></div>
              <ul>
                {module.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
              <div className={styles.contentRight}></div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
