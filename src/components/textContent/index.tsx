// components/TextContent.js
import styles from "./styles.module.scss";
interface TextContentGridProps {
  section?: string;
}
const TextContent = ({ section }: TextContentGridProps) => {
  return (
    <div className={styles.textContent} id={section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <h2>
              Get a glimpse into the vibrant student life, collaborative
              learning, and inspiring culture that make Digital Academy 360 more
              than just a classroom.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextContent;
