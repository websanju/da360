import React from "react";
import styles from "./styles.module.scss";
import SectionHeader from "../widgets/sectionHeader";

interface Step {
  title?: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Personal Interview",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Appear for a Counselling session",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Block your seat",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Document Verification",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const AdmissionProcess: React.FC = () => {
  return (
    <section className={styles.admissionSection}>
      <div className="container">
        <SectionHeader
          wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
          maxWidthTitle="900px"
          titleColor="#fff"
          title={"Admission Process"}
        />
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div className={styles.step} key={index}>
              <div className={styles.marker}></div>
              <div className={styles.content}>
                {step.title && <h3 className={styles.title}>{step.title}</h3>}
                <p className={styles.desc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
