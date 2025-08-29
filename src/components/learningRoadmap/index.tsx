"use client";
import React from "react";
import styles from "./style.module.scss";
import LeftArrow from "@/components/Ui/svg/leftArrow";
import Image from "next/image";
import marker from "../../../public/images/mapToadmap.svg";
import marker2 from "../../../public/images/roadmap-mobile.svg";
import { usePopup } from "@components/widgets/popup/PopupContext";
import ApplyForm from "../widgets/popups/ApplyForm";

interface LearningRoadmapProps {
  headerTitle?: string;
  description?: string;
}

const LearningRoadmap = ({
  headerTitle = "Your 6-Month Learning Roadmap",
  description = "Your journey is strategically designed for maximum growth at every stage.",
}: LearningRoadmapProps) => {
  const { openPopup } = usePopup();

  return (
    <section className={styles.roadmapSection}>
      <div className={`container`}>
        <div className="row">
          <div className="col-lg-12">
            <div className={`${styles.roadmapBox}`}>
              <div className={styles.dashedLine}>
                <Image
                  src={marker}
                  alt="location marker"
                  className={styles.marker}
                />
                <Image
                  src={marker2}
                  alt="location marker2"
                  className={styles.marker2}
                />
              </div>
              <div className={`${styles.roadmapContent}`}>
                <h2>{headerTitle}</h2>
                <p>{description}</p>
                <div className={styles.btnAction}>
                  <button
                    className="btnWhite"
                    onClick={() =>
                      openPopup(
                        <ApplyForm title="Download your Journey Plan" />,
                        {
                          title: `"Download your Journey Plan"`,
                        }
                      )
                    }
                  >
                    Download your Journey Plan <LeftArrow color="#000" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningRoadmap;
