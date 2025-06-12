import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";
interface CohortDetailsProps {
  section?: string;
}
const RewardGrid = ({ section }: CohortDetailsProps) => {
  return (
    <section className={styles.rewardGridSection} id={section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.rewardGridBox}>
              <SectionHeader
                wrapperMarginBottom={{ desktop: "40px", mobile: "40px" }}
                titleMarginBottom={{ desktop: "20px", mobile: "10px" }}
                title={<>Get Rewarded</>}
                maxWidth="450px"
                titleColor="#fff"
                descriptionColor="#fff"
                description="Earn slam coins at the end of every epic and exchange them for
                  lucrative rewards"
              />

              <div>
                <div className={`${styles.gridWapper} ${styles.desktopblock}`}>
                  <div className={styles.item1}>
                    <Image
                      width={414}
                      height={228}
                      src="/images/getRewarded/bluethooth.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.item2}>
                    <Image
                      width={268}
                      height={228}
                      src="/images/getRewarded/amazon.png"
                      alt=""
                    />
                  </div>
                  <div
                    className={styles.item3}
                    style={{ backgroundColor: " #ff3648s" }}
                  >
                    <Image
                      width={229}
                      height={535}
                      src="/images/getRewarded/nikeshoe.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.item4}>
                    <Image
                      width={229}
                      height={535}
                      src="/images/getRewarded/make-my-trip.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.item5}>
                    <Image
                      width={273}
                      height={290}
                      src="/images/getRewarded/movieTickets.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.item6}>
                    <Image
                      width={411}
                      height={290}
                      src="/images/getRewarded/instamax6.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* Last row stays same */}
                <div className={`${styles.lastRow} ${styles.desktopblock}`}>
                  <div>
                    <Image
                      width={252}
                      height={191}
                      src="/images/getRewarded/playstation.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <Image
                      width={252}
                      height={191}
                      src="/images/getRewarded/sonyAlpha.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <Image
                      width={287}
                      height={191}
                      src="/images/getRewarded/spotify.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <Image
                      width={350}
                      height={191}
                      src="/images/getRewarded/lunchcoupo.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className={`${styles.gridWapper} ${styles.mobileblock} `}>
                  <div className={styles.item1}>
                    <Image
                      width={151}
                      height={100}
                      src="/images/getRewarded/bluethooth_mobile.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.item1}>
                    <Image
                      width={151}
                      height={100}
                      src="/images/getRewarded/amazon_mobile.png"
                      alt=""
                    />
                  </div>
                  <div
                    className={styles.item1}
                    style={{ backgroundColor: " #ff3648s" }}
                  >
                    <Image
                      width={151}
                      height={100}
                      src="/images/getRewarded/nikeshoe_mobile.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.item1}>
                    <Image
                      width={151}
                      height={100}
                      src="/images/getRewarded/make-my-trip_mobile.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.item1}>
                    <Image
                      width={151}
                      height={100}
                      src="/images/getRewarded/movieTickets_mobile.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.item1}>
                    <Image
                      width={151}
                      height={100}
                      src="/images/getRewarded/instamax6_mobile.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.item1}>
                    <Image
                      width={252}
                      height={191}
                      src="/images/getRewarded/playstation.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.item1}>
                    <Image
                      width={252}
                      height={191}
                      src="/images/getRewarded/sonyAlpha.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.item1}>
                    <Image
                      width={287}
                      height={191}
                      src="/images/getRewarded/spotify.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.item1}>
                    <Image
                      width={350}
                      height={191}
                      src="/images/getRewarded/lunchcoupo.png"
                      alt=""
                    />
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

export default RewardGrid;
