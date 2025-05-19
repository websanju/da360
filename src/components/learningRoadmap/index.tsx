import React from "react";
import styles from "./style.module.scss";
import LeftArrow from "@/components/Ui/svg/leftArrow";
import Image from "next/image";
import marker from "../../../public/images/mapToadmap.svg";
import marker2 from "../../../public/images/roadmap-mobile.svg";

const LearningRoadmap = () => {
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
                <h2>
                  Your{" "}
                  <span className={styles.highlight}>6 Month Learning</span>
                  <br /> Roadmap
                </h2>
                <p>
                  We&apos;ve crafted your journey with an exceptional level of
                  attention to detail.
                </p>
                <div className={styles.btnAction}>
                  <a href="#" className="btnWhite">
                    Download your Journey Plan <LeftArrow color="#000" />
                  </a>
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
