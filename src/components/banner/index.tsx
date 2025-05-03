// components/Banner.tsx
"use client";
import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

export default function Banner() {
  return (
    <div className={styles.bannerSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className={styles.imageWrapper}>
              <div className={styles.bannerWrapper}>
                <Image
                  src="/images/banner.png"
                  alt="Left Banner"
                  width={1280}
                  height={600}
                  className="img-fluid"
                  priority
                />
              </div>
              <div className={styles.bannerMobile}>
                <Image
                  src="/images/mobile_banner.png"
                  alt="Left Banner"
                  width={363}
                  height={679}
                  className="img-fluid"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
