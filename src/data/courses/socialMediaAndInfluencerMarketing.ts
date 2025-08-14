import { CoursesType } from "@/types/courses";
import { HighlightSkill } from "@components/highlights";
import { CaseStudiesSection } from "@/types/caseStudies";
import { Project } from "@/components/liveProjectsSlider";

const liveProjectsData: Project[] = [
   {
    id: 1,
    title: " Personal Portfolio Website Development",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "In this hands-on project, you’ll build and launch a fully functional portfolio website showcasing your personal brand and campaign work:",
    details: [
      "Understand personal branding goals and digital requirements",
      "Research audience persona and define content strategy",
      "Plan site structure, layout, and user experience",
    ],
    steps: [
      "Design and develop using WordPress best practices",
      "Embed Instagram Reels, YouTube Shorts, Carousels & Testimonials",
      "Participate in live briefings with industry mentors",
      "Optimize site for SEO, mobile, and performance",
      "Submit the final website with case studies and media kit",
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
      "This project puts you in charge of designing, launching, and optimizing a Meta Ads full-funnel campaign for one brand",
    details: [
      "Analyze brand goals, buyer journey, and funnel objectives",
      "Define audience targeting, custom audiences & lookalikes",
      "Craft conversion-focused creatives and ad copies",
    ],
    steps: [
      "Build a complete media plan including bidding & placement strategy",
      "Attend expert-led workshops on campaign optimization",
      "Launch a budget-controlled Meta Ads campaign",
      "Monitor performance and optimize for CTR, CPC & ROAS",
      "Submit detailed analytics reports with key learnings",
      "Present campaign results & recommendations in a mock interview session",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 240, 205, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 3,
    title: "Instagram & YouTube Influencer Campaign Execution",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "In this practical project, you’ll plan, launch, and manage a full-scale influencer marketing campaign across Instagram and YouTube:",
    details: [
      "Deep-dive into brand objectives and target audience",
      "Shortlist nano/micro influencers using Heepsy, Winkl, or One Impression",
      "Design compelling content briefs and collaboration templates",
    ],
    steps: [
      "Negotiate deliverables and timelines with influencers",
      "Attend expert-led briefings and influencer onboarding sessions",
      "Go live with Instagram Reels & YouTube Shorts campaigns",
      "Monitor campaign engagement (views, shares, conversions) in real-time",
      "Submit final campaign analytics report with ROI & insights",
      "Present campaign outcomes during a mock client presentation",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(205, 255, 236, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 4,
    title: "SEO & Content Marketing Strategy Implementation",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "In this end-to-end SEO & content project, you’ll research, plan, and execute a digital growth strategy for one brand:",
    details: [
      "Analyze the brand’s online presence and search performance",
      "Conduct keyword research for social discovery & website ranking",
      "Develop content clusters and pillar blogs with AI tools",
    ],
    steps: [
      "Perform on-page SEO: titles, meta tags, schema, and internal linking",
      "Execute off-page SEO with influencer collaborations and backlinks",
      "Use AI-powered tools like SEMrush, Ahrefs & Jasper for optimization",
      "Join expert-led sessions to refine SEO & content marketing approach",
      "Submit a strategic SEO + content roadmap with ROI projections",
      "Present final strategy in a mock client pitch with Q&A"
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
  { name: "Influencer Marketing" },
  { name: "Brand Collaborations" },
  { name: "Instagram Reels" },
  { name: "YouTube Shorts" },
  { name: "LinkedIn Thought Leadership" },
  { name: "Social Media Paid Ads" },
  { name: "Content Creation" },
  { name: "Personal Branding" },
  { name: "Client Communication" },
  { name: "Freelancing Skills" },
];


const PerformanceMarketingAndMediaBuying: CoursesType = {
  leadCapture: {
    titleOne: "PGCP in Social Media",
    titleTwo: "& Influencer Marketing",
    subtitleOne: "AI-Driven Curriculum Designed for Tomorrow’s Creators & Social Media Leaders",
    subtitleTwo: "Fast-Track Your Career with Future-Ready Expertise",
    tags: ["6-Month Intensive Program", "Includes Capstone Projects & Live Brand Campaigns"],
  },
  cohortSectionHeading: "PGCP In Social Media & Influencer Marketing",
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
    // { icon: "/images/icons/calendar.png", title: "Months", value: "6+" },
    // { icon: "/images/icons/clock.png", title: "Time", value: "Flexible" },
    {
      icon: "/images/icons/courses.png",
      title: "Industry-Relevant Modules",
      value: "30+",
    },
    // {
    //   icon: "/images/icons/template.png",
    //   title: "Template & Blueprints ",
    //   value: "08",
    // },
    { icon: "/images/icons/ai.png", title: "AI Learning Tools", value: "25+" },
    {
      icon: "/images/icons/certificate.png",
      title: "Total Learning Hours",
      value: "240+ Hrs",
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
      title: "Mentorship ",
      value: "1:1 ",
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
      title: "Specialized AI Tools",
      value: "20+",
    },
    {
      icon: "/images/icons/trainer.png",
      title: "Outcome-Focused Curriculum",
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