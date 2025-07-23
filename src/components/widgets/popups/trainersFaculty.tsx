"use client";

import styles from "./style.module.scss";
import { usePopup } from "@components/widgets/popup/PopupContext";
import Image from "next/image";

export interface Studys {
  namePopup: string;
  name: string;
  title: string;
  description: string;
  expertise?: string;
  linkedinLink: string;
  profileImage: string;
  profileImagePopup: string;
}

interface Props {
  study: Studys;
}

export default function CaseStudyPopup({ study }: Props) {
  const { closePopup } = usePopup();

  return (
    <div className={`${styles.caseStudyPopup}`}>
      <button type="button" className={styles.closeForm} onClick={closePopup}>
        <Image
          src="/images/icons/close.svg"
          alt="Close"
          width={14}
          height={14}
        />
      </button>

      <div className={styles.body}>
        <div className={styles.facultyBox}>
          <div className={styles.facultyImg}>
            <Image
              src={study.profileImagePopup}
              alt={study.name}
              width={428}
              height={375}
            />
          </div>
          <div className={styles.facultyInfo}>
            <h3 dangerouslySetInnerHTML={{ __html: study.namePopup }} />
            <p>{study.title}</p>
          </div>
        </div>

        <div className={styles.facultyDetails}>
          <div className={styles.description}>{study.description}</div>
          <div className={styles.facultyExpertise}>
            <span>Expertise:</span> <br /> {study.expertise}
          </div>
        </div>
      </div>
    </div>
  );
}
