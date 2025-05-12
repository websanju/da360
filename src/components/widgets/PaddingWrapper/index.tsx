"use client";
import { useEffect, useState, ReactNode } from "react";

type PaddingWrapperProps = {
  children: ReactNode;
  mobilePaddingTop?: string;
  mobilePaddingBottom?: string;
  desktopPaddingTop?: string;
  desktopPaddingBottom?: string;
};

const PaddingWrapper: React.FC<PaddingWrapperProps> = ({
  children,
  mobilePaddingTop,
  mobilePaddingBottom,
  desktopPaddingTop,
  desktopPaddingBottom,
}) => {
  const [paddingStyles, setPaddingStyles] = useState({
    paddingTop: mobilePaddingTop || "0", // No default, fallback to '0' if not specified
    paddingBottom: mobilePaddingBottom || "0", // No default, fallback to '0' if not specified
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setPaddingStyles({
          paddingTop: desktopPaddingTop || mobilePaddingTop || "0", // Use desktop padding or fall back to mobile
          paddingBottom: desktopPaddingBottom || mobilePaddingBottom || "0", // Use desktop padding or fall back to mobile
        });
      } else {
        setPaddingStyles({
          paddingTop: mobilePaddingTop || "0", // Use mobile padding or '0' if not specified
          paddingBottom: mobilePaddingBottom || "0", // Use mobile padding or '0' if not specified
        });
      }
    };

    handleResize(); // Run on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [
    mobilePaddingTop,
    mobilePaddingBottom,
    desktopPaddingTop,
    desktopPaddingBottom,
  ]);

  const style = {
    paddingTop: paddingStyles.paddingTop,
    paddingBottom: paddingStyles.paddingBottom,
  };

  return <div style={style}>{children}</div>;
};

export default PaddingWrapper;
