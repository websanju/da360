import React from "react";
import styles from "./styles.module.scss";

import Image from "next/image";

interface GuestFacultyCardProps {
  name: string;
  title: string;
  experience: string;
  logo: string;
  bgColor: string; // CSS class for background color
  image: {
    mobile: string;
    desktop: string;
  };
}

const GuestFacultyCard: React.FC<GuestFacultyCardProps> = ({
  name,
  title,
  experience,
  logo,
  bgColor,
  image,
}) => {
  return (
    <div className={`card ${styles.card} ${styles[bgColor]}`}>
      <div className={styles.cardImg}>
        <picture>
          <source media="(max-width: 767px)" srcSet={image.mobile} />
          <Image
            src={image.desktop}
            width={399}
            height={350}
            className="card-img-top"
            alt={name}
          />
        </picture>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.facultyName}>
          <h5 dangerouslySetInnerHTML={{ __html: name }} />
          <span>
            <Image
              width={100}
              height={100}
              src={logo}
              alt="Logo"
              className={styles.logo}
            />
          </span>
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
