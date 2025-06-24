import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const ReferHero = () => {
  return (
    <section className={styles.referHeroSection}>
      <div className={`container`}>
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.headerSection}>
              <h1>
                Become a DA360 Learning Ambassador
                <br /> Refer & Earn Exclusive Cashback and Rewards!
              </h1>
              <p>
                Inspire your friends, family, or colleagues to upskill with
                Digital Academy 360 — and get rewarded while helping them build
                brighter careers!
              </p>
            </div>
            <div className={styles.headerImges}>
              <Image
                src={`/images/refer-and-earn.svg`}
                alt="logo"
                height={774}
                width={735}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferHero;
