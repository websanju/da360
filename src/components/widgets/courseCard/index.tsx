import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import RightArrow from "@/components/Ui/svg/rightArrow";
import Link from "next/link";

type CourseCardProps = {
  title: string;
  details: string[];
  bgColor?: string;
  imgSrc?: string;
  link: string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  details,
  bgColor,
  imgSrc,
  link,
}) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: bgColor,
        backgroundImage: imgSrc ? `url(${imgSrc})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.cardImg}></div>
      <div className={styles.cardInfo}>
        <h3>{title}</h3>
        <ul>
          {details.map((item, index) => (
            <li key={index}>
              <span>
                <Image
                  src="/images/icons/tick-circle-outline-green.svg"
                  width={10}
                  height={19}
                  alt="Tick Icon"
                />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <Link href={link} className={styles.arrowButton}>
          <RightArrow />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
