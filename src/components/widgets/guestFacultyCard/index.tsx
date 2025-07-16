import React from "react";
import styles from "./styles.module.scss";

import Image from "next/image";
// import Link from "next/link";

interface GuestFacultyCardProps {
  name: string;
  title: string;
  experience: string;
  // linkedinLink: string;
  bgColor: string;
  image: {
    mobile: string;
    desktop: string;
  };
  logos?: string[]; // <-- NEW
}
const GuestFacultyCard: React.FC<GuestFacultyCardProps> = ({
  name,
  title,
  experience,
  // linkedinLink,
  bgColor,
  image,
  logos = [],
}) => {
  const hasMultipleLogos = logos.length > 1;
  const hasSingleLogo = logos.length === 1;

  return (
    <div className={`card ${styles.card} ${styles[bgColor]}`}>
      <div className={`${styles.cardImg} cardImg`}>
        <picture>
          <source media="(max-width: 767px)" srcSet={image.mobile} />
          <Image
            src={image.desktop}
            width={399}
            height={350}
            className="card-img-top"
            unoptimized
            alt={name}
          />
        </picture>
      </div>

      <div className={`${styles.cardBody} cardBody`}>
        <div className={styles.facultyName}>
          <h5 dangerouslySetInnerHTML={{ __html: name }} />

          {!hasMultipleLogos && (
            <>
              {/* <Link href={linkedinLink}>
                <Image
                  width={16}
                  height={16}
                  src="/images/devicon_linkedin.svg"
                  alt="LinkedIn"
                  className={styles.linkedinIcon}
                />
              </Link> */}

              {hasSingleLogo && (
                <Image
                  width={50}
                  height={30}
                  src={logos[0]}
                  alt="Logo"
                  className={styles.singleLogo}
                />
              )}
            </>
          )}
        </div>

        <div className={styles.facultyInfo}>
          <div className={styles.title}>{title}</div>
          <div className={styles.experience}>{experience}</div>
        </div>

        {hasMultipleLogos && (
          <div className={styles.logoRow}>
            {logos.map((logo, index) => (
              <Image
                key={index}
                width={60}
                height={24}
                src={logo}
                alt={`Logo ${index + 1}`}
                className={styles.multiLogo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestFacultyCard;
