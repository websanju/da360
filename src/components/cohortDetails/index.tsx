// components/CohortDetails.tsx
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./style.module.scss";

export interface Cohort {
  date: string;
  mode: "Offline" | "Online";
  weekday: string;
  capacity: string;
  campus: string;
}
interface CohortDetailsProps {
  heading: string;
  cohorts: Cohort[];
  section?: string;
}
export default function CohortDetails({
  heading,
  cohorts,
  section,
}: CohortDetailsProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 991);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className={styles.cohortDetailsSection} id={section}>
      <div className={`${styles.container} container`}>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10">
            <h2>{heading}</h2>
            {/* Cohort Cards */}
            {isMobile ? (
              <div className={styles.mobileCohorts}>
                {cohorts.map((cohort, index) => (
                  <div key={index} className={styles.cohortCard}>
                    <div className={styles.cohortCardbody}>
                      <div className={styles.cohortCardDetail}>
                        <div className={styles.cardItemsTop}>
                          <div className={styles.cardItem}>
                            <span className={styles.cardDatelabel}>
                              {cohort.date.split(" ")[0]}
                            </span>
                            <label className={styles.cardDate}>
                              {cohort.date.split(" ")[1]}
                            </label>
                          </div>
                          <div className={styles.cardItem}>
                            <label>Weekday</label>
                            <span>{cohort.weekday}</span>
                          </div>
                          <div className={styles.cardItem}>
                            <label>Capacity</label>
                            <span>{cohort.capacity}</span>
                          </div>
                        </div>

                        <div className={styles.cardItemsBottom}>
                          <div className={styles.cardItem}>
                            <label>Mode:</label>
                            <span className={styles.cardMode}>
                              {cohort.mode}
                            </span>
                          </div>
                          <div className={styles.cardItem}>
                            <label>Campus</label>
                            <span>{cohort.campus}</span>
                          </div>
                          <div className={`${styles.enrollBtn} `}>
                            <Link href="#" className="btn btn-danger">
                              Enroll Now
                            </Link>
                          </div>
                        </div>
                        {/* <div
                          className={`${styles.cardItemsBottom} d-flex justify-content-center`}
                        ></div> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.desktopCohorts}>
                {cohorts.map((cohort, index) => (
                  <div key={index} className={styles.cohortCard}>
                    <div className={styles.cohortCardbody}>
                      <div className={styles.cohortCardDetail}>
                        <div className={styles.cardItem}>
                          <span className={styles.cardDatelabel}>
                            {cohort.date.split(" ")[0]}
                          </span>
                          <label className={styles.cardDate}>
                            {cohort.date.split(" ")[1]}
                          </label>
                        </div>
                        <div className={styles.cardItem}>
                          <label>Mode:</label>
                          <span className={styles.cardMode}>{cohort.mode}</span>
                        </div>
                        <div className={styles.cardItem}>
                          <label>Weekday</label>
                          <span>{cohort.weekday}</span>
                        </div>
                        <div className={styles.cardItem}>
                          <label>Capacity</label>
                          <span>{cohort.capacity}</span>
                        </div>
                        <div className={styles.cardItem}>
                          <label>Campus</label>
                          <span>{cohort.campus}</span>
                        </div>
                      </div>
                      <div className={styles.enrollBtn}>
                        <Link href="#" className="btn btn-danger">
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Accreditation Section */}
          <div className="col-lg-12 d-flex justify-content-center">
            <div className={styles.accredited}>
              <div>
                <label>
                  WE ARE <br /> ACCREDITED BY
                </label>
                <p>★★★★★</p>
              </div>
              <div className={styles.accreditedImg}>
                <div className={styles.accreditedItem}>
                  <Image
                    src="/images/skill-india.png"
                    alt="Skill India"
                    width={67}
                    height={88}
                  />
                </div>
                <div className={styles.accreditedItem}>
                  <Image
                    src="/images/media-skills-council.png"
                    alt="Media Skill Council India"
                    width={76}
                    height={72}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
