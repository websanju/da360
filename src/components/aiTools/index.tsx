import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const designTools = [
  { name: "Wix", logo: "/images/aitools/wix.png" },
  { name: "Weebly", logo: "/images/aitools/weebly.png" },
  { name: "Strikingly", logo: "/images/aitools/strikingly.png" },
  { name: "Carrd", logo: "/images/aitools/carrd.png" },
  { name: "Writesonic", logo: "/images/aitools/writesonic.png" },
  { name: "QuillBot", logo: "/images/aitools/quillbot.png" },
  { name: "Hemingway", logo: "/images/aitools/hemingway.png" },
  { name: "Rytr", logo: "/images/aitools/rytr.png" },
  { name: "Canva", logo: "/images/aitools/canva.png" },
  { name: "Pixlr", logo: "/images/aitools/pixlr.png" },
  { name: "Designify", logo: "/images/aitools/designify.png" },
  { name: "Crello", logo: "/images/aitools/crello.png" },
  { name: "Hatchful", logo: "/images/aitools/hatchful.png" },
  { name: "Kapwing", logo: "/images/aitools/kapwing.png" },
  { name: "VEED.IO", logo: "/images/aitools/veedio.png" },
  { name: "Shortcut", logo: "/images/aitools/shortcut.png" },
];

const AiTools: React.FC = () => {
  return (
    <section className={styles.digitalToolsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Next-gen AI-powered Tools</h2>
        <p className={styles.sectionDescription}>
          Being a digital marketer means interacting & working with multiple
          digital marketing tools daily. Here are some of the tools that you
          will master during Digital Academy 360’s online digital marketing
          course.
        </p>
        <div className={styles.digitalToolList}>
          {designTools.map((designTool, index) => (
            <div className={styles.digitalTooItems} key={index}>
              <div className={styles.digitalTooItem}>
                <Image
                  width={100}
                  height={80}
                  src={designTool.logo}
                  alt={designTool.name}
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

export default AiTools;
