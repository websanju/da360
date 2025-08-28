import React from "react";
import styles from "./style.module.scss";

import AIDigital from "@components/aIDigital";
import DigitalMarketingTools from "@components/digitalMarketingTools";
import AiTools from "@components/aiTools";
import Certifications from "@components/certifications";
import Curriculum from "@components/curriculum";
import { curriculumData } from "./curriculumData";
import { toolCategories } from "./aiToolsData";
import { certificationsData } from "./certificationsData";
import { specialisationData } from "./specialisationData";

interface HighlightsProps {
  section?: string;
}
const Highlights = ({ section }: HighlightsProps) => {
  return (
    <div className={styles.highlight} id={section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.highlightBox}>
              <Curriculum {...curriculumData} />
              <AIDigital {...specialisationData} />
              <DigitalMarketingTools />
              <AiTools
                heading="Next-Gen AI-Powered Tools"
                description="From ChatGPT and Jasper for content creation to Midjourney and Synthesia for visuals — master the tools that define the future of Vibe Marketing."
                categories={toolCategories}
              />
              <Certifications
                heading="Get Industry-Recognised Certifications"
                subheading="(Government of India)"
                certifications={certificationsData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
