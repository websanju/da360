import Image from "next/image";
import styles from "./style.module.scss";

interface DynamicImageBannerProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const ImageBanner: React.FC<DynamicImageBannerProps> = ({
  src,
  alt = "",
  width = 1440,
  height = 720,
  className = "img-fluid",
}) => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutImg}>
        <Image
          width={width}
          height={height}
          src={src}
          alt={alt}
          className={className}
        />
      </div>
    </section>
  );
};

export default ImageBanner;
