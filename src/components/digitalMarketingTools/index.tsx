import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const tools = [
  {
    name: "Google Ad Manager",
    logo: "/images/digital-tools/google-ad-manager-logo.png",
  },
  {
    name: "Google AdSense",
    logo: "/images/digital-tools/google-adsense-logo.png",
  },
  {
    name: "Google Alerts",
    logo: "/images/digital-tools/google-alerts.png",
  },
  { name: "GoDaddy", logo: "/images/digital-tools/godaddy-logo.png" },
  {
    name: "Answer",
    logo: "/images/digital-tools/answer.png",
  },
  {
    name: "Facebook Business",
    logo: "/images/digital-tools/facebook-business-logo.png",
  },
  { name: "HostGator", logo: "/images/digital-tools/hostgator-logo.png" },
  { name: "HostGator", logo: "/images/digital-tools/wordpress.png" },
  { name: "Ubersuggest", logo: "/images/digital-tools/ubersuggest-logo.png" },
  { name: "GTMetrix", logo: "/images/digital-tools/gtmetrix-logo.png" },
  { name: "Brevo", logo: "/images/digital-tools/brevo-logo.png" },
  { name: "A", logo: "/images/digital-tools/a.png" },
  { name: "Elementor", logo: "/images/digital-tools/elementor-logo.png" },
  { name: "google", logo: "/images/digital-tools/google-trend.png" },
  {
    name: "Amazon Associates",
    logo: "/images/digital-tools/amazon-associates-logo.png",
  },
  { name: "LinkedIn", logo: "/images/digital-tools/linkedin-logo.png" },
  {
    name: "Meta Business Suite",
    logo: "/images/digital-tools/meta-business-suite-logo.png",
  },
  {
    name: "Google Manager",
    logo: "/images/digital-tools/google-tag-manager.png",
  },
  {
    name: "Google Analytics",
    logo: "/images/digital-tools/google-analytics-logo.png",
  },
  {
    name: "Looker Studio",
    logo: "/images/digital-tools/looker-studio-logo.png",
  },
  {
    name: "Looker Studio",
    logo: "/images/digital-tools/b.png",
  },
  { name: "Sales Sensey", logo: "/images/digital-tools/salessensey-logo.png" },
  { name: "Asana", logo: "/images/digital-tools/asana-logo.png" },
];

const DigitalMarketingTools: React.FC = () => {
  return (
    <section className={styles.digitalToolsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          Digital Marketing Tools You’ll Master
        </h2>
        <p className={styles.sectionDescription}>
          Being a digital marketer means interacting & working with multiple
          digital marketing tools daily. Here are some of the tools that you
          will master during Digital Academy 360’s online digital marketing
          course.
        </p>
        <div className={styles.digitalToolList}>
          {tools.map((tool, index) => (
            <div className={styles.digitalTooItems} key={index}>
              <div className={styles.digitalTooItem}>
                <Image
                  width={100}
                  height={80}
                  src={tool.logo}
                  alt={tool.name}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingTools;
