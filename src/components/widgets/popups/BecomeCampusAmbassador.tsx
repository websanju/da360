"use client";
import { useState } from "react";
import { usePopup } from "@components/widgets/popup/PopupContext";
import styles from "@components/leadCaptureSection/style.module.scss";
import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

interface LeadCaptureFormProps {
  title?: string;
}

const ApplyForm = ({ title }: LeadCaptureFormProps) => {
  const { closePopup } = usePopup();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    title: "",
    phoneCode: "+91",
    phone: "",
    experience: "",
    mode2: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  const experienceOptions = ["Fresher", "1-2 Years", "3+ Years"];

  return (
    <div className={style.applyForm}>
      <button type="button" className={style.closeForm} onClick={closePopup}>
        <Image
          src="/images/icons/close.svg"
          alt="logo"
          width={14}
          height={14}
        />
      </button>

      {/* ✅ Swiper Slider */}
      <div className={style.formBanner}>
        <Image
          width={338}
          height={488}
          alt="apply-1"
          src="/images/applyForm/mba.jpg"
        />
      </div>

      {/* ✅ Form Section */}
      <div className={style.formBox}>
        <div className={style.formHeader}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={177.64}
              height={52.43}
            />
          </Link>
          <button type="button" onClick={closePopup}>
            <Image
              src="/images/icons/close.svg"
              alt="logo"
              width={14}
              height={14}
            />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <h3>{title}</h3>
            <div className="form-field">
              <input
                type="text"
                name="fullName"
                className="form-control"
                placeholder="Full Name*"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email*"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={`${styles.phoneCodefield} form-field d-flex`}>
              <span className={styles.phoneCode}>
                <select
                  name="phoneCode"
                  className="form-select"
                  required
                  value={formData.phoneCode}
                  onChange={handleChange}
                >
                  <option value="+91">+91 IN</option>
                  <option value="+1">+1 US</option>
                  <option value="+44">+44 UK</option>
                  <option value="+61">+61 AU</option>
                </select>
              </span>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Mobile Number*"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <select
                name="experience"
                className="form-select"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="">Work Experience</option>
                {experienceOptions.map((item) => (
                  <option
                    key={item}
                    value={item.toLowerCase().replace(/\s/g, "-")}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className={`${styles.formRadio} form-field form-radio`}>
              <label>Learning Mode:</label>
              <div className="form-radio-inline">
                <input
                  className="form-radio-input"
                  type="radio"
                  name="mode2"
                  value="online"
                  checked={formData.mode2 === "online"}
                  onChange={handleChange}
                  id="online"
                />
                <label className="form-radio-label" htmlFor="online">
                  Online
                </label>
              </div>
              <div className="form-radio-inline">
                <input
                  className="form-radio-input"
                  type="radio"
                  name="mode2"
                  value="offline"
                  checked={formData.mode2 === "offline"}
                  onChange={handleChange}
                  id="offline"
                />
                <label className="form-radio-label" htmlFor="offline">
                  Offline
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className="form-field form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="consent"
                id="updates"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <label className="form-check-label small" htmlFor="updates">
                I authorize Digital Academy 360 and its associates to contact me
                via Call, Email, WhatsApp & SMS. I accept to{" "}
                <Link
                  target="_blank"
                  className="fw-bold"
                  href={"/da360-privacy-policy"}
                >
                  Privacy Policy
                </Link>{" "}
                &{" "}
                <Link
                  className="fw-bold"
                  target="_blank"
                  href={"/terms-conditions"}
                >
                  Term of Use
                </Link>
                .
              </label>
            </div>
            <button type="submit" className="btn btn-black w-100 rounded-pill">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
