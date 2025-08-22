"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { Inter } from "next/font/google";

// Font configuration for Sora
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // This will create the CSS variable
});

const Footer = () => {
  return (
    <footer className={`${styles.footerSection} ${inter.variable}`}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={`${styles.row} row gy-4`}>
            {/* Logo & Social */}
            <div className="col-lg-4 col-md-4">
              <div className={styles.accredited}>
                <h6>Accredited by</h6>
                <div className={styles.accreditedImg}>
                  <div>
                    <Image
                      src="/images/footer-skill.svg"
                      alt="Skill India"
                      width={61}
                      height={61}
                      className="mb-lg-3"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/mesc.svg"
                      alt="Mesc"
                      width={61}
                      height={61}
                      className="mb-lg-3"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.footerContact}>
                <h6>Contact Us for any query</h6>
                <div className={styles.footerContactLink}>
                  <Link
                    href="tel:+917353515515"
                    className="text-decoration-none"
                  >
                    +91 7353 515 515
                  </Link>

                  <Link
                    href="mailto:info@digitalacademy360.com"
                    className="text-decoration-none"
                  >
                    info@digitalacademy360.com
                  </Link>
                </div>
              </div>
              {/* <div className={styles.footerLogo}>
                <Image
                  src="/images/footer-logo.svg"
                  alt="Digital Academy 360"
                  width={180}
                  height={50}
                  className="mb-lg-3"
                />
              </div> */}

              {/* <div className={styles.signUp}>
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
              </div> */}
            </div>
            <div className="col-lg-8 col-md-8">
              <div className={`${styles.quickrow} row`}>
                {/* Quick Links */}
                <div className={`${styles.quickLinkRow} col-lg-5 col-md-6`}>
                  <div className={styles.quickLink}>
                    <h6>Digital Marketing Programmes</h6>
                    <ul>
                      <li>
                        <Link
                          href="/master-digital-marketing-leadership-course"
                          className="text-white text-decoration-none"
                        >
                          Leadership in Digital Marketing, AI & Entrepreneurship
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/social-content-creator-and-video-production"
                          className="text-white text-decoration-none"
                        >
                          Leadership in Social Content Creator & Video
                          Production
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/digital-marketing-training-institute"
                          className="text-white text-decoration-none"
                        >
                          PGCP in Digital Marketing, E‑Comm & AI
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/performance-marketing-and-media-buying"
                          className="text-white text-decoration-none"
                        >
                          PGCP in Performance Marketing & Media Buying
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ai-vibe-marketing"
                          className="text-white text-decoration-none"
                        >
                          AI Vibe Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/youtube-and-instagram-and-influencer"
                          className="text-white text-decoration-none"
                        >
                          Youtube & Instagram Influencer
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/performance-marketing-and-martech"
                          className="text-white text-decoration-none"
                        >
                          Performance Marketing & MarTech
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Programs */}
                <div className="col-lg-2 col-md-3">
                  <div className={styles.quickLink}>
                    <h6>Company</h6>
                    <ul>
                      <li>
                        <Link
                          href="/about-us"
                          className="text-white text-decoration-none"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact-us"
                          className="text-white text-decoration-none"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/refer-and-earn"
                          className="text-white text-decoration-none"
                        >
                          Refer & Earn
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Centers */}
                <div className="col-lg-2 col-md-3">
                  <div className={styles.quickLink}>
                    <h6>Resources</h6>
                    <ul>
                      <li>
                        <Link
                          href="https://blog.digitalacademy360.com/"
                          className="text-white text-decoration-none"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-white text-decoration-none"
                        >
                          Case Studies
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-white text-decoration-none"
                        >
                          Presentations
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Centers */}
                <div className="col-lg-2 col-md-3">
                  <div className={styles.quickLink}>
                    <h6>Career</h6>
                    <ul>
                      <li>
                        <Link
                          href="/hire-from-da360"
                          className="text-white text-decoration-none"
                        >
                          Hire From Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/career"
                          className="text-white text-decoration-none"
                        >
                          Work With Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Marketing Courses Across The World */}
        <div className={styles.footerMarketingCourses}>
          <div className={`${styles.row} row`}>
            <div className="col-lg-12">
              <h6>Digital Marketing Courses in India</h6>
              <p>
                Digital Marketing Courses In Mumbai | Digital Marketing Courses
                In Nepal | Digital Marketing Courses In Dubai | Digital
                Marketing Courses In Bangalore | Digital Marketing Courses In
                Pune |Digital Marketing Courses In Hyderabad | Digital Marketing
                Courses In Kolkata | Digital Marketing Courses In Jaipur |
                Digital Marketing Courses In Ahmedabad | Best Digital Marketing
                Courses | Digital Marketing Courses In Chandigarh | Digital
                Marketing Courses In Chennai | Digital Marketing Courses In
                Kochi | Digital Marketing Courses In Lucknow | Digital Marketing
                Courses In Surat | Digital Marketing Courses In Indore | Digital
                Marketing Courses In Nagpur | Digital Marketing Courses In
                Coimbatore | Digital Marketing Courses In Noida | Digital
                Marketing Courses In Gurgaon | Digital Marketing Courses In
                Dehradun | Digital Marketing Courses In Thrissur | Digital
                Marketing Courses In Faridabad | Digital Marketing Courses In
                Patna |Digital Marketing Courses In Thane |  Digital Marketing
                Courses In Nashik | Digital Marketing Courses In
                Udaipur |Digital Marketing Courses Navi Mumbai | Digital
                Marketing Courses In Ghaziabad | Digital Marketing Courses In
                South Delhi | Digital Marketing Courses In Dadar | Digital
                Marketing Courses In Andheri | Digital Marketing Courses In
                Meerut | Digital Marketing Courses In Borivali | Digital
                Marketing Courses In Vashi | Digital Marketing Courses In Kalyan
                | Digital Marketing Courses In Panvel | Digital Marketing
                Courses In Mulund | Digital Marketing Courses In Virar | Digital
                Marketing Courses In Bandra | Digital Marketing Courses In
                Rohini | Digital Marketing Courses In Kozhikode
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className={styles.footerBottom}>
          <div className={`${styles.row} row`}>
            <div className="col-lg-9">
              <div className={styles.footerCopyright}>
                <p>
                  Copyright © 2025 Digital Academy 360. All rights reserved.
                </p>
                <div
                  className={`${styles.footerCopyrightLink} d-flex align-items-center justify-content-lg-end`}
                >
                  <Link href={"#"}>Privacy Policy</Link>
                  <Link href={"#"}>Term of Use</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
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
                    src="/images/social/twitter.svg"
                    alt="facebook"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link href="#" className=" text-decoration-none">
                  <Image
                    src="/images/social/instagram.svg"
                    alt="instagram"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link href="#" className=" text-decoration-none">
                  <Image
                    src="/images/social/linkedin.svg"
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
