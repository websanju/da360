import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface SectionHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  wrapperMarginBottom?: string;
  titleMarginBottom?: string;
}

export default function SectionHeader({
  title,
  description,
  wrapperMarginBottom = "0",
  titleMarginBottom = "0",
}: SectionHeaderProps) {
  return (
    <div
      className={styles.header}
      style={{ marginBottom: wrapperMarginBottom }}
    >
      <h2 style={{ marginBottom: titleMarginBottom }}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
