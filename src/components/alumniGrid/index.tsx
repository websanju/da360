"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";
import Link from "next/link";

const alumni = [
  {
    name: "Khushi Surana",
    role: "Advertising Ops Specialist",
    image: "/images/students/khushi-surana.png",
    companyLogo: "/images/company/amazon.png",
  },
  {
    name: "Vishnu",
    role: "AdWords Strategist",
    image: "/images/students/vishnu.png",
    companyLogo: "images/company/google.png",
  },
  {
    name: "Adarsh Gupta",
    role: "Digital Marketing Executive",
    image: "/images/students/adarsh-gupta.png",
    companyLogo: "/images/company/tula.png",
  },
  {
    name: "Pooja . M",
    role: "Digital Marketing Analyst",
    image: "/images/students/pooja-m.png",
    companyLogo: "/images/company/anteriad.png",
  },
  {
    name: "Amala Sharika",
    role: "Senior Executive Marketing",
    image: "/images/students/amala-sharika.png",
    companyLogo: "/images/company/vg.png",
  },
  {
    name: "Megha Lodha",
    role: "Campaign Specialist",
    image: "/images/students/megha-lodha.png",
    companyLogo: "/images/company/eat-repeat.png",
  },
  {
    name: "Krithik Kumar",
    role: "Digital Marketing Executive",
    image: "/images/students/krithik-kumar.png",
    companyLogo: "/images/company/masscoders.png",
  },
  {
    name: "Sanjay H R",
    role: "SEO Analyst",
    image: "/images/students/sanjay-hr.png",
    companyLogo: "/images/company/rollingrock.png",
  },
  {
    name: "Kiran B",
    role: "Digital Marketer",
    image: "/images/students/kiran-b.png",
    companyLogo: "/images/company/smartneta.png",
  },
  {
    name: "Arpitha",
    role: "Brand Marketing Executive",
    image: "/images/students/arpitha.png",
    companyLogo: "/images/company/ki.png",
  },
  {
    name: "Hemanth B",
    role: "Marketing Manager",
    image: "/images/students/hemanth-b.png",
    companyLogo: "/images/company/devel-up.png",
  },
  {
    name: "Dhikshith R",
    role: "Brand Marketing Executive",
    image: "/images/students/dhikshith-r.png",
    companyLogo: "/images/company/smartneta.png",
  },
];

const AlumniGrid = () => {
  return (
    <section className={styles.alumniSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.alumniWrapper}>
              <SectionHeader
                wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
                titleMarginBottom={{ desktop: "16px", mobile: "10px" }}
                title={<>Alumni Placed at Top Companies</>}
                maxWidth="484px"
                description={
                  <>
                    DA360 industry-backed courses align with the latest digital
                    marketing trends, equipping graduates with the expertise for
                    career growth and top placements.
                  </>
                }
              />
              <div className={styles.grid}>
                {alumni.map((item, index) => (
                  <div key={index} className={styles.card}>
                    <div className={styles.cardImage}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        unoptimized
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardInfo}>
                        <h4>{item.name}</h4>
                        <p>{item.role}</p>
                      </div>
                      <div className={styles.cardImg}>
                        <Image
                          src={item.companyLogo}
                          alt="Company Logo"
                          width={40}
                          height={20}
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.ctaWrapper}>
                <Link className={"btn btn-danger"} href={"/hire-from-da360"}>
                  Start Hiring
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniGrid;
