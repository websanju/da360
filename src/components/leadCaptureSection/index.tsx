"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import React from "react";
import LeadCaptureForm from "@components/widgets/leadCaptureForm";
import Link from "next/link";

interface LeadCaptureSectionProps {
  headingLineOne: React.ReactNode;
  headingLineTow?: React.ReactNode;
  headingLineThree?: React.ReactNode;
  tags: string[];
  descriptionLineOne: string;
  descriptionLineTow: string;
  gifSrc?: string;
  applyLabel?: string;
  applyHref?: string;
  onApplyClick?: () => void;
}

const LeadCaptureSection: React.FC<LeadCaptureSectionProps> = ({
  headingLineOne,
  headingLineTow,
  headingLineThree,
  tags,
  descriptionLineOne,
  descriptionLineTow,
  applyHref,
  applyLabel,
  onApplyClick,
  gifSrc = "/images/face.gif",
}) => {
  return (
    <section className={`${styles.leadCaptureSection}`}>
      <div className="container">
        <div className="row align-items-start g-5">
          {/* Left Content */}
          <div className={`col-lg-7 ${styles.collg7}`}>
            <h1>
              {headingLineOne}
              {gifSrc && (
                <span className={styles.gifAniamtion}>
                  <Image src={gifSrc} alt="gif" height={50} width={120} />
                </span>
              )}
              <br />
              {headingLineTow}
              <br />
              {headingLineThree}
            </h1>
            <div className={styles.tag}>
              {(tags || []).map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
            <p>{descriptionLineOne}</p>
            <p>{descriptionLineTow}</p>
            <div className={styles.btnAction}>
              {applyHref ? (
                <Link href={applyHref} className={`${styles.btnRed} btnRed`}>
                  {applyLabel || "Apply Now"}
                </Link>
              ) : (
                <button
                  onClick={onApplyClick}
                  className={`${styles.btnRed} btnRed`}
                >
                  {applyLabel || "Apply Now"}
                </button>
              )}
              <button className={`${styles.btnWhite} btnWhite`}>
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div
            className={`col-lg-5 d-flex justify-content-end align-items-start ${styles.collg5}`}
          >
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
