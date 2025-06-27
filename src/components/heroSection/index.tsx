"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { usePopup } from "@components/widgets/popup/PopupContext";
import ApplyForm from "@components/widgets/popups/ApplyForm";

export default function HeroSection() {
  const { openPopup } = usePopup();
  return (
    <section className={`${styles.heroSection}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            <span className={styles.overline}>Asia’s Largest</span>
            <h1>
              Digital Marketing
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
              <br />
              Learning Centre
            </h1>
            <p>School of Digital Marketing</p>
            <div className={styles.applyAction}>
              <Link
                href="#"
                onClick={() => openPopup(<ApplyForm />, "Apply Now")}
                className="btn btn-danger btn-lg px-4"
              >
                Apply Now
              </Link>

              <Link href="#" className="btn btnWhite btn-lg px-4">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
