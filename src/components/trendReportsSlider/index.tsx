"use client";
import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";
import styles from "./styles.module.scss";
import CaseStudiesCard from "@components/widgets/caseStudiesCard";
import LeftArrow from "@components/Ui/svg/leftArrow";
import RightArrow from "@components/Ui/svg/rightArrowLine";
import SectionHeader from "@components/widgets/sectionHeader";

const caseStudies = [
  {
    id: 1,
    logo: "/images/mcdonalds-logo.png",
    title: "Netflix India — Driving Engagement with Short-Form Video",
    description:
      "Netflix India revolutionized its social media strategy by leveraging Reels and meme collaborations to connect with Gen Z and millennial audiences. Through witty short-form storytelling, trending audio, and influencer tie-ups, Netflix maximized engagement for show launches and campaigns like Sacred Games and Money Heist.",
    tags: [
      "Short-Form Video Storytelling",
      "Meme Collaborations",
      "Influencer Tie-Ups",
      "Trend-Based Content Planning",
    ],
  },

  {
    id: 2,
    logo: "/images/oneplus.png",
    title: "Zomato — Using Humor & Meme Marketing for Virality",
    description:
      "Zomato redefined digital engagement by adopting a meme-first strategy. With witty tweets, meme-based creatives, and relatable Reels, the brand saw a 10x boost in social engagement. Their campaigns during IPL and cricket series showcased the power of humor in building viral momentum.",
    tags: [
      "Meme Marketing Strategy",
      "Humor-Driven Engagement",
      "Real-Time Content Creation",
      "Viral Marketing Frameworks",
    ],
  },
  {
    id: 3,
    logo: "/images/rolex.png",
    title: "CRED — Creator-Driven Influencer Collaborations",
    description:
      "CRED built credibility and brand trust by collaborating with high-profile creators and celebrities. Their campaigns blended quirk, authority, and storytelling—turning influencer-led videos into national conversations. Creators like Rahul Dravid and Tanmay Bhat were instrumental in CRED’s viral brand recall.",
    tags: [
      "Influencer Marketing Campaign Planning",
      "Creator Collaborations",
      "Brand Storytelling via Authority Figures",
      "High-ROI Content Production",
    ],
  },
  {
    id: 4,
    logo: "/images/cocacola.png",
    title: "McDonald’s India – Localizing a Global Brand",
    description:
      "McDonald’s India adapted its global brand strategy to meet local market preferences—replacing beef-based offerings, introducing aloo tikki burgers, and launching value pricing to capture the price-sensitive Indian audience. Their digital marketing focused on regional content, hyper-local social media campaigns, and app-based loyalty programs.",
    tags: [
      "Marketing Strategy",
      "Consumer Segmentation",
      "Localization in Campaigns",
      "Social Media Planning",
    ],
  },
  {
    id: 5,
    logo: "/images/nextflix.png",
    title: "Mother Dairy – Building Trust Through Content",
    description:
      "Mother Dairy strengthened its brand presence by focusing on emotional storytelling and purpose-driven marketing. Campaigns like 'Rishton Ka Swad Badhaiye' positioned the brand as a part of Indian family life. It leveraged SEO, blog content, influencer tie-ups, and YouTube storytelling to increase brand engagement and product awareness.",
    tags: [
      "Content Marketing",
      "SEO & Organic Reach",
      "Video Marketing Strategy",
      "Influencer Marketing",
    ],
  },

  {
    id: 6,
    logo: "/images/durex.png",
    title: "Zomato – Data-Driven Performance Marketing",
    description:
      "Zomato scaled its customer acquisition by running high-performing campaigns during IPL seasons, using data-backed insights to target users based on cuisine preferences, location, and time of day. They executed geo-targeted Google and Meta ads, retargeting sequences, and meme-based creatives to boost engagement and app installs.",
    tags: [
      "Performance Marketing",
      "Google & Meta Ad Strategy",
      "Retargeting Campaigns",
      "A/B Testing & Optimization",
    ],
  },
  {
    id: 7,
    logo: "/images/whatsup.png",
    title: "Swiggy – Data-Driven Campaign Optimization",
    description:
      "Swiggy leveraged data analytics and AI-driven insights to optimize campaigns in real-time, increasing both conversions and order value.",
    tags: [
      "Multi-channel attribution tracking.",
      "AI-based campaign optimization.",
      "Hyper-local targeting strategies.",
    ],
  },
  {
    id: 8,
    logo: "/images/cadbury.png",
    title: "Nykaa – Influencer & Social Ads Funnel",
    description:
      "Nykaa executed a full-funnel influencer + paid ads strategy to launch a new beauty product line and boost online sales.",
    tags: [
      "Influencer funnel integration with paid ads.",
      "Social commerce and shoppable content.",
      "Dynamic creative testing for high engagement.",
    ],
  },
  {
    id: 9,
    logo: "/images/cadbury.png",
    title: "MakeMyTrip – Seasonal PPC Campaign Strategy",
    description:
      "MakeMyTrip tapped into seasonal travel trends to design high-converting PPC campaigns across Google and Meta platforms.",
    tags: [
      "Seasonal campaign planning & keyword research.",
      "Search + display remarketing funnels.",
      "Offer-driven PPC strategies.",
    ],
  },
];

