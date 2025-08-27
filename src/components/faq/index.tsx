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
    question: "What is Digital Marketing and why is it important?",
    answer:
      "Digital Marketing is the promotion of products or services using online channels like search engines, social media, email, and websites. It is important because it helps businesses reach the right audience, measure performance, and achieve higher ROI compared to traditional marketing.",
  },
  {
    question: "What are the main career options in Digital Marketing?",
    answer:
      "Career paths include SEO Specialist, Social Media Manager, Performance Marketing Executive, Content Marketer, Email Marketing Strategist, PPC Analyst, and Digital Marketing Manager.",
  },
  {
    question: "Do I need a technical background to learn Digital Marketing?",
    answer:
      "No, a technical background is not mandatory. Anyone with basic computer and internet knowledge can start learning digital marketing. However, having analytical and creative skills is an added advantage.",
  },
  {
    question:
      "How long does it take to become a Digital Marketing professional?",
    answer:
      "It depends on the program chosen. At Digital Academy 360, you can start with a 3-month Skill Diploma, a 6-month Post Graduate Certification, or a 9-month Leadership program to gain advanced expertise.",
  },
  {
    question:
      "What tools and platforms are commonly used in Digital Marketing?",
    answer:
      "Popular tools include Google Analytics, Google Ads, Meta Ads Manager, SEMrush, Ahrefs, HubSpot, Canva, Mailchimp, and automation platforms like Zapier.",
  },
  {
    question:
      "Why should I choose Digital Academy 360 for Digital Marketing training?",
    answer:
      "Digital Academy 360 is India’s leading digital learning platform, offering industry-vetted curriculum, hands-on projects, placement support, and certifications from top platforms. With 50,000+ careers transformed, we ensure learners are job-ready.",
  },
  {
    question: "What certifications will I get after completing a course?",
    answer:
      "You’ll earn globally recognized certifications such as Google Ads, HubSpot, Meta, SEMrush, along with Digital Academy 360’s certification that is accredited by NSDC & Skill India.",
  },
  {
    question: "Does Digital Academy 360 provide placement assistance?",
    answer:
      "Yes, we provide end-to-end placement support, including resume building, mock interviews, career guidance, and access to 1,000+ hiring partners. We have a 93% placement record.",
  },
  {
    question: "Can I pursue Digital Academy 360 courses online?",
    answer:
      "Yes, all our programs are available in both online live sessions and offline classroom formats at select centers like Bangalore.",
  },
  {
    question:
      "What salary can I expect after completing a course at Digital Academy 360?",
    answer:
      "Freshers generally start with ₹3–6 LPA packages, with opportunities to grow quickly. Some of our learners have secured offers up to ₹18 LPA, depending on skills, specialization, and prior experience.",
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
