"use client";

import React, { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import styles from "./styles.module.scss";
interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const iti = intlTelInput(inputRef.current, {
      initialCountry: "in",
      separateDialCode: true,
    });

    const handleChange = () => {
      const number = iti.getNumber();
      onChange(number);
    };

    inputRef.current.addEventListener("input", handleChange);
    inputRef.current.addEventListener("countrychange", handleChange);

    return () => {
      inputRef.current?.removeEventListener("input", handleChange);
      inputRef.current?.removeEventListener("countrychange", handleChange);
    };
  }, []);

  return (
    <div className={styles.phoneInput}>
      <input
        ref={inputRef}
        type="tel"
        placeholder="Enter your phone number"
        defaultValue={value}
        className={styles.formInput}
        required
      />
    </div>
  );
};

export default PhoneInput;
