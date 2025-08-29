"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import LeftArrow from "@/components/Ui/svg/leftArrow";
import ApplyForm from "@components/widgets/popups/ApplyForm";
import { usePopup } from "@components/widgets/popup/PopupContext";

export interface Certification {
  name: string;
  image: string;
}

interface CertificationsProps {
  heading: string;
  subheading?: string;
  certifications: Certification[];
}

export default function Certifications({
  heading,
  subheading,
  certifications,
}: CertificationsProps) {
  // Initialize activeTab safely if certifications is empty or undefined
  const [activeTab, setActiveTab] = useState<string>(
    certifications?.[0]?.name ?? ""
  );
  const { openPopup } = usePopup();
  // Handle case if certifications is empty or undefined
  if (!certifications || certifications.length === 0) {
    return " ";
  }

  const handleTabClick = (name: string) => setActiveTab(name);

  const activeCert = certifications.find((cert) => cert.name === activeTab);

  return (
    <section className={styles.certificationsSection}>
      <div className={styles.certificationsInner}>
        <h2>
          {heading} {subheading && <span>{subheading}</span>}
        </h2>

        <div className={styles.certDataList}>
          {certifications.map((cert) => (
            <span
              key={cert.name}
              className={`cert-chip ${
                activeTab === cert.name ? styles.active : ""
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
          <button
            className="btnRed"
            onClick={() =>
              openPopup(<ApplyForm title=" Download Detail Curriculum" />, {
                title: `" Download Detail Curriculum{"`,
              })
            }
          >
            Download Detail Curriculum
            <span>
              <LeftArrow />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
