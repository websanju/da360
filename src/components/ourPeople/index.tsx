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
    profileLink: "",
  },
  {
    name: "Deepika R",
    designation: "Director - Sales",
    image: "/images/staff/deepika-r.png",
    profileLink: "",
  },
  {
    name: "Lalit Agarwalla",
    designation: "Marketing Research Manager",
    image: "/images/staff/lalit-agarwalla.png",
    profileLink:
      "https://www.linkedin.com/in/lalit-agarwalla-39562211/?originalSubdomain=in",
  },
  {
    name: "Mayank Swaroop",
    designation: "Vice President - Marketing",
    image: "/images/staff/mayank-swaroop.png",
    profileLink: "https://www.linkedin.com/in/askmayanks/",
  },
  {
    name: "Darshan S",
    designation: "Senior Marketing Manager",
    image: "/images/staff/darshan-s.png",
    profileLink: "https://www.linkedin.com/in/-darshan-bafna-ppc-manager/",
  },
  {
    name: "Ashwin Satheesh",
    designation: "Manager - Student Success",
    image: "/images/staff/ashwin-satheesh.png",
    profileLink: "https://www.linkedin.com/in/ashwinsatheesh/",
  },
  {
    name: "Srimoya Sarbojeet",
    designation: "Team lead- Sales",
    image: "/images/staff/srimoya-sarbojeet.png",
    profileLink:
      "https://www.linkedin.com/in/srimoya-sarbojeet-a36a3592?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Pooja Gupta",
    designation: "Team lead- Sales",
    image: "/images/staff/pooja-gupta.png",
    profileLink:
      "https://www.linkedin.com/in/pooja-gupta-4b5a93195/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Prakash",
    designation: "Team lead- Sales",
    image: "/images/staff/prakash.png",
    profileLink: "https://www.linkedin.com/in/prakashmanila/",
  },
  {
    name: "Deepak Soni",
    designation: "Head - Academics",
    image: "/images/staff/deepak-soni.png",
    profileLink: "",
  },
  {
    name: "Ashwini J",
    designation: "Senior Executive - Student Success",
    image: "/images/staff/ashwini.png",
    profileLink: "https://www.linkedin.com/in/ashwini-j-060202274/",
  },
  {
    name: "Rashmi r",
    designation: "Placement Officer",
    image: "/images/staff/rashmi-r.png",
    profileLink: "https://www.linkedin.com/in/rashmi-ramanna19/",
  },
  {
    name: "Ashwini DS",
    designation: "Sr HR Executive",
    image: "/images/staff/ashwini-ds.png",
    profileLink: "https://www.linkedin.com/in/ashwini-bharadwaj-",
  },
  {
    name: "Somujit Biswas",
    designation: "Sr. Mis Analyst",
    image: "/images/staff/somujit-biswas.png",
    profileLink: "https://www.linkedin.com/in/soumyajit-biswas-0a7b261b2/",
  },
  {
    name: "G. ChandraSekhar",
    designation: "Digital Marketing Team Lead",
    image: "/images/staff/chandraSekhar.png",
    profileLink: "https://www.linkedin.com/in/chandra-sekhar9/",
  },
  {
    name: "Madhuraj P",
    designation: "Sr. Trainer - Digital Marketing",
    image: "/images/staff/madhuraj-p.png",
    profileLink: "https://www.linkedin.com/in/madhuraj-p/",
  },
  {
    name: "Sathiyaseelan S",
    designation: "Executive Trainer - Digital Marketing",
    image: "/images/staff/sathiyaseelan-s.png",
    profileLink: "https://www.linkedin.com/in/sathiyaseelan1/",
  },
  {
    name: "Monisha Jain",
    designation: "Executive Trainer - Digital Marketing",
    image: "/images/staff/monisha-jain.png",
    profileLink: "https://www.linkedin.com/in/monishajainss/",
  },
  {
    name: "Anush Raj K",
    designation: "Executive Trainer - Digital Marketing",
    image: "/images/staff/anush-raj-k.png",
    profileLink: "https://www.linkedin.com/in/hvr26/",
  },
  {
    name: "Swanand",
    designation: "Sr. Trainer - Digital Marketing",
    image: "/images/staff/swanand.png",
    profileLink: "http://www.linkedin.com/in/swanand-p",
  },
  {
    name: "Sujeeth HD",
    designation: "Executive Trainer - Digital Marketing",
    image: "/images/staff/sujeeth-hd.png",
    profileLink: "https://www.linkedin.com/in/sujeeth-hd-7988921b8/",
  },
  {
    name: "Jyotsna Rani",
    designation: "Executive Learning Advisor",
    image: "/images/staff/jyotsna-rani.png",
    profileLink: "",
  },
  {
    name: "Bhavyansh Jain",
    designation: "Executive Learning Advisor",
    image: "/images/staff/bhavyansh.png",
    profileLink:
      "https://www.linkedin.com/in/bhavyansh-jain-8aa154250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Harshita Agarwal",
    designation: "Executive Learning Advisor",
    image: "/images/staff/harshita-agarwal.png",
    profileLink:
      "https://www.linkedin.com/in/harshita-agarwal-a6337824a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Vishwajeet B",
    designation: "Senior Learning Advisor",
    image: "/images/staff/vishwajeet-b.png",
    profileLink: "https://www.linkedin.com/in/vishwajeet-biradar-3b812624b",
  },
  {
    name: "Aishwarya Raj",
    designation: "Senior Learning Advisor",
    image: "/images/staff/aishwarya-raj.png",
    profileLink: "",
  },
  {
    name: "Shravya K M",
    designation: "Executive Learning Advisor",
    image: "/images/staff/shravya-km.png",
    profileLink:
      "https://www.linkedin.com/in/shravya-k-m-709189247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Pranav PB",
    designation: "Executive Learning Advisor",
    image: "/images/staff/pranav-pb.png",
    profileLink:
      "https://www.linkedin.com/in/pranav-pb-521a30236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Fahad P A",
    designation: "Senior Learning Advisor",
    image: "/images/staff/fahad-p-a.png",
    profileLink: "https://www.linkedin.com/in/hvr26/",
  },
  {
    name: "Ameena zaffar",
    designation: "Inquiry Management Executive",
    image: "/images/staff/ameena-zaffar.png",
    profileLink:
      "https://www.linkedin.com/in/ameena-zaffar-05a68b213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Harshita Taranalli",
    designation: "Account Manager",
    image: "/images/staff/harshita-taranalli.png",
    profileLink: "http://linkedin.com/in/harshita-taranalli-929850157",
  },
  {
    name: "Vignesh K",
    designation: "System Administrator",
    image: "/images/staff/vignesh-k.png",
    profileLink: "https://www.linkedin.com/in/vignesh-krishnasamy-14ab6b205",
  },
  {
    name: "Ritika Agrawal",
    designation: "Account Executive",
    image: "/images/staff/ritika-agrawal.png",
    profileLink: "https://www.linkedin.com/in/%20ritika-agrawal-%2084b647261",
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
                  profileLink={person.profileLink}
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
