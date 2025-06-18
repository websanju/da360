"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, animate } from "framer-motion";
import styles from "./style.module.scss";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  label: string;
}

const Counter = ({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  label,
}: CounterProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

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

const CounterOnScroll = () => {
  return (
    <section className={styles.counterSection}>
      <div className={`${styles.container} container`}>
        <div className="row g-4">
          <div className="col-6 col-md-3">
            <Counter
              from={0}
              to={1000}
              duration={2}
              suffix="+"
              label="Companies Our Learners Work In"
            />
          </div>
          <div className="col-6 col-md-3">
            <Counter
              from={0}
              to={93}
              duration={2}
              suffix="%"
              label="Learners Placed On Average"
            />
          </div>
          <div className="col-6 col-md-3">
            <Counter
              from={0}
              to={300}
              duration={2}
              suffix="+"
              label="Entrepreneurs & Freelancers Created"
            />
          </div>
          <div className="col-6 col-md-3">
            <Counter
              from={0}
              to={50000}
              duration={2}
              suffix="+"
              label="Careers  Transformed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterOnScroll;
