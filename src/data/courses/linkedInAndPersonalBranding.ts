import { CoursesType } from "@/types/courses";
import { HighlightSkill } from "@components/highlights";
import { CaseStudiesSection } from "@/types/caseStudies";
import { Project } from "@/components/liveProjectsSlider";

const liveProjectsData: Project[] = [
   {
    id: 1,
    title: "LinkedIn Profile Transformation",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
      "",
      "",
    ],
    steps: [
      "Turn your profile into an All-Star personal brand hub",
      "SEO optimize headline, about, and featured sections",
      "Present before/after results during mentor review",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 217, 205, 0) 0%, #CDFFDE 53.35%)",
    bgsolid: "#CDFFDE",
  },
  {
    id: 2,
    title: "Viral LinkedIn Carousel Campaign",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
      "",
      "",
    ],
    steps: [
      "Create a 5-slide educational/inspirational carousel",
      "Leverage AI tools for hook writing & visual design",
      "Analyze reach & engagement using Shield App",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 240, 205, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 3,
    title: "Thought Leadership Video Series",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
    ],
    steps: [
      "Record & publish a 3-part professional video series",
      "Script with ChatGPT & edit with CapCut/InShot",
      "Monitor engagement & retention metrics",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(205, 255, 236, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 4,
    title: "LinkedIn Lead Generation Funnel",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
      "",
      "",
    ],
    steps: [
      "Build a lead magnet (e-book/webinar) & landing page",
      "Integrate Calendly & email automation",
      "Track conversions & present final funnel strategy",
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
      logo: "/images/case-studies/mcdonalds-logo.png",
      title: "McDonald’s India – Localizing a Global Brand",
      description:
        "McDonald’s India adapted its global brand strategy to meet local market preferences—replacing beef-based offerings, introducing aloo tikki burgers, and launching value pricing to capture the price-sensitive",
      tags: [
        "Marketing Strategy",
        "Consumer Segmentation",
        "Localization in Campaigns",
        "Social Media Planning",
      ],
    },
    {
      id: 2,
      logo: "/images/case-studies/motherdairy-logo.png",
      title: "Mother Dairy – Building Trust Through Content",
      description:
        "Mother Dairy strengthened its brand presence by focusing on emotional storytelling and purpose-driven marketing. Campaigns like `Rishton Ka Swad Badhaiye` positioned the brand as a part of Indian family life.",
      tags: [
        "Content Marketing",
        "SEO & Organic Reach",
        "Video Marketing Strategy",
        "Influencer Marketing",
      ],
    },
    {
      id: 3,
      logo: "/images/case-studies/zomato-logo.png",
      title: "Zomato – Data-Driven Performance Marketing",
      description:
        "Zomato scaled its customer acquisition by running high-performing campaigns during IPL seasons, using data-backed insights to target users based on cuisine preferences, location, and time of day.",
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
  { name: "LinkedIn Profile Optimization" },
  { name: "Linkedin Branding" },
  { name: "AI-Driven Content Creation" },
  { name: "Viral Carousels" },
  { name: "LinkedIn Video Storytelling" },
  { name: "Thought Leadership" },
  { name: "Audience Engagement" },
  { name: "Growth Hacks" },
  { name: "Algorithm Mastery" },
  { name: "Lead Generation " },
  { name: "Funnel Building" },
  { name: "Monetization" },
  { name: "Freelancing" },
];


const PerformanceMarketingAndMediaBuying: CoursesType = {
  leadCapture: {
    titleOne: "LinkedIn & Personal",
    titleTwo: "Branding Certification Course",
    subtitleOne: "Position yourself as an authority, build a powerful LinkedIn presence, attract opportunities, and monetize your personal brand",
    subtitleTwo: "",
    tags: ["2-Month Specialist Program |", "80+ Hours of Learning ", "8+ Case Studies","10+ Tools"],
  },
  cohortSectionHeading: "LinkedIn & Personal Branding Cohort Details",
  Cohort: [
    {
      date: "August 16th",
      mode: "Offline",
      weekday: "(Mon-Fri)",
      capacity: "30 Seats",
      campus: "Bengaluru",
    },
    {
      date: "August 16th",
      mode: "Online",
      weekday: "(Mon-Fri)",
      capacity: "30 Seats",
      campus: "Bengaluru",
    },
  ],
  highlights: [
     { icon: "/images/icons/calendar.png", title: "Months", value: "6+" },
    { icon: "/images/icons/clock.png", title: "Time", value: "Flexible" },
    {
      icon: "/images/icons/courses.png",
      title: "Monetization Models: Ads, Affiliates, Sponsorships & More",
      value: "+",
    },
    {
      icon: "/images/icons/template.png",
      title: "Build & Pitch Your Media Kit to Brands",
      value: "",
    },
    { icon: "/images/icons/ai.png", title: "Tools for LinkedIn Growth & Lead Generation", value: "10+" },
    {
      icon: "/images/icons/certificate.png",
      title: "Hours of Practical, Hands-On Training",
      value: "80+ Hrs",
    },
    {
      icon: "/images/icons/case-study.png",
      title: "Real-World Case Studies & Brand Scenarios",
      value: "8+",
    },
    {
      icon: "/images/icons/interview.png",
      title: "Complete Creator Flow Projects",
      value: "2 ",
    },
    {
      icon: "/images/icons/internship.png",
      title: "Build Thought Leadership with AI-Powered Content",
      value: "",
    },
    {
      icon: "/images/icons/project.png",
      title: " Personal Brand Audit & Profile Optimization ",
      value: "2",
    },
    {
      icon: "/images/icons/certificate.png",
      title: "Learn Lead Generation, Networking & Monetization Strategies",
      value: "",
    },
    {
      icon: "/images/icons/specialisation.png",
      title: "Mentorship with Influencer Marketing Experts",
      value: "1:1",
    },
    {
      icon: "/images/icons/trainer.png",
      title: "Career-Focused Curriculum",
      value: "100%",
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
    headerTitle: "Your 2-Month Creator Journey",
    description: "A step-by-step roadmap designed for working professionals, coaches, consultants, and entrepreneurs who want to stand out and monetize their personal brand.",
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