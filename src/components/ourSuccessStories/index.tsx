"use client";

import styles from "./style.module.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import ArrowUp from "@/components/Ui/svg/arrowUp";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";
import SectionHeader from "@components/widgets/sectionHeader";
// import { header } from "framer-motion/client";

interface Story {
  name: string;
  companyLogo: string;
  companyName: string;
  previousRole: string;
  newRole: string;
  packageLPA: string;
  profileImage: string;
}
interface StoryHeader {
  headerTitle: string;
  description: string;
}

const stories: Story[] = [
  {
    name: "Akshita M",
    companyLogo: "/images/jeet.png",
    companyName: "Jeet",
    previousRole: "BSc Student",
    newRole: "SEO Executive",
    packageLPA: "6 LPA",
    profileImage: "/images/akshita.png",
  },
  {
    name: "Rahul Sharma",
    companyLogo: "/images/jeet.png",
    companyName: "Jeet",
    previousRole: "Fashion Model",
    newRole: "Digital Marketing Executive",
    packageLPA: "6 LPA",
    profileImage: "/images/rahul.png",
  },
  {
    name: "Rahul Sharma",
    companyLogo: "/images/jeet.png",
    companyName: "Jeet",
    previousRole: "Fashion Model",
    newRole: "Digital Marketing Executive",
    packageLPA: "6 LPA",
    profileImage: "/images/rahul.png",
  },
  {
    name: "Rahul Sharma",
    companyLogo: "/images/jeet.png",
    companyName: "Jeet",
    previousRole: "Fashion Model",
    newRole: "Digital Marketing Executive",
    packageLPA: "6 LPA",
    profileImage: "/images/rahul.png",
  },
  {
    name: "Sharmila",
    companyLogo: "/images/value.png",
    companyName: "Valueleaf",
    previousRole: "Fashion Model",
    newRole: "Digital Marketing Executive",
    packageLPA: "6 LPA",
    profileImage: "/images/sharmila.png",
  },
];

const SuccessStories: React.FC<StoryHeader> = ({
  headerTitle,
  description,
}) => {
  return (
    <section className={styles.successSection}>
      <div className="container">
        <div className={styles.successWrapper}>
          <div className={styles.storiesHeader}>
            <SectionHeader
              wrapperMarginBottom={{ desktop: "24px", mobile: "40px" }}
              titleMarginBottom={{ desktop: "16px", mobile: "10px" }}
              title={<> {headerTitle} </>}
              maxWidth="484px"
              description={<>{description}</>}
            />
            <div className={styles.usersimg}>
              {["user-1", "user-2", "user-3", "user-4", "user-5"].map(
                (user, i) => (
                  <div key={i} className={styles.userImgItems}>
                    <Image
                      src={`/images/${user}.png`}
                      className={styles.smallProfile}
                      alt="user"
                      width={50}
                      height={50}
                    />
                    {i === 4 && (
                      <div className={styles.userItemNumber}>
                        <span>60,000+</span>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
          <div className={styles.sliderWrapper}>
            {/* <div className={styles.sliderNavigation}>
              <button className="swiper-button-prev" id="customPrev7"></button>
              <button className="swiper-button-next" id="customNext7"></button>
            </div> */}

            {/* Swiper Here */}
            <Swiper
              modules={[Navigation, Scrollbar]}
              scrollbar={{ draggable: true, el: "#customScrollbar3" }}
              spaceBetween={20}
              slidesPerView={1.2}
              slidesOffsetBefore={15}
              slidesOffsetAfter={20}
              navigation={{
                prevEl: "#customPrev7",
                nextEl: "#customNext7",
              }}
              breakpoints={{
                576: { slidesPerView: 1.3 },
                768: { slidesPerView: 2.3 },
                992: { slidesPerView: 3.3 },
              }}
            >
              {stories.map((story, index) => (
                <SwiperSlide key={index}>
                  <div className={`${styles.storyCard} h-100`}>
                    <div className={styles.studentPic}>
                      <Image
                        src={story.profileImage}
                        className={`${styles.mainProfile} mb-3`}
                        alt={story.name}
                        width={370}
                        height={234}
                      />
                    </div>
                    <div className={styles.studentInfo}>
                      <h5>{story.name}</h5>
                      <div className={styles.companyLogo}>
                        <Image
                          src={story.companyLogo}
                          alt={story.companyName}
                          width={120}
                          height={35}
                        />
                      </div>
                      <div className={styles.jobRole}>
                        <span className={styles.previousRole}>
                          {story.previousRole}
                        </span>
                        <span className={styles.iconRole}>
                          <Image
                            src="/images/icons/leftArrow.svg"
                            alt="arrow"
                            width={10}
                            height={12}
                          />
                        </span>
                        <span className={styles.newRole}>{story.newRole}</span>
                      </div>
                    </div>
                    <div className={styles.packageLPA}>
                      Package: <span>{story.packageLPA}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={`${styles.controls} controls`}>
              <button id="customPrev7" className={`prevBtn ${styles.navBtn}`}>
                {" "}
                <RightArrow width={16} height={16} color="#000" />
              </button>
              <div
                id="customScrollbar3"
                className={`${styles.scrollbar} customScrollbar swiper-scrollbar drag-white`}
              ></div>
              <button id="customNext7" className={`nextBtn ${styles.navBtn}`}>
                {" "}
                <LeftArrow width={16} height={16} color="#000" />
              </button>
            </div>
          </div>
          {/* Custom scrollbar */}
          {/* <div id="customScrollbar3" className="swiper-scrollbar"></div> */}
          <div className={styles.downloadBtnAction}>
            <Link
              href="#"
              className={`${styles.downloadBtn} btn-white rounded-pill`}
            >
              Download Placement Report <ArrowUp />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
