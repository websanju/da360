import styles from "./styles.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

export default function GlobalCommunity() {
  const locations = [
    { top: "35%", left: "20%" }, // US
    { top: "40%", left: "45%" }, // Europe
    { top: "45%", left: "60%" }, // India
    { top: "50%", left: "70%" }, // Southeast Asia
    { top: "55%", left: "85%" }, // Australia
  ];

  return (
    <section className={styles.community}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom="80px"
              title={
                <>
                  Join Our Thriving Global <br />
                  <span>Learning Community</span>
                </>
              }
            />
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.icon + " " + styles.yellow}>
                  <Image
                    width={35}
                    height={35}
                    alt=""
                    src="/images/icons/professionals-trained.svg"
                  />
                </div>
                <h3>450,000+</h3>
                <p>Professionals Trained</p>
              </div>
              <div className={styles.statItem}>
                <div className={styles.icon + " " + styles.green}>
                  <Image
                    width={35}
                    height={35}
                    alt=""
                    src="/images/icons/enterprise-clients.svg"
                  />
                </div>
                <h3>4,500+</h3>
                <p>Enterprise Clients</p>
              </div>
              <div className={styles.statItem}>
                <div className={styles.icon + " " + styles.purple}>
                  <Image
                    width={35}
                    height={35}
                    alt=""
                    src="/images/icons/countries-counting.svg"
                  />
                </div>
                <h3>100+</h3>
                <p>Countries and Counting</p>
              </div>
            </div>
            <div className={styles.mapContainer}>
              <Image
                src="/images/global-map.svg"
                width={1176}
                height={516}
                alt="World Map"
              />
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className={styles.blinkDot}
                  style={{ top: loc.top, left: loc.left }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
