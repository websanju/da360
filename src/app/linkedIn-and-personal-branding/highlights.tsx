import React from "react";
import styles from "./style.module.scss";
import Highlightss from "@components/highlights";
import Curriculum from "@components/curriculum";
import AIDigital from "@components/aIDigital";
import DigitalMarketingTools from "@components/digitalMarketingTools";
import AiTools from "@components/aiTools";
import Certifications from "@components/certifications";
import linkedInAndPersonalBranding from "@/data/courses/linkedInAndPersonalBranding";
import { curriculumData } from "./curriculumData";
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
                  linkedInAndPersonalBranding.programSkills?.heading ?? ""
                }
                skills={
                  Array.isArray(
                    linkedInAndPersonalBranding.programSkills?.skills
                  )
                    ? linkedInAndPersonalBranding.programSkills.skills
                    : []
                }
              />
              <Curriculum {...curriculumData} />
              <AIDigital />
              <DigitalMarketingTools />
              <AiTools />
              <Certifications />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
