// components/MobileMenu.tsx
"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./style.module.scss";

type Props = {
  onClose: () => void;
};

const MobileMenu: React.FC<Props> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // match animation duration
  };

  return (
    <div
      className={`${styles.mobileMenu} ${
        isClosing ? styles.slideOut : styles.slideIn
      }`}
    >
      <button className={styles.closeBtn} onClick={handleClose}>
        <Image
          src="/images/icons/close.svg"
          alt="logo"
          width={14}
          height={14}
        />
      </button>
      <ul>
        <li>
          <Link href="/life-campus-digital-academy360" onClick={handleClose}>
            Life@DA360
          </Link>
        </li>
        <li>
          <Link href="/digital-marketing-trainers-da360" onClick={handleClose}>
            Trainers
          </Link>
        </li>
        {/* <li>
          <Link href="/hackathon" onClick={handleClose}>
            Hackaton
          </Link>
        </li> */}
        <li>
          <Link
            href="/hire-digital-marketer-fresher-intern"
            onClick={handleClose}
          >
            Hire From Us
          </Link>
        </li>
        <li>
          <Link href="/placements" onClick={handleClose}>
            Placements
          </Link>
        </li>
        <li>
          <Link
            href="/about-digital-marketing-learning-structure-bangalore"
            onClick={handleClose}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link href="/testimonial" onClick={handleClose}>
            Testimonial
          </Link>
        </li>
        <li>
          <Link href="/career" onClick={handleClose}>
            Careers
          </Link>
        </li>
        <li>
          <Link href="/refer-and-earn" onClick={handleClose}>
            Refer & Earn
          </Link>
        </li>
        <li>
          <Link href="/blogs" onClick={handleClose}>
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/contact-us" onClick={handleClose}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/webinars" onClick={handleClose}>
            Webinars
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
