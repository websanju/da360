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
  brand?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    type: "logo",
    name: "Madhu Bhargavi",
    review:
      `<p>I should Thank DA360, for helping me in rewriting my story</p> <p>Switching from law to digital marketing wasn’t an easy decision. I had doubts, fears, and questions. But joining Digital Academy 360 turned out to be one of the best choices I’ve made. Their structured training, real-world projects, and constant support helped me not only learn digital marketing from scratch but also land a job in the field.</p> <p>What sets DA360 apart is how they truly care about your growth. From personal mentorship to placement assistance, they walk with you every step of the way. I’m proud to say that I changed my career path with confidence — and it started here.</p> <p>To anyone thinking of starting fresh or upgrading your skills, DA 360 is the Best Choice ✨💯</p>`,
    rating: 5,
    avatar: "/images/video-testimonials/madhu-bhargavi.png",
    source: "Digital Marketing",
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
    name: "Pooja M Reddy",
    review: `<p>This place was more than just a learning institute. Happy with placement support and guidance i got through out my journey at DA 360. This could be your wise choice to start your carrier in the field of Digital Marketing.</p>`,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
    source: "Digital Marketing",
  },
  {
    id: 4,
    type: "logo",
    name: "Avinash Aralappanavar",
    review:
      `<p>I highly recommend Digital Academy 360's full stack development course for anyone looking to enter the software development field. The course provided me with a strong foundation in software development and a job-oriented curriculum that prepared me for the corporate world. The instructors were highly knowledgeable and always available to answer questions. What impressed me the most was that they delivered on their promise of 100% placement. Thanks to Digital Academy 360, I am now a successful full stack developer.</p>
      `,
    rating: 5,
    avatar: "/images/video-testimonials/avinash_aralappanavar.jpg",
    source: "Full Stack Developer",
    brand: "Facebook",
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
    name: "Aswin J Prakash",
    review:
       `<p>Learning at Digital Academy 360 was a great experience. The training was practical, the mentors were supportive, and I got hands-on exposure to real digital marketing tools and campaigns. It really helped me grow and I made some amazing friends along the way.</p>
      `,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
    source: "Digital Marketing",
  },
  {
    id: 17,
    type: "logo",
    name: "Megha Jain",
    review:
       `<p>Digital Academy 360 is the best place to learn and grow in digital marketing! I joined their new Leadership & AI program, a 9-month course with an internship opportunity, and it has been an amazing experience. The trainers are highly knowledgeable, supportive, and teach everything from scratch, making it easy for beginners to understand.</p>
        <p>The academy provides a well-structured curriculum, hands-on training, and real-time projects that help in gaining practical skills. The learning environment is friendly, and the trainers are always ready to clear doubts.</p>
        <p>I am truly grateful to my trainers and batchmates for their continuous support throughout this journey. If you want to build and grow your career in digital marketing with the best guidance, Digital Academy 360 is the perfect place to start</p>
      `,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
    source: "Digital Marketing",
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
    id: 18,
    type: "logo",
    name: "Chandana Chandu",
    review:
       `
        <p>I was completely new to digital marketing, but this course made it so easy to learn, The lessons were well structured and covered all the important topics. I learned how to use social media for business, how to create ads, and how to attract more customers online. The trainers were friendly and explained everything in simple words. Thank to Digital Academy 360 for the Great Learning experience</p>
      `,
    rating: 5,
    avatar: "/images/video-testimonials/chandana-chandu.png",
    source: "Digital Marketing",
  },
    {
    id: 18,
    type: "logo",
    name: "Anjali B",
    review:
       `
        <p>I was an introvert and wanted to learn Digital Marketing, so I joined the 6 month course at Digital Academy 360. In the beginning, it was very difficult for me when the trainers asked us to present in class. I had no hope of completing the course because I used to get very nervous. But later, the trainers encouraged me a lot, and with their support, I improved. Eventually, I even won the Best Performer for Presentation award. After completing the course, I got placed as a Performance Marketer. It was a life changing experience for me.</p>
      `,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
    source: "Digital Marketing",
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
    id: 19,
    type: "logo",
    name: "Parimitha A Pari",
    review:
       `<p>I have completed digital marketing course at digital academy 360 and it was greatful experience. The trainers provided hands on guidence that helped me to build strong practical skills in SEO, Google ads, and social media marketing.</p>
        <p>Thank you, Digital Academy 360, for such a valuable learning experience.</p>
      `,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
    source: "Digital Marketing",
  },{
    id: 20,
    type: "logo",
    name: "Darshana Das",
    review:
      `<p>I joined Digital Academy 360 for a Digital Marketing course after doing a lot of research. During the course, I got the chance to work on freelancing projects with the help of the trainers. After completing the course, I gained more experience and became a freelancer. I am thankful to Digital Academy 360 for their support.</p>
      `,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
    source: "Digital Marketing",
  },
     {
    id: 21,
    type: "logo",
    name: "Atul Kumar",
    review:
      `<p>Digital academy 360 is the best institute for digital marketing training. The trainers are well versed to provide you a quality training with real-time examples. They are always ready to clear even the basic doubt about what we ask them. They are very friendly and experienced trainers. I would like to thank my trainer Rohith sir, Kamlesh sir & Subash sir for helping and supporting me throughout the learning period.</p>
      <p>I also like to thank Sandhya ma'am and Ashwin sir as both was so helpful and kind throughout the admission process to internship & placements.</p>
      `,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
       source: "Digital Marketing",
    brand: "Facebook"
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
    id: 22,
    type: "logo",
    name: "Sunil Sharma",
    review:
      `<p>My experience with Digital Academy 360 was amazing . The Faculty was an expert and was very good in communicating and even  the method of teaching. They help you a lot with the placements and internships. I am working with a good organization now just because  Digital Academy 360 Jayanagar branch. Special thanks teachers and faculties I'm extremely happy !!</p>
      <p>Thank you Digital Academy 360 Jayanagar branch.</p>
      `,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
         source: "Digital Marketing",
    brand:"Facebook"
  },
   {
    id: 23,
    type: "logo",
    name: "Kaushik Yadav",
    review:
      `<p>Digital Academy 360 is one of the best digital marketing courses in Bangalore. It has the superb learning experience for Digital Marketing. It has the best staff and  is very helpful.  It is the great place to build your career according to your interest .</p>
      `,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
     source: "Digital Marketing",
    brand:"Facebook"
  },
  {
    id: 11,
    type: "video",
    name: "Ruchika",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/ruchika.mp4",
  },
    {
    id: 24,
    type: "logo",
    name: "Kumari Meghna",
    review:
      `<p>I came across Digital Academy 360 when I was looking for the best digital marketing institute in Bangalore that would provide practical and theoretical knowledge about Digital Marketing. My journey with Digital Academy 360 has been amazing. Each of the trainers is an expert in the field of Digital Marketing, who helped increase our knowledge about the field in a very unique way. I would certainly recommend Digital Academy 360 to anyone who wants to pursue Digital Marketing Course or know about it.</p>
      `,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
      source: "Digital Marketing",
    brand:"Facebook"
  },
     {
    id: 24,
    type: "logo",
    name: "Vikram Solanki",
    review:
      `<p>I joined Digital Academy 360 without completing my graduation and wasn’t initially serious about the course or my career. I was often irregular to classes, but the trainers noticed and took the time to offer me valuable career guidance. Their encouragement made me realize the importance of the course, pushing me to become more focused and dedicated. From then on, I attended classes regularly and put in consistent effort to learn. With the skills and knowledge I gained, I successfully completed the course and have since built a career as a freelance digital marketer.</p>
      `,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
    source: "Digital Marketing",
  },
   {
    id: 12,
    type: "video",
    name: "Sanyam",
    rating: 5,
    avatar: "/images/testimonials/video6.webp",
    videoUrl: "/images/video-testimonials/sanyam.mp4",
  },
      {
    id: 25,
    type: "logo",
    name: "Deeksha H",
    review:
      `<p>I recently completed the Digital Marketing course at Digital Academy 360, The knowledge and skills I gained during the course were invaluable. I highly recommend Digital Academy 360 to anyone looking to enhance their digital marketing expertise.</p>
      `,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
    source: "Digital Marketing",
  },
   {
    id: 26,
    type: "logo",
    name: "Sudha Singh",
    review:
      `<p>I am thrilled to announce that I have officially graduated from Digital Academy 360 with a degree in Digital Marketing</p>
      <p>During my time at Digital Academy 360, I learned about performance marketing, personal branding, and social media, SEO. I am excited to take the next step in my career and open to new opportunities in the digital marketing industry.</p>
      <p>I'm heartfully thankful to all the trainers who helped me a lot to learn all Digital Marketing skill.</p>
      <p>Now as a Digital Marketer, I'm passionate about helping businesses thrive in the online world. My expertise In SEO, social media, email marketing, and content strategy, with a keen focus on optimizing performance and maximizing ROI4. I specialize in creating bespoke strategies. I am ready to connect and take the initiative to help you.</p>`,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
    source: "Digital Marketing",
  },
   {
    id: 26,
    type: "logo",
    name: "Swamygowda Savitha",
    review:
      `<p>I joined Digital Academy 360 with no prior knowledge of digital marketing, and I can confidently say it was one of the best decisions of my career. The trainers are incredibly skilled and bring years of industry experience to the table. Their advanced curriculum is hands-on and relevant to the current trends. Thanks to their guidance, I was able to secure a fantastic job in digital marketing</p>`,
    rating: 5,
    avatar: "/images/Ambitious/default-avatar.svg",
    source: "Digital Marketing",
  },
];
