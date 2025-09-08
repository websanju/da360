"use client";
import React from "react";
import styles from "./styles.module.scss";
import RightArrow from "../Ui/svg/rightArrow";

const OpportunityButtons: React.FC = () => {
  const buttons = [
    {
      label: "Become Channel Partner",
      onClick: () => alert("Channel Partner clicked!"),
    },
    {
      label: "Become Campus Ambassador",
      onClick: () => alert("Campus Ambassador clicked!"),
    },
    {
      label: "Become Content Creator",
      onClick: () => alert("Content Creator clicked!"),
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
