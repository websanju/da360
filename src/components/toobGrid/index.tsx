// components/TOOBGrid.tsx
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

const TOOBGrid = () => {
  return (
    <section className={styles.toobSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.headerSection}>
              <h2>#TOOB</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>

            {/* <div className={styles.grid}>
              <div className={styles.colume}>
                <div className={`${styles.item} ${styles.green}`}>
                  Digital Marketing Quiz League
                </div>
                <div className={`${styles.item} ${styles.purple}`}>
                  Digital Marketing Quiz League
                </div>
              </div>
              <div className={styles.colume}>
                <div className={styles.row}>
                  <div className={styles.colume}>
                    <div className={styles.row}>
                      <div className={`${styles.item} ${styles.pink}`}>
                        Digital Marketing Quiz League
                      </div>
                      <div className={`${styles.item} ${styles.orange}`}>
                        Digital Marketing Quiz League
                      </div>
                    </div>
                    <div className={`${styles.item} ${styles.blue}`}></div>
                  </div>
                  <div className={styles.colume}>
                    <div className={`${styles.item} ${styles.imageCard}`}>
                      Pitch & Promote
                    </div>
                    <div className={`${styles.item} ${styles.lime}`}>
                      Tool of the Day
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.item} ${styles.yellow}`}>
                    Digital Marketing Quiz League
                  </div>
                  <div className={`${styles.item} ${styles.brown}`}>
                    Digital Marketing Quiz League
                  </div>
                </div>
              </div>
            </div> */}
            <div className={styles.grid}>
              <div className={`${styles.item} ${styles.green}`}>
                <div className={styles.itemImg}>
                  <Image
                    width={91}
                    height={91}
                    src="/images/digital-marketing-quiz.svg"
                    alt="guest"
                  />
                </div>
                <div className={styles.itemContent}>
                  <h3> Digital Marketing Quiz League</h3>
                </div>
                <Link href={"#"} className={styles.itemIcon}>
                  <Image
                    width={20}
                    height={20}
                    src="/images/icons/gird-right-icon.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className={`${styles.item} ${styles.purple}`}>
                <div className={styles.itemContent}>
                  <h3>
                    Guest <br /> Guru Series
                  </h3>
                </div>
                <div className={styles.itemImg}>
                  <Image
                    width={127}
                    height={133}
                    src="/images/guest-series.svg"
                    alt="guest"
                  />
                </div>
                <Link href={"#"} className={styles.itemIcon}>
                  <Image
                    width={20}
                    height={20}
                    src="/images/icons/gird-right-icon.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className={`${styles.item} ${styles.pink}`}>
                <div className={styles.itemImg}>
                  <Image
                    width={311}
                    height={106}
                    src="/images/echo.png"
                    alt="guest"
                  />
                </div>
                <div className={styles.itemContent}>
                  <h3>Escape Room</h3>
                  <p>The Analytics Edition</p>
                </div>
                <Link href={"#"} className={styles.itemIcon}>
                  <Image
                    width={20}
                    height={20}
                    src="/images/icons/gird-right-icon.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className={`${styles.item} ${styles.orange}`}>
                <div className={styles.itemImg}>
                  <Image
                    width={92}
                    height={92}
                    src="/images/viral-marketing.svg"
                    alt="marketing"
                  />
                </div>
                <div className={styles.itemContent}>
                  <h3>
                    Viral <br /> Marketing <br /> Lab
                  </h3>
                </div>
                <Link href={"#"} className={styles.itemIcon}>
                  <Image
                    width={20}
                    height={20}
                    src="/images/icons/gird-right-icon.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className={`${styles.item} ${styles.blue}`}>
                <div className={styles.itemContent}>
                  <h3>Reel Talk</h3>
                  <p>Personal Branding Day</p>
                </div>
                <div className={styles.itemImg}>
                  <Image
                    width={107}
                    height={154}
                    src="/images/mobile-reeltalk.png"
                    alt="marketing"
                    className={styles.mitemImg}
                  />
                  <Image
                    width={654}
                    height={411}
                    src="/images/reel-talk.png"
                    alt="marketing"
                    className={styles.ditemImg}
                  />
                </div>
                <Link href={"#"} className={styles.itemIcon}>
                  <Image
                    width={20}
                    height={20}
                    src="/images/icons/gird-right-icon.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className={`${styles.item} ${styles.imageCard}`}>
                <div className={styles.itemImg}>
                  <Image
                    width={293}
                    height={489}
                    src="/images/pitch-promote.png"
                    alt="pitch-promote"
                  />
                </div>
                <div className={styles.itemContent}>
                  <h3> Pitch & Promote</h3>
                </div>
              </div>
              <div className={`${styles.item} ${styles.lime}`}>
                <div className={styles.itemContent}>
                  <h3> Tool of the Day</h3>
                </div>
                <div className={styles.itemImg}>
                  <Image
                    width={50}
                    height={50}
                    src="/images/tool-of-the-day.svg"
                    alt="pitch-promote"
                  />
                </div>
              </div>
              <div className={`${styles.item} ${styles.yellow}`}>
                <div className={styles.itemContent}>
                  <h3>YouTube Shorts Sprint</h3>
                </div>
                <div className={styles.itemImg}>
                  <Image
                    width={80}
                    height={57}
                    src="/images/youtube.svg"
                    alt="pitch-promote"
                  />
                </div>
                <Link href={"#"} className={styles.itemIcon}>
                  <Image
                    width={20}
                    height={20}
                    src="/images/icons/gird-right-icon.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className={`${styles.item} ${styles.brown}`}>
                <div className={styles.itemContent}>
                  <h3>Podcast Jam</h3>
                  <p>Digital Storytelling & Audio Content</p>
                </div>
                <Link href={"#"} className={styles.itemIcon}>
                  <Image
                    width={20}
                    height={20}
                    src="/images/icons/gird-right-icon.svg"
                    alt=""
                  />
                </Link>
                <div className={styles.itemImg}>
                  <Image
                    width={127}
                    height={127}
                    src="/images/postcast.svg"
                    alt="postcast"
                  />
                </div>
              </div>
              <div className={styles.viewAll}>
                <Link href={"#"}>View All</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TOOBGrid;
