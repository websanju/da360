"use client";
import React, { useState } from "react";
import styles from "@components/contactForm/styles.module.scss";
import style from "./style.module.scss";
import PhoneInput from "@components/contactForm/phoneInput";
import SectionHeader from "@components/widgets/sectionHeader";
// import Image from "next/image";
// import IndiaFlag from "./images/india-flag.png";

const HireForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    website: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Handle form logic or API call here
  };

  return (
    <section className={style.hireForm}>
      <div className="container">
        <div>
          <div>
            <SectionHeader
              titleColor="#fff"
              wrapperMarginBottom={{ desktop: "60px", mobile: "24px" }}
              descriptionColor="#fff"
              maxWidth="600px"
              title="Hire Top 1% Digital Marketers"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={`${style.row} row`}>
            <div className="col-lg-6">
              <div className={styles.inputGroup}>
                <label className={styles.label}>Full Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.inputGroup}>
                <label className={styles.label}>Company Name*</label>
                <input
                  type="text"
                  name="company"
                  className={styles.formInput}
                  placeholder="Enter your company name"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.inputGroup}>
                <div className={`${styles.phoneInput} ${styles.inputGroup} `}>
                  <label className={styles.label}>Phone No.</label>
                  <PhoneInput
                    value={formData.phone}
                    onChange={(val) => setFormData({ ...formData, phone: val })}
                  />
                </div>
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
              <div className={styles.inputGroup}>
                <label className={styles.label}>Website of organisation*</label>
                <input
                  type="url"
                  name="website"
                  className={styles.formInput}
                  placeholder="Enter website URL of company"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.inputGroup}>
                <label className={styles.label}>Location*</label>
                <div className={styles.customSelectWrapper}>
                  <select
                    name="location"
                    value={formData.location}
                    className={`${styles.formSelect} ${
                      formData.location === "" ? styles.placeholder : ""
                    }`}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Select a City
                    </option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                  <span className={styles.customArrow}></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className={style.contactBtn}>
              <button className={style.btn} type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HireForm;
