"use client";

import React from "react";
import GuestFacultyCard from "@components/widgets/guestFacultyCard";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import SectionHeader from "@components/widgets/sectionHeader";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";
import { usePopup } from "@components/widgets/popup/PopupContext";
import CaseStudyPopup, { Study } from "@components/widgets/popups/gurstFaculty";
import "swiper/css";

const data: Study[] = [
  {
    name: "Rajesh Choudhury",
    namePopup: "Rajesh <br/> Choudhury",
    title: "DGM Digital Marketing at Purvankara",

    expertise:
      "Media planning, SEO/SEM, PPC, content strategy, ORM, analytics, and digital training for high-growth performance marketing.",
    description:
      "Deputy General Manager – Digital Marketing at Puravankara Ltd. with 18+ years of experience in digital strategy across real estate, retail & e-commerce sectors.",
    profileImage: "/images/guestMentor/rajesh-choudhury.jpg",
    profileImagePopup: "/images/guestMentor/rajesh-choudhury.png",
    logos: [
      "/images/guestMentor/amazon.svg",
      "/images/guestMentor/puravankara.svg",
      "/images/guestMentor/anarock.svg",
    ],
  },

  {
    name: "Shantanu Sharma",
    namePopup: "Shantanu <br/> Sharma",
    title: "AVP Digital Marketing at Casagrand",
    expertise:
      "Expert in Google Ads, Meta, LinkedIn & programmatic channels—manages multi-million-dollar budgets with automation, CRM integration & full-funnel optimization.",
    description:
      "8+ years of experience in performance marketing across US, UK & APAC. Has successfully trained over 1,000 digital marketers and led high-ROI campaigns for brands like Archies, EasyMyTrip & PepsiCo.",
    profileImage: "/images/guestMentor/shantanu-sharma.jpg",
    profileImagePopup: "/images/guestMentor/shantanu-sharma.png",
    logos: [
      "/images/guestMentor/arehies.svg",
      "/images/guestMentor/easeMytrip.svg",
      "/images/guestMentor/pepsico.svg",
    ],
  },
  {
    name: "Harshvardhan S",
    namePopup: "Harshvardhan <br/> S",
    title: "Digital Lead at H&M",
    expertise:
      "Quick commerce campaigns, performance analysis, vendor onboarding, product optimization, and fashion e-commerce scaling.",
    description:
      "Digital Lead – Merch at H&M India with proven experience across digital merchandising, e-commerce strategy, and marketplace execution.",
    profileImage: "/images/guestMentor/harshvardhan.jpg",
    profileImagePopup: "/images/guestMentor/harshvardhan.png",
    logos: [
      "/images/guestMentor/hm.svg",
      "/images/guestMentor/innopark.svg",
      "/images/guestMentor/airstobrat.svg",
    ],
  },
  {
    name: "Jonas Prasanna",
    namePopup: "Jonas <br/> Prasanna",
    title: "Ex Global HR at Boeing",

    expertise:
      "Executive coaching, strategic HR transformation, culture design, psychological safety, and leadership development.",
    description:
      "Global HR & Leadership Coach with 16+ years in talent strategy across leading global companies. Featured on HR podcasts and a passionate advocate of workplace transformation.",
    profileImage: "/images/guestMentor/jonas-prasanna.jpg",
    profileImagePopup: "/images/guestMentor/jonas-prasanna.png",
    logos: [
      "/images/guestMentor/boeing.svg",
      "/images/guestMentor/capgemini.svg",
      "/images/guestMentor/philips.svg",
    ],
  },
  {
    name: "Deben Rath",
    namePopup: "Deben <br/> Rath",
    title: "Associate Account Manager at Adobe",
    expertise:
      "Programmatic ads, performance analytics, campaign optimization & digital ad-tech integrations.",
    description:
      "Associate Account Manager at Adobe with strong foundations in programmatic advertising and analytics. Known for simplifying complex data into actionable marketing insights.",
    profileImage: "/images/guestMentor/deben-rath.jpg",
    profileImagePopup: "/images/guestMentor/deben-rath.png",
    logos: [
      "/images/guestMentor/adob.svg",
      "/images/guestMentor/yahoo.svg",
      "/images/guestMentor/thermo.svg",
    ],
  },
  {
    name: "Gopal Raj",
    namePopup: "Gopal <br/> Raj",
    title: "Founder at Verycom",
    expertise:
      "Brand strategy, integrated marketing communications, creative campaign development, and multi-sector brand positioning.",
    description:
      "15+ years of experience across leading advertising agencies in India and overseas. Has successfully led campaigns for top-tier brands across diverse industries.",
    profileImage: "/images/guestMentor/gopalraj.jpg",
    profileImagePopup: "/images/guestMentor/gopalraj.png",
    logos: ["/images/guestMentor/ddb.svg", "/images/guestMentor/juut.svg"],
  },
  {
    name: "Aditya Agarwal",
    namePopup: "Aditya <br/> Agarwal",
    title: "Founder at Qilin Lab",

    expertise:
      "AI-powered personalization, martech infrastructure, campaign automation, cloud-native performance marketing systems.",
    description:
      "Cloud Optimization Expert & Founder of Qilin Lab, helping SaaS and fintech founders build scalable AI marketing stacks.",
    profileImage: "/images/guestMentor/aditya-agarwal.jpg",
    profileImagePopup: "/images/guestMentor/aditya-agarwal.png",
    logos: ["/images/guestMentor/qilin.svg"],
  },
  {
    name: "Riya Tiwari",
    namePopup: "Riya <br/> Tiwari",
    title: "Founder at Authique",
    expertise:
      "Organic LinkedIn growth, storytelling, personal brand positioning, and full-funnel content strategies focused on trust, visibility & monetization.",
    description:
      "Personal Branding Strategist known for helping B2B founders build LinkedIn authority and visibility. Has mentored 300+ freelancers and conducted 250+ client calls generating lakhs in revenue.",
    profileImage: "/images/guestMentor/riya-tiwari.jpg",
    profileImagePopup: "/images/guestMentor/riya-tiwari.png",
    logos: ["/images/guestMentor/authique.jpeg"],
  },
];
interface GuestFacultySectionProps {
  section?: string;
  showHeader?: boolean;
}
const GuestFacultySection = ({
  section,
  showHeader = true,
}: GuestFacultySectionProps) => {
  const { openPopup } = usePopup();

  return (
    <section className={showHeader ? styles.guestFaculty : ""} id={section}>
      {showHeader && (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHeader
                wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
                titleMarginBottom={{ desktop: "16px", mobile: "10px" }}
                title={<> Guest Mentors </>}
                maxWidth="650px"
                description="Gain Insights from World-Class Guest Faculty"
              />
            </div>
          </div>
        </div>
      )}

      <div className={styles.sliderWrapper}>
        <div className={styles.sliderInnerWrapper}>
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            scrollbar={{ draggable: true, el: "#GuestFaculty22" }}
            slidesOffsetBefore={16}
            slidesOffsetAfter={20}
            navigation={{
              prevEl: "#GuestFacultyPrev",
              nextEl: "#GuestFacultyNext",
            }}
            breakpoints={{
              768: {
                spaceBetween: 20,
              },
              992: {
                spaceBetween: 20,
              },
              1440: {
                spaceBetween: 20,
              },
            }}
            modules={[Scrollbar, Navigation]}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className={styles.customSlide}>
                <div
                  onClick={() =>
                    openPopup(<CaseStudyPopup study={item} />, {
                      className: `${styles.guestFacultyPopup}`,
                    })
                  }
                >
                  <GuestFacultyCard bgColor={"bgGreay"} {...item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={`${styles.controls} controls`}>
              <button
                id="GuestFacultyPrev"
                className={`prevBtn ${styles.navBtn}`}
              >
                <RightArrow width={16} height={16} color="#000" />
              </button>
              <div
                id="GuestFaculty22"
                className={`${styles.scrollbar} customScrollbar swiper-scrollbar`}
              />
              <button
                id="GuestFacultyNext"
                className={`nextBtn ${styles.navBtn}`}
              >
                <LeftArrow width={16} height={16} color="#000" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestFacultySection;
