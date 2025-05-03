"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import LeftArrow from "@components/Ui/svg/leftArrow";

const certData = [
  { name: "DA360", image: "/images/da360.png" },
  { name: "Meta", image: "/images/da360.png" },
  { name: "Google", image: "/images/da360.png" },
  { name: "Hubspot", image: "/images/da360.png" },
];

const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState(certData[0].name);

  const handleTabClick = (name: string) => setActiveTab(name);

  const activeCert = certData.find((cert) => cert.name === activeTab);

  return (
    <section className={styles.certificationsSection}>
      <div className={styles.certificationsInner}>
        <h2>
          Get Industry-Recognised Certifications
          <span>(Government of India)</span>
        </h2>

        <div className={styles.certDataList}>
          {certData.map((cert) => (
            <span
              key={cert.name}
              className={`cert-chip ${
                activeTab === cert.name ? `${styles.active}` : ""
              }`}
              onClick={() => handleTabClick(cert.name)}
            >
              {cert.name}
            </span>
          ))}
        </div>

        {activeCert?.image && (
          <div className={styles.certificatePreview}>
            <Image
              src={activeCert.image}
              width={500}
              height={300}
              alt={`${activeCert.name} Certificate`}
              unoptimized={true}
              className="img-fluid"
            />
          </div>
        )}
        <div className={styles.btnAction}>
          <a href="#" className="btnRed">
            Download Detail Curriculum{" "}
            <span>
              <LeftArrow />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
