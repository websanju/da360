import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

interface StatItem {
  icon: string; // icon path
  label: string; // text below icon
}

interface WidgetCardProps {
  title: string;
  category: string[];
  stats: StatItem[]; // changed from fixed structure
  buttonText: string;
  expertText: string;
  image: string;
}

const WidgetCard: React.FC<WidgetCardProps> = ({
  title,
  category,
  stats,
  buttonText,
  expertText,
  image,
}) => {
  return (
    <div className={`${styles.widgetCard} widget-card`}>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <div className={styles.category}>
          {category.map((cat, index) => (
            <span key={index}>{cat}</span>
          ))}
        </div>

        <div className={styles.statsGrid}>
          {stats.map((item, index) => (
            <div className={styles.statItem} key={index}>
              <Image
                src={item.icon}
                width={24}
                height={24}
                alt={item.label}
                className={styles.statIcon}
              />
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.viewCourse}>{buttonText}</button>
          <button className={styles.talkExpert}>{expertText}</button>
        </div>
      </div>
      <div className={styles.cardImage}>
        <Image width={450} height={516} src={image} alt={title} />
      </div>
    </div>
  );
};

export default WidgetCard;
