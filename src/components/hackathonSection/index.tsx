import Image from "next/image";
import styles from "./styles.module.scss";

const hackathonItems = [
  {
    icon: "/images/marketing-sprint.png",
    title: "24–48-hour",
    subtitle: "Marketing Sprint",
  },
  {
    icon: "/images/real-brand.png",
    title: "Real Brand",
    subtitle: "Case Studies",
  },
  {
    icon: "/images/collaboration.png",
    title: "Team",
    subtitle: "Collaboration",
  },
  {
    icon: "/images/final-pitch.png",
    title: "Final Pitch in",
    subtitle: "Front of Jury",
  },
  {
    icon: "/images/prizes-referral.png",
    title: "Prizes + Job Referral",
    subtitle: "Opportunities",
  },
];

export default function HackathonSection() {
  return (
    <section className={` ${styles.hackathonSection}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className={styles.heading}>
              Hackathons at Digital Academy 360 are curated digital
              battlegrounds where our students tackle real-time industry
              challenges — from designing campaigns to cracking performance
              marketing puzzles.
            </h2>
          </div>
        </div>
        <div className={` ${styles.hackathonItem}`}>
          <div className="row text-center justify-content-center">
            {hackathonItems.map((item, index) => (
              <div className="col-6 col-sm-4 col-md-2 mx-2 mb-4" key={index}>
                <div className={styles.iconWrapper}>
                  <Image src={item.icon} alt="icon" width={118} height={118} />
                </div>
                <div className={styles.text}>
                  <p>{item.title}</p>
                  <span>{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
