"use client";

import React, { ReactNode, useEffect } from "react";
import styles from "./popup.module.scss";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  width?: string;
};

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children, width }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    if (isOpen) {
      // Lock scrollbars
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      // Prevent wheel and touch scroll
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });

      // Escape key
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      // Unlock scrollbars
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      // Remove listeners
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.popup}
        style={{ width: width || "800px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Popup;
