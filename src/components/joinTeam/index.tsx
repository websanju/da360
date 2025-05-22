"use client";
import React from "react";
import styles from "./styles.module.scss";

const JoinTeamSection = () => {
  return (
    <section
      className={`${styles.teamSection}`}
      style={{
        backgroundImage: 'url("./images/join-team.png")',
      }}
    >
      <div className={`${styles.container} container`}>
        <div className="row">
          <div className="col-lg-12">
            <div className={`${styles.teamInfo}`}>
              <span>DA360 Careers</span>
              <h1>Join Our Team</h1>
              <p>
                Digital Academy 360 is Asias most trusted digital marketing
                institute, transforming careers through online, offline, and
                on-demand courses with a focus on practical skills and industry
                connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
