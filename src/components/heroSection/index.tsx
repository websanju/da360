import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            <span className={styles.overline}>Asia’s Largest</span>
            <h1>
              Digital Marketing{" "}
              <span className={styles.peace}>
                {" "}
                <Image
                  src={"/images/peace.gif"}
                  alt={"peace"}
                  width={111}
                  height={111}
                  className="img-fluid"
                />
              </span>{" "}
              <br /> Learning Centre
            </h1>
            <p>
              Learn from industry experts through online and offline courses.
            </p>
            <div className={styles.applyAction}>
              <Link href="#apply-now" className="btn btn-danger btn-lg px-4">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
