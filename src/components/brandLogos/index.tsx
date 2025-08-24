// components/BrandLogos.tsx
import Image from "next/image";
import styles from "./style.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";
const logos = [
  { src: "/images/brand/brand_1.jpg", alt: "Dentsu" },
  { src: "/images/brand/brand_2.jpg", alt: "Valueleaf" },
  { src: "/images/brand/brand_3.jpg", alt: "Jungle Square" },
  { src: "/images/brand/brand_4.jpg", alt: "Google" },
  { src: "/images/brand/brand_5.jpg", alt: "TCS " },
  { src: "/images/brand/brand_6.jpg", alt: "KTM" },
  { src: "/images/brand/brand_7.jpg", alt: "Zoomcar   " },
  { src: "/images/brand/brand_8.jpg", alt: "Philips" },
  { src: "/images/brand/brand_9.jpg", alt: "IBM" },
  { src: "/images/brand/brand_10.jpg", alt: "Replicon" },
  { src: "/images/brand/brand_11.jpg", alt: "AXA" },
  { src: "/images/brand/brand_12.jpg", alt: "AXA" },
  { src: "/images/brand/brand_13.jpg", alt: "Continental" },
  { src: "/images/brand/brand_14.jpg", alt: "Simplilearn" },
  { src: "/images/brand/brand_15.jpg", alt: "Bosch" },
  { src: "/images/brand/brand_16.jpg", alt: "Oracle" },
  { src: "/images/brand/brand_17.jpg", alt: "Unacademy" },
  { src: "/images/brand/brand_18.jpg", alt: "AT&T" },
];
const logosSecond = [
  { src: "/images/brand/brand_19.jpg", alt: "Dentsu" },
  { src: "/images/brand/brand_20.jpg", alt: "Valueleaf" },
  { src: "/images/brand/brand_21.jpg", alt: "Jungle Square" },
  { src: "/images/brand/brand_22.jpg", alt: "Google" },
  { src: "/images/brand/brand_23.jpg", alt: "TCS " },
  { src: "/images/brand/brand_24.jpg", alt: "KTM" },
  { src: "/images/brand/brand_25.jpg", alt: "Zoomcar   " },
  { src: "/images/brand/brand_26.jpg", alt: "Philips" },
  { src: "/images/brand/brand_27.jpg", alt: "IBM" },
  { src: "/images/brand/brand_28.jpg", alt: "Replicon" },
  { src: "/images/brand/brand_29.jpg", alt: "AXA" },
  { src: "/images/brand/brand_30.jpg", alt: "AXA" },
  { src: "/images/brand/brand_31.jpg", alt: "Continental" },
  { src: "/images/brand/brand_32.jpg", alt: "Simplilearn" },
  { src: "/images/brand/brand_33.jpg", alt: "Bosch" },
  { src: "/images/brand/brand_34.jpg", alt: "Oracle" },
  { src: "/images/brand/brand_35.jpg", alt: "Unacademy" },
  { src: "/images/brand/brand_36.jpg", alt: "AT&T" },
];

// Define the prop types
interface BrandLogosProps {
  firstHeading?: string;
  secondHeading?: string;
}

const BrandLogos: React.FC<BrandLogosProps> = ({
  firstHeading = "Our Alumni Work Across",
  secondHeading = "1,000+ Global Giants",
}) => {
  return (
    <section className={styles.brandSection}>
      <div className="container text-center d-flex justify-content-center">
        <SectionHeader
          wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
          maxWidthTitle="900px"
          title={
            <>
              {firstHeading}
              <br />
              {secondHeading}
            </>
          }
        />
      </div>
      {/* Row 1: Right to Left */}
      <div className={styles.slider}>
        <div className={`${styles.slideTrack} ${styles.rightToLeft}`}>
          {[...logos, ...logos].map((logo, index) => (
            <div key={`rtl-${index}`} className={styles.slide}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={190}
                height={90}
                className="img-fluid"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Left to Right */}
      <div className={styles.slider}>
        <div className={`${styles.slideTrack} ${styles.leftToRight}`}>
          {[...logosSecond, ...logosSecond].map((logo, index) => (
            <div key={`ltr-${index}`} className={styles.slide}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={190}
                height={90}
                className="img-fluid"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
