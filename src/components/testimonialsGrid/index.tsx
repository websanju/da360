"use client";
import React from "react";
import styles from "./styles.module.scss";
import Card from "./card";
import { testimonials } from "./testimonialsData";

const TestimonialsGridD = () => {
  const leftColumn = testimonials.filter((_, i) => i % 2 === 0);
  const rightColumn = testimonials.filter((_, i) => i % 2 !== 0);

  return (
    <section className={styles.sectionGrid}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.gridWrapper}>
              <div className={styles.column}>
                {leftColumn.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
              <div className={styles.column}>
                {rightColumn.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGridD;
