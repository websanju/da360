"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";
import SectionHeader from "@components/widgets/sectionHeader";
// Styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";
import "yet-another-react-lightbox/styles.css";

import styles from "./style.module.scss";
import Image from "next/image";

interface Meetup {
  id: number;
  image?: string;
  title: string;
  location?: string;
  highlight?: boolean;
  bgColor?: string; // e.g., "#f5f5f5" or "rgba(0,0,0,0.5)"
  textColor?: string; // e.g., "#000000" or "#ffffff"
}

interface MeetupGroup {
  type: "firstItems" | "secondItems" | "thirdItems";
  items: Meetup[];
}

const meetups: MeetupGroup[] = [
  {
    type: "firstItems",
    items: [
      {
        id: 1,
        image: "/images/community-metup/9-min.jpg",
        title: "Gen-AI Meet Up",
        location: "Bengaluru",
        highlight: true,
        bgColor: "#E10F33",
        textColor: "#ffffff",
      },
      {
        id: 2,
        image: "/images/community-metup/12-min.jpg",
        title: "ML Meetup",
        location: "Chennai",
      },
      {
        id: 3,
        image: "/images/community-metup/18-min.jpg",
        title: "Vision Meetup",
        location: "Delhi",
      },
    ],
  },
  {
    type: "secondItems",
    items: [
      {
        id: 4,
        title: "Join our next offline event!",
        image: "/images/community-metup/10-min.jpg",
        location: "Mumbai",
      },
    ],
  },
  {
    type: "thirdItems",
    items: [
      {
        id: 5,
        image: "/images/community-metup/15-min.jpg",
        title: "Robotics Meetup",
        location: "Mumbai",
      },
      {
        id: 6,
        image: "/images/community-metup/13-min.jpg",
        title: "Edge AI Meetup",
        location: "Hyderabad",
      },
      {
        id: 7,
        image: "/images/community-metup/17-min.jpg",
        title: "Deep Learning Meetup",
        location: "Pune",
      },
    ],
  },
  {
    type: "secondItems",
    items: [
      {
        id: 8,
        title: "Join our next offline event!",
        image: "/images/community-metup/19-min.jpg",
      },
    ],
  },
  {
    type: "thirdItems",
    items: [
      {
        id: 12,
        image: "/images/community-metup/14-min.jpg",
        title: "Robotics Meetup",
        location: "Mumbai",
      },
      {
        id: 13,
        image: "/images/community-metup/11-min.jpg",
        title: "Edge AI Meetup",
        location: "Hyderabad",
      },
      {
        id: 14,
        image: "/images/community-metup/16-min.jpg",
        title: "Deep Learning Meetup",
        location: "Pune",
      },
    ],
  },
];
type MarginValue = string | { desktop: string; mobile: string };

interface LifeAtDA360GalleryProps {
  title?: string;
  description?: string;
  bgColor?: string;
  section?: string;
  paddingBottom?: MarginValue;
}

