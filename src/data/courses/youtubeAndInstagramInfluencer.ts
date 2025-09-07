import { CoursesType } from "@/types/courses";
import { HighlightSkill } from "@components/highlights";
import { CaseStudiesSection } from "@/types/caseStudies";
import { Project } from "@/components/liveProjectsSlider";

const liveProjectsData: Project[] = [
   {
    id: 1,
    title: "Instagram Reels Viral Campaign",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
      "",
      "",
    ],
    steps: [
      "Create & launch a 5-part Reels campaign for a brand",
      "Optimize with trending sounds & AI tools",
      "Track engagement & virality metrics",
      "Present campaign results in a mock brand pitch",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 217, 205, 0) 0%, #CDFFDE 53.35%)",
    bgsolid: "#CDFFDE",
  },
  {
    id: 2,
    title: "YouTube Channel Growth Plan",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
      "",
      "",
    ],
    steps: [
      "Launch a niche-specific YouTube channel",
      "Create & upload Shorts + Long-Form content",
      "Design SEO-friendly thumbnails & titles",
      "Present a 3-month channel growth roadmap",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 240, 205, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 3,
    title: "Influencer Media Kit & Brand Collaboration Pitch",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
      "",
      "",
    ],
    steps: [
       "Build a professional influencer portfolio & media kit",
      "Identify 3 potential brands for collaboration",
      "Draft outreach emails & pricing proposals",
      "Present pitch in a mock PR agency simulation",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(205, 255, 236, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 4,
    title: "Monetization Strategy Blueprint",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
      "",
      "",
    ],
    steps: [
      "Design a 6-month monetization plan",
      "Combine ads, affiliates & paid community strategies",
      "Use AI to forecast follower growth & earnings",
      "Present blueprint with revenue projections",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(205, 255, 236, 0) 0%, #CECDFF 53.35%)",
    bgsolid: "#CECDFF",
  },
];

const aiVibeCaseStudies: CaseStudiesSection = {
  heading: "Glimpse of Brand Case Studies",
  subheading: "Learn Through Real Business Challenges from Industry-Leading Brands",
  items: [
    {
      id: 1,
      logo: "/images/case-studies/mamaearth-logo.png",
      title: "Mamaearth – Influencer-Led Growth",
      description:
        "Mamaearth rapidly built its brand presence by leveraging micro and nano-influencers who created authentic user-generated content (UGC). This grassroots approach helped the brand gain trust among young consumers, especially in Tier 2 and Tier 3 cities. By encouraging real stories and reviews, Mamaearth turned everyday consumers into brand advocates.",
      tags: [
        "Nano Influencer Marketing",
        "UGC Strategy",
        "Community-Driven Branding",
      ],
    },
    {
      id: 2,
      logo: "/images/case-studies/nike-logo.png",
      title: "Nike India – YouTube Storytelling Series",
      description:
        "Nike India tapped into YouTube with a storytelling series that blended sports, lifestyle, and motivational narratives. Instead of traditional ads, they invested in long-form branded content featuring athletes and creators, positioning the brand as an enabler of dreams. Optimized with YouTube SEO, the series reached millions organically and fostered deep audience connection.",
      tags: [
        "YouTube SEO",
        "Branded Storytelling",
        "Long-Form Content Strategy",
      ],
    },
    {
      id: 3,
      logo: "/images/case-studies/mcdonalds-logo.png",
      title: "Zomato – Meme & Trend Hijacking",
      description:
        "Zomato became a master of internet culture by consistently using Instagram Reels and meme marketing. By quickly adapting to viral trends, their witty and relatable content drove massive spikes in engagement. Their playful brand voice and real-time content ensured Zomato stayed ahead of cultural conversations.",
      tags: [
        "Viral Content Creation",
        "Trend Forecasting",
        "Meme Marketing Strategy",
      ],
    },
  ],
};

