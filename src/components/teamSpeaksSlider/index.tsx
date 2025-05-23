"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import styles from "./style.module.scss";

type Testimonial = {
  name: string;
  role: string;
  message: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jyotsana",
    role: "Sales Manager",
    message:
      "From starting as an individual contributor to becoming a part of the design leadership team, I have always had the opportunity and platform at DigitalAcademy360, to push myself and",
    image: "/images/jyotsana.png",
  },
  {
    name: "Jyotsana",
    role: "Sales Manager",
    message:
      "From starting as an individual contributor to becoming a part of the design leadership team, I have always had the opportunity and platform at DigitalAcademy360, to push myself and",
    image: "/images/jyotsana.png",
  },
];

export default function TeamSpeaksSlider() {
  return (
    <section className={styles.teamSpeaksSlider}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.headerSection}>
              <h2>Team Speaks</h2>
            </div>
          </div>
        </div>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderNavigation}>
            <button
              className={`${styles.swiperPrev} swiper-button-prev1 swiper-button-prev`}
              id="customPrev16"
            ></button>
            <button
              className={`${styles.swiperNext} swiper-button-next1 swiper-button-next`}
              id="customNext16"
            ></button>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            className="max-w-4xl"
            navigation={{
              prevEl: "#customPrev16",
              nextEl: "#customNext16",
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className={styles.testimonial}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={367}
                      height={300}
                      className="object-cover rounded"
                    />
                  </div>
                  <div className={styles.content}>
                    <div>
                      <h3>Explore newer ways</h3>
                      <p>
                        <span>“</span>
                        {testimonial.message}
                      </p>
                    </div>
                    <div>
                      <p>{testimonial.name}</p>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
