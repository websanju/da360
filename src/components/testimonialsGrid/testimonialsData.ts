// testimonialsData.ts
export type Testimonial = {
    id: number;
    type:"text" | "video" | "logo";
    name: string;
    review?: string;
    rating: number;
    avatar: string;
    source?: string;
    videoUrl?: string;
  };
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      type: "logo",
      name: "Sanjay Lal",
      review:
        "Amazing experience at Digital Academy 360. Learnt all the ins and outs of Digital Marketing, enough to land me a job at my first interview ever. The faculty is highly experienced and will clear all your doubts and guide you when needed. If you want to become a professional Digital Marketer then DA360 is the perfect option.",
      rating: 5,
      avatar: "/images/testimonials/video6.webp",
      source: "SEO Analyst",
    },
    {
      id: 2,
      type: "video",
      name: "Sanjay Lal",
      rating: 5,
      avatar: "/images/testimonials/video6.webp",
      videoUrl: "/images/testimonials/digital-academy-360-testimonials-deepak.mp4",
    },
    {
      id: 3,
      type: "logo",
      name: "Sanjay Lal",
      review: "Highly recommend this to anyone looking to upskill.d",
      rating: 5,
      avatar: "/images/testimonials/video6.webp",
      source: "LinkedIn",
      },
      {
        id: 4,
         type: "logo",
        name: "Sanjay Lal",
        review:
          "Amazing experience at Digital Academy 360. Learnt all the ins and outs of Digital Marketing, enough to land me a job at my first interview ever. The faculty is highly experienced and will clear all your doubts and guide you when needed. If you want to become a professional Digital Marketer then DA360 is the perfect option.",
        rating: 5,
        avatar: "/images/testimonials/video6.webp",
        source: "SEO Analyst",
      },
    {
      id: 5,
      type: "video",
      name: "Sanjay Lal",
      rating: 5,
      avatar: "/images/testimonials/video6.webp",
      videoUrl: "/images/testimonials/digital-academy-360-testimonials-deepak.mp4",
      },
      {
        id: 6,
         type: "logo",
        name: "Sanjay Lal",
        review:
          "Amazing experience at Digital Academy 360. Learnt all the ins and outs of Digital Marketing, enough to land me a job at my first interview ever. The faculty is highly experienced and will clear all your doubts and guide you when needed. If you want to become a professional Digital Marketer then DA360 is the perfect option.",
        rating: 5,
        avatar: "/images/testimonials/video6.webp",
        source: "SEO Analyst",
      },
  ];
  