const highlightSkills: HighlightSkill[] = [
  { name: "Instagram Growth" },
  { name: "YouTube Growth" },
  { name: "Reel Mastery" },
  { name: "Influencer Campaign" },
  { name: "Negotiation & Pitching" },
  { name: "YouTube SEO" },
  { name: "Youtube Monetization Tactics" },
  { name: "AI Video Editing" },
  { name: "Automation Tools" },
  { name: "Personal Branding" },
  { name: "On-Camera Confidence" },
  { name: "Building Media Kits" },
  { name: "Closing Brand Deals" },
  { name: "Community Building" },
  { name: "Retention Strategies" },
];


const PerformanceMarketingAndMediaBuying: CoursesType = {
  leadCapture: {
    titleOne: "YouTube & ",
    titleTwo: "Instagram Influencer Certification Course",
    subtitleOne: "Build your personal brand, grow your following, and monetize your influence with proven strategies, tools, and expert guidance tailored for Instagram and YouTube creators.",
    subtitleTwo: "",
    tags: ["2-Month Specialist Program", "80+ Hours of Learning","8+ Case Studies"],
  },
  courseId: "pgp_dm",
  cohortSectionHeading: "PGCP In Social Media & Influencer Marketing",
  Cohort: [
    {
      date: "August 25th",
      mode: "Offline",
      weekday: "(Mon-Fri)",
      capacity: "30 Seats",
      campus: "Bengaluru",
    },
    {
      date: "August 25th",
      mode: "Online",
      weekday: "(Mon-Fri)",
      capacity: "30 Seats",
      campus: "Bengaluru",
    },
  ],
  highlights: [
    { icon: "/images/icons/calendar.png", title: "Months", value: "2" },
    { icon: "/images/icons/clock.png", title: "Time", value: "9PM to 10:30PM" },
    // {
    //   icon: "/images/icons/courses.png",
    //   title: "",
    //   value: "",
    // },
    // {
    //   icon: "/images/icons/template.png",
    //   title: "",
    //   value: "",
    // },
    { icon: "/images/icons/ai.png", title: "AI Marketing Tools", value: "10+" },
    {
      icon: "/images/icons/hourglass.png",
      title: "Hours of Learning",
      value: "80+ ",
    },
    {
      icon: "/images/icons/case-study.png",
      title: "Case Studies",
      value: "8+",
    },
    {
      icon: "/images/icons/interview.png",
      title: "Content Creator Flows",
      value: "2+",
    },
    // {
    //   icon: "/images/icons/internship.png",
    //   title: "",
    //   value: "",
    // },
    {
      icon: "/images/icons/project.png",
      title: "Hands-On Projects",
      value: "2+",
    },
    {
      icon: "/images/icons/certificate.png",
      title: "Certifications",
      value: "3+",
    },
    // {
    //   icon: "/images/icons/specialisation.png",
    //   title: "Mentorship",
    //   value: "1:1",
    // },
    // {
    //   icon: "/images/icons/trainer.png",
    //   title: "",
    //   value: "",
    // },
  ],
  StoryHeader: {
    headerTitle: "Real Stories. Real Impact. Real Careers.",
    description: "Meet the Learners Who Transformed Their Futures with AI-Powered Digital Marketing",
  },
  LifeAtDA360Header: {
    headerTitle: "Life @ DA360 — Where Learning Gets Real",
    description: "Go Beyond the Classroom with Power-Packed Competitions & Creative Showdowns",
  },
  LearningRoadmapProps: {
    headerTitle: "Your 2-Month Creator Journey",
    description: "A step-by-step roadmap designed to help you grow from content creator to monetized influencer.",
  },
  programSkills: {
    heading: "Key Highlights of Our AI-Driven Digital Marketing Program",
    subheading: "Digital Marketing Skills You’ll Master to Lead the Future",
    skills: highlightSkills,
  },
  caseStudies: aiVibeCaseStudies,
  liveProjects: {
    section: "section6",
    heading: "AI Vibe Marketing Live Projects",
    description:
      "Practical, hands-on projects to apply AI marketing skills in real-world brand scenarios.",
    projects: liveProjectsData,
  },
};

export default PerformanceMarketingAndMediaBuying;