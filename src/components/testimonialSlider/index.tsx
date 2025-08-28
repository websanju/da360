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
      "This place was more than just a learning institute. Happy with placement support and guidance i got through out my journey at DA 360. This could be your wise choice to start your carrier in the field of Digital Marketing.",
    author: {
      name: "Pooja M Reddy",
      title: "Digital Marketing",
      image: "/images/Ambitious/default-avatar.svg",
    },
  },
  {
    company: {
      image: "/images/brand/upgrad.png",
    },
    quote:
      "Learning at Digital Academy 360 was a great experience. The training was practical, the mentors were supportive, and I got hands-on exposure to real digital marketing tools and campaigns. It really helped me grow and I made some amazing friends along the way.",
    author: {
      name: "Aswin J Prakash",
      title: "Digital Marketing",
      image: "/images/Ambitious/default-avatar.svg",
    },
  },
  {
    company: {
      image: "/images/brand/upgrad.png",
    },
    quote:
      "I have completed digital marketing course at digital academy 360 and it was greatful experience. The trainers provided hands on guidence that helped me to build strong practical skills in SEO, Google ads, and social media marketing. Thank you, Digital Academy 360, for such a valuable learning experience.",
    author: {
      name: "Parimitha A Pari",
      title: "Digital Marketing",
      image: "/images/Ambitious/default-avatar.svg",
    },
  },

  {
    company: {
      image: "/images/brand/upgrad.png",
    },
    quote:
      "I joined Digital Academy 360 for a Digital Marketing course after doing a lot of research. During the course, I got the chance to work on freelancing projects with the help of the trainers. After completing the course, I gained more experience and became a freelancer. I am thankful to Digital Academy 360 for their support.",
    author: {
      name: "Darshana Das",
      title: "Digital Marketing",
      image: "/images/Ambitious/default-avatar.svg",
    },
  },

  {
    company: {
      image: "/images/brand/upgrad.png",
    },
    quote:
      "Digital Academy 360 is one of the best digital marketing courses in Bangalore. It has the superb learning experience for Digital Marketing. It has the best staff and is very helpful. It is the great place to build your career according to your interest .",
    author: {
      name: "Kaushik Yadav",
      title: "Digital Marketing",
      image: "/images/Ambitious/default-avatar.svg",
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
              {/* <Image
                src={item.company.image}
                alt={item.author.name}
                width={210}
                height={100}
                className={styles.avatar}
              /> */}
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
