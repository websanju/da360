import SportCardSlider from "@/components/widgets/sportCardSlider";
import styles from "./style.module.scss";

const sportData = [
  {
    title: "Cricket",
    images: ["/images/sports/cricket1.png"],
    color: "#FFD700",
  },
  {
    title: "Snooker",
    images: ["/images/sports/snooker.png", "/images/sports/snooker.png"],
    color: "#00BFFF",
  },
  {
    title: "Foosball",
    images: ["/images/sports/foosball.png", "/images/sports/foosball.png"],
    color: "#32CD32",
  },
  {
    title: "Badminton",
    images: ["/images/sports/badminton.png", "/images/sports/badminton.png"],
    color: "#FFB6C1",
  },
  {
    title: "Table Tennis",
    images: ["/images/sports/table.png", "/images/sports/table.png"],
    color: "#FFA500",
  },
  {
    title: "PS5",
    images: ["/images/sports/ps5.png", "/images/sports/ps5.png"],
    color: "#00FFFF",
  },
];

export default function SportsGrid() {
  return (
    <section className={styles.sportCardSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectionHeader}>
              <h2>Sports Event</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.gridCards}>
          {sportData.map((item, idx) => (
            <SportCardSlider
              key={idx}
              title={item.title}
              images={item.images}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
