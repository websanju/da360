"use client";
import React from "react";
import styles from "./styles.module.scss";
import RightArrow from "../Ui/svg/rightArrow";
import BecomChannelPartnerForm from "@components/widgets/popups/BecomChannelPartnerForm";
import BecomeCampusAmbassador from "@components/widgets/popups/BecomeCampusAmbassador";
import BecomeContentCreator from "@components/widgets/popups/BecomeContentCreator";
import { usePopup } from "@components/widgets/popup/PopupContext";

const OpportunityButtons: React.FC = () => {
  const { closePopup } = usePopup();
  const { openPopup } = usePopup();
  const buttons = [
    {
      label: "Become Channel Partner",
      onClick: () => {
        closePopup();
        openPopup(
          <BecomChannelPartnerForm title="Become Channel Partner" />,
          {}
        );
      },
    },
    {
      label: "Become Campus Ambassador",
      onClick: () => {
        closePopup();
        openPopup(
          <BecomeCampusAmbassador title="Become Campus Ambassador" />,
          {}
        );
      },
    },
    {
      label: "Become Content Creator",
      onClick: () => {
        closePopup();
        openPopup(<BecomeContentCreator title="Become Content Creator" />, {});
      },
    },
  ];

  return (
    <div className={styles.opportunityCards}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.buttons}>
              {buttons.map((btn, index) => (
                <button
                  key={index}
                  className={`btn btn-danger ${styles.button}`}
                  onClick={btn.onClick}
                >
                  <span>{btn.label}</span>
                  <div className={styles.icon}>
                    <RightArrow />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityButtons;
