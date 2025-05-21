import React from "react";
import styles from "./style.module.scss";
import PersonCard from "@components/widgets/personCard";
import ArrowUp from "@/components/Ui/svg/arrowUp";

const people = [
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person1.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person2.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person3.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person4.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person5.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person6.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person7.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person8.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person9.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person10.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person11.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person12.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person13.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person14.png",
  },
  {
    name: "Deepak Soni",
    designation: "CEO",
    image: "/images/people/person15.png",
  },
];

const OurPeople = () => {
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
              {people.map((person, idx) => (
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
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.loadMoreWrapper}>
              <button className={styles.loadMoreBtn}>
                Load More <ArrowUp color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
