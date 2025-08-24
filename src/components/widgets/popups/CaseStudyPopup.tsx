// components/widgets/popups/CaseStudyPopup.tsx

"use client";
import styles from "./style.module.scss";
import { usePopup } from "@components/widgets/popup/PopupContext";
import { CaseStudy } from "@/components/widgets/caseStudiesCard"; // adjust this path
import Image from "next/image";
import ApplyForm from "./ApplyForm";
interface Props {
  study: CaseStudy;
}

export default function CaseStudyPopup({ study }: Props) {
  const { closePopup } = usePopup();
  const { openPopup } = usePopup();

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
      <div className={styles.body}>
        <p>{study.description}</p>
      </div>
      <div className={styles.caseStudyAction}>
        <button
          onClick={() => {
            closePopup(); // close current popup first
            openPopup(<ApplyForm title="Apply & Learn From Case Study" />, {});
          }}
          className="btn btnRed"
        >
          Apply & Learn From Case Study
        </button>
      </div>
    </div>
  );
}
