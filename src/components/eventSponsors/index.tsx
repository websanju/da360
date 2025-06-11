import styles from "./styles.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

const sponsors = [
  { name: "Amazon", src: "/images/amazon.png" },
  { name: "Reddit", src: "/images/reddit.png" },
  { name: "Flipkart", src: "/images/flipkart.png" },
  { name: "Swiggy", src: "/images/swiggy.png" },
  { name: "DevelUp", src: "/images/develup.png" },
  { name: "Adobe", src: "/images/adobe.png" },
  { name: "Zerozilla", src: "/images/zerozilla.png" },
  { name: "Zomato", src: "/images/zomato.png" },
  { name: "Yahoo", src: "/images/yahoo.png" },
  { name: "UpGrad", src: "/images/upgrad.png" },
];
const EventSponsors = () => {
  return (
    <section className={styles.sponsorsSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              title={"Event Sponsors"}
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
            />
            <div className={styles.sponsorList}>
              {sponsors.map((sponsor) => (
                <div key={sponsor.name} className={styles.logoWrapper}>
                  <Image
                    src={sponsor.src}
                    alt={sponsor.name}
                    width={210}
                    height={100}
                    className={styles.logo}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSponsors;
