// components/widgets/popups/CaseStudyPopup.tsx

"use client";
import styles from "./style.module.scss";
import { usePopup } from "@components/widgets/popup/PopupContext";
import { CaseStudy } from "@/components/widgets/caseStudiesCard"; // adjust this path
import Image from "next/image";
interface Props {
  study: CaseStudy;
}

export default function DownloadPlacementReportPopup({}: Props) {
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
      <div className={styles.body}>Download Placement Report</div>
    </div>
  );
}
