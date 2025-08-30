import Live from "@/components/Ui/svg/live";
import type { CurriculumProps } from "@/types/curriculum";

export const curriculumData: CurriculumProps = {
  heading: "Cutting-Edge Curriculum, Designed for the Industry",
  description:
    "Explore a holistic BBA syllabus in Digital Marketing, designed by academic leaders and refined with insights from top industry experts and employers.",
  learningMode: "On Campus",
  batchTimings: [
    {
      label: "",
      slots: [""],
    },
    {
      label: "",
      slots: [""],
    },
  ],
  modules: [
    {
      number: 1,
      title: "Business & Marketing Foundations",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
        { icon: <Live />, label: "1 Case Study" },
        { icon: <Live />, label: "2 Assessments" },
      ],
      topics: [
        "Fundamentals of Marketing",
        "Microsoft Office & Computer Literacy",
        "Principles of Management",
        "Financial Accounting",
        "Business Economics (Micro)",
        "Personality Development for Corporate Readiness – I",
      ],
      moduleslable: "Semester",
    },
    {
      number: 2,
      title: "Strategic Business Essentials & Digital Foundations",
      badges: [
        { icon: <Live />, label: "8 Live Sessions" },
        { icon: <Live />, label: "3 Assignments" },
        { icon: <Live />, label: "2 Case Studies" },
        { icon: <Live />, label: "1 Assessment" },
      ],
      topics: [
        "Traditional vs Digital Marketing",
        "Advance Communication & Negotiation",
        "Cost & Management Accounting",
        "Business Statistics & Quantitative Techniques",
        "Organisational Behaviour",
        "Personality Development for Corporate Readiness – II",
      ],
      moduleslable: "Semester",
    },
    {
      number: 3,
      title: "Creative Communication & Business Applications",
      badges: [
        { icon: <Live />, label: "8 Live Sessions" },
        { icon: <Live />, label: "3 Assignments" },
        { icon: <Live />, label: "2 Case Studies" },
        { icon: <Live />, label: "1 Assessment" },
      ],
      topics: [
        "LinkedIn Personal Branding",
        "Content Writing & Ad Copy Writing",
        "No-Code Website Designing (WordPress + Shopify)",
        "Corporate Finance",
        "Human Resource Management",
        "Research Methodology",
      ],
      moduleslable: "Semester",
    },
    {
      number: 4,
      title: "AI-Driven Marketing & Data Insights",
      badges: [
        { icon: <Live />, label: "8 Live Sessions" },
        { icon: <Live />, label: "3 Assignments" },
        { icon: <Live />, label: "2 Case Studies" },
        { icon: <Live />, label: "1 Assessment" },
      ],
      topics: [
        "AI in Digital Marketing",
        "Facebook/Instagram Marketing",
        "LinkedIn Optimisation & Ads",
        "Business Law & Cyber Regulations",
        "Google Analytics & Google Tag Manager",
        "Personality Development for Corporate Readiness – III",
      ],
      moduleslable: "Semester",
    },
    {
      number: 5,
      title: "AI-Driven Marketing & Data Insights",
      badges: [
        { icon: <Live />, label: "8 Live Sessions" },
        { icon: <Live />, label: "3 Assignments" },
        { icon: <Live />, label: "2 Case Studies" },
        { icon: <Live />, label: "1 Assessment" },
      ],
      topics: [
        "YouTube Marketing",
        "Influencer Marketing",
        "Content Marketing & Storytelling",
        "Media Buying & Programmatic Advertising",
        "WhatsApp & SMS Marketing",
        "Prompt Designing for Marketers",
      ],
      moduleslable: "Semester",
    },
    {
      number: 6,
      title: "Leadership, Specialisations & Industry Readiness",
      badges: [
        { icon: <Live />, label: "8 Live Sessions" },
        { icon: <Live />, label: "3 Assignments" },
        { icon: <Live />, label: "2 Case Studies" },
        { icon: <Live />, label: "1 Assessment" },
      ],
      topics: [
        "Email Marketing & Affiliate Marketing",
        " Elective I – Sales Enablement & Techniques / E-Commerce Marketing / Performance Marketing",
        "Elective II – Marketing Automation & AI / Social Content Creator / Photography & Video Engineering",
        "Elective III – Influencer Entrepreneur / Digital Planner & Strategist (Agency Startup)",
        "Strategic Management & Business Policy",
        "Capstone Project + Internship + Viva Voce",
      ],
      moduleslable: "Semester",
    },
  ],
};
