import { CoursesType } from "@/types/courses";
import { HighlightSkill } from "@components/highlights";

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
    headerTitle: "Your 12-Month Learning",
    description: "Your journey is strategically designed for maximum growth at every stage."
  },
   programSkills: {
    heading: "Key Highlights of Our AI-Driven Digital Marketing Program",
    subheading: "Digital Marketing Skills You’ll Master to Lead the Future",
    skills: highlightSkills,
  },
};

export default digitalMarketingLeadership;