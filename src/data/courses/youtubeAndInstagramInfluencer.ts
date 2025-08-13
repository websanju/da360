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
  { name: "Instagram Growth" },
  { name: "YouTube Growth" },
  { name: "Reel Mastery" },
  { name: "Influencer Campaign" },
  { name: "Negotiation & Pitching" },
  { name: "YouTube SEO" },
  { name: "Youtube Monetization Tactics" },
  { name: "AI Video Editing" },
  { name: "Automation Tools" },
  { name: "Personal Branding" },
  { name: "On-Camera Confidence" },
  { name: "Building Media Kits" },
  { name: "Closing Brand Deals" },
  { name: "Community Building" },
  { name: "Retention Strategies" },
];


const PerformanceMarketingAndMediaBuying: CoursesType = {
  leadCapture: {
    titleOne: "YouTube & ",
    titleTwo: "Instagram Influencer Certification Course",
    subtitleOne: "Build your personal brand, grow your following, and monetize your influence with proven",
    subtitleTwo: "strategies, tools, and expert guidance tailored for Instagram and YouTube creators",
    tags: ["2-Month Specialist Program", "80+ Hours of Learning","8+ Real-Brand Case Studies"],
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
      title: "Monetization Models: Ads, Affiliates, Sponsorships & More",
      value: "+",
    },
    {
      icon: "/images/icons/template.png",
      title: "Build & Pitch Your Media Kit to Brands",
      value: "",
    },
    { icon: "/images/icons/ai.png", title: "Specialized Tools for Creators", value: "5+" },
    {
      icon: "/images/icons/certificate.png",
      title: "Hours of Practical Creator Training",
      value: "80+ Hrs",
    },
    {
      icon: "/images/icons/case-study.png",
      title: "Real-Brand Influencer Case Studies",
      value: "8+",
    },
    {
      icon: "/images/icons/interview.png",
      title: "Complete Creator Flow Projects",
      value: "2 ",
    },
    {
      icon: "/images/icons/internship.png",
      title: "Master Instagram Reels, Shorts & Long-Form YouTube Content",
      value: "",
    },
    {
      icon: "/images/icons/project.png",
      title: "Complete Creator Flow Projects",
      value: "2",
    },
    {
      icon: "/images/icons/certificate.png",
      title: "Master Instagram Reels, Shorts & Long-Form YouTube Content",
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
    description: "A step-by-step roadmap designed to help you grow from content creator to monetized influencer.",
  },
  programSkills: {
    heading: "Key Highlights of Our AI-Driven Digital Marketing Program",
    subheading: "Digital Marketing Skills You’ll Master to Lead the Future",
    skills: highlightSkills,
  },
  caseStudies: aiVibeCaseStudies,
};

export default PerformanceMarketingAndMediaBuying;