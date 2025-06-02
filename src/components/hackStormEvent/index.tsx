// import Image from "next/image";
// import Link from "next/link";
import styles from "./styles.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";
import RightArrow from "@components/Ui/svg/rightArrow";
import Image from "next/image";
import Link from "next/link";

interface EventData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  location: string;
  date: string;
  duration: string;
  participants: number;
}

const events: EventData[] = [
  {
    id: 1,
    title: "Campaign Clash 2024",
    subtitle: "Brand Strategy for a D2C Wellness Brand",
    image: "/images/hackstorm-one.png",
    location: "Bangalore",
    date: "02/06/25",
    duration: "36 Hours",
    participants: 120,
  },
  {
    id: 2,
    title: "Campaign Clash 2024",
    subtitle: "Brand Strategy for a D2C Wellness Brand",
    image: "/images/hackstorm-two.png",
    location: "Bangalore",
    date: "02/06/25",
    duration: "36 Hours",
    participants: 120,
  },
];

const EventCards: React.FC = () => {
  return (
    <section className={` ${styles.eventSection}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              title={<>HackStorm 2025</>}
              description={"Coming Soon!"}
            />
          </div>
        </div>

        <div className={` ${styles.row} row justify-content-center`}>
          {events.map((event) => (
            <div key={event.id} className="col-md-6 mb-4">
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={event.image}
                    width={628}
                    height={275}
                    alt={event.title}
                    objectFit="cover"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.tag}>ONLINE</span>
                  <p className={styles.title}>{event.title}</p>
                  <h5 className={styles.subtitle}>{event.subtitle}</h5>
                  <div className={styles.meta}>
                    <span>{event.location}</span>
                    <span>{event.date}</span>
                    <span>{event.duration}</span>
                  </div>
                  <div className={styles.participants}>
                    <div className={styles.participantImg}>
                      <Image
                        src="/images/event-user-1.png"
                        alt="users"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className={styles.participantImg}>
                      <Image
                        src="/images/event-user-2.png"
                        alt="users"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className={styles.participantImg}>
                      <Image
                        src="/images/event-user-3.png"
                        alt="users"
                        width={32}
                        height={32}
                      />
                    </div>
                    <span className={styles.count}>
                      +{event.participants} participating
                    </span>
                  </div>
                </div>
                <Link href={"#"} className={styles.cardFooter}>
                  <span>Learn More</span>
                  <span className={styles.arrow}>
                    <RightArrow color="#000" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCards;
