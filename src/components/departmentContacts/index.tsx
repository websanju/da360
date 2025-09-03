"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

interface Department {
  iconSrc: string;
  alt: string;
  title: string;
  phone: string;
  email: string;
}

const departments: Department[] = [
  {
    iconSrc: "/images/icons/support.png",
    alt: "Support Icon",
    title: "Support",
    phone: "+91 6360 006 736",
    email: "academics@da360.ai",
  },
  {
    iconSrc: "/images/icons/enquires.png",
    alt: "Enquiry Icon",
    title: "Enquires",
    phone: "+91 7353 515 515",
    email: "info@da360.ai",
  },
  {
    iconSrc: "/images/icons/placements.png",
    alt: "Placement Icon",
    title: "Placements",
    phone: "+91 9071 428 133",
    email: "placement@da360.ai",
  },
];

const DepartmentContacts: React.FC = () => {
  return (
    <section className={styles.departmentContacts}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={"60px"}
              title="Reach Out To The Right Department"
            />
          </div>
        </div>
        {/* <div className={styles.headerSection}>
          <h2>Reach Out To The Right Department</h2>
        </div> */}
        <div className={`${styles.row} row`}>
          {departments.map((dept, index) => (
            <div key={index} className={`${styles.col} col-lg-4`}>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Image
                    src={dept.iconSrc}
                    alt={dept.alt}
                    width={40}
                    height={40}
                  />
                </div>
                <h3>{dept.title}</h3>
                <div className={styles.action}>
                  <a href={`tel:${dept.phone.replace(/\s/g, "")}`}>
                    {dept.phone}
                  </a>
                  <a href={`mailto:${dept.email}`}>{dept.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentContacts;