// Utility to extract unique brands from logos
const getUniqueBrands = (data: typeof caseStudies) => {
  const seen = new Set();
  return data.filter(({ logo }) => {
    if (seen.has(logo)) return false;
    seen.add(logo);
    return true;
  });
};
interface CaseStudySliderProps {
  section?: string;
}
export default function CaseStudySlider({ section }: CaseStudySliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const uniqueBrands = getUniqueBrands(caseStudies);
  const [selectedLogo, setSelectedLogo] = useState<string>("");

  const handleBrandClick = (logo: string) => {
    setSelectedLogo(logo); // ⬅️ Track selected brand
    const index = caseStudies.findIndex((study) => study.logo === logo);
    if (index !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(index, 500); // Slide to that card
    }
  };

  return (
    <section className={styles.trendReportsSlider} id={section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              title={
                <>
                  Unlock 25,000+ Case Studies <br /> & Trend Reports
                </>
              }
              titleColor="#fff"
            />
            <div className={styles.brandLogos}>
              {uniqueBrands.map((brand, idx) => (
                <button
                  key={idx}
                  onClick={() => handleBrandClick(brand.logo)}
                  className={`${styles.logoBtn} ${
                    selectedLogo === brand.logo ? styles.active : ""
                  }`}
                >
                  <span>
                    <Image
                      width={60}
                      height={60}
                      src={brand.logo}
                      alt={brand.title}
                    />
                  </span>
                </button>
              ))}
              <div className={styles.more}>
                <a href="#">More+</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brand Logos */}

      {/* Swiper Slider */}

      <div className={styles.sliderInnerc}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Scrollbar]}
          spaceBetween={20}
          slidesPerView="auto"
          scrollbar={{ draggable: true, el: "#customScrollbar20" }}
          navigation={{ prevEl: "#customPrev20", nextEl: "#customNext20" }}
          slidesOffsetBefore={16}
          slidesOffsetAfter={40}
          breakpoints={{
            0: { spaceBetween: 16, slidesOffsetBefore: 16 },
            768: { spaceBetween: 16, slidesOffsetBefore: 16 },
            992: { spaceBetween: 16 },
            1440: { spaceBetween: 40 },
            1840: { spaceBetween: 40 },
          }}
          className={styles.swiper}
        >
          {caseStudies.map((study) => (
            <SwiperSlide key={study.id} className={styles.customSlide}>
              <CaseStudiesCard study={study} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Custom Nav & Scrollbar */}
              <div className={`${styles.controls} controlsWhite`}>
                <button id="customPrev20" className={styles.navBtn}>
                  <RightArrow width={16} height={16} color="#fff" />
                </button>
                <div
                  id="customScrollbar20"
                  className={`${styles.scrollbar} customScrollbarWhite`}
                ></div>
                <button id="customNext20" className={styles.navBtn}>
                  <LeftArrow width={16} height={16} color="#fff" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
