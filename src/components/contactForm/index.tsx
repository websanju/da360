"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";
import PhoneInput from "./phoneInput";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    phone: "",
    fullName: "",
    email: "",
    gender: "",
    mode: "Online",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleModeChange = (mode: "Online" | "Offline") => {
    setFormData((prev) => ({ ...prev, mode }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Add form submission logic
  };

  return (
    <section className={styles.contactFormSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              titleColor="#fff"
              titleMarginBottom={"16px"}
              descriptionColor="#fff"
              maxWidth="600px"
              title="We’re here to help you!"
              description="Learn & upskill yourself for better opportunities. Choose to learn online or at any one of our 10+ centers across India. Digital Academy 360 is India’s Leading Digital Learning Platform."
            />
          </div>
        </div>
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div className={`${styles.row} row`}>
              <div className="col-lg-6">
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    className={styles.formInput}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Email ID</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    className={styles.formInput}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className={`${styles.phoneInput} ${styles.inputGroup} `}>
                  <label className={styles.label}>Phone No.</label>
                  <PhoneInput
                    value={formData.phone}
                    onChange={(val) => setFormData({ ...formData, phone: val })}
                  />
                  ;
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Gender</label>
                  <div className={styles.customSelectWrapper}>
                    <select
                      name="gender"
                      value={formData.gender}
                      className={`${styles.formSelect} ${
                        formData.gender === "" ? styles.placeholder : ""
                      }`}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled hidden>
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className={styles.customArrow}></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className={styles.mode}>
                  <label>
                    <input
                      type="radio"
                      name="mode"
                      checked={formData.mode === "Online"}
                      onChange={() => handleModeChange("Online")}
                    />
                    Online
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="mode"
                      checked={formData.mode === "Offline"}
                      onChange={() => handleModeChange("Offline")}
                    />
                    Offline
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className={styles.contactBtn}>
                  <button className={styles.btn} type="submit">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
