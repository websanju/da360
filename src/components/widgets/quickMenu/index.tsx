"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

// import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const QuickMenu: React.FC<{ toggleQuickMenu: () => void }> = ({
  toggleQuickMenu,
}) => {
  return (
    <div className={styles.quickMenu}>
      <div className={styles.links}>
        <Link
          href="/about-digital-marketing-learning-structure-bangalore"
          className={styles.linkItem}
          onClick={toggleQuickMenu}
        >
          <h4>About Us</h4>
          <p>Fresh insights, quick reads</p>
        </Link>
        <Link
          href="/career"
          className={styles.linkItem}
          onClick={toggleQuickMenu}
        >
          <h4>Careers</h4>
          <p>Work with us</p>
        </Link>
        <Link
          href="/review-testimonial"
          className={styles.linkItem}
          onClick={toggleQuickMenu}
        >
          <h4>Testimonials</h4>
          <p>Proven success, real voices</p>
        </Link>
        <Link
          href="/refer-and-earn"
          className={styles.linkItem}
          onClick={toggleQuickMenu}
        >
          <h4>Refer & Earn</h4>
          <p>Fresh insights, quick reads</p>
        </Link>
        <Link href="#" className={styles.linkItem} onClick={toggleQuickMenu}>
          <h4>Blogs</h4>
          <p>Fresh insights, quick</p>
        </Link>
        <Link
          href="/contact-us"
          className={styles.linkItem}
          onClick={toggleQuickMenu}
        >
          <h4>Contact Us</h4>
          <p>Fresh insights, quick reads</p>
        </Link>
        {/* <Link
          href="/hire-digital-marketer-fresher-intern"
          className={styles.linkItem}
          onClick={toggleQuickMenu}
        >
          <h4>Hire From Us </h4>
          <p>Fresh insights, quick reads</p>
        </Link> */}
        <Link href="#" className={styles.linkItem} onClick={toggleQuickMenu}>
          <h4>Webinar </h4>
          <p>Fresh insights, quick reads</p>
        </Link>
      </div>

      <div className={styles.bottomButtons}>
        <div className={`${styles.button} ${styles.callButton}`}>
          <Link href="#">
            <div className={styles.phoneIcon}>
              <Image
                src={"/images/icons/phone.svg"}
                alt={"phone"}
                width={18}
                height={18}
              />
            </div>
            <span>Call</span>
          </Link>
        </div>
        <div className={`${styles.button} ${styles.whatsappButton}`}>
          {/* <FaWhatsapp /> */}
          <Link href="#">
            <div className={styles.whatsapp}>
              <Image
                src={"/images/icons/whatsapp.svg"}
                alt={"whatsapp"}
                width={26}
                height={26}
              />
            </div>
            <span>Whatsapp</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickMenu;
