import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface GuestFacultyCardProps {
  name: string;
  title: string;
  bgColor: string;
  profileImage: string;
  logos?: string[];
}

const GuestFacultyCard: React.FC<GuestFacultyCardProps> = ({
  name,
  title,
  bgColor,
  profileImage,
  logos = [],
}) => {
  const displayedLogos = logos.slice(0, 3);

  return (
    <div className={`card ${styles.card} ${styles[bgColor]}`}>
      <div className={`${styles.cardImg} cardImg`}>
        <Image
          src={profileImage}
          width={399}
          height={350}
          className="card-img-top"
          unoptimized
          alt={name}
        />
      </div>

      <div className={`${styles.cardBody} cardBody`}>
        {/* Profile Image */}

        <div className={styles.facultyName}>
          <h5 dangerouslySetInnerHTML={{ __html: name }} />
        </div>

        <div className={styles.facultyInfo}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.logoRow}>
          {displayedLogos.map(
            (logo, index) =>
              logo && (
                <Image
                  key={index}
                  width={60}
                  height={24}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className={styles.multiLogo}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestFacultyCard;
