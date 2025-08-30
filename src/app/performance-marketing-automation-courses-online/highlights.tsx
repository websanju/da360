import React from "react";
import styles from "./style.module.scss";
import Highlightss from "@components/highlights";
import Curriculum from "@components/curriculum";
// import AIDigital from "@components/aIDigital";
import DigitalMarketingTools from "@components/digitalMarketingTools";
import AiTools from "@components/aiTools";
import Certifications from "@components/certifications";
import performanceMarketingAndMartech from "@/data/courses/performanceMarketingAndMartech";
import { curriculumData } from "./curriculumData";
import { toolCategories } from "./aiToolsData";
import { certificationsData } from "./certificationsData";
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
              <Highlightss
                heading={
                  performanceMarketingAndMartech.programSkills?.heading ?? ""
                }
                skills={
                  Array.isArray(
                    performanceMarketingAndMartech.programSkills?.skills
                  )
                    ? performanceMarketingAndMartech.programSkills.skills
                    : []
                }
              />
              <Curriculum {...curriculumData} />
              {/* <AIDigital /> */}
              <DigitalMarketingTools />
              <AiTools
                heading="Next-Gen AI-Powered Tools"
                description="Use AI to write viral LinkedIn posts, design branded carousels, optimize video hooks, and forecast audience engagement — all while saving hours every week."
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
