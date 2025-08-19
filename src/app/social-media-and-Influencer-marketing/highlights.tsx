import React from "react";
import styles from "./style.module.scss";
import Highlightss from "@components/highlights";
import Curriculum from "@components/curriculum";
// import AIDigital from "@components/aIDigital";
import DigitalMarketingTools from "@components/digitalMarketingTools";
import AiTools from "@components/aiTools";
import Certifications from "@components/certifications";
import socialMediaAndInfluencerMarketing from "@/data/courses/socialMediaAndInfluencerMarketing";
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
                  socialMediaAndInfluencerMarketing.programSkills?.heading ?? ""
                }
                skills={
                  Array.isArray(
                    socialMediaAndInfluencerMarketing.programSkills?.skills
                  )
                    ? socialMediaAndInfluencerMarketing.programSkills.skills
                    : []
                }
              />
              <Curriculum {...curriculumData} />
              {/* <AIDigital /> */}
              <DigitalMarketingTools />
              <AiTools
                heading="Next-Gen AI-Powered Tools"
                description="Modern creators thrive on automation & creativity.
You’ll master AI tools like Canva AI, Jasper, MidJourney, HeyGen, Synthesia, Veed.io and more."
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
