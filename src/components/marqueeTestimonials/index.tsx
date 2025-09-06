"use client";
import styles from "./styles.module.scss";
import { studentsRow1, studentsRow2 } from "./data";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

const MarqueeTestimonials = () => {
  return (
    <section className={styles.testimonialSection} id="testimonialSection">
      <SectionHeader title={<>What our students say</>} maxWidth="560px" />
      {/* Row 1: Right to Left */}
      <div className={styles.marquee}>
        <div className={styles.marqueeGroup}>
          {[...studentsRow1, ...studentsRow1].map((student, index) => (
            <div className={styles.avatar} key={`row1-${index}`}>
              <Image
                src={student.image}
                alt={`Student Row 1 - ${index + 1}`}
                width={100}
                height={100}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Left to Right */}
      <div className={`${styles.marquee} ${styles.reverse}`}>
        <div className={styles.marqueeGroup}>
          {[...studentsRow2, ...studentsRow2].map((student, index) => (
            <div className={styles.avatar} key={`row2-${index}`}>
              <Image
                src={student.image}
                alt={`Student Row 2 - ${index + 1}`}
                width={100}
                height={100}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeTestimonials;
