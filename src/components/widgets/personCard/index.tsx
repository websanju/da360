import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

type PersonCardProps = {
  name: string;
  image: string;
  designation: string;
};

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  image,
  designation,
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
        <button className={styles.button} aria-label="View Profile">
          <Image
            src="images/icons/devicon_linkedin.svg"
            alt={name}
            width={32}
            height={32}
          />
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
