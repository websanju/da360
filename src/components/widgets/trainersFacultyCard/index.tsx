import React from "react";
import styles from "./styles.module.scss";

import Image from "next/image";
import Link from "next/link";

interface GuestFacultyCardProps {
  name: string;
  title: string;
  experience?: string;
  linkedinLink: string;
  profileImage: string;
}

const GuestFacultyCard: React.FC<GuestFacultyCardProps> = ({
  name,
  title,
  experience,
  linkedinLink,
  profileImage,
}) => {
  return (
    <div className={`card ${styles.card} `}>
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
