import { CoursesType } from "@/types/courses";
import { HighlightSkill } from "@components/highlights";

import { CaseStudiesSection } from "@/types/caseStudies";

const aiVibeCaseStudies: CaseStudiesSection = {
  heading: "Glimpse of Brand Case Studies",
  subheading: "Learn Through Real Business Challenges from Industry-Leading Brands",
  items: [
    {
      id: 1,
      logo: "/images/mcdonalds-logo.png",
      title: "Swiggy – Data-Driven Campaign Optimization",
      description:
        "Swiggy leveraged data analytics and AI-driven insights to optimize campaigns in real-time, increasing both conversions and order value.",
      tags: [
        "Multi-channel attribution tracking.",
        "AI-based campaign optimization.",
        "Hyper-local targeting strategies.",
      ],
    },
    {
      id: 2,
      logo: "/images/motherdairy-logo.png",
      title: "Nykaa – Influencer & Social Ads Funnel",
      description:
        "Nykaa executed a full-funnel influencer + paid ads strategy to launch a new beauty product line and boost online sales.",
      tags: [
        "Influencer funnel integration with paid ads.",
        "Social commerce and shoppable content.",
        "Dynamic creative testing for high engagement.",
      ],
    },
    {
      id: 3,
      logo: "/images/mcdonalds-logo.png",
      title: "MakeMyTrip – Seasonal PPC Campaign Strategy",
      description:
        "MakeMyTrip tapped into seasonal travel trends to design high-converting PPC campaigns across Google and Meta platforms.",
      tags: [
        "Seasonal campaign planning & keyword research.",
        "Search + display remarketing funnels.",
        "Offer-driven PPC strategies.",
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
      icon: "/images/icons/certificate.png",
      title: "Total Learning Hours",
      value: "240+ Hrs",
    },
    {
      icon: "/images/icons/case-study.png",
      title: "Brand-Focused Case Studies",
      value: "20+",
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
      title: "Capstone Projects with Real Brands",
      value: "5+",
    },
    {
      icon: "/images/icons/certificate.png",
      title: "Globally Recognized Certifications",
      value: "15+",
    },
    {
      icon: "/images/icons/specialisation.png",
      title: "Specialized Social & AI Tools in Action",
      value: "20+",
    },
    {
      icon: "/images/icons/trainer.png",
      title: "Domain Specialist Trainers",
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
    headerTitle: "Your 2-Month Creator Journey",
    description: "A step-by-step roadmap designed for working professionals, coaches, consultants, and entrepreneurs who want to stand out and monetize their personal brand.",
  },
   programSkills: {
    heading: "Key Highlights of Our AI-Driven Digital Marketing Program",
    subheading: "Digital Marketing Skills You’ll Master to Lead the Future",
    skills: highlightSkills,
  },
   caseStudies: aiVibeCaseStudies,
};

export default PerformanceMarketingAndMediaBuying;