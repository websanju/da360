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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243.0589987031042!2d77.59902186347314!3d12.911322136634196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16256e8bd415%3A0x85acd49abea04935!2sDigital%20Academy%20360!5e0!3m2!1sen!2sin!4v1750935793883!5m2!1sen!2sin"
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
