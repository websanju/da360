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
  maxLength?: number;

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
      name: "Avinash Aralappanavar",
      designation: "Full Stack Developer",
      image: "/images/Ambitious/text-3.png",
      profileImage: "/images/video-testimonials/avinash_aralappanavar.jpg",
      type: "text",
      modalHTML: `
        <p>I highly recommend Digital Academy 360's full stack development course for anyone looking to enter the software development field. The course provided me with a strong foundation in software development and a job-oriented curriculum that prepared me for the corporate world. The instructors were highly knowledgeable and always available to answer questions. What impressed me the most was that they delivered on their promise of 100% placement. Thanks to Digital Academy 360, I am now a successful full stack developer.</p>
      `,
      bgColor: "#063F2E",
      textColor: "#fff",
      calssName: "greenCard",
      maxLength: 190,
    },
    {
      id: 7,
      name: "Aswin J Prakash",
      designation: "Digital Marketing",
      image: "/images/Ambitious/text-4.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Learning at Digital Academy 360 was a great experience. The training was practical, the mentors were supportive, and I got hands-on exposure to real digital marketing tools and campaigns. It really helped me grow and I made some amazing friends along the way.</p>
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
      name: "Megha Jain",
      designation: "Digital Marketing",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Digital Academy 360 is the best place to learn and grow in digital marketing! I joined their new Leadership & AI program, a 9-month course with an internship opportunity, and it has been an amazing experience. The trainers are highly knowledgeable, supportive, and teach everything from scratch, making it easy for beginners to understand.</p>
        <p>The academy provides a well-structured curriculum, hands-on training, and real-time projects that help in gaining practical skills. The learning environment is friendly, and the trainers are always ready to clear doubts.</p>
        <p>I am truly grateful to my trainers and batchmates for their continuous support throughout this journey. If you want to build and grow your career in digital marketing with the best guidance, Digital Academy 360 is the perfect place to start</p>
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
      name: "Chandana Chandu",
      designation: "Digital Marketing",
      image: "/images/Ambitious/text-1.png",
      profileImage: "/images/video-testimonials/chandana-chandu.png",
      type: "text",
      modalHTML: `
        <p>I was completely new to digital marketing, but this course made it so easy to learn, The lessons were well structured and covered all the important topics. I learned how to use social media for business, how to create ads, and how to attract more customers online. The trainers were friendly and explained everything in simple words. Thank to Digital Academy 360 for the Great Learning experience</p>
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
      name: "Anjali B",
      designation: "Digital Marketing",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>I was an introvert and wanted to learn Digital Marketing, so I joined the 6 month course at Digital Academy 360. In the beginning, it was very difficult for me when the trainers asked us to present in class. I had no hope of completing the course because I used to get very nervous. But later, the trainers encouraged me a lot, and with their support, I improved. Eventually, I even won the Best Performer for Presentation award. After completing the course, I got placed as a Performance Marketer. It was a life changing experience for me.</p>
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
      name: "Parimitha A Pari",
      designation: "Digital Marketing",
      image: "/images/Ambitious/text-3.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>I have completed digital marketing course at digital academy 360 and it was greatful experience. The trainers provided hands on guidence that helped me to build strong practical skills in SEO, Google ads, and social media marketing.</p>
        <p>Thank you, Digital Academy 360, for such a valuable learning experience.</p>
      `,
      bgColor: "#063F2E",
      textColor: "#fff",
      calssName: "greenCard",
      maxLength: 190,
    },
    {
      id: 7,
      name: "Darshana Das",
      designation: "Digital Marketing",
      image: "/images/Ambitious/text-4.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>I joined Digital Academy 360 for a Digital Marketing course after doing a lot of research. During the course, I got the chance to work on freelancing projects with the help of the trainers. After completing the course, I gained more experience and became a freelancer. I am thankful to Digital Academy 360 for their support.</p>
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
      name: "Atul Kumar",
      designation: "SEO Analyst",
      image: "/images/Ambitious/text-2.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>Digital academy 360 is the best institute for digital marketing training. The trainers are well versed to provide you a quality training with real-time examples. They are always ready to clear even the basic doubt about what we ask them. They are very friendly and experienced trainers. I would like to thank my trainer Rohith sir, Kamlesh sir & Subash sir for helping and supporting me throughout the learning period.</p>
        <p>I also like to thank Sandhya ma'am and Ashwin sir as both was so helpful and kind throughout the admission process to internship & placements.</p>
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
      name: "Sunil Sharma",
      designation: "Digital Marketing",
      image: "/images/Ambitious/text-1.png",
      profileImage: "/images/Ambitious/default-avatar.svg",
      type: "text",
      modalHTML: `
        <p>My experience with Digital Academy 360 was amazing . The Faculty was an expert and was very good in communicating and even  the method of teaching. They help you a lot with the placements and internships. I am working with a good organization now just because  Digital Academy 360 Jayanagar branch. Special thanks teachers and faculties I'm extremely happy !!</p>
        <p>Thank you Digital Academy 360 Jayanagar branch.</p>
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
