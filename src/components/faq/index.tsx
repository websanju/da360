"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import SectionHeader from "@components/widgets/sectionHeader";

type FAQItem = {
  question: string;
  answer: string;
};
type FAQProps = {
  title?: React.ReactNode;
  description?: string;
};
const faqData: FAQItem[] = [
  {
    question: "Is it beginner-friendly?",
    answer: "Yes, the event is designed to be accessible for all skill levels.",
  },
  {
    question: "Is it free for students?",
    answer: "Absolutely! There are no charges for student participants.",
  },
  {
    question: "Can we participate remotely?",
    answer: "Yes, remote participation is fully supported.",
  },
  {
    question: "How do we form teams?",
    answer:
      "You can form teams beforehand or connect with others through our platform.",
  },
];

const FAQ = ({
  title = <>FAQ</>,
  description = "Everything you need to know about the Hackathon event.",
}: FAQProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              titleMarginBottom={{ desktop: "16px", mobile: "10px" }}
              title={title}
              maxWidth="300px"
              description={description}
            />
            <div className={styles.accordion}>
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.item} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  onClick={() => toggleIndex(index)}
                >
                  <div className={styles.header}>
                    <span>{item.question}</span>
                    <Image
                      src={`/images/icons/${
                        activeIndex === index ? "minus" : "plus"
                      }.svg`}
                      alt={activeIndex === index ? "Minus icon" : "Plus icon"}
                      width={20}
                      height={20}
                    />
                  </div>
                  {activeIndex === index && (
                    <div className={styles.body}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
