import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

type PersonCardProps = {
  name: string;
  image: string;
  designation: string;
  profileLink: string;
};

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  image,
  designation,
  profileLink,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={name} width={200} unoptimized height={200} />
      </div>
      <div className={styles.info}>
        <div className={styles.contactInfo}>
          <span>{name}</span>
          <p>{designation}</p>
        </div>
        <Link
          href={profileLink}
          className={styles.button}
          target="_blank"
          aria-label={`View ${name}'s LinkedIn`}
        >
          <Image
            src="images/icons/devicon_linkedin.svg"
            alt={name}
            width={32}
            height={32}
          />
        </Link>
      </div>
    </div>
  );
};

export default PersonCard;
