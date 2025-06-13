// components/StudentCard/StudentCard.tsx
import React from "react";
import styles from "./studentCard.module.scss";
import Image from "next/image";

type Student = {
  name: string;
  company: string;
  designation: string;
  package: string;
  image: string;
  background?: string;
  icon: string;
  standard: string;
};

interface Props {
  student: Student;
}

const StudentCard: React.FC<Props> = ({ student }) => {
  return (
    <div
      className={`card ${styles.card} ${
        student.background ? styles.highlight : ""
      }`}
    >
      <Image
        width={100}
        height={100}
        src={student.image}
        alt={student.name}
        className="card-img-top"
        unoptimized
      />
      <div className={styles.cardBody}>
        <span className={styles.studentName}>{student.name}</span>
        <div className={styles.studentImg}>
          <Image
            width={100}
            height={100}
            src={student.icon}
            alt={student.name}
            className="card-img-top"
            unoptimized
          />
        </div>
        <div className={styles.studentInfo}>
          <p className={styles.standard}>{student.standard}</p>
          <div className={styles.studentArrow}>
            <Image
              width={26}
              height={26}
              src={"/images/student-arrow.svg"}
              alt={"studentInfo"}
            />
          </div>
          <p className={styles.designation}>{student.designation}</p>
        </div>
        <div className={styles.seprater}></div>
        <div className={styles.package}>
          Package: <span> {student.package}</span>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
