"use client";
import { ReactNode, useEffect, useState } from "react";
import styles from "./styles.module.scss";

type MarginValue = string | { desktop: string; mobile: string };

interface SectionHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  wrapperMarginBottom?: MarginValue;
  titleMarginBottom?: MarginValue;
}

function useResponsiveMargin(margin?: MarginValue): string {
  const [value, setValue] = useState("0");

  useEffect(() => {
    const updateMargin = () => {
      const isMobile = window.innerWidth <= 767;
      if (typeof margin === "string") {
        setValue(margin);
      } else if (margin) {
        setValue(isMobile ? margin.mobile : margin.desktop);
      }
    };

    updateMargin();
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, [margin]);

  return value;
}

export default function SectionHeader({
  title,
  description,
  wrapperMarginBottom = "0",
  titleMarginBottom = "0",
}: SectionHeaderProps) {
  const wrapperMargin = useResponsiveMargin(wrapperMarginBottom);
  const titleMargin = useResponsiveMargin(titleMarginBottom);

  return (
    <div className={styles.header} style={{ marginBottom: wrapperMargin }}>
      <h2 style={{ marginBottom: titleMargin }}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
