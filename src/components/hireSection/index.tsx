"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const HireSection = () => {
  return (
    <section className={styles.hireSection}>
      <div className="container">
        <div className={`${styles.row} row`}>
          <div className="col-lg-7">
            <div className={styles.content}>
              <h1>
                Hire <strong>Job-Ready Digital Marketing Experts</strong>
              </h1>
              <p>
                Connect with top-trained, industry-ready talent from Digital
                Academy 360
              </p>
              <div className={styles.hireBtn}>
                <button className="btn btn-danger">Start Hiring</button>
              </div>

              <div className={styles.hiredInfo}>
                <div className={styles.avatars}>
                  <Image
                    src="/images/avatars/akshita.png"
                    alt="Student"
                    width={52}
                    height={50}
                  />
                  <Image
                    src="/images/avatars/rajasree.png"
                    alt="Student"
                    width={52}
                    height={50}
                  />
                  <Image
                    src="/images/avatars/shriharsha.png"
                    alt="Student"
                    width={52}
                    height={50}
                  />
                  <Image
                    src="/images/avatars/swati.png"
                    alt="Student"
                    width={52}
                    height={50}
                  />
                  <Image
                    src="/images/avatars/sivashanmugam.png"
                    alt="Student"
                    width={52}
                    height={50}
                  />
                </div>
                <span>
                  25,000+ students
                  <br />
                  Already Hired
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className={styles.imageWrap}>
              <Image
                src="/images/students.png"
                alt="Students"
                width={969}
                height={570}
                className={styles.studentsImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireSection;
