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
        <div className={styles.top}>
          <Image
            src={study.image.desktop}
            alt={study.name}
            width={80}
            height={80}
          />
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: study.name }} />
            <p>{study.title}</p>
            <p>{study.experience}</p>
          </div>
        </div>

        <div className={styles.details}>
          <p>{study.description}</p>
          <p>
            <strong>Expertise:</strong> {study.expertise}
          </p>
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
  );
}
