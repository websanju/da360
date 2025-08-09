// ----- TYPES -----
export type Person = {
  id: number;
  name: string;
  designation?: string;
  image?: string;
  profileImage?: string;
  type: "text" | "video" | "noBgVideo" | "viewMore";
  modalHTML?: string;
  videoUrl?: string;
  bgColor: string;
  textColor?: string;
  calssName?: string;
};

type SlideContent = Person[];

// ----- SLIDES DATA -----
export const slides: SlideContent[] = [
  [
    {
      id: 1,
      name: "Ankita MN",
      image: "/images/video-testimonials/ankita.jpg",
      designation: "Marketing Executive",
      type: "video",
      videoUrl: "/images/video-testimonials/ankita.mp4",
      bgColor: "#E9492D",
    },
    {
      id: 2,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-1.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>I leveraged the new skills in landing a good job...</p>
      `,
      bgColor: "#4b896a",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 3,
      name: "Madhu Bhargavi",
      image: "/images/video-testimonials/madhu.jpg",
      designation: "Social Media Marketing Specialist",
      type: "video",
      videoUrl: "/images/video-testimonials/madhu.mp4",
      bgColor: "#9554CA",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 4,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Its a good place to learn if you are starting out in Digital Marketing field. Trainers are well-experienced and if you are diligent, they will help you in every way possible...</p>
      `,
      bgColor: "#F6B39F",
      textColor: "#000",
      calssName: "threeCards",
    },
  ],
  [
    {
      id: 5,
      name: "Nivedh Ullas",
      image: "/images/video-testimonials/nivedh.jpg",
      type: "video",
      videoUrl: "/images/video-testimonials/nivedh.mp4",
      designation: "Marketing Executive",
      bgColor: "#3ACFAF",
      textColor: "#fff",
    },
  ],

  [
    {
      id: 6,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-3.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Trainers help a lot to understand the concept and clear all your doubts and make the learning easy...</p>
      `,
      bgColor: "#063F2E",
      textColor: "#fff",
      calssName: "greenCard",
    },
    {
      id: 7,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-4.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>I leveraged the new skills in landing a good job...</p>
      `,
      bgColor: "#8588E6",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 8,
      name: "Snehal",
      image: "/images/video-testimonials/snehal.jpg",
      type: "noBgVideo",
      videoUrl: "/images/video-testimonials/snehal.mp4",
      designation: "Marketing Executive",
      bgColor: "#3ACFAF",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 9,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#C5EBD4",
      textColor: "#000",
    },
  ],
  [
    {
      id: 1,
      name: "Vinayak",
      image: "/images/video-testimonials/vinayak.jpg",
      designation: "Marketing Executive",
      type: "video",
      videoUrl: "/images/video-testimonials/vinayak.mp4",
      bgColor: "#E9492D",
    },
    {
      id: 2,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-1.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>I leveraged the new skills in landing a good job...</p>
      `,
      bgColor: "#4b896a",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 3,
      name: "kesar",
      image: "/images/video-testimonials/kesar.jpg",
      designation: "Social Media Marketing Specialist",
      type: "video",
      videoUrl: "/images/video-testimonials/kesar.mp4",
      bgColor: "#9554CA",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 4,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#FED3DA",
      textColor: "#000",
    },
  ],
  [
    {
      id: 5,
      name: "Mohammed Nayil",
      image: "/images/video-testimonials/nayil.jpg",
      type: "video",
      videoUrl: "/images/video-testimonials/nayil.mp4",
      designation: "Marketing Executive",
      bgColor: "#3ACFAF",
      textColor: "#fff",
    },
  ],

  [
    {
      id: 6,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-3.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Trainers help a lot to understand the concept and clear all your doubts and make the learning easy...</p>
      `,
      bgColor: "#063F2E",
      textColor: "#fff",
      calssName: "greenCard",
    },
    {
      id: 7,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-4.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>I leveraged the new skills in landing a good job...</p>
      `,
      bgColor: "#8588E6",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 8,
      name: "Sanyam",
      image: "/images/video-testimonials/sanyam.jpg",
      type: "noBgVideo",
      videoUrl: "/images/video-testimonials/sanyam.mp4",
      designation: "Marketing Executive",
      bgColor: "#F6B39F",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 9,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
      `,
      bgColor: "#C5EBD4",
      textColor: "#000",
    },
  ],
  [
    {
      id: 1,
      name: "Zeenath",
      image: "/images/video-testimonials/zeenath.jpg",
      designation: "Marketing Executive",
      type: "video",
      videoUrl: "/images/video-testimonials/zeenath.mp4",
      bgColor: "#E9492D",
    },
    {
      id: 2,
      name: "Sonal Lal",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-1.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>I leveraged the new skills in landing a good job...</p>
      `,
      bgColor: "#4b896a",
      textColor: "#fff",
    },
  ],
  [
    {
      id: 9,
      name: "viewMore",
      type: "viewMore",
      bgColor: "#E4E4E4",
      textColor: "#000",
    },
  ],
];
