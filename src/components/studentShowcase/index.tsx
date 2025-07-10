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
    image: "/images/students/khushi-surana.png",
    icon: "/images/company/amazon.png",
    standard: "Modelling",
  },
  {
    name: "Vishnu",
    company: "Jeet",
    designation: "AdWords Strategist",
    package: "6 LPA",
    image: "/images/students/vishnu.png",
    background: "highlight",
    icon: "/images/company/google.png",
    standard: "Fresher",
  },
  {
    name: "Adarsh Gupta",
    company: "Valueleaf",
    designation: "Digital Marketing Executive",
    package: "4.2 LPA",
    image: "/images/students/adarsh-gupta.png",
    icon: "/images/company/tula.png",
    standard: "Fresher",
  },
  {
    name: "Pooja . M",
    company: "Jeet",
    designation: "Digital Marketing Analyst",
    package: "4.7 LPA",
    image: "/images/students/pooja-m.png",
    icon: "/images/company/anteriad.png",
    standard: "Fresher",
  },
  {
    name: "Amala Sharika",
    company: "Jeet",
    designation: "Senior Executive Marketing",
    package: "4 LPA",
    image: "/images/students/amala-sharika.png",
    background: "highlight",
    icon: "/images/company/vg.png",
    standard: "Fresher",
  },
  {
    name: "Megha Lodha",
    company: "Valueleaf",
    designation: "Campaign Specialist",
    package: "3.28 LPA",
    image: "/images/students/megha-lodha.png",
    icon: "/images/company/eat-repeat.png",
    standard: "Fresher",
  },
  {
    name: "Krithik Kumar",
    company: "Jeet",
    designation: "Digital Marketing Executive",
    package: "3 LPA",
    image: "/images/students/krithik-kumar.png",
    icon: "/images/company/masscoders.png",
    standard: "Fresher",
  },
  {
    name: "Sanjay H R",
    company: "Jeet",
    designation: "SEO Analyst",
    package: "5.2 LPA",
    image: "/images/students/sanjay-hr.png",
    background: "highlight",
    icon: "/images/company/rollingrock.png",
    standard: "Fresher",
  },
  {
    name: "Kiran B",
    company: "Valueleaf",
    designation: "Digital Marketer",
    package: "6 LPA",
    image: "/images/students/kiran-b.png",
    icon: "/images/company/smartneta.png",
    standard: "Fresher",
  },
  {
    name: "Arpitha",
    company: "Jeet",
    designation: "Brand Marketing Executive",
    package: "6 LPA",
    image: "/images/students/arpitha.png",
    icon: "/images/company/ki.png",
    standard: "Fresher",
  },
  {
    name: "Hemanth B",
    company: "Jeet",
    designation: "Marketing Manager",
    package: "6 LPA",
    image: "/images/students/hemanth-b.png",
    icon: "/images/company/devel-up.png",
    standard: "Fresher",
  },
  {
    name: "Dhikshith R",
    company: "Valueleaf",
    designation: "Brand Marketing Executive",
    package: "6 LPA",
    image: "/images/students/dhikshith-r.png",
    icon: "/images/company/smartneta.png",
    standard: "Fresher",
  },
  {
    name: "S Rajeswari",
    company: "Valueleaf",
    designation: "Brand Marketing Executive",
    package: "3 LPA",
    image: "/images/students/s-rajeswari.png",
    icon: "/images/company/rre.png",
    standard: "Fresher",
  },
  {
    name: "Akshita M",
    company: "Valueleaf",
    designation: "Sr. SEO Executive",
    package: ": 6 LPA",
    image: "/images/students/akshita-m.png",
    icon: "/images/company/upgrad.png",
    standard: "Fresher",
  },
  {
    name: "Shriharsha GN",
    company: "Valueleaf",
    designation: "Digital Strategist",
    package: ": 4.9 LPA",
    image: "/images/students/shriharsha-gn.png",
    icon: "/images/company/valuele.png",
    standard: "Fresher",
  },
  {
    name: "Sivashanmugam",
    company: "Valueleaf",
    designation: "Brand Marketing Executive",
    package: ": 4.09 LPA",
    image: "/images/students/sivashanmugam.png",
    icon: "/images/company/seller-circle.png",
    standard: "Fresher",
  },
  {
    name: "Rajasree Pocham",
    company: "Valueleaf",
    designation: "Digital Marketing Consultant",
    package: ": 9.9 LPA",
    image: "/images/students/rajasree-pocham.png",
    icon: "/images/company/aa.jpg",
    standard: "Fresher",
  },
  {
    name: "Ajay Kumar",
    company: "Valueleaf",
    designation: "Campaign Manager",
    package: ":  4.9 LPA",
    image: "/images/students/ajay-kumar.png",
    icon: "/images/company/valuele.png",
    standard: "Fresher",
  },
  {
    name: "Sahil Ganju",
    company: "Valueleaf",
    designation: "Social Media Manager",
    package: ":  4.8 LPA",
    image: "/images/students/sahil-ganju.png",
    icon: "/images/company/entellus.png",
    standard: "Fresher",
  },
  {
    name: "Rakesh",
    company: "Valueleaf",
    designation: "Digital Strategist",
    package: ":  4.23 LPA",
    image: "/images/students/rakesh.png",
    icon: "/images/company/valuele.png",
    standard: "Fresher",
  },
  {
    name: "Gagana HS",
    company: "Valueleaf",
    designation: "Brand Marketing Associate",
    package: ":  3.6 LPA",
    image: "/images/students/gagana-hs.png",
    icon: "/images/company/seller-circle.png",
    standard: "Fresher",
  },
  {
    name: "Ankita MN",
    company: "Valueleaf",
    designation: "Digital Marketing Executive",
    image: "/images/students/ankitamn.png",
    icon: "/images/company/jain_university.png",
    standard: "Fresher",
  },
  {
    name: "Yadukrishna C",
    company: "career mudhara",
    designation: "SEO Executive",
    image: "/images/students/yadukrishna-c.png",
    icon: "/images/company/career-mudhara.png",
    standard: "Fresher",
  },
  {
    name: "Dipankar Rongpi",
    company: "simxpert",
    designation: "Digital Marketer",
    image: "/images/students/dipankar-rongpi.png",
    icon: "/images/company/simxpert.png",
    standard: "Fresher",
  },
  {
    name: "Darshan Shild",
    company: "alfapeb",
    designation: "Digital Marketer",
    image: "/images/students/darshan-shild.png",
    icon: "/images/company/alfapeb.png",
    standard: "Fresher",
  },
  {
    name: "Sindhu G S",
    company: "connecting dot",
    designation: "Digital Marketing Manager",
    image: "/images/students/sindhu-gs.png",
    icon: "/images/company/connecting-dot.png",
    standard: "Fresher",
  },
  {
    name: "Parimitha A",
    company: "kaluani bajaj",
    designation: "Digital Marketing Executive",
    image: "/images/students/parimitha-a.png",
    icon: "/images/company/kaluani-bajaj.png",
    standard: "Fresher",
  },
  {
    name: "Annapurna K. P",
    company: "max",
    designation: "Digital Marketer",
    image: "/images/students/annapurna-kp.png",
    icon: "/images/company/max.png",
    standard: "Fresher",
  },
  {
    name: "Ayesha Agarwal",
    company: "lakme",
    designation: "Digital Marketing Executive",
    image: "/images/students/ayesha-agarwal.png",
    icon: "/images/company/lakme.png",
    standard: "Fresher",
  },
  {
    name: "Abhay Muralkar",
    company: "innoviti",
    designation: "Digital Marketing Executive",
    image: "/images/students/abhay-muralkar.png",
    icon: "/images/company/innoviti.png",
    standard: "Fresher",
  },
  {
    name: "Sreeram C",
    company: "totsmoms",
    designation: "Digital Marketing Executive ",
    image: "/images/students/sreeram-c.png",
    icon: "/images/company/totsmoms.png",
    standard: "Fresher",
  },
  {
    name: "Shashank S",
    company: "cropped recro",
    designation: "Digital Marketing Executive",
    image: "/images/students/shashank-s.png",
    icon: "/images/company/cropped-recro.png",
    standard: "Fresher",
  },
  {
    name: "Abhay Muralkar",
    company: "Socialeyes_3",
    designation: "Digital Marketing Executive",
    image: "/images/students/abhay-muralkar1.png",
    icon: "/images/company/Socialeyes_3.png",
    standard: "Fresher",
  },
  {
    name: "Amarnath KP",
    company: "learnbay",
    designation: "Digital Marketing Executive",
    image: "/images/students/amarnath-kp.png",
    icon: "/images/company/learnbay.png",
    standard: "Fresher",
  },
  {
    name: "N Subash",
    company: "snackeaze",
    designation: "Digital Marketer",
    image: "/images/students/n-subash.png",
    icon: "/images/company/snackeaze.png",
    standard: "Fresher",
  },
  {
    name: "Adwaith Suresh",
    company: "squareyard",
    designation: "Digital Marketer",
    image: "/images/students/adwaith-suresh.png",
    icon: "/images/company/squareyard.png",
    standard: "Fresher",
  },
  {
    name: "Thanuja R",
    company: "future",
    designation: "SEO Executive",
    image: "/images/students/thanuja-r.png",
    icon: "/images/company/future.png",
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
              <div key={i} className="col-sm-6 col-md-4 col-6">
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
