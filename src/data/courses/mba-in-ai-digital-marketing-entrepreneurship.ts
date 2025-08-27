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
      title: "Spotify – AI-Personalized Playlists",
      description:
        "Spotify leveraged predictive AI to deliver hyper-personalized playlists for users, making music discovery seamless and unique to each listener. Viral campaigns like “Spotify Wrapped” turned user data into shareable stories, transforming personal insights into a global social media movement",
      tags: [
        "Predictive Analytics",
        "Content Personalization",
        "Viral Campaign Design",
      ],
    },
    {
      id: 2,
      logo: "/images/motherdairy-logo.png",
      title: "Nike – AI in Social Storytelling",
      description:
        "Nike harnessed AI-powered insights to create emotion-driven campaigns that resonated deeply with their audience. During major product launches, AI was used for smart targeting—ensuring the right message reached the right audience at the right time. Their campaigns became cultural conversations rather than just advertisements.",
      tags: [
        "Vibe Marketing",
        "AI-Powered Storytelling",
        "Emotional Branding",
        "Influencer Marketing",
      ],
    },
    {
      id: 3,
      logo: "/images/mcdonalds-logo.png",
      title: "Zomato – AI Meme Marketing",
      description:
        "Zomato pioneered AI-driven meme marketing by creating real-time, trend-jacking campaigns that resonated with India’s social media culture. With geo-targeted retargeting and quick-turnaround creatives, Zomato built a brand persona that was witty, relatable, and omnipresent across platforms.",
      tags: [
        "Trend Hijacking",
        "AI Performance Marketing",
        "Geo-Targeted Retargeting",
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

const mbaInAiDigitalMarketingEntrepreneurship: CoursesType = {
  leadCapture: {
    titleOne: "MBA in Digital",
    titleTwo: "Marketing &  AI",
    subtitleOne: "",
    subtitleTwo: "",
    tags: ["Type: Degree", "Admission Deadline: 31-Aug-2025", "Duration: 24 Months"],
  },
  cohortSectionHeading: "On Campuse Immersion Program for MBA Digital Marketing Cohort Details",
  Cohort: [
    {
      date: "Mar 28th",
      mode: "Offline",
      weekday: "(Mon-Fri)",
      capacity: "120 Seats",
      campus: "Satvva Global City Campus, Bangalore",
      campusLabel: "Location"
    },
  ],
  highlights: [
    { icon: "/images/icons/calendar.png", title: "Months", value: "24" },
    {
      icon: "/images/icons/template.png",
      title: "Learning Mode",
      value: "On Campus",
    },
    {
      icon: "/images/icons/ai.png",
      title: "AI-Powered Learning Tools",
      value: "50+"
    },
    {
      icon: "/images/icons/case-study.png",
      title: "Live Case Studies",
      value: "100+",
    },
    {
      icon: "/images/icons/internship.png",
      title: "Learning Methodologies",
      value: "10",
    },
    {
      icon: "/images/icons/project.png",
      title: "Capstone Project",
      value: "Included",
    },
    {
      icon: "/images/icons/specialisation.png",
      title: "Specialisations",
      value: "4",
    },
    {
      icon: "/images/icons/trainer.png",
      title: "Domain Specialist Trainers",
      value: "15+",
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

export default mbaInAiDigitalMarketingEntrepreneurship;