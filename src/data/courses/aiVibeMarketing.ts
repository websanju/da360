import { CoursesType } from "@/types/courses";
import { HighlightSkill } from "@components/highlights";
import { CaseStudiesSection } from "@/types/caseStudies";
import { Project } from "@/components/liveProjectsSlider";

const liveProjectsData: Project[] = [
   {
    id: 1,
    title: "AI Vibe Ad Campaign Development",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
      "",
      "",
    ],
    steps: [
      "Design a viral ad campaign using AI for creative hooks",
      "Develop multiple ad creatives with Canva AI & Midjourney",
      "Test audience engagement with AI-driven personalization",
      "Submit a final campaign presentation with performance metrics",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 217, 205, 0) 0%, #CDFFDE 53.35%)",
    bgsolid: "#CDFFDE",
  },
  {
    id: 2,
    title: "Conversational AI Chatbot Flow",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
      "",
      "",
    ],
    steps: [
      "Build an AI chatbot journey for WhatsApp & websites",
      "Write scripts using ChatGPT prompts",
      "Integrate chatbot with CRM tools",
      "Present chatbot demo with real-time simulations",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 240, 205, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 3,
    title: "AI-Driven SEO Content Hub",
    duration: "",
    heading:
      "",
    details: [
      "",
      "",
      "",
    ],
    steps: [
      "Create content clusters using AI keyword insights",
      "Optimize for voice search and semantic SEO",
      "Use Surfer & MarketMuse for AI content scoring",
      "Deliver a live SEO performance dashboard",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(205, 255, 236, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 4,
    title: "Social Listening & Influencer Mapping with AI",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
      "",
      "",
    ],
    steps: [
      "Track brand sentiment using AI tools",
      "Identify high-impact influencers with Heepsy AI",
      "Design a data-driven influencer outreach strategy",
      "Present insights in a mock client pitch session",
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
      logo: "/images/mcdonalds-logo.png",
      title: "McDonald’s India – Localizing a Global Brand",
      description:
        "McDonald’s India adapted its global brand strategy to meet local market preferences—replacing beef-based offerings, introducing aloo tikki burgers, and launching value pricing to capture the price-sensitive Indian audience. Their digital marketing focused on regional content, hyper-local social media campaigns, and app-based loyalty programs.",
      tags: [
        "Marketing Strategy",
        "Consumer Segmentation",
        "Localization in Campaigns",
        "Social Media Planning",
      ],
    },
    {
      id: 2,
      logo: "/images/motherdairy-logo.png",
      title: "Mother Dairy – Building Trust Through Content",
      description:
        "Mother Dairy strengthened its brand presence by focusing on emotional storytelling and purpose-driven marketing. Campaigns like 'Rishton Ka Swad Badhaiye' positioned the brand as a part of Indian family life. It leveraged SEO, blog content, influencer tie-ups, and YouTube storytelling to increase brand engagement and product awareness.",
      tags: [
        "Content Marketing",
        "SEO & Organic Reach",
        "Video Marketing Strategy",
        "Influencer Marketing",
      ],
    },
    {
      id: 3,
      logo: "/images/mcdonalds-logo.png",
      title: "Zomato – Data-Driven Performance Marketing",
      description:
        "Zomato scaled its customer acquisition by running high-performing campaigns during IPL seasons, using data-backed insights to target users based on cuisine preferences, location, and time of day. They executed geo-targeted Google and Meta ads, retargeting sequences, and meme-based creatives to boost engagement and app installs.",
      tags: [
        "Performance Marketing",
        "Google & Meta Ad Strategy",
        "Retargeting Campaigns",
        "A/B Testing & Optimization",
      ],
    },
  ],
};

const highlightSkills: HighlightSkill[] = [
  { name: "AI-Powered Content Creation" },
  { name: "Storytelling" },
  { name: "Conversational Marketing" },
  { name: "Chatbots & Voice AI" },
  { name: "Vibe Marketing Psychology" },
  { name: "Viral Hooks" },
  { name: "Dynamic Creative" },
  { name: "Programmatic Media Buying" },
  { name: "Predictive Media Buying" },
  { name: "Social Listening" },
  { name: "Sentiment Analysis with AI" },
  { name: "Real-Time Personalization" },
  { name: "AI SEO" },
  { name: "Smart Content Discovery" },
];




const AiVibeMarketing: CoursesType = {
  leadCapture: {
    titleOne: "AI Vibe Marketing",
    titleTwo: "Certification Course",
    subtitleOne: "Artificial Intelligence to create viral campaigns, design hyper-personalized customer experiences, and master Vibe Marketing — the future of digital storytelling.",
    subtitleTwo: "",
    tags: ["2-Month Specialist Program", "80+ Hours of Practical Learning", "8+ Case Studies"],
  },
  cohortSectionHeading: "AI Vibe Marketing Cohort Details",
  Cohort: [
    {
      date: "August 20th",
      mode: "Offline",
      weekday: "(Mon-Fri)",
      capacity: "30 Seats",
      campus: "Bengaluru",
    },
    {
      date: "August 20th",
      mode: "Online",
      weekday: "(Mon-Fri)",
      capacity: "30 Seats",
      campus: "Bengaluru",
    },
  ],
  highlights: [
    { icon: "/images/icons/calendar.png", title: "", value: "" },
    { icon: "/images/icons/clock.png", title: "", value: "" },
    {
      icon: "/images/icons/courses.png",
      title: "",
      value: "",
    },
    {
      icon: "/images/icons/template.png",
      title: "Complete AI Flows",
      value: "2",
    },
    {
      icon: "/images/icons/ai.png",
      title: "AI Marketing Tools",
      value: "10+"
    },
    {
      icon: "/images/icons/certificate.png",
      title: "Hours of Learning",
      value: "80+",
    },
    {
      icon: "/images/icons/case-study.png",
      title: "Case Studies",
      value: "8+",
    },
    {
      icon: "/images/icons/interview.png",
      title: "",
      value: "",
    },
    {
      icon: "/images/icons/internship.png",
      title: "",
      value: "",
    },
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
    {
      icon: "/images/icons/specialisation.png",
      title: "Mentorship",
      value: "1:1",
    },
    {
      icon: "/images/icons/trainer.png",
      title: "",
      value: "",
    },
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
    headerTitle: "Your 2-Month Learning Journey",
    description: "A strategic roadmap designed for maximum creative, technical, and career growth.",
  },
  programSkills: {
    heading: "Key Highlights of Our AI-Driven Digital Marketing Program",
    subheading: "Digital Marketing Skills You’ll Master to Lead the Future",
    skills: highlightSkills,
  },
  caseStudies: aiVibeCaseStudies,
  liveProjects: {
    section:"",
    heading: "AI Vibe Marketing Live Projects",
    description:
      "Practical, hands-on projects to apply AI marketing skills in real-world brand scenarios.",
    projects: liveProjectsData,
  },
};

export default AiVibeMarketing;