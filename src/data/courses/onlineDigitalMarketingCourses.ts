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
      logo: "/images/motherdairy-logo.png",
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
      logo: "/images/mcdonalds-logo.png",
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
  { name: "Digital Marketing" },
  { name: "WordPress Website Designing" },
  { name: "Ad Copy Writing" },
  { name: "Creative Designing" },
  { name: "Affiliate Marketing" },
  { name: "Content Marketing" },
  { name: "SEO Auditing" },
  { name: "Google Ads" },
  { name: "Bing Ads" },
  { name: "Mobile App Advertising" },
  { name: "Remarketing" },
  { name: "SEO" },
  { name: "Facebook" },
  { name: "Linkedin" },
  { name: "Instagram" },
  { name: "Youtube" },
  { name: "Quora" },
  { name: "Adsense" },
  { name: "Twitter" },
  { name: "Email Marketing" },
  { name: "Google Analytics" },
  { name: "Marketing Automation" },
  { name: "Whatsapp Marketing" },
];


const onlineDigitalMarketingCourses: CoursesType = {
  leadCapture: {
    titleOne: "Post Graduate",
    titleTwo: "Certification in AI-Powered Digital Marketing & E-Commerce",
    subtitleOne: "AI-Driven Curriculum Designed for the Next Generation of Digital Marketers",
    subtitleTwo: "Fast-Track Your Career with Future-Ready Skills",
    tags: ["6-Month Intensive Program", "Includes 1-Month Agency Internship"],
  },
  cohortSectionHeading: "PG in Digital Marketing 2025 Cohort Details",
  Cohort: [
    {
      date: "Mar 28",
      mode: "Offline",
      weekday: "(Mon-Fri)",
      capacity: "30 Seats",
      campus: "Bengaluru",
    },
    {
      date: "Mar 31",
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
      title: "No Of Individual Courses",
      value: "15",
    },
    {
      icon: "/images/icons/template.png",
      title: "Template & Blueprints ",
      value: "08",
    },
    { icon: "/images/icons/ai.png", title: "AI Learning Tools", value: "25+" },
    {
      icon: "/images/icons/certificate.png",
      title: "Total Learning Hours",
      value: "240+ Hrs",
    },
    {
      icon: "/images/icons/case-study.png",
      title: "Live Case Studies",
      value: "35",
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
      title: "Real Time Projects",
      value: "6+",
    },
    {
      icon: "/images/icons/certificate.png",
      title: "Certifications",
      value: "18+",
    },
    {
      icon: "/images/icons/specialisation.png",
      title: "Specialisation",
      value: "4",
    },
    {
      icon: "/images/icons/trainer.png",
      title: "Domain Specialist Trainers",
      value: "07",
    },
  ],
  StoryHeader: {
    headerTitle: "Real Stories. Real Impact. Real Careers.",
    description: "Meet the Learners Who Transformed Their Futures with AI-Powered Digital Marketing.",
  },
  LifeAtDA360Header: {
    headerTitle: "",
    description: ""
  },
  LearningRoadmapProps: {
    headerTitle: "",
    description: ""
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

export default onlineDigitalMarketingCourses;