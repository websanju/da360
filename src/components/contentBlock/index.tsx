import React from "react";
import styles from "./style.module.scss";

interface ContentBlockProps {
  content: string;
  className?: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ content }) => {
  return (
    <div className={styles.contentSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
