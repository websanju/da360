"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function MarqueeBanner() {
  const content =
    "Learn Today. Lead Tomorrow. 🔺 Learn Today. Lead Tomorrow. 🔺 Learn Today. Lead Tomorrow. 🔺";
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(1);

  useEffect(() => {
    if (marqueeRef.current) {
      const containerWidth = marqueeRef.current.offsetWidth;
      const span = marqueeRef.current.querySelector("span");
      const contentWidth = span ? span.offsetWidth : 200;
      const minRepeats = Math.ceil((containerWidth * 2) / contentWidth); // ×2 for safe overlap
      setRepeatCount(minRepeats);
    }
  }, []);

  const renderContent = () => {
    return content.split("🔺").flatMap((part, index, arr) => {
      const elements = [<span key={`text-${index}`}>{part}</span>];
      if (index < arr.length - 1) {
        elements.push(
          <Image
            key={`arrow-${index}`}
            src="/images/icons/marqee-arrow.svg"
            width={35}
            height={35}
            alt="Arrow"
            className={styles.arrowIcon}
          />
        );
      }
      return elements;
    });
  };

  return (
    <div className={styles.marqueeWrapper}>
      <div className={`${styles.marqueeRow} ${styles.leftToRight}`}>
        <div className={styles.marqueeContent} ref={marqueeRef}>
          {Array.from({ length: repeatCount }).map((_, i) => (
            <div className={styles.marqueeItem} key={`ltr-${i}`}>
              {renderContent()}
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.marqueeRow} ${styles.rightToLeft}`}>
        <div className={styles.marqueeContent}>
          {Array.from({ length: repeatCount }).map((_, i) => (
            <div className={styles.marqueeItem} key={`rtl-${i}`}>
              {renderContent()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
