// components/PlacementStats/PlacementStats.tsx
"use client";
import React from "react";
import styles from "./styles.module.scss";
// import Image from "next/image";

const stats = [
  { label: "Placement Rate", value: "95% " },
  { label: "Students Placed", value: "10,000+ " },
  { label: "Hiring Partners", value: "200+ " },
  { label: "Avg Salary", value: "₹5.2 LPA" },
];

const PlacementStats = () => {
  return (
    <section className={`${styles.placementStats}`}>
      <div className="container">
        <div className={`row ${styles.row} text-center`}>
          {stats.map((stat, index) => (
            <div className="col-6 col-md-4 col-lg" key={index}>
              <div className={styles.statBox}>
                {/* <Image
                  src="/images/icons/handSnake.png"
                  alt="Handshake Icon"
                  width={80}
                  height={70}
                  unoptimized
                  className={styles.icon}
                /> */}
                <h2>{stat.value}</h2>
                <p className={styles.label}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;
