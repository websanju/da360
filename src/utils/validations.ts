import * as Yup from "yup";

export const slotBookingValidationDefaultValues = {
  name: "",
  email: "",
  phone_number: "",
  education: "",
  learning_mode: "",
  termsCondition: "",
};

export const slotBookingValidationSchema = Yup.object({
  name: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  phone_number: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  education: Yup.string().required("Education field is required"),
  learning_mode: Yup.string().required("Learning mode is required"),
  termsCondition: Yup.string()
    .required("You must accept the terms and conditions"),
});
