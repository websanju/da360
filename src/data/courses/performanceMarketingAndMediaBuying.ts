import { CoursesType } from "@/types/courses";
import { HighlightSkill } from "@components/highlights";
import { CaseStudiesSection } from "@/types/caseStudies";
import { Project } from "@/components/liveProjectsSlider";

const liveProjectsData: Project[] = [
   {
    id: 1,
    title: "Landing Page & Portfolio Website Developmen",
    // duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "In this hands-on project, you’ll design and launch a high-converting landing page and portfolio website for one Brand, covering every critical phase:",
    details: [
      "Define brand objectives and lead-generation goals",
      "Research audience persona and funnel positioning",
      "Structure landing pages with optimized CTAs and lead magnets",
    ],
    steps: [
      "Design & develop using WordPress/Unbounce best practices",
      "Integrate CRM and tracking with Google Tag Manager",
      "Conduct A/B testing for headlines and conversion elements",
      "Ensure speed, SEO, and mobile responsiveness",
      "Submit final website along with conversion insights",
    ],
    note: "",
    // logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 217, 205, 0) 0%, #CDFFDE 53.35%)",
    bgsolid: "#CDFFDE",
  },
  {
    id: 2,
    title: "Meta Ads Full-Funnel Campaign Execution",
    // duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "In this practical project, you’ll plan, launch, and manage a full-funnel performance campaign for one Brand across Meta platforms:",
    details: [
      "Analyze brand goals and map customer journey stages",
      "Define precise audience targeting, custom & lookalike segments",
      "Develop compelling ad creatives and copy for each funnel stage",
    ],
    steps: [
      "Build a complete media plan with budgeting & placement strategy",
      "Participate in expert-led campaign setup workshops",
      "Execute a real-time Meta Ads campaign with controlled budget",
      "Monitor campaign analytics and optimize delivery in real-time",
      "Submit detailed performance reports with actionable insights",
    ],
    note: "",
    // logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 240, 205, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 3,
    title: "Google Ads Performance Campaign Execution",
    // duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "This project puts you in charge of planning, launching, and optimizing a high-impact Google Ads campaign for one Brand",
    details: [
      "Identify brand objectives, product positioning & buyer intent",
      "Perform advanced keyword research and targeting strategy",
      "Create ad groups with persuasive ad copies and extensions",
    ],
    steps: [
      "Develop bidding & budgeting strategy with ROAS targets",
      "Join strategy briefings with industry experts",
      "Execute a live Google Ads campaign within assigned budget",
      "Analyze data for CTR, CPC, Conversion Rate, and ROI",
      "Optimize campaigns for maximum performance and efficiency",
      "Submit final campaign performance reports with insights",
    ],
    note: "",
    // logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(205, 255, 236, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 4,
    title: "Analytics, Attribution & CRO Implementation",
    // duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "In this end-to-end project, you’ll measure, analyze, and optimize a complete digital campaign with advanced analytics tools:",
    details: [
      "Implement GA4 & Google Tag Manager for full funnel tracking",
      "Set up event tracking for key conversion actions",
      "Use heatmaps & scroll maps (Hotjar/Clarity) for behavior analysis",
    ],
    steps: [
      "Apply attribution models (First Click, Last Click, Linear, Time Decay)",
      "Develop a Conversion Rate Optimization (CRO) framework",
      "Test landing page variants for headlines, CTAs, and layouts",
      "Generate detailed dashboards for ROAS, CTR, CPC, and CPA",
      "Submit an in-depth CRO & Attribution Report with insights",
    ],
    note: "",
    // logos: ["meta.png", "google-ads.png", "analytics.png"],
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
        "McDonald’s India adapted its global brand strategy to meet local market preferences—replacing beef-based offerings, introducing aloo tikki burgers, and launching value pricing to capture the price-sensitive Indian audience. Their digital marketing focused on regional content, hyper-local social media campaigns, and app-based loyalty programs.",
      tags: [
        "Marketing Strategy",
        "Consumer Segmentation",
        "Localization in Campaigns",
      ],
    },
    {
      id: 2,
      logo: "/images/case-studies/motherdairy-logo.png",
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
      logo: "/images/case-studies/zomato.png",
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
  { name: "Digital Marketing" },
  { name: "Media Buying Fundamentals" },
  { name: "Full-Funnel Paid Ad" },
  { name: "Conversion Rate Optimization SEO" },
  { name: "Content-Driven Campaign" },
  { name: "Programmatic Media Planning" },
  { name: "AI-Powered Consumer Insights" },
  { name: "Ad Personalization" },
  { name: "Analytics" },
  { name: "Attribution" },
  { name: "ROI Reporting" },
];


const PerformanceMarketingAndMediaBuying: CoursesType = {
  leadCapture: {
    titleOne: "Post Graduate in ",
    titleTwo: "Performance Marketing & Media Buying",
    subtitleOne: "AI-Powered Curriculum Designed for Next-Gen Performance Marketers for Advanced Media Buying & Ad Management Expertise",
    subtitleTwo: "",
    tags: ["6-Month Intensive Program", " Includes Real-World Agency Projects"],
  },
  cohortSectionHeading: "PGCP In Performance Marketing & Media Buying",
  Cohort: [
    {
      date: "June 16th",
      mode: "Offline",
      weekday: "(Mon-Fri)",
      capacity: "30 Seats",
      campus: "Bengaluru",
    },
    {
      date: "June 16th",
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
      title: "Industry-Relevant Modules",
      value: "30+",
    },
    {
      icon: "/images/icons/template.png",
      title: "Template & Blueprints ",
      value: "08",
    },
    { icon: "/images/icons/ai.png", title: "AI Learning Tools", value: "25+" },
    {
      icon: "/images/icons/hourglass.png",
      title: "Hours of Practical Learning",
      value: "240+",
    },
    {
      icon: "/images/icons/case-study.png",
      title: "Case Studies",
      value: "20+",
    },
    // {
    //   icon: "/images/icons/interview.png",
    //   title: "Interview Assistance",
    //   value: "5",
    // },
    {
      icon: "/images/icons/internship.png",
      title: "Mentorship",
      value: "1:1",
    },
    {
      icon: "/images/icons/project.png",
      title: "Capstone Projects",
      value: "5+",
    },
    {
      icon: "/images/icons/certificate.png",
      title: "Global Certifications",
      value: "15+",
    },
    {
      icon: "/images/icons/specialisation.png",
      title: "Specialized",
      value: "4",
    },
    {
      icon: "/images/icons/trainer.png",
      title: "Domain Specialist Trainer",
      value: "07",
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
    headerTitle: "Your 6-Month Learning",
    description: "Your journey is strategically designed for maximum growth at every stage.",
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