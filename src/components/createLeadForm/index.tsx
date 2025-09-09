"use client";

import { useState } from "react";
import styles from "./styles.module.scss";

interface FormData {
  counselor: string;
  fullName: string;
  phoneCode: string;
  phone: string;
  education: string;
  level: string;
  outcome: string;
  course: string;
  learningMode: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
}

const initialFormData: FormData = {
  counselor: "",
  fullName: "",
  phoneCode: "+91",
  phone: "",
  education: "",
  level: "",
  outcome: "",
  course: "",
  learningMode: "",
  utmSource: "",
  utmMedium: "Auto-filled",
  utmCampaign: "Auto-filled",
};

export default function CreateLeadForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead Data:", formData);
    alert("Lead Created Successfully!");
  };

  return (
    <form className={styles.leadForm} onSubmit={handleSubmit}>
      <div className="form-field">
        <select
          name="counselor"
          value={formData.counselor}
          onChange={handleChange}
          required
        >
          <option value="">Select Counselor</option>
          <option value="counselor-1">Counselor 1</option>
          <option value="counselor-2">Counselor 2</option>
        </select>
      </div>

      <div className="form-field">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name*"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className={`${styles.phoneField} form-field`}>
        <select
          name="phoneCode"
          value={formData.phoneCode}
          onChange={handleChange}
          required
        >
          <option value="+91">+91 IN</option>
          <option value="+1">+1 US</option>
          <option value="+44">+44 UK</option>
          <option value="+61">+61 AU</option>
        </select>
        <input
          type="tel"
          name="phone"
          placeholder="Phone*"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-field">
        <select
          name="education"
          value={formData.education}
          onChange={handleChange}
        >
          <option value="">Select Education</option>
          <option value="ug">Undergraduate</option>
          <option value="pg">Postgraduate</option>
        </select>
      </div>

      <div className="form-field">
        <select name="level" value={formData.level} onChange={handleChange}>
          <option value="">Select Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="form-field">
        <select name="outcome" value={formData.outcome} onChange={handleChange}>
          <option value="">Select Outcome</option>
          <option value="job">Job</option>
          <option value="skill">Skill Development</option>
        </select>
      </div>

      <div className="form-field">
        <select name="course" value={formData.course} onChange={handleChange}>
          <option value="">Select Course</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="web-dev">Web Development</option>
        </select>
      </div>

      <div className="form-field">
        <select
          name="learningMode"
          value={formData.learningMode}
          onChange={handleChange}
        >
          <option value="">Select Learning Mode</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      <div className="form-field">
        <select
          name="utmSource"
          value={formData.utmSource}
          onChange={handleChange}
          required
        >
          <option value="">Select UTM Source*</option>
          <option value="google">Google</option>
          <option value="facebook">Facebook</option>
          <option value="linkedin">LinkedIn</option>
        </select>
      </div>

      <div className="form-field">
        <input type="text" value={formData.utmMedium} disabled />
      </div>

      <div className="form-field">
        <input type="text" value={formData.utmCampaign} disabled />
      </div>

      <button type="submit" className="btn btn-danger">
        CREATE LEAD
      </button>

      <p className={styles.disclaimer}>
        This form is for internal use only. By submitting, you confirm that all
        information is accurate.
      </p>
    </form>
  );
}
