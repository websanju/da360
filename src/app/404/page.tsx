import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";
export default function notFound() {
  return (
    <div className={styles.fourNoteound}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.fourNoteoundimg}>
              <Image
                key={``}
                src="/images/404.png"
                width={470}
                height={452}
                alt="Arrow"
                className={styles.arrowIcon}
              />
              <div className={styles.fourNoteoundMInfo}>
                <h2>Page Not Found</h2>
                <p>The requested URL was not found on this server.</p>
              </div>
              <div className={styles.btndanger}>
                <Link className="btn btn-danger" href={"/"}>
                  Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
