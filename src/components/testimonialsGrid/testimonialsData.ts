// testimonialsData.ts
export type Testimonial = {
  id: number;
  type: "text" | "video" | "logo";
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
    name: "Akshay",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/akshay.mp4",
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
    name: "Ankita",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/ankita.mp4",
  },
    {
    id: 6,
    type: "video",
    name: "Kesar",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/kesar.mp4",
  },
    {
    id: 7,
    type: "video",
    name: "Madhu",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/madhu.mp4",
  },
   {
    id: 8,
    type: "video",
    name: "Megha",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/megha.mp4",
  },
    {
    id: 9,
    type: "video",
    name: "Nayil",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/nayil.mp4",
  },
    {
    id: 10,
    type: "video",
    name: "Nivedh",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/nivedh.mp4",
  },
   {
    id: 11,
    type: "video",
    name: "Ruchika",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/ruchika.mp4",
  }, {
    id: 12,
    type: "video",
    name: "Sanyam",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/sanyam.mp4",
  },
   {
    id: 13,
    type: "video",
    name: "Snehal",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/snehal.mp4",
  },
   {
    id: 14,
    type: "video",
    name: "Vinayak",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/vinayak.mp4",
  },
   {
    id: 15,
    type: "video",
    name: "Vinayak",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/zeenath.mp4",
  },
  {
    id: 16,
    type: "logo",
    name: "Sanjay Lal",
    review:
      "Amazing experience at Digital Academy 360. Learnt all the ins and outs of Digital Marketing, enough to land me a job at my first interview ever. The faculty is highly experienced and will clear all your doubts and guide you when needed. If you want to become a professional Digital Marketer then DA360 is the perfect option.",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    source: "SEO Analyst",
  },
];
