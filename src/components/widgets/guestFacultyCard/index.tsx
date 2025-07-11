import React from "react";
import styles from "./styles.module.scss";

import Image from "next/image";
import Link from "next/link";

interface GuestFacultyCardProps {
  name: string;
  title: string;
  experience: string;
  linkedinLink: string;
  bgColor: string;
  image: {
    mobile: string;
    desktop: string;
  };
}

const GuestFacultyCard: React.FC<GuestFacultyCardProps> = ({
  name,
  title,
  experience,
  linkedinLink,
  bgColor,
  image,
}) => {
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
          <Link href={linkedinLink}>
            <Image
              width={100}
              height={100}
              src={"/images/devicon_linkedin.svg"}
              alt="Logo"
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.facultyInfo}>
          <div className={styles.title}>{title}</div>
          <div className={styles.experience}>{experience}</div>
        </div>
      </div>
    </div>
  );
};

export default GuestFacultyCard;
