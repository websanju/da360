"use client";

import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import Link from "next/link";
import RightArrow from "@/components/Ui/svg/rightArrow";

export interface Event {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  location: string;
  date: string;
  duration: string;
  participants: number;
}

export default function Card({ event }: { event: Event }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={event.image}
          width={628}
          height={275}
          alt={event.title}
          objectFit="cover"
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardStatus}>
          <span className={styles.tag}>ONLINE</span>
          <span className={styles.status}>Ended</span>
        </div>
        <p className={styles.title}>{event.title}</p>
        <h5 className={styles.subtitle}>{event.subtitle}</h5>
        <div className={styles.meta}>
          <span>{event.location}</span>
          <span>{event.date}</span>
          <span>{event.duration}</span>
        </div>
        <div className={styles.participants}>
          <div className={styles.participantImg}>
            <Image
              src="/images/event-user-1.png"
              alt="users"
              width={32}
              height={32}
            />
          </div>
          <div className={styles.participantImg}>
            <Image
              src="/images/event-user-2.png"
              alt="users"
              width={32}
              height={32}
            />
          </div>
          <div className={styles.participantImg}>
            <Image
              src="/images/event-user-3.png"
              alt="users"
              width={32}
              height={32}
            />
          </div>
          <span className={styles.count}>
            +{event.participants} participating
          </span>
        </div>
      </div>
      <Link href={"#"} className={styles.cardFooter}>
        <span>Learn More</span>
        <span className={styles.arrow}>
          <RightArrow color="#000" />
        </span>
      </Link>
    </div>
  );
}
