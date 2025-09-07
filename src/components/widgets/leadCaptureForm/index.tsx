"use client";

import React from "react";
import styles from "@components/leadCaptureSection/style.module.scss";
import Link from "next/link";
import {
  slotBookingValidationDefaultValues,
  slotBookingValidationSchema,
} from "@/utils/validations";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useLeadCaptureForm from "./useLeadCaptureForm";

interface LeadCaptureFormProps {
  title?: string;
  courseId?: string;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  title = "Book your slot",
  courseId,
}) => {
  const methods = useForm({
    resolver: yupResolver(slotBookingValidationSchema),
    defaultValues: slotBookingValidationDefaultValues,
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const experienceOptions = ["Fresher", "1-2 Years", "3+ Years"];

  const { loading, onSubmit } = useLeadCaptureForm({courseId: courseId || "pgp_dm"});

  return (
    <div className={styles.formBox}>
      <h3>{title}</h3>
      <form onSubmit={handleSubmit(onSubmit)} style={{pointerEvents: loading ? "none" : "auto", opacity: loading ? 0.5 : 1}}>
        <div className="form-field">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="form-control"
                placeholder="Full Name*"
              />
            )}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>
        <div className="form-field">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="form-control"
                placeholder="Email*"
              />
            )}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>
        <div className="form-field">
          <div className={`${styles.phoneCodefield} d-flex`}>
            <span className={styles.phoneCode}>
              <select name="phoneCode" className="form-select" required>
                <option value="+91">+91 IN</option>
                <option value="+1">+1 US</option>
                <option value="+44">+44 UK</option>
                <option value="+61">+61 AU</option>
              </select>
            </span>
            <Controller
              name="phone_number"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  className="form-control"
                  placeholder="Mobile Number*"
                />
              )}
            />
          </div>
          {errors.phone_number && (
            <p className={styles.error}>{errors.phone_number.message}</p>
          )}
        </div>
        <div className="form-field">
          <Controller
            name="education"
            control={control}
            render={({ field }) => (
              <select {...field} className="form-select">
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
            )}
          />
          {errors.education && (
            <p className={styles.error}>{errors.education.message}</p>
          )}
        </div>
        <div className="form-field">
          <div className={`${styles.formRadio} form-radio`}>
            <label>Learning Mode:</label>
            <div className="form-radio-inline">
              <Controller
                name="learning_mode"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="form-radio-input"
                    type="radio"
                    name="mode"
                    value="online"
                    id="online"
                  />
                )}
              />
              <label className="form-radio-label" htmlFor="online">
                Online
              </label>
            </div>
            <div className="form-radio-inline">
              <Controller
                name="learning_mode"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="form-radio-input"
                    type="radio"
                    name="mode"
                    value="offline"
                    id="offline"
                  />
                )}
              />
              <label className="form-radio-label" htmlFor="offline">
                Offline
              </label>
            </div>
          </div>
          {errors.learning_mode && (
            <p className={styles.error}>{errors.learning_mode.message}</p>
          )}
        </div>
        <div className="form-field">
          <div className="form-check">
            <Controller
              name="termsCondition"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="form-check-input"
                  type="checkbox"
                  name="termsCondition"
                  id="updates"
                />
              )}
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
          {errors.termsCondition && (
            <p className={styles.error}>{errors.termsCondition.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-black w-100 rounded-pill"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
