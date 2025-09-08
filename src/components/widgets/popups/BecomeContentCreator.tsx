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
    city: "",
    state: "",
    admmonth: "",
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

  const cityOptions = ["Mumbai", "Delhi", "Bangalore"];
  const stateOptions = ["Maharashtra", "Karnataka", "Delhi"];

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
                name="city"
                className="form-select"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="">city</option>
                {cityOptions.map((itemcity, idx) => (
                  <option
                    key={`${itemcity}-${idx}`}
                    value={itemcity.toLowerCase().replace(/\s/g, "-")}
                  >
                    {itemcity}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <select
                name="state"
                className="form-select"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">State</option>
                {stateOptions.map((item) => (
                  <option
                    key={item}
                    value={item.toLowerCase().replace(/\s/g, "-")}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <input
                type="text"
                name="min adm. per month"
                className="form-control"
                placeholder="min adm. per month*"
                required
                value={formData.admmonth}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
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
