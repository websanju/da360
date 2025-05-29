import styles from "./styles.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

export default function GlobalCommunity() {
  type Location = {
    top: string;
    left: string;
    count: string;
    label: string;
    image: string;
    delay?: string; // Optional delay
  };

  const locations: Location[] = [
    {
      top: "5%",
      left: "20%",
      count: "30,161",
      label: "Learners",
      image: "/images/learnes-img.png",
    },
    {
      top: "5%",
      left: "45%",
      count: "24,783",
      label: "Learners",
      image: "/images/learnes-img.png",
      delay: "5s",
    },
    {
      top: "45%",
      left: "60%",
      count: "52,001",
      label: "Learners",
      image: "/images/learnes-img.png",
    },
    {
      top: "50%",
      left: "75%",
      count: "12,502",
      label: "Learners",
      image: "/images/learnes-img.png",
      delay: "5s",
    },
    {
      top: "15%",
      left: "75%",
      count: "7,990",
      label: "Learners",
      image: "/images/learnes-img.png",
    },
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
                  className={styles.blinkDotWrapper}
                  style={{
                    top: loc.top,
                    left: loc.left,
                    animationDelay: loc.delay || `${index * 0.2}s`, // fallback if delay not set
                  }}
                >
                  <div>
                    <div className={styles.dotDetails}>
                      <div className={styles.dotIcon}>
                        <Image
                          src={loc.image}
                          alt="Profile"
                          width={24}
                          height={24}
                          className={styles.avatar}
                        />
                      </div>
                      <div className={styles.dotName}>
                        <h4>{loc.count}</h4>
                        <p>{loc.label}</p>
                      </div>
                    </div>
                    <div className={styles.blinkDot} />{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
