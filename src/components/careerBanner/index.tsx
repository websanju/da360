"use client";

import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const CareerBanner: React.FC = () => {
  return (
    <section className={styles.careerBanner}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.banner}>
              <h2>Ready to Transform your Career?</h2>
              <p>
                Take the first step toward digital leadership with our
                future-ready courses and programmes.
              </p>
              <div className={styles.actionBtn}>
                <Link href="/courses" className={styles.cta}>
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;
