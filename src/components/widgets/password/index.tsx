"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import SectionHeader from "../sectionHeader";

export default function PasswordForm() {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={"container"}>
      <div className="row">
        <div className="col-lg-12">
          <SectionHeader
            title={"Internal Lead Entry Form"}
            description="Create new leads in the CRM system. This form is for internal use only."
          />
        </div>
      </div>
      <div className={styles.passwordBoxSection}>
        <div className={styles.passwordBox}>
          <label className={styles.title}>Password Required</label>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="password"
              name="password"
              className="form-check-input"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
