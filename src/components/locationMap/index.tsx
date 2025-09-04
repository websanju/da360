"use client";

import styles from "./styles.module.scss";
import Link from "next/link";
import LeftArrow from "@components/Ui/svg/leftArrow";
const LocationMap = () => {
  return (
    <section className={styles.locationSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.infoBox}>
              <div>
                <h2>Bangalore</h2>
                <p>Head Office Jayanagar Digital Academy 360</p>
                <address>
                  No 46/1, 1st Main Rd, Opposite Mini Forest, Near to Jayadeva
                  Hospital,
                  <br />
                  J. P. Nagar 3rd Phase, Bangalore – 560 078
                </address>
              </div>
              <div className={styles.contactBox}>
                <Link href="tel:+917353515515">+91 7353 515 515</Link>
                <Link
                  href="https://maps.app.goo.gl/PgKNim4znkre9x2A6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Direction{" "}
                  <LeftArrow width={16} height={16} color="#fff" />
                </Link>
              </div>
            </div>
            <div className={styles.mapWrapper}>
              <iframe
                title="Digital Academy 360 Bangalore Location"
                src="https://maps.app.goo.gl/wdhAeJvwPaVBA45D7"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
