import Image from "next/image";
import styles from "./styles.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";

const hackathonItems = [
  {
    icon: "/images/who/college-students.png",
    title: "College Students",
    subtitle:
      "Tired of “no experience” rejections? Learn skills that beat degrees.",
  },
  {
    icon: "/images/who/working-professionals.png",
    title: "Working Professionals",
    subtitle:
      "Tired of “no experience” rejections? Learn skills that beat degrees.",
  },
  {
    icon: "/images/who/freelancers.png",
    title: "Team",
    subtitle:
      "Tired of “no experience” rejections? Learn skills that beat degrees.",
  },
  {
    icon: "/images/who/homemakers.png",
    title: "Final Pitch in",
    subtitle:
      "Tired of “no experience” rejections? Learn skills that beat degrees.",
  },
];

export default function WhoJoin() {
  return (
    <section className={` ${styles.whoJoinSection}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              title={<>Who Can Join?</>}
            />
          </div>
        </div>
        <div className={` ${styles.whoJoinItem}`}>
          <div className="row text-center justify-content-center">
            {hackathonItems.map((item, index) => (
              <div className="col-6 col-sm-3 col-md-3" key={index}>
                <div className={styles.iconWrapper}>
                  <Image src={item.icon} alt="icon" width={80} height={109} />
                </div>
                <div className={styles.text}>
                  <h3>{item.title}</h3>
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
