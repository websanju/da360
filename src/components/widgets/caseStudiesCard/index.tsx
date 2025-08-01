"use client";

import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { usePopup } from "@components/widgets/popup/PopupContext";
import CaseStudyPopup from "@components/widgets/popups/CaseStudyPopup";
import Link from "next/link";

export interface CaseStudy {
  id: number;
  logo: string;
  title: string;
  description: string;
  tags: string[];
}

export default function Card({ study }: { study: CaseStudy }) {
  const { openPopup } = usePopup();

  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image
          src={study.logo}
          alt={study.title}
          width={82}
          height={62}
          className={styles.logo}
        />
      </div>
      <div className={styles.cardDescription}>
        <h3>{study.title}</h3>
        <p className={styles.desc}>
          {study.description.slice(0, 120)}...
          <Link
            href="#"
            onClick={() =>
              openPopup(<CaseStudyPopup study={study} />, {
                title: `${study.title}`,
              })
            }
            className={styles.knowMore}
          >
            Know More
          </Link>
        </p>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.skills}>
        <span className={styles.skillsLable}>Key Skills Learned</span>
        <div className={styles.tags}>
          {study.tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
