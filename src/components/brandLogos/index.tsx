// components/BrandLogos.tsx
import Image from "next/image";
import styles from "./style.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";
const logos = [
  { src: "/images/brand/brand-1.png", alt: "Dentsu" },
  { src: "/images/brand/brand-2.png", alt: "Valueleaf" },
  { src: "/images/brand/brand-3.png", alt: "Jungle Square" },
  { src: "/images/brand/brand-4.png", alt: "Google" },
  { src: "/images/brand/brand-5.png", alt: "TCS " },
  { src: "/images/brand/brand-6.png", alt: "KTM" },
  { src: "/images/brand/brand-7.png", alt: "Zoomcar   " },
  { src: "/images/brand/brand-8.png", alt: "Philips" },
  { src: "/images/brand/brand-9.png", alt: "IBM" },
  { src: "/images/brand/brand-10.png", alt: "Replicon" },
  { src: "/images/brand/brand-11.png", alt: "AXA" },
  { src: "/images/brand/brand-12.png", alt: "AXA" },
  { src: "/images/brand/brand-13.png", alt: "Continental" },
  { src: "/images/brand/brand-14.png", alt: "Simplilearn" },
  { src: "/images/brand/brand-15.png", alt: "Bosch" },
  { src: "/images/brand/brand-16.png", alt: "Oracle" },
  { src: "/images/brand/brand-17.png", alt: "Unacademy" },
  { src: "/images/brand/brand-18.png", alt: "AT&T" },
  { src: "/images/brand/brand-19.png", alt: "Uplers" },
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
          {[...logos, ...logos].map((logo, index) => (
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
