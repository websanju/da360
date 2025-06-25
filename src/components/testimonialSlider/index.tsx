"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    company: {
      image: "/images/brand/zomato.png",
    },
    quote:
      "Partnering with creators through Passionfroot has been a game-changer for Intercom's Startup program. By collaborating with top newsletters, we’ve reached thousands of founders.",
    author: {
      name: "John Roche",
      title: "Digital Marketing Head",
      image: "/images/avatars/akshita.png",
    },
  },
  {
    company: {
      image: "/images/brand/upgrad.png",
    },
    quote:
      "Partnering with creators through Passionfroot has been a game-changer for Intercom's Startup program. By collaborating with top newsletters, we’ve reached thousands of founders.",
    author: {
      name: "John Roche",
      title: "Digital Marketing Head",
      image: "/images/avatars/akshita.png",
    },
  },
  // Add more testimonials if needed
];

const TestimonialSlider = () => {
  return (
    <section className={styles.testimonialSection}>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={`${styles.swiperContainer} custom-swiper`}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.testimonial}>
              <Image
                src={item.company.image}
                alt={item.author.name}
                width={210}
                height={100}
                className={styles.avatar}
              />
              <p className={styles.quote}>&quot;{item.quote}&quot;</p>
              <div className={styles.profile}>
                <Image
                  src={item.author.image}
                  alt={item.author.name}
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                <div className={styles.authorInfo}>
                  <strong>{item.author.name}</strong>
                  <span>{item.author.title}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
