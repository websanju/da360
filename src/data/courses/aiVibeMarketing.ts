import { CoursesType } from "@/types/courses";
import { HighlightSkill } from "@components/highlights";

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
    tags: ["2-Month Specialist Program", "80+ Hours of Practical Learning","8+ Case Studies"],
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
    headerTitle: "Your 3-Month Learning",
    description: "Your journey is strategically designed for maximum growth at every stage.",
  },
   programSkills: {
    heading: "Key Highlights of Our AI-Driven Digital Marketing Program",
    subheading: "Digital Marketing Skills You’ll Master to Lead the Future",
    skills: highlightSkills,
  },
};

export default AiVibeMarketing;