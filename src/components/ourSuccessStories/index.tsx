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

import { usePopup } from "@components/widgets/popup/PopupContext";
import DownloadPlacementReport from "@components/widgets/popups/DownloadPlacementReport";

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
  section?: string;
}

export interface CaseStudy {
  id: number;
  logo: string;
  title: string;
  description: string;
  tags: string[];
}

const stories: Story[] = [
  {
    name: "Khushi Surana",
    companyName: "Jeet",
    previousRole: "Advertising Ops Specialist",
    packageLPA: "5 LPA",
    profileImage: "/images/students/khushi-surana.png",
    companyLogo: "/images/company/amazon.png",
    newRole: "Modelling",
  },
  {
    name: "Vishnu",
    companyName: "Jeet",
    previousRole: "AdWords Strategist",
    packageLPA: "6 LPA",
    profileImage: "/images/students/vishnu.png",
    companyLogo: "/images/company/google.png",
    newRole: "Fresher",
  },
  {
    name: "Adarsh Gupta",
    companyName: "Valueleaf",
    previousRole: "Digital Marketing Executive",
    packageLPA: "4.2 LPA",
    profileImage: "/images/students/adarsh-gupta.png",
    companyLogo: "/images/company/tula.png",
    newRole: "Fresher",
  },
  {
    name: "Pooja . M",
    companyName: "Jeet",
    previousRole: "Digital Marketing Analyst",
    packageLPA: "4.7 LPA",
    profileImage: "/images/students/pooja-m.png",
    companyLogo: "/images/company/anteriad.png",
    newRole: "Fresher",
  },
  {
    name: "Amala Sharika",
    companyName: "Jeet",
    previousRole: "Senior Executive Marketing",
    packageLPA: "4 LPA",
    profileImage: "/images/students/amala-sharika.png",
    companyLogo: "/images/company/vg.png",
    newRole: "Fresher",
  },
  {
    name: "Megha Lodha",
    companyName: "Valueleaf",
    previousRole: "Campaign Specialist",
    packageLPA: "3.28 LPA",
    profileImage: "/images/students/megha-lodha.png",
    companyLogo: "/images/company/eat-repeat.png",
    newRole: "Fresher",
  },
  {
    name: "Krithik Kumar",
    companyName: "Jeet",
    previousRole: "Digital Marketing Executive",
    packageLPA: "3 LPA",
    profileImage: "/images/students/krithik-kumar.png",
    companyLogo: "/images/company/masscoders.png",
    newRole: "Fresher",
  },
  {
    name: "Sanjay H R",
    companyName: "Jeet",
    previousRole: "SEO Analyst",
    packageLPA: "5.2 LPA",
    profileImage: "/images/students/sanjay-hr.png",
    companyLogo: "/images/company/rollingrock.png",
    newRole: "Fresher",
  },
];
type StoryCard = Story | { type: "final" };

// Add this line before return():

const SuccessStories: React.FC<StoryHeader & {}> = ({
  headerTitle,
  description,
  section,
}) => {
  const storySlides: StoryCard[] = [...stories, { type: "final" }];
  const { openPopup } = usePopup();
  return (
    <section className={styles.successSection} id={section}>
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
                      unoptimized
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
              {storySlides.map((story, index) => {
                if ("type" in story && story.type === "final") {
                  return (
                    <SwiperSlide key="final-card">
                      <div
                        className={`${styles.storyCard} ${styles.finalCard}`}
                      >
                        <p className="mb-3">
                          Want to see more inspiring stories?
                        </p>
                        <Link
                          href="/placements"
                          className={`${styles.downloadBtn} btn-white rounded-pill`}
                        >
                          View All Success Stories <ArrowUp />
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                }

                const student = story as Story;

                return (
                  <SwiperSlide key={index}>
                    <div className={`${styles.storyCard} h-100`}>
                      <div className={styles.studentPic}>
                        <Image
                          src={student.profileImage}
                          className={`${styles.mainProfile} mb-3`}
                          alt={student.name}
                          width={370}
                          height={234}
                          unoptimized
                        />
                      </div>
                      <div className={styles.studentInfo}>
                        <h5>{student.name}</h5>
                        <div className={styles.companyLogo}>
                          <Image
                            src={student.companyLogo}
                            alt={student.companyName}
                            width={120}
                            height={35}
                            unoptimized
                          />
                        </div>
                        <div className={styles.jobRole}>
                          <span className={styles.previousRole}>
                            {student.newRole}
                          </span>
                          <span className={styles.iconRole}>
                            <Image
                              src="/images/icons/leftArrow.svg"
                              alt="arrow"
                              width={10}
                              height={12}
                            />
                          </span>
                          <span className={styles.newRole}>
                            {student.previousRole}
                          </span>
                        </div>
                      </div>
                      <div className={styles.packageLPA}>
                        Package: <span>{student.packageLPA}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className={`${styles.controls} controls`}>
              <button id="customPrev7" className={`prevBtn ${styles.navBtn}`}>
                <RightArrow width={16} height={16} color="#000" />
              </button>
              <div
                id="customScrollbar3"
                className={`${styles.scrollbar} customScrollbar swiper-scrollbar drag-white`}
              ></div>
              <button id="customNext7" className={`nextBtn ${styles.navBtn}`}>
                <LeftArrow width={16} height={16} color="#000" />
              </button>
            </div>
          </div>

          <div className={styles.downloadBtnAction}>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevents jumping to the top
                openPopup(<DownloadPlacementReport />, "Apply Now");
              }}
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
