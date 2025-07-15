"use client";

import styles from "./style.module.scss";
import { usePopup } from "@components/widgets/popup/PopupContext";
import Image from "next/image";

export interface Study {
  name: string;
  title: string;
  experience: string;
  description: string;
  expertise: string;
  linkedinLink: string;
  image: {
    desktop: string;
    mobile: string;
  };
  logos?: string[];
}

interface Props {
  study: Study;
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
              src={study.image.desktop}
              alt={study.name}
              width={428}
              height={375}
            />
          </div>
          <div className={styles.facultyInfo}>
            <h3 dangerouslySetInnerHTML={{ __html: study.name }} />
            <p>{study.title}</p>
          </div>
        </div>

        <div className={styles.facultyDetails}>
          <div className={styles.description}>{study.description}</div>
          <div className={styles.facultyExpertise}>
            <span>Expertise:</span> <br /> {study.expertise}
          </div>
          <div className={styles.facultyBrand}>
            <span>Brands Worked with</span>
            {study.logos && study.logos.length > 0 && (
              <div className={styles.logos}>
                {study.logos.map((logo, idx) => (
                  <Image
                    key={idx}
                    src={logo}
                    alt={`Logo ${idx + 1}`}
                    width={60}
                    height={30}
                    className={styles.logo}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
