"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";

const alumni = [
  {
    name: "Akshita M",
    role: "SEO Executive",
    image: "/images/akshita.png",
    companyLogo: "/images/jeet.png",
  },
  {
    name: "Akshita M",
    role: "SEO Executive",
    image: "/images/rahul.png",
    companyLogo: "/images/jeet.png",
  },
  {
    name: "Akshita M",
    role: "SEO Executive",
    image: "/images/sharmila.png",
    companyLogo: "/images/jeet.png",
  },
  {
    name: "Akshita M",
    role: "SEO Executive",
    image: "/images/sanjau.png",
    companyLogo: "/images/jeet.png",
  },
  {
    name: "Akshita M",
    role: "SEO Executive",
    image: "/images/sharmila.png",
    companyLogo: "/images/jeet.png",
  },
  {
    name: "Akshita M",
    role: "SEO Executive",
    image: "/images/rahul.png",
    companyLogo: "/images/jeet.png",
  },
  {
    name: "Akshita M",
    role: "SEO Executive",
    image: "/images/akshita.png",
    companyLogo: "/images/jeet.png",
  },
  {
    name: "Akshita M",
    role: "SEO Executive",
    image: "/images/sharmila.png",
    companyLogo: "/images/jeet.png",
  },
  {
    name: "Akshita M",
    role: "SEO Executive",
    image: "/images/sanjau.png",
    companyLogo: "/images/jeet.png",
  },
  {
    name: "Akshita M",
    role: "SEO Executive",
    image: "/images/sharmila.png",
    companyLogo: "/images/jeet.png",
  },
  {
    name: "Akshita M",
    role: "SEO Executive",
    image: "/images/rahul.png",
    companyLogo: "/images/jeet.png",
  },
  {
    name: "Akshita M",
    role: "SEO Executive",
    image: "/images/akshita.png",
    companyLogo: "/images/jeet.png",
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
                <button className={"btn btn-danger"}>Start Hiring</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniGrid;
