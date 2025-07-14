// Counter.tsx
"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, animate } from "framer-motion";
import styles from "./style.module.scss";

export interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  label: string;
}

const Counter = ({
  from = 0,
  to,
  duration = 0.5,
  suffix = "",
  label,
}: CounterProps) => {
  const { ref, inView } = useInView({ triggerOnce: false });
  const [currentValue, setCurrentValue] = useState<number>(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          setCurrentValue(Math.floor(value));
        },
      });
      return () => controls.stop();
    } else {
      setCurrentValue(from);
    }
  }, [inView, from, to, duration]);

  return (
    <div ref={ref} className={styles.counterItem}>
      <motion.h2>
        {currentValue}
        <span>{suffix}</span>
      </motion.h2>
      <p>{label}</p>
    </div>
  );
};

export default Counter;
