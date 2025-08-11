import { CoursesType } from "@/types/courses";
import { HighlightSkill } from "@components/highlights";

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
    titleOne: "PGCP in Performance",
    titleTwo: "Marketing & Media Buying",
    subtitleOne: "AI-Powered Curriculum Designed for Next-Gen Performance Marketers for Advanced Media",
    subtitleTwo: "Buying & Ad Management Expertise",
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
    // { icon: "/images/icons/calendar.png", title: "Months", value: "6+" },
    // { icon: "/images/icons/clock.png", title: "Time", value: "Flexible" },
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