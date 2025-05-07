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
              <div className={styles.footerLogo}>
                <Image
                  src="/images/footer-logo.svg"
                  alt="Digital Academy 360"
                  width={180}
                  height={50}
                  className="mb-lg-3"
                />
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
                      PG Programme in Digital Marketing with AI
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      PG Programme in UI/UX & Design Thinking
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      PG Programme in Full Stack Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      Skill Diploma in Digital Marketing Program
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      Skill Diploma in UI/UX & Design Thinking
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white text-decoration-none">
                      Skill Diploma in Content Writing
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
              <p>© 2025 Digitalacademy360 Inc. All rights reserved.</p>
            </div>
            <div className="col-lg-6 ">
              <div
                className={`${styles.footerLink} d-flex align-items-center justify-content-lg-end`}
              >
                <Link href="#" className=" text-decoration-none">
                  <Image
                    src="/images/fb.svg"
                    alt="facebook"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link href="#" className=" text-decoration-none">
                  <Image
                    src="/images/twitter.svg"
                    alt="facebook"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link href="#" className=" text-decoration-none">
                  <Image
                    src="/images/instagram.svg"
                    alt="instagram"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link href="#" className=" text-decoration-none">
                  <Image
                    src="/images/linkedin.svg"
                    alt="instagram"
                    width={28}
                    height={28}
                  />
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
