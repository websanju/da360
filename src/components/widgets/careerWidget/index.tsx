import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

type Variant = "red" | "yellow";
type VariantColor = "blackColor" | "whiteColor";

interface CareerWidgetProps {
  variant?: Variant;
  variantColor?: VariantColor;
  title: string;
  description: string;
  buttonText: string;
}

const CareerWidget: React.FC<CareerWidgetProps> = ({
  variant = "red",
  variantColor = "whiteColor",
  title,
  description,
  buttonText,
}) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <div className={`${styles.left} ${styles[variantColor]}`}>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{description}</p>
        <Link
          href={"/career-jobs"}
          className={styles.button}
          aria-label={buttonText}
        >
          {buttonText}
        </Link>
      </div>
      <div className={styles.right}>
        <Image
          src="/images/talent-search.svg"
          alt="Magnify user icon"
          width={160}
          height={160}
        />
      </div>
    </div>
  );
};

export default CareerWidget;
