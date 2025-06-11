"use client";
import SectionHeader from "@components/widgets/sectionHeader";
import styles from "./styles.module.scss";

type ScheduleItem = {
  time: string;
  title: string;
  description: string;
  highlight?: boolean;
};

const scheduleData: ScheduleItem[] = [
  {
    time: "5:00 AM ET",
    title: "Participant check-in",
    description:
      "At 10:00 am on July 28, registered participants can start checking in and exploring the competition venue. Volunteers will be on-site for final Q&A and last-minute registration assistance.",
  },
  {
    time: "4:00 AM ET",
    title: "Launch countdown begins",
    description:
      "At 10:00 am on July 28, registered participants can start checking in and exploring the competition venue. Volunteers will be on-site for final Q&A and last-minute registration assistance.",
  },
  {
    time: "3:00 AM ET",
    title: "Kickoff Live stream",
    description:
      "At 10:00 am on July 28, registered participants can start checking in and exploring the competition venue. Volunteers will be on-site for final Q&A and last-minute registration assistance.",
  },
  {
    time: "2:00 AM ET",
    title: "Participant check-in",
    description:
      "At 10:00 am on July 28, registered participants can start checking in and exploring the competition venue. Volunteers will be on-site for final Q&A and last-minute registration assistance.",
  },
  {
    time: "1:00 AM ET",
    title: "Participant check-in",
    description:
      "At 10:00 am on July 28, registered participants can start checking in and exploring the competition venue. Volunteers will be on-site for final Q&A and last-minute registration assistance.",
  },
];

const ScheduleTimeline = () => {
  return (
    <section className={styles.scheduleSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "32px", mobile: "20px" }}
              title={"Schedule of Events"}
            />
          </div>
        </div>

        <div className={styles.header}>
          <span>July 20, 2025</span>
        </div>

        <div className={styles.timeline}>
          {scheduleData.map((item, index) => (
            <div className={styles.timelineItem} key={index}>
              {/* LEFT SIDE */}
              <div className={styles.contentLeft}>
                {index % 2 === 0 ? (
                  <div className={styles.highlight}>
                    <span className={styles.title}>{item.title}</span>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                ) : (
                  <div className={styles.timeOnly}>
                    <span className={styles.time}>{item.time}</span>
                  </div>
                )}
              </div>

              {/* CENTER DOT + TIME */}
              <div className={styles.timeDot}>
                <div className={styles.dot} />
              </div>

              {/* RIGHT SIDE */}
              <div className={styles.contentRight}>
                {index % 2 !== 0 ? (
                  <div className={styles.highlight}>
                    <span className={styles.title}>{item.title}</span>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                ) : (
                  <div className={styles.timeOnly}>
                    <span className={styles.time}>{item.time}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleTimeline;
