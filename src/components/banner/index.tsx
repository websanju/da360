// components/Banner.tsx
"use client";
import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { usePopup } from "@components/widgets/popup/PopupContext";
import ApplyForm from "../widgets/popups/ApplyForm";

interface BannerProps {
  desktopSrc: string;
  mobileSrc: string;
  alt?: string;
  desktopWidth?: number;
  desktopHeight?: number;
  mobileWidth?: number;
  mobileHeight?: number;
  priority?: boolean;
}

export default function Banner({
  desktopSrc,
  mobileSrc,
  alt = "Banner",
  desktopWidth = 1280,
  desktopHeight = 600,
  mobileWidth = 363,
  mobileHeight = 679,
  priority = false,
}: BannerProps) {
  const { openPopup } = usePopup();
  return (
    <div className={styles.bannerSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className={styles.imageWrapper}>
              {/* Desktop Banner */}
              <div
                className={styles.bannerWrapper}
                onClick={() =>
                  openPopup(<ApplyForm title=" Apply For Sholarship" />, {
                    title: `"Apply For Sholarship"`,
                  })
                }
              >
                <Image
                  src={`${desktopSrc}`}
                  alt={alt}
                  width={desktopWidth}
                  height={desktopHeight}
                  className="img-fluid"
                  priority={priority}
                />
              </div>

              {/* Mobile Banner */}
              <div
                className={styles.bannerMobile}
                onClick={() =>
                  openPopup(<ApplyForm title=" Book Campus Visit" />, {
                    title: `"Book Campus Visit"`,
                  })
                }
              >
                <Image
                  src={`${mobileSrc}`}
                  alt={alt}
                  width={mobileWidth}
                  height={mobileHeight}
                  className="img-fluid"
                  priority={priority}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
