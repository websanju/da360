import React from "react";
import styles from "./style.module.scss";

const ContentBlock: React.FC = ({}) => {
  return (
    <div className={styles.contentSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>Digital Academy 360</p>
            <p>Asia’s Leading AI-Powered Digital Marketing Institute</p>
            <p>
              Founded in 2015 and based in Bangalore, Digital Academy 360 is
              Asia’s largest AI-driven digital marketing training center. We
              offer classroom & online programs with 100% placement assistance,
              globally recognized certifications, live agency projects, and
              hands-on internships.
            </p>
            <p>
              Recognized as the Best Digital Marketing Course Provider , we
              equip learners with cutting-edge AI + marketing skills to thrive
              in the digital age. Our mission: to build a global ecosystem for
              digital learning, research, and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
