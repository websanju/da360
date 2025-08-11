import { CoursesType } from "@/types/courses";
import { HighlightSkill } from "@components/highlights";

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
    headerTitle: "Your 3-Month Learning",
    description: "Your journey is strategically designed for maximum growth at every stage.",
  },
   programSkills: {
    heading: "Key Highlights of Our AI-Driven Digital Marketing Program",
    subheading: "Digital Marketing Skills You’ll Master to Lead the Future",
    skills: highlightSkills,
  },
};

export default PerformanceMarketingAndMediaBuying;