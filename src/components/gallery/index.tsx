import Image from "next/image";
import styles from "./style.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";
const images = [
  {
    src: "/images/aboutus-gallery/1-min.jpg",
    alt: "Gallery Image 1",
    size: "small",
  },
  {
    src: "/images/aboutus-gallery/2-min.jpg",
    alt: "Gallery Image 2",
    size: "small",
  },
  {
    src: "/images/aboutus-gallery/3-min.jpg",
    alt: "Gallery Image 3",
    size: "large",
  },
  {
    src: "/images/aboutus-gallery/4-min.jpg",
    alt: "Gallery Image 4",
    size: "small",
  },
  {
    src: "/images/aboutus-gallery/5-min.jpg",
    alt: "Gallery Image 5",
    size: "small",
  },
  {
    src: "/images/aboutus-gallery/6-min.jpg",
    alt: "Gallery Image 6",
    size: "large",
  },
];

const GalleryComponent: React.FC = () => {
  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              title={<>#LifeAtDA360 Gallery</>}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.grid}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${styles.gridItem} ${
                    image.size === "large" ? styles.large : styles.small
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    unoptimized
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryComponent;
