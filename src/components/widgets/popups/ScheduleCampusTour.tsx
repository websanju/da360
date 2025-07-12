// components/widgets/popups/CaseStudyPopup.tsx

"use client";
import styles from "./style.module.scss";
import { usePopup } from "@components/widgets/popup/PopupContext";
import Image from "next/image";

export default function ScheduleCampusTourPopup({}) {
  const { closePopup } = usePopup();
  return (
    <div className={styles.caseStudyPopup}>
      <button type="button" className={styles.closeForm} onClick={closePopup}>
        <Image
          src="/images/icons/close.svg"
          alt="logo"
          width={14}
          height={14}
        />
      </button>
      <div className={styles.body}>ScheduleCampusTour</div>
    </div>
  );
}
