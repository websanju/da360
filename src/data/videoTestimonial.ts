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
      name: "Madhu Bhargavi",
      designation: "Digital Marketing",
      image: "/images/Ambitious/text-1.png",
      profileImage: "/images/video-testimonials/madhu-bhargavi.png",
      type: "text",
      modalHTML: `
        <p>I should Thank DA360, for helping me in rewriting my story</p>
        <p>Switching from law to digital marketing wasn’t an easy decision. I had doubts, fears, and questions. But joining Digital Academy 360 turned out to be one of the best choices I’ve made. Their structured training, real-world projects, and constant support helped me not only learn digital marketing from scratch but also land a job in the field.</p>
        <p>What sets DA360 apart is how they truly care about your growth. From personal mentorship to placement assistance, they walk with you every step of the way. I’m proud to say that I changed my career path with confidence — and it started here.</p>
        <p>To anyone thinking of starting fresh or upgrading your skills, DA 360 is the Best Choice ✨💯</p>
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
      name: "Pooja M Reddy",
      designation: "Digital Marketing",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>This place was more than just a learning institute. Happy with placement support and guidance i got through out my journey at DA 360. This could be your wise choice to start your carrier in the field of Digital Marketing.</p>
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
