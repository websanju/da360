// components/StudentShowcase/StudentShowcase.tsx
"use client";
import React, { useState } from "react";
import StudentCard from "./studentCard";
import styles from "./styles.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";
import ArrowUp from "@components/Ui/svg/arrowUp";

const students = [
  {
    name: "Khushi Surana",
    company: "Jeet",
    designation: "Advertising Ops Specialist",
    package: "5 LPA",
    image: "/images/akshita.jpg",
    icon: "/images/jeet.png",
    standard: "Modelling",
  },
  {
    name: "Vishnu",
    company: "Jeet",
    designation: "AdWords Strategist",
    package: "6 LPA",
    image: "/images/rahul.jpg",
    background: "highlight",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Adarsh Gupta",
    company: "Valueleaf",
    designation: "Digital Marketing Executive",
    package: "4.2 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Pooja . M",
    company: "Jeet",
    designation: "Digital Marketing Analyst",
    package: "4.7 LPA",
    image: "/images/akshita.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Amala Sharika",
    company: "Jeet",
    designation: "Senior Executive Marketing",
    package: "4 LPA",
    image: "/images/rahul.jpg",
    background: "highlight",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Megha Lodha",
    company: "Valueleaf",
    designation: "Campaign Specialist",
    package: "3.28 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Krithik Kumar",
    company: "Jeet",
    designation: "Digital Marketing Executive",
    package: "3 LPA",
    image: "/images/akshita.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Sanjay H R",
    company: "Jeet",
    designation: "SEO Analyst",
    package: "5.2 LPA",
    image: "/images/rahul.jpg",
    background: "highlight",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Kiran B",
    company: "Valueleaf",
    designation: "Digital Marketer",
    package: "6 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Arpitha",
    company: "Jeet",
    designation: "Brand Marketing Executive",
    package: "6 LPA",
    image: "/images/akshita.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Hemanth B",
    company: "Jeet",
    designation: "Marketing Manager",
    package: "6 LPA",
    image: "/images/rahul.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Dhikshith R",
    company: "Valueleaf",
    designation: "Brand Marketing Executive",
    package: "6 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "S Rajeswari",
    company: "Valueleaf",
    designation: "Brand Marketing Executive",
    package: "3 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Akshita M",
    company: "Valueleaf",
    designation: "Sr. SEO Executive",
    package: ": 6 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Shriharsha GN",
    company: "Valueleaf",
    designation: "Digital Strategist",
    package: ": 4.9 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Sivashanmugam",
    company: "Valueleaf",
    designation: "Brand Marketing Executive",
    package: ": 4.09 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Rajasree Pocham",
    company: "Valueleaf",
    designation: "Digital Marketing Consultant",
    package: ": 9.9 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Ajay Kumar",
    company: "Valueleaf",
    designation: "Campaign Manager",
    package: ":  4.9 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Sahil Ganju",
    company: "Valueleaf",
    designation: "Social Media Manager",
    package: ":  4.8 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Rakesh",
    company: "Valueleaf",
    designation: "Digital Strategist",
    package: ":  4.23 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
  },
  {
    name: "Gagana HS",
    company: "Valueleaf",
    designation: "Brand Marketing Associate",
    package: ":  3.6 LPA",
    image: "/images/sharmila.jpg",
    icon: "/images/jeet.png",
    standard: "Fresher",
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
