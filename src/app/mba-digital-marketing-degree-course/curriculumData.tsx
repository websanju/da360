import Assesment from "@/components/Ui/svg/assesment";
import Assignment from "@/components/Ui/svg/assignment";
import CaseStudy from "@/components/Ui/svg/caseStudy";
import Live from "@/components/Ui/svg/live";
import type { CurriculumProps } from "@/types/curriculum";

export const curriculumData: CurriculumProps = {
  heading: "Cutting-Edge Curriculum, Designed for the Industry",
  description:
    "Dive into a comprehensive MBA syllabus in Digital Marketing, crafted by seasoned trainers and vetted by leading industry experts and recruiters.",
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
      title: "Foundations of Management and Digital Marketing",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Principles of Management & Organizational Behaviour",
        "Business Communication & Advanced Negotiation",
        "Marketing Fundamentals & Consumer Behaviour",
        "Microsoft Office & Computer Literacy",
        "Content Writing & Ad Copywriting",
        "No-Code Website Designing (WordPress + Shopify)",
        "Search Engine Optimisation (SEO)",
        "Sales Enablement",
      ],
      moduleslable: "Semester",
    },
    {
      number: 2,
      title: "Strategic Digital Marketing Platforms & Paid Media",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Digital Research Methodology & Data Analysis",
        "Consumer Psychology & Neuromarketing",
        "Social Media Marketing (FB/IG, LinkedIn, Snapchat)",
        "Web & Mobile Marketing",
        "Paid Media: Google Ads & Meta Ads",
        "E-Commerce Marketing (Specialisation)",
        "Performance Marketing (Specialisation)",
        "YouTube & Influencer Marketing",
        "AB Testing with AI - Optimal Variants",
      ],
      moduleslable: "Semester",
    },
    {
      number: 3,
      title: "AI, Analytics & Creative Digital Strategies",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "AI in Digital Marketing",
        "LinkedIn Personal Branding & Ads",
        "Google Analytics & GTM Tracking",
        "Growth Hacking & Emerging Platforms",
        "Digital Consumer Behaviour Research",
        "Summer Internship Project & Viva",
        "Social Content Creator",
        "Photography & Video Engineering",
      ],
      moduleslable: "Semester",
    },
    {
      number: 4,
      title: "Leadership, Automation & Digital Entrepreneurship",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Marketing Automation (Specialisation)",
        "Content Marketing & Storytelling",
        "Media Buying, Programmatic & Affiliate Marketing",
        "Email, WhatsApp & SMS Marketing",
        "Prompt Engineering & Generative AI for Marketers",
        "Strategic Management & Digital Transformation",
        "Final Capstone Project + Dissertation + Viva",
        "Influencer Entrepreneur / Digital Planner & Agency Startup (Specialisation)",
      ],
      moduleslable: "Semester",
    },
  ],
};
