import { CoursesType } from "@/types/courses";
import { HighlightSkill } from "@components/highlights";
import { CaseStudiesSection } from "@/types/caseStudies";
import { Project } from "@/components/liveProjectsSlider";

const liveProjectsData: Project[] = [
   {
    id: 1,
    title: "Complete Google Ads Campaign",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
    ],
    steps: [
      "Set up, optimize & report on a multi-ad group campaign",
      "Implement conversion tracking with GA4 & GTM",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 217, 205, 0) 0%, #CDFFDE 53.35%)",
    bgsolid: "#CDFFDE",
  },
  {
    id: 2,
    title: "High-Converting Landing Page",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
     
    ],
    steps: [
      "Build & design a landing page for lead generation",
      "Test variations for maximum conversion rate",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 240, 205, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 3,
    title: "Social Media Ad Funnel",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
    ],
    steps: [
      "Plan & execute a paid ads funnel",
      "Optimize creatives & copy using analytics insights",
    ],
    note: "",
    logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(205, 255, 236, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 4,
    title: "SEO Content Plan & Execution",
    duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "",
    details: [
      "",
    ],
    steps: [
      "Build a keyword-driven content strategy",
      "Implement on-page optimization & measure results",
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
      logo: "/images/case-studies/swiggy-logo.png",
      title: "Swiggy – Data-Driven Campaign Optimization",
      description:
        "Swiggy leveraged advanced data analytics and AI-driven insights to continuously optimize campaigns in real-time. By tracking user journeys across channels and applying hyper-local targeting, Swiggy improved ad relevance, increased conversion rates, and boosted average order value. Their approach showcased how AI can turn performance marketing into a precision-driven growth engine.",
      tags: [
        "Multi-Channel Attribution Tracking",
        "Real-Time Data Analytics",
      ],
    },
    {
      id: 2,
      logo: "/images/case-studies/nykka.png",
      title: "Nykaa – Influencer & Social Ads Funnel   ",
      description:
        "Nykaa successfully launched a new beauty product line by integrating influencer-led awareness campaigns with performance-driven paid ads. By using shoppable posts, social commerce, and dynamic creative testing, Nykaa built a full-funnel strategy that moved audiences from awareness to purchase seamlessly, resulting in higher engagement and sales growth.",
      tags: [
        "Social Commerce & Shoppable Content",
        "Dynamic Creative Testing",
      ],
    },
    {
      id: 3,
      logo: "/images/case-studies/makeMyTrip.png",
      title: "MakeMyTrip – Seasonal PPC Campaign Strategy",
      description:
        "MakeMyTrip capitalized on seasonal travel trends by executing high-performing PPC campaigns across Google and Meta. By combining keyword-driven search ads with display remarketing funnels and limited-time offers, MakeMyTrip maximized bookings during peak travel seasons and optimized ad spends for ROI.",
      tags: [
        "Seasonal Campaign Planning & Keyword Research",
        "Search + Display Remarketing Funnels",
      ],
    },
  ],
};

const highlightSkills: HighlightSkill[] = [
  { name: "Performance Marketing" },
  { name: "PPC Campaign" },
  { name: "Social Media" },
  { name: "SEO" },
  { name: "Content Marketing" },
  { name: "Marketing Automation" },
  { name: "MarTech Tools" },
  { name: "Analytics " },
  { name: "Conversion Tracking" },
  { name: "Landing Page Optimization" },
  { name: "Client Reporting" },
  { name: "ROI Analysis" },
];


const PerformanceMarketingAndMediaBuying: CoursesType = {
  leadCapture: {
    titleOne: "Performance",
    titleTwo: "Marketing & MarTech Certification Course",
    subtitleOne: "Master performance-driven marketing strategies, media buying, marketing technology, and analytics — designed for marketers, entrepreneurs, and creators",
    subtitleTwo: "",
    tags: ["2-Month Specialist Program", "80+ Hours of Hands-On Learning","8+ Industry Projects"],
  },
  cohortSectionHeading: "PGCP In Performance Marketing & MarTech Certification Course",
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
    { icon: "/images/icons/calendar.png", title: "Months", value: "2+" },
    { icon: "/images/icons/clock.png", title: "Time", value: "9PM to 10:30PM" },
    {
      icon: "/images/icons/courses.png",
      title: "Complete Ads Flows",
      value: "2+",
    },
    // {
    //   icon: "/images/icons/template.png",
    //   title: "",
    //   value: "",
    // },
    { icon: "/images/icons/ai.png", title: "AI Marketing Tools", value: "10+" },
    {
      icon: "/images/icons/hourglass.png",
      title: "Hours of Learning",
      value: "80+",
    },
    {
      icon: "/images/icons/case-study.png",
      title: "Case Studie",
      value: "8+",
    },
    // {
    //   icon: "/images/icons/interview.png",
    //   title: "Mentorship ",
    //   value: "1:1",
    // },
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
    //   title: "",
    //   value: "",
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