import React from "react";
import styles from "./styles.module.scss";
import SectionHeader from "../widgets/sectionHeader";

interface Step {
  title?: string;
  description: string;
}

interface AdmissionProcessProps {
  program?: "MBA" | "BBA";
}

const stepsData: Record<string, Step[]> = {
  MBA: [
    {
      title: "Register for DA360 MBA Exam",
      description:
        "Sign up online for the DA360 MBA entrance test to begin your application journey.",
    },
    {
      title: "Personal Interview",
      description:
        "Attend a one-on-one interview with our admission panel to evaluate your skills and motivation.",
    },
    {
      title: "Appear for a Counselling Session",
      description:
        "Join a personalized counselling session to understand the program, curriculum, and career opportunities.",
    },
    {
      title: "Pay Admission Fees and Block Your Seat",
      description:
        "Confirm your admission by completing the fee payment and reserving your seat in the MBA program.",
    },
    {
      title: "Document Verification",
      description:
        "Submit and verify all required academic, identity, and eligibility documents to finalize your enrollment.",
    },
  ],
  BBA: [
    {
      title: "Register for DA360 BBA Exam",
      description:
        "Sign up online for the DA360 BBA entrance test to begin your application journey.",
    },
    {
      title: "Personal Interview",
      description:
        "Attend a one-on-one interview with our admission panel to evaluate your skills and motivation.",
    },
    {
      title: "Appear for a Counselling Session",
      description:
        "Join a personalized counselling session to understand the program, curriculum, and career opportunities.",
    },
    {
      title: "Pay Admission Fees and Block Your Seat",
      description:
        "Confirm your admission by completing the fee payment and reserving your seat in the BBA program.",
    },
    {
      title: "Document Verification",
      description:
        "Submit and verify all required academic, identity, and eligibility documents to finalize your enrollment.",
    },
  ],
};

const AdmissionProcess: React.FC<AdmissionProcessProps> = ({
  program = "MBA",
}) => {
  const steps = stepsData[program];

  return (
    <section className={styles.admissionSection}>
      <div className="container">
        <SectionHeader
          wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
          maxWidthTitle="900px"
          titleColor="#fff"
          title={`Admission Process`}
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
