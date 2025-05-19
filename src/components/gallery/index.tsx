import Image from "next/image";
import styles from "./style.module.scss";

const images = [
  {
    src: "/images/gallery/gallery1.jpg",
    alt: "Gallery Image 1",
    size: "small",
  },
  {
    src: "/images/gallery/gallery2.jpg",
    alt: "Gallery Image 2",
    size: "small",
  },
  {
    src: "/images/gallery/gallery3.jpg",
    alt: "Gallery Image 3",
    size: "large",
  },
  {
    src: "/images/gallery/gallery4.jpg",
    alt: "Gallery Image 4",
    size: "small",
  },
  {
    src: "/images/gallery/gallery5.jpg",
    alt: "Gallery Image 5",
    size: "small",
  },
  {
    src: "/images/gallery/gallery6.jpg",
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
            <div className={styles.sectionHeader}>
              <h2>#LifeAtDA360 Gallery</h2>
            </div>
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
