"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import PersonCard from "@components/widgets/personCard";
import ArrowUp from "@/components/Ui/svg/arrowUp";

const people = [
  {
    name: "Amit Singh",
    designation: "coo",
    image: "/images/staff/amit-singh.png",
  },
  {
    name: "Deepika R",
    designation: "Director - Sales",
    image: "/images/staff/deepika-r.png",
  },
  {
    name: "Lalit Agarwalla",
    designation: "Marketing Research Manager",
    image: "/images/staff/lalit-agarwalla.png",
  },
  {
    name: "Mayank Swaroop",
    designation: "Vice President - Marketing",
    image: "/images/staff/mayank-swaroop.png",
  },
  {
    name: "Darshan S",
    designation: "Senior Marketing Manager",
    image: "/images/staff/darshan-s.png",
  },
  {
    name: "Ashwin Satheesh",
    designation: "Manager - Student Success",
    image: "/images/staff/ashwin-satheesh.png",
  },
  {
    name: "Srimoya Sarbojeet",
    designation: "Team lead- Sales",
    image: "/images/staff/srimoya-sarbojeet.png",
  },
  {
    name: "Pooja Gupta",
    designation: "Team lead- Sales",
    image: "/images/staff/pooja-gupta.png",
  },
  {
    name: "Prakash",
    designation: "Team lead- Sales",
    image: "/images/staff/prakash.png",
  },
  {
    name: "Deepak Soni",
    designation: "Head - Academics",
    image: "/images/staff/deepak-soni.png",
  },
  {
    name: "Ashwini J",
    designation: "Senior Executive - Student Success",
    image: "/images/staff/ashwinij.png",
  },
  {
    name: "Rashmi r",
    designation: "Placement Officer",
    image: "/images/staff/rashmi-r.png",
  },
  {
    name: "Ashwini DS",
    designation: "Sr HR Executive",
    image: "/images/staff/ashwini-ds.png",
  },
  {
    name: "Somujit Biswas",
    designation: "Sr. Mis Analyst",
    image: "/images/staff/Somujit-biswas.png",
  },
  {
    name: "G. ChandraSekhar",
    designation: "Digital Marketing Team Lead",
    image: "/images/staff/g-ChandraSekhar.png",
  },
  {
    name: "Madhuraj P",
    designation: "Sr. Trainer - Digital Marketing",
    image: "/images/staff/madhuraj-p.png",
  },
  {
    name: "Sathiyaseelan S",
    designation: "Executive Trainer - Digital Marketing",
    image: "/images/staff/sathiyaseelan-s.png",
  },
  {
    name: "Monisha Jain",
    designation: "Executive Trainer - Digital Marketing",
    image: "/images/staff/monisha-jain.png",
  },
  {
    name: "Anush Raj K",
    designation: "Executive Trainer - Digital Marketing",
    image: "/images/staff/anush-raj-k.png",
  },
  {
    name: "Swanand",
    designation: "Sr. Trainer - Digital Marketing",
    image: "/images/staff/swanand.png",
  },
  {
    name: "Sujeeth HD",
    designation: "Executive Trainer - Digital Marketing",
    image: "/images/staff/sujeeth-hd.png",
  },
  {
    name: "Jyotsna Rani",
    designation: "Executive Learning Advisor",
    image: "/images/staff/jyotsna-rani.png",
  },
  {
    name: "Bhavyansh Jain",
    designation: "Executive Learning Advisor",
    image: "/images/staff/bhavyansh-jain.png",
  },
  {
    name: "Harshita Agarwal",
    designation: "Executive Learning Advisor",
    image: "/images/staff/harshita-agarwal.png",
  },
  {
    name: "Vishwajeet B",
    designation: "Senior Learning Advisor",
    image: "/images/staff/vishwajeet-b.png",
  },
  {
    name: "Aishwarya Raj",
    designation: "Senior Learning Advisor",
    image: "/images/staff/aishwarya-raj.png",
  },
  {
    name: "Shravya K M",
    designation: "Executive Learning Advisor",
    image: "/images/staff/shravya-km.png",
  },
  {
    name: "Pranav PB",
    designation: "Executive Learning Advisor",
    image: "/images/staff/pranav-pb.png",
  },
  {
    name: "Fahad P A",
    designation: "Senior Learning Advisor",
    image: "/images/staff/fahad-p-a.png",
  },
  {
    name: "Ameena zaffar",
    designation: "Inquiry Management Executive",
    image: "/images/staff/ameena-zaffar.png",
  },
  {
    name: "Harshita Taranalli",
    designation: "Account Manager",
    image: "/images/staff/harshita-taranalli.png",
  },
  {
    name: "Vignesh K",
    designation: "System Administrator",
    image: "/images/staff/vignesh-K.png",
  },
  {
    name: "Ritika Agrawal",
    designation: "Account Executive",
    image: "/images/staff/ritika-agrawal.png",
  },
];
const ITEMS_PER_PAGE = 6;
const OurPeople = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const handleLoadMore = () => {
    setVisibleCount((prev: number) => prev + ITEMS_PER_PAGE);
  };

  const isAllVisible = visibleCount >= people.length;
  return (
    <section className={styles.ourPeopleSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionHeader}>
              <h2>Our People</h2>
              <p>
                Our team is a diverse mix of construction consultancy experts
                and essential support staff.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.grid}>
              {people.slice(0, visibleCount).map((person, idx) => (
                <PersonCard
                  key={idx}
                  name={person.name}
                  designation={person.designation}
                  image={person.image}
                />
              ))}
            </div>
          </div>
        </div>
        {!isAllVisible && (
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.loadMoreWrapper}>
                <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
                  Load More <ArrowUp color="#fff" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurPeople;
