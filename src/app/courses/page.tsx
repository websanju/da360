import coursesData, { CourseSection } from "@/data/courseData";
import styles from "./style.module.scss";

import AiMarketingBanner from "@components/aiMarketingBanner";
import LeadershipSection from "@/components/courseList/leadershipSection";
import PostGraduateSection from "@components/courseList/postGraduateSection";
import CertificationSection from "@components/courseList/certificationSection";

export default function About() {
  return (
    <main>
      <div className={styles.container}>
        <AiMarketingBanner />
        {coursesData.map((section: CourseSection) => {
          switch (section.componentType) {
            case "Leadership":
              return (
                <LeadershipSection key={section.sectionId} section={section} />
              );
            case "PostGraduate":
              return (
                <PostGraduateSection
                  key={section.sectionId}
                  section={section}
                />
              );
            case "Certification":
              return (
                <CertificationSection
                  key={section.sectionId}
                  section={section}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </main>
  );
}
