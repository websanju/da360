import { CoursesType } from "@/types/courses";
import { HighlightSkill } from "@components/highlights";
import { CaseStudiesSection } from "@/types/caseStudies";
import { Project } from "@/components/liveProjectsSlider";

const liveProjectsData: Project[] = [
   {
    id: 1,
    title: "WordPress Website Development",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "In this hands-on project, you’ll build and launch a fully functional website for one Brand, covering every critical phase",
    details: [
      "Understand brand goals and digital requirements",
      "Research audience persona and define content strategy",
      "Plan site structure, layout, and user experience",
    ],
    steps: [
      "Design and develop using WordPress best practices",
      "Participate in live briefings with industry experts",
      "Build the site within the project scope and deadline",
      "Submit final website along with optimization insights",
      "Present your work & face mock interview evaluations",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 217, 205, 0) 0%, #CDFFDE 53.35%)",
    bgsolid: "#CDFFDE",
  },
  {
    id: 2,
    title: "Meta Ads Campaign Execution",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "In this practical project, you’ll plan, launch, and manage a full-funnel advertising campaign for one Brand across Meta platforms:",
    details: [
      "Deep-dive into brand objectives and customer journey",
      "Define precise audience targeting and segmentation",
      "Craft compelling ad creatives and conversion-focused copies",
    ],
    steps: [
      "Develop complete media plan with bidding & placement strategy",
      "Attend expert-led briefings and campaign launch walkthrough",
      "Go live with budget-controlled Meta Ads campaign",
      "Monitor performance and optimize delivery in real-time",
      "Submit final analytics reports with insights and recommendations",
      "Present campaign outcomes and undergo mock interview review",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 240, 205, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 3,
    title: "Google Ads Campaign Execution",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "This project puts you in charge of planning, launching, and optimizing a performance-driven Google Ads campaign for one Brand:",
    details: [
      "Understand brand goals, products, and market positioning",
      "Identify high-intent keywords and create target segments",
      "Develop ad groups with compelling headlines and ad copies",
    ],
    steps: [
      "Build a complete media plan including bidding & budgeting strategy",
      "Participate in strategy meetings with industry experts",
      "Execute a real-time Google Ads campaign within the assigned budget",
      "Analyze campaign data and optimize for conversions & ROI",
      "Submit final performance reports with key metrics and takeaways",
      "Present your campaign results during a mock interview session",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(205, 255, 236, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 4,
    title: "SEO Strategy & Implementation",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "In this end-to-end SEO project, you'll research, plan, and execute a full-stack Search Engine Optimization strategy for one Brand:",
    details: [
      "Analyze the brand’s current online presence and search performance",
      "Conduct keyword research to identify ranking opportunities",
      "Perform complete on-page SEO including meta tags, URL structure & content optimization",
    ],
    steps: [
      "Execute off-page SEO through backlink strategy and outreach plans",
      "Conduct a detailed SEO audit using industry tools (Ahrefs, SEMrush, etc.)",
      "Join expert-led sessions to refine your optimization approach",
      "Submit a strategic SEO roadmap with implementation checklist",
      "Present your SEO plan and audit report in a mock client pitch session",
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
    { icon: "/images/icons/calendar.png", title: "Months", value: "6+" },
    { icon: "/images/icons/clock.png", title: "Time", value: "Flexible" },
    {
      icon: "/images/icons/courses.png",
      title: "Industry-Relevant Modules",
      value: "30+",
    },
    {
      icon: "/images/icons/template.png",
      title: "Complete AI Vibe Campaign Flows",
      value: "2",
    },
    { icon: "/images/icons/ai.png", title: "Cutting-Edge AI Marketing Tools", value: "10+" },
    {
      icon: "/images/icons/certificate.png",
      title: "Hours of Immersive Learning",
      value: "80+ Hrs",
    },
    {
      icon: "/images/icons/case-study.png",
      title: "Brand-Centered Case Studies",
      value: "8+",
    },
    {
      icon: "/images/icons/interview.png",
      title: "Interview Assistance",
      value: "5",
    },
    {
      icon: "/images/icons/internship.png",
      title: "Internship (Optional)",
      value: "1 Month",
    },
    {
      icon: "/images/icons/project.png",
      title: "Hands-On Projects with Real Brand Scenarios",
      value: "5+",
    },
    {
      icon: "/images/icons/certificate.png",
      title: "Certification Designed for Tomorrow’s AI Marketers",
      value: "",
    },
    {
      icon: "/images/icons/specialisation.png",
      title: "Mentorship with Industry Practitioners",
      value: "1:1",
    },
    {
      icon: "/images/icons/trainer.png",
      title: "Career-Oriented Curriculum",
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
    sectionId: "section6",
    heading: "AI Vibe Marketing Live Projects",
    description:
      "Practical, hands-on projects to apply AI marketing skills in real-world brand scenarios.",
    projects: liveProjectsData,
  },
};

export default AiVibeMarketing;