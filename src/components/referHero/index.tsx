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
                Refer and Earn Amazing <br /> Cashback & Rewards
              </h1>
              <p>
                Help a friend upskill and enhance their knowledge to a better
                career.
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
