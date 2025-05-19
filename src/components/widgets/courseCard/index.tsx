import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import RightArrow from "@/components/Ui/svg/rightArrow";

type CourseCardProps = {
  title: string;
  duration: string;
  assignments: string;
  projects: string;
  bgColor?: string;
  imgSrc?: string; // New prop for image
};

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  duration,
  assignments,
  projects,
  bgColor,
  imgSrc,
}) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <div className={styles.cardImg}>
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={title}
            width={350}
            height={250}
            objectFit="cover"
          />
        )}
      </div>
      <div className={styles.cardInfo}>
        <h3>{title}</h3>
        <ul>
          <li>
            <span>
              <Image
                src="/images/icons/tick-circle-outline-green.svg"
                width={10}
                height={19}
                alt="Tick Icon"
              />
            </span>

            {duration}
          </li>
          <li>
            <span>
              <Image
                src="/images/icons/tick-circle-outline-green.svg"
                width={10}
                height={19}
                alt="Tick Icon"
              />
            </span>
            {assignments}
          </li>
          <li>
            <span>
              <Image
                src="/images/icons/tick-circle-outline-green.svg"
                width={10}
                height={19}
                alt="Tick Icon"
              />
            </span>
            {projects}
          </li>
        </ul>
        <button className={styles.arrowButton}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
