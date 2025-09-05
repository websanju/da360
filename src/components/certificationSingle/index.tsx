import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

interface CertificationSingleProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const CertificationSingle: React.FC<CertificationSingleProps> = ({
  title,
  subtitle,
  imageSrc,
}) => {
  return (
    <section className={styles.certificationSingle}>
      <div className="container">
        <h2>
          {title} <span>{subtitle}</span>
        </h2>
        <div className={styles.certificatePreview}>
          <Image
            src={imageSrc}
            width={500}
            height={300}
            alt="Certificate"
            unoptimized
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationSingle;
