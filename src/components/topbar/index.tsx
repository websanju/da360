"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import Close from "@/components/Ui/svg/close"; // Assuming this is the Close icon component

export default function Topbar() {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };
  return (
    <div className={`${styles.topbar} ${isClosed ? styles.closed : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className={`${styles.topbarInner}`}>
              <div className={styles.news}>
                <label>EXCITING NEWS:</label>
                <div className={styles.newsInner}>
                  <p>
                    Admissions for Batch 2025 are Now Open! Visit our{" "}
                    <Link href="/">Admissions page</Link>
                  </p>
                </div>
              </div>
              <div className={styles.close} onClick={handleClose}>
                <Close />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
