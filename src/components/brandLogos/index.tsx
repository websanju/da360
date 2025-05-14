// components/BrandLogos.tsx
import Image from "next/image";
import styles from "./style.module.scss";

const logos = [
  { src: "/images/brand/amazon.png", alt: "Amazon" },
  { src: "/images/brand/reddit.png", alt: "Reddit" },
  { src: "/images/brand/flipkart.png", alt: "Flipkart" },
  { src: "/images/brand/swiggy.png", alt: "Swiggy" },
  { src: "/images/brand/develup.png", alt: "DevelUp" },
  { src: "/images/brand/adobe.png", alt: "Adobe" },
  { src: "/images/brand/zerozilla.png", alt: "Zerozilla" },
  { src: "/images/brand/zomato.png", alt: "Zomato" },
  { src: "/images/brand/yahoo.png", alt: "Yahoo" },
  { src: "/images/brand/upgrad.png", alt: "UpGrad" },
];

export default function BrandLogos() {
  return (
    <section className={styles.brandSection}>
      <div className="container text-center d-flex justify-content-center">
        <h2>
          Our Learners Working <br />
          In 1,000+ Global Brands
        </h2>
      </div>
      {/* Row 1: Right to Left */}
      <div className={styles.slider}>
        <div className={`${styles.slideTrack} ${styles.rightToLeft}`}>
          {[...logos, ...logos].map((logo, index) => (
            <div key={`rtl-${index}`} className={styles.slide}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={210}
                height={100}
                className="img-fluid"
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
                width={210}
                height={100}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
