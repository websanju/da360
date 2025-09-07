"use client";
import { usePopup } from "@components/widgets/popup/PopupContext";
import styles from "@components/leadCaptureSection/style.module.scss";
import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

// ✅ Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  slotBookingValidationDefaultValues,
  slotBookingValidationSchema,
} from "@/utils/validations";
import useLeadCaptureForm from "@/components/widgets/leadCaptureForm/useLeadCaptureForm";

interface LeadCaptureFormProps {
  title?: string;
}

const ApplyForm = ({ title }: LeadCaptureFormProps) => {
  const { closePopup } = usePopup();

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

  const { loading, onSubmit } = useLeadCaptureForm({courseId: "pgp_dm", closePopup});

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
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (_index, className) => {
              return `<span class="${className} ${style.customBullet}"></span>`;
            },
          }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          className={style.customSwiper}
        >
          <SwiperSlide>
            <Image
              width={338}
              height={488}
              alt="apply-1"
              src="/images/applyForm/mba.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={338}
              height={488}
              alt="apply-2"
              src="/images/applyForm/courses.jpg"
            />
          </SwiperSlide>
        </Swiper>
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

        <form onSubmit={handleSubmit(onSubmit)} style={{pointerEvents: loading ? "none" : "auto", opacity: loading ? 0.5 : 1}}>
          <h3>{title}</h3>
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
            {errors.name && (
              <p className={style.error}>{errors.name.message}</p>
            )}
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
              <p className={style.error}>{errors.email.message}</p>
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
              <p className={style.error}>{errors.phone_number.message}</p>
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
              <p className={style.error}>{errors.education.message}</p>
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
              <p className={style.error}>{errors.learning_mode.message}</p>
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
              <p className={style.error}>{errors.termsCondition.message}</p>
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
    </div>
  );
};

export default ApplyForm;
