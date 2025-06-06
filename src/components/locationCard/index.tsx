"use client";

import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import ArrowLeft from "@components/Ui/svg/arrowUp";

interface LocationCardProps {
  city: string;
  addressLines: string[];
  phone: string;
  imageSrc: string;
  directionLink: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  city,
  addressLines,
  phone,
  imageSrc,
  directionLink,
}) => {
  return (
    <section className={styles.locationSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 d-flex align-items-center">
            <div className={styles.info}>
              <h2>
                <span className={styles.city}>{city}</span>
              </h2>
              <h4>
                Head Office Jayanagar <br />
                Digital Academy 360
              </h4>
              <address>
                {addressLines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </address>
              <div className={styles.contact}>
                <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                <a
                  href={directionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Direction{" "}
                  <span>
                    <ArrowLeft width={24} height={24} />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className={styles.imageContainer}>
              <Image src={imageSrc} alt={city} fill className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationCard;
