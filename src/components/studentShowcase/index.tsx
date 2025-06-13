// components/StudentShowcase/StudentShowcase.tsx
"use client";
import React, { useState } from "react";
import StudentCard from "./studentCard";
import styles from "./styles.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";
import ArrowUp from "@components/Ui/svg/arrowUp";

const students = [
  {
    name: "Akshita M",
    company: "Jeet",
    designation: "SEO Executive",
    package: "6 LPA",
    image: "/images/akshita.jpg",
    icon: "/images/jeet.png",
    standard: "BSc Student",
  },
  {
    name: "Rahul Sharma",
    company: "Jeet",
    designation: "Digital Marketing Executive",
    package: "6 LPA",
    image: "/images/rahul.jpg",
    background: "highlight",
    icon: "/images/jeet.png",
    standard: "BSc Student",
  },
  {
    name: "Sharmila",
    company: "Valueleaf",
    designation: "Digital Marketing Executive",
    package: "6 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "BSc Student",
  },
  // Repeat data for demo
  {
    name: "Akshita M",
    company: "Jeet",
    designation: "SEO Executive",
    package: "6 LPA",
    image: "/images/akshita.jpg",
    icon: "/images/jeet.png",
    standard: "BSc Student",
  },
  {
    name: "Rahul Sharma",
    company: "Jeet",
    designation: "Digital Marketing Executive",
    package: "6 LPA",
    image: "/images/rahul.jpg",
    background: "highlight",
    icon: "/images/jeet.png",
    standard: "BSc Student",
  },
  {
    name: "Sharmila",
    company: "Valueleaf",
    designation: "Digital Marketing Executive",
    package: "6 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "BSc Student",
  },
  {
    name: "Akshita M",
    company: "Jeet",
    designation: "SEO Executive",
    package: "6 LPA",
    image: "/images/akshita.jpg",
    icon: "/images/jeet.png",
    standard: "BSc Student",
  },
  {
    name: "Rahul Sharma",
    company: "Jeet",
    designation: "Digital Marketing Executive",
    package: "6 LPA",
    image: "/images/rahul.jpg",
    background: "highlight",
    icon: "/images/jeet.png",
    standard: "BSc Student",
  },
  {
    name: "Sharmila",
    company: "Valueleaf",
    designation: "Digital Marketing Executive",
    package: "6 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "BSc Student",
  },
  {
    name: "Akshita M",
    company: "Jeet",
    designation: "SEO Executive",
    package: "6 LPA",
    image: "/images/akshita.jpg",
    icon: "/images/jeet.png",
    standard: "BSc Student",
  },
  {
    name: "Rahul Sharma",
    company: "Jeet",
    designation: "Digital Marketing Executive",
    package: "6 LPA",
    image: "/images/rahul.jpg",
    icon: "/images/jeet.png",
    standard: "BSc Student",
  },
  {
    name: "Sharmila",
    company: "Valueleaf",
    designation: "Digital Marketing Executive",
    package: "6 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "BSc Student",
  },
];

const StudentShowcase = () => {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className={`${styles.showcaseSection}`}>
      <div className="container ">
        <SectionHeader
          title={"Our Students, Your Next Hires."}
          wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
          maxWidth="570px"
          description={
            "Meet the digital professionals who began their journey at DA360 and are now thriving in top companies."
          }
        ></SectionHeader>
        <div className={styles.studentContainer}>
          <div className={`row ${styles.row}`}>
            {students.slice(0, visibleCount).map((student, i) => (
              <div key={i} className="col-sm-6 col-md-4">
                <StudentCard student={student} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.loadMoreBtn}>
          {visibleCount < students.length && (
            <button onClick={handleLoadMore} className={` ${styles.loadMore}`}>
              Load More <ArrowUp color="#000" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default StudentShowcase;
