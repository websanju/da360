import React from "react";
import styles from "./style.module.scss";
import Highlightss from "@components/highlights";
import Curriculum from "@components/curriculum";
import AIDigital from "@components/aIDigital";
import DigitalMarketingTools from "@components/digitalMarketingTools";
import AiTools from "@components/aiTools";
import Certifications from "@components/certifications";

const Highlights = () => {
  return (
    <div className={styles.highlight}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.highlightBox}>
              <Highlightss />
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
