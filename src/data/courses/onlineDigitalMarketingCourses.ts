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
};

export default onlineDigitalMarketingCourses;