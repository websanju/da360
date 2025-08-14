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
      title: "Netflix India — Driving Engagement with Short-Form Video",
      description:
        "Netflix India revolutionized its social media strategy by leveraging Reels and meme collaborations to connect with Gen Z and millennial audiences. Through witty short-form storytelling, trending audio, and influencer tie-ups, Netflix maximized engagement for show launches and campaigns like Sacred Games and Money Heist.",
      tags: [
        "Short-Form Video Storytelling",
        "Meme Collaborations",
        "Influencer Tie-Ups",
        "Trend-Based Content Planning",
      ],
    },
    {
      id: 2,
      logo: "/images/motherdairy-logo.png",
      title: "Zomato — Using Humor & Meme Marketing for Virality",
      description:
        "Zomato redefined digital engagement by adopting a meme-first strategy. With witty tweets, meme-based creatives, and relatable Reels, the brand saw a 10x boost in social engagement. Their campaigns during IPL and cricket series showcased the power of humor in building viral momentum.",
      tags: [
        "Meme Marketing Strategy",
        "Humor-Driven Engagement",
        "Real-Time Content Creation",
        "Viral Marketing Frameworks",
      ],
    },
    {
      id: 3,
      logo: "/images/mcdonalds-logo.png",
      title: "CRED — Creator-Driven Influencer Collaborations",
      description:
        "CRED built credibility and brand trust by collaborating with high-profile creators and celebrities. Their campaigns blended quirk, authority, and storytelling—turning influencer-led videos into national conversations. Creators like Rahul Dravid and Tanmay Bhat were instrumental in CRED’s viral brand recall.",
      tags: [
        "Influencer Marketing Campaign Planning",
        "Creator Collaborations",
        "Brand Storytelling via Authority Figures",
        "High-ROI Content Production",
      ],
    },
  ],
};

const highlightSkills: HighlightSkill[] = [
  { name: "Viral Content Strategy" },
  { name: "Video Production" },
  { name: "Instagram Reels" },
  { name: "YouTube Shorts" },
  { name: "LinkedIn Thought Leadership" },
  { name: "Influencer Marketing Campaigns" },
  { name: "Meme Marketing" },
  { name: "Social Virality" },
  { name: "Monetization Strategies" },
  { name: "AI-Powered Tools" },
  { name: "Content Creation" },
  { name: "Negotiation" },
  { name: "Soft Skills" },
  { name: "Leadership" },
];


const digitalMarketingLeadership: CoursesType = {
  leadCapture: {
    titleOne: "Leadership in Social",
    titleTwo: "Content Creator & Video Production",
    subtitleOne: "AI-Driven Curriculum Tailored for Aspiring Content Leaders & Video Entrepreneurs",
    subtitleTwo: "Fast-Track Your Career as a Social Media Influencer, Creator, and Brand Strategist",
    tags: ["12-Month Intensive Program", "Includes 3-Month Agency Internship"],
  },
  cohortSectionHeading: "Leadership in Digital Marketing, AI & Entrepreneurship Cohort Details",
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
      value: "40+",
    },
    {
      icon: "/images/icons/template.png",
      title: "High-Impact Creator Projects ",
      value: "8+",
    },
    { icon: "/images/icons/ai.png", title: "AI Learning Tools", value: "25+" },
    {
      icon: "/images/icons/certificate.png",
      title: "Hours of Hands-On Learning",
      value: "2100+ Hrs",
    },
    {
      icon: "/images/icons/case-study.png",
      title: "Real-Brand Case Studies",
      value: "60+",
    },
    {
      icon: "/images/icons/interview.png",
      title: "AI-Powered Tools in Action",
      value: "40+",
    },
    {
      icon: "/images/icons/internship.png",
      title: "Internship (Optional)",
      value: "1 Month",
    },
    {
      icon: "/images/icons/project.png",
      title: " Ready-to-Use Creator Frameworks",
      value: "15",
    },
    {
      icon: "/images/icons/certificate.png",
      title: "Globally Recognized Certifications",
      value: "25+",
    },
    {
      icon: "/images/icons/specialisation.png",
      title: "Mentorship with Leading Influencers & Industry Experts",
      value: "1:1",
    },
    {
      icon: "/images/icons/trainer.png",
      title: "Career-Outcome Driven Curriculum",
      value: "100%",
    },
  ],
  StoryHeader: {
    headerTitle: "Real Stories. Real Impact. Real Careers.",
    description: "Meet the Content Creators Who Transformed Their Futures with DA360",
  },
  LifeAtDA360Header: {
    headerTitle: "Life @ DA360 — Where Learning Gets Real",
    description: "Go Beyond the Classroom with Power-Packed Competitions & Creative Showdowns",
  },
  LearningRoadmapProps: {
    headerTitle: "Your 12-Month Creator Journey",
    description: "Your journey is strategically designed for maximum growth at every stage."
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

export default digitalMarketingLeadership;