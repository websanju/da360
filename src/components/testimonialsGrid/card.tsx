import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

type Testimonial = {
  id: number;
  type: "text" | "video";
  name: string;
  review?: string;
  rating: number;
  avatar: string;
  source?: string;
  videoUrl?: string;
};

const Card = ({ item }: { item: Testimonial }) => (
  <div className={styles.card}>
    {item.type === "text" ? (
      <>
        <div className={styles.cardHeader}>
          <div className={styles.quoteIcon}>
            <Image
              src={"images/rating/tquote-filled.svg"}
              width={53}
              height={53}
              alt={item.name}
              className={styles.avatar}
            />{" "}
          </div>
          <div className={styles.star}>
            <Image
              src="/images/rating/round-star.svg"
              alt="Platform"
              width={24}
              height={24}
              unoptimized
            />
            <Image
              src="/images/rating/round-star.svg"
              alt="Platform"
              width={24}
              height={24}
              unoptimized
            />
            <Image
              src="/images/rating/round-star.svg"
              alt="Platform"
              width={24}
              height={24}
              unoptimized
            />
            <Image
              src="/images/rating/round-star.svg"
              alt="Platform"
              width={24}
              height={24}
              unoptimized
            />
            <Image
              src="/images/rating/round-star.svg"
              alt="Platform"
              width={24}
              height={24}
              unoptimized
            />
          </div>
        </div>
        <p className={styles.review}>{item.review}</p>
      </>
    ) : (
      <div className={styles.videoWrapper}>
        <video controls className={styles.video}>
          <source src={item.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )}
    <div className={styles.footer}>
      <Image
        src={item.avatar}
        width={40}
        height={40}
        alt={item.name}
        className={styles.avatar}
      />
      <div>
        <div className={styles.name}>{item.name}</div>
        {item.source && <div className={styles.source}>{item.source}</div>}
      </div>
    </div>
  </div>
);

export default Card;
