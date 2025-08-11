import React from "react";
import styles from "./style.module.scss";
import Highlightss from "@components/highlights";
import Curriculum from "@components/curriculum";
import AIDigital from "@components/aIDigital";
import DigitalMarketingTools from "@components/digitalMarketingTools";
import AiTools from "@components/aiTools";
import Certifications from "@components/certifications";
import youtubeAndInstagramInfluencer from "@/data/courses/youtubeAndInstagramInfluencer";
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
                  youtubeAndInstagramInfluencer.programSkills?.heading ?? ""
                }
                skills={
                  Array.isArray(
                    youtubeAndInstagramInfluencer.programSkills?.skills
                  )
                    ? youtubeAndInstagramInfluencer.programSkills.skills
                    : []
                }
              />
              <Curriculum />
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
