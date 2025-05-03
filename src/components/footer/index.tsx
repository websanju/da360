"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={`${styles.row} row gy-4`}>
            {/* Logo & Social */}
            <div className="col-lg-4 col-md-6">
              <Image
                src="/images/footer-logo.svg"
                alt="Digital Academy 360"
                width={180}
                height={50}
                className="mb-3"
              />
              <div className={styles.followUs}>
                <h6>Follow us</h6>
                <div className="d-flex gap-3 mb-3">
                  {/* Add social media links */}
                  <Link href="#">
                    <i className="bi bi-facebook fs-5"></i>
                  </Link>
                  <Link href="#">
                    <i className="bi bi-twitter fs-5"></i>
                  </Link>
                  <Link href="#">
                    <i className="bi bi-linkedin fs-5"></i>
                  </Link>
                  <Link href="#">
                    <i className="bi bi-instagram fs-5"></i>
                  </Link>
                  <Link href="#">
                    <i className="bi bi-youtube fs-5"></i>
                  </Link>
                </div>
              </div>
              <div className={styles.signUp}>
                <p>
                  Sign Up to get notified about our programs, offers & discounts
                </p>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    aria-label="Email address"
                  />
                  <button className="btn btn-light" type="button">
                    <Image
                      src="/images/right-arrow.svg"
                      alt="Accredited Logo"
                      width={11}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <div className={styles.quickLink}>
                <h6>Quick Links</h6>
                <ul>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      Hire From Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      Our Centers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Programs */}
            <div className="col-lg-4 col-md-6">
              <div className={styles.quickLink}>
                <h6>Our Programs</h6>
                <ul>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      Leadership in Digital Marketing, AI & Entrepreneurship
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      PGCP in Digital Marketing & Social Content Creator
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      Skill Diploma in Digital Marketing & Analytics
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Centers */}
            <div className="col-lg-2 col-md-6">
              <div className={styles.quickLink}>
                <h6>Our Centers</h6>
                <ul>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      Bangalore
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      Jayanagar
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.accredited}>
                <h6>Accredited by</h6>
                <Image
                  src="/images/form-gov-logo-footer-updated.svg"
                  alt="Accredited Logo"
                  width={141}
                  height={73}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Line */}
        <div className={styles.footerBottom}>
          <div className={`${styles.row} row`}>
            <div className="col-lg-6">
              <p>2024 © Digital Academy 360 Pvt. Ltd. All rights reserved.</p>
            </div>
            <div className="col-lg-6 ">
              <div
                className={`${styles.footerLink} d-flex align-items-center justify-content-lg-end`}
              >
                <Link href="#" className=" text-decoration-none">
                  Privacy Policy
                </Link>
                <Link href="#" className=" text-decoration-none">
                  T & C
                </Link>
                <Link href="#" className=" text-decoration-none">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
