"use client";

import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

const LearnerEnquiry = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const stylescss = {
    backgroundImage: isMobile
      ? "url('/images/learnerEnquiresMobile.svg')"
      : "url('/images/learnerEnquires.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundSize: "cover",
  };

  return (
    <section className={styles.learnerSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.enquiryBox} style={stylescss}>
              <SectionHeader
                wrapperMarginBottom={{ desktop: "37px", mobile: "30px" }}
                titleMarginBottom={{ desktop: "20px", mobile: "10px" }}
                title={<>DA360 Learner enquires</>}
                titleColor="#fff"
                descriptionColor="#fff"
                maxWidth="650px"
                description="Talk to your experts. We’re available 24/7"
              />
              <div className={`${styles.row} row justify-content-center`}>
                <div className="col-12 col-md-6">
                  <div className={styles.phoneCard}>
                    <small className="d-block">For India Learners</small>
                    <h5>
                      <Image
                        src={"/images/icons/phon.svg"}
                        alt={"phone"}
                        width={15}
                        height={17}
                      />
                      +91 6360 006 736
                    </h5>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className={styles.phoneCard}>
                    <small className="d-block">
                      For International Learners
                    </small>
                    <h5>
                      <Image
                        src={"/images/icons/phon.svg"}
                        alt={"phone"}
                        width={15}
                        height={17}
                      />
                      +91 7353 515 515
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnerEnquiry;
