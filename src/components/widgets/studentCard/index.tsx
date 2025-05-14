import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { Sora } from "next/font/google";

// Font configuration for Sora
const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

type StudentCardProps = {
  name: string;
  designation: string;
  company: string;
  imgSrc?: string;
  bgColor: string;
};

const StudentCard: React.FC<StudentCardProps> = ({
  name,
  imgSrc,
  designation,
  company,
  bgColor,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={name}
            width={228}
            height={300}
            objectFit="cover"
          />
        )}
        <div className={styles.studentBlock}>
          <div>
            <div
              className={styles.studentName}
              style={{ backgroundColor: bgColor }}
            >
              {name}
            </div>
            <div className={`${styles.studentDetails} ${sora.className}`}>
              <p>{designation}</p>
              <span>{company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
