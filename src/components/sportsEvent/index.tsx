"use client";
import { useState, useEffect } from "react";
import SportCardSlider from "@/components/widgets/sportCardSlider";
import styles from "./style.module.scss";
import LeftArrow from "@components/Ui/svg/leftArrow";
import SectionHeader from "@components/widgets/sectionHeader";

const sportData = [
  {
    title: "Cricket",
    images: ["/images/sports/cricket1.png", "/images/sports/cricket1.png"],
    color: "#FFD700",
  },
  {
    title: "Snooker",
    images: ["/images/sports/snooker.png", "/images/sports/snooker.png"],
    color: "#00BFFF",
  },
  {
    title: "Foosball",
    images: ["/images/sports/foosball.png"],
    color: "#32CD32",
  },
  {
    title: "Badminton",
    images: ["/images/sports/badminton.png"],
    color: "#FFB6C1",
  },
  {
    title: "Table Tennis",
    images: ["/images/sports/table.png"],
    color: "#FFA500",
  },
  {
    title: "PS5",
    images: ["/images/sports/ps5.png", "/images/sports/ps5.png"],
    color: "#00FFFF",
  },
];

interface SportsGridProps {
  section?: string;
}

export default function SportsGrid({ section }: SportsGridProps) {
  const [visibleCount, setVisibleCount] = useState(sportData.length);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setVisibleCount(mobile ? 4 : sportData.length);
    };

    handleResize(); // Initial run
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(sportData.length);
  };

  return (
    <section className={styles.sportCardSection} id={section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              titleMarginBottom={{ desktop: "20px", mobile: "10px" }}
              title={<>Sports Event</>}
              titleColor="#fff"
              descriptionColor="#fff"
              maxWidth="600px"
              description=" From festive celebrations like Diwali, Holi, and Onam to adrenaline-filled cricket tournaments and weekend outings, life at Digital Academy 360 is always buzzing with energy. "
            />
          </div>
        </div>

        <div className={styles.gridCards}>
          {sportData.slice(0, visibleCount).map((item, idx) => (
            <SportCardSlider
              key={idx}
              title={item.title}
              images={item.images}
              color={item.color}
            />
          ))}
        </div>

        {isMobile && visibleCount < sportData.length && (
          <div className={styles.loadMoreAction}>
            <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
              Load More <LeftArrow />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
