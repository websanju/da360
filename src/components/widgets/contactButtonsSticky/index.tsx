"use client";
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePopup } from "@components/widgets/popup/PopupContext";
import ApplyForm from "@components/widgets/popups/ApplyForm";

const ContactButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { openPopup } = usePopup();
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`${styles.contactContainer} ${
          isVisible ? styles.show : styles.hide
        }`}
      >
        <div className={styles.contactButtons}>
          <button
            className={styles.applyButton}
            onClick={() => openPopup(<ApplyForm />, "Apply Now")}
          >
            Apply Now
          </button>
          <div className={styles.iconWrapper}>
            <div className={styles.phoneIcon} id="call">
              <Link href="#">
                <Image
                  src={"/images/icons/phone.svg"}
                  alt={"phone"}
                  width={18}
                  height={18}
                />
              </Link>
            </div>
            <div className={styles.whatsappIcon} id="whatsapp">
              <Link href="#">
                <Image
                  src={"/images/icons/whatsapp.svg"}
                  alt={"whatsapp"}
                  width={26}
                  height={26}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactButtons;
