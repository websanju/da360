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
              Step Into a World Beyond the Classroom — Where Learning Meets Life
              at Digital Academy 360. Dive Into a Dynamic Culture That Makes
              Learning Truly Unforgettable.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextContent;