function useResponsiveMargin(margin?: MarginValue): string {
  const [value, setValue] = useState("0");

  useEffect(() => {
    const updateMargin = () => {
      const isMobile = window.innerWidth <= 767;
      if (typeof margin === "string") {
        setValue(margin);
      } else if (margin) {
        setValue(isMobile ? margin.mobile : margin.desktop);
      }
    };

    updateMargin();
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, [margin]);

  return value;
}

const LifeAtDA360Gallery = ({
  title = "#LifeAtDA360 Gallery",
  description,
  bgColor = "#ffffff",
  section,
  paddingBottom,
}: LifeAtDA360GalleryProps) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const flatMeetups: Meetup[] = meetups.flatMap((group) => group.items);
  const imageMeetups = flatMeetups.filter((m) => m.image);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleOpenLightbox = (id: number) => {
    const index = imageMeetups.findIndex((m) => m.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
      setOpen(true);
    }
  };
  const containerRef = useRef<HTMLDivElement>(null);

  const renderSlideContent = (group: MeetupGroup) => {
    const { type, items } = group;

    if (type === "firstItems") {
      return (
        <div className={styles.firstItemsSlider}>
          <div
            className={styles.cardLarge}
            onClick={() => handleOpenLightbox(items[0].id)}
          >
            <Image
              src={items[0].image!}
              alt={items[0].title}
              width={400}
              height={500}
              className={styles.cardImage}
            />
          </div>

          <div className={styles.smallcardGroup}>
            <div
              className={styles.smallcard}
              onClick={() => handleOpenLightbox(items[1].id)}
            >
              <Image
                src={items[1].image!}
                alt={items[1].title}
                width={400}
                height={500}
                className={styles.cardImage}
              />
            </div>
            <div
              className={styles.smallcard}
              onClick={() => handleOpenLightbox(items[2].id)}
            >
              <Image
                src={items[2].image!}
                alt={items[2].title}
                width={400}
                height={500}
                className={styles.cardImage}
              />
            </div>
          </div>
        </div>
      );
    }

    if (type === "secondItems") {
      const item = items[0];
      return (
        <div
          className={styles.secondItemsSlider}
          onClick={() => handleOpenLightbox(item.id)}
        >
          <div className={styles.cardLarge}>
            <Image
              src={item.image!}
              alt={item.title}
              width={397}
              height={670}
              className={styles.cardImage}
            />
          </div>
        </div>
      );
    }

    if (type === "thirdItems") {
      return (
        <div className={styles.thirdItemsSlider}>
          <div className={styles.smallcardGroup}>
            {items.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className={styles.smallcard}
                onClick={() => handleOpenLightbox(item.id)}
              >
                <Image
                  src={item.image!}
                  alt={item.title}
                  width={400}
                  height={500}
                  className={styles.cardImage}
                />
              </div>
            ))}
          </div>
          <div
            className={styles.cardLarge}
            onClick={() => handleOpenLightbox(items[2].id)}
          >
            <Image
              src={items[2].image!}
              alt={items[2].title}
              width={400}
              height={500}
              className={styles.cardImage}
            />
          </div>
        </div>
      );
    }

    return null;
  };

  const renderMobileCard = (item: Meetup) => (
    <div
      key={item.id}
      className={styles.mobileCard}
      onClick={() => handleOpenLightbox(item.id)}
    >
      {item.image && (
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={500}
          className={styles.cardImage}
        />
      )}
    </div>
  );

  return (
    <section
      className={styles.communityMeetupSection}
      style={{
        backgroundColor: bgColor,
        paddingBottom: useResponsiveMargin(paddingBottom),
      }}
      id={section}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              titleMarginBottom={{ desktop: "20px", mobile: "10px" }}
              title={<>{title}</>}
              maxWidth="650px"
              description={description}
            />
          </div>
        </div>
      </div>
      {isMobile ? (
        <div className={styles.mobileCardBox}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={styles.mobileCardList}>
                  {flatMeetups.slice(0, visibleCount).map(renderMobileCard)}
                  {visibleCount < flatMeetups.length && (
                    <div className={styles.loadMoreWrapper}>
                      <button
                        className={styles.loadMoreBtn}
                        onClick={handleLoadMore}
                      >
                        Load More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div ref={containerRef} className={styles.sliderWrapper}>
          <div className={styles.sliderInnerWrapper}>
            <div className="container position-relative"></div>
            <Swiper
              modules={[Navigation, Scrollbar]}
              slidesPerView="auto"
              slidesOffsetBefore={20}
              slidesOffsetAfter={20}
              spaceBetween={20}
              navigation={{
                prevEl: "#customPrev11",
                nextEl: "#customNext11",
              }}
              scrollbar={{ draggable: true, el: "#customScrollbar18" }}
              className={styles.swiperWrapper}
            >
              {meetups.map((group, index) => (
                <SwiperSlide
                  key={index}
                  className={`${styles.slide} ${styles[group.type]}`}
                >
                  {renderSlideContent(group)}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={`${styles.controls} controls`}>
            <button id="customPrev11" className={`prevBtn ${styles.navBtn}`}>
              {" "}
              <RightArrow width={16} height={16} color="#000" />
            </button>
            <div
              id="customScrollbar18"
              className={`${styles.scrollbar} customScrollbar swiper-scrollbar`}
            ></div>
            <button id="customNext11" className={`nextBtn ${styles.navBtn}`}>
              {" "}
              <LeftArrow width={16} height={16} color="#000" />
            </button>
          </div>
        </div>
      )}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={imageMeetups.map((m) => ({ src: m.image! }))}
        index={currentIndex}
      />
    </section>
  );
};

export default LifeAtDA360Gallery;
