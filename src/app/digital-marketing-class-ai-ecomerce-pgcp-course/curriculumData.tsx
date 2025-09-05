import Assesment from "@/components/Ui/svg/assesment";
import Assignment from "@/components/Ui/svg/assignment";
import CaseStudy from "@/components/Ui/svg/caseStudy";
import Live from "@/components/Ui/svg/live";
import type { CurriculumProps } from "@/types/curriculum";

export const curriculumData: CurriculumProps = {
  heading: "Latest Curriculum Reviewed by Industry Leaders",
  description:
    "Cutting-edge digital marketing syllabus—designed by Expert trainers and endorsed by top recruiters and domain experts.",
  learningMode: "Online/Offline",
  batchTimings: [
    {
      label: "Online (PGCP & SDP)",
      slots: [
        "07:30 AM to 09:30 AM",
        "10:30 AM to 12:30 PM",
        "09:00 PM to 10:30 PM",
      ],
    },
    {
      label: "Classroom (PGCP & SDP)",
      slots: ["11:00 AM to 1:00 PM", "05:00 PM to 07:00 PM"],
    },
  ],
  modules: [
    {
      number: 1,
      title: "Digital Marketing Introduction & Fundamentals",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Marketing & Principles of Marketing",
        "Introduction to Digital Marketing",
        "Branding Designing & Business Fundamentals",
        "Owned, Earned & Paid Media",
        "Market Research & Analysis",
        "Customer Journey & Building Customer Persona",
        "Advanced Level Keyword Research",
        "AI Keyword Research Tools",
        "Importance of AI in Digital Marketing",
        "AI Content Generation",
      ],
    },
    {
      number: 2,
      title: "Wordpress Website Designing - Personal Website Building",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Canva - Poster & Social Media Creative Designing",
        "Logo Designing Basics - HuMint & Brandmark",
        "Domain & Hosting",
        "UI UX Fundamentals",
        "Creating Professional Email Ids",
        "Introduction to Wordpress",
        "Wordpress Tools & Themes",
        "Theme selection",
        "Designing Multiple Pages Basics",
        "Portfolio Creation in Website",
        "Launch of Website",
      ],
    },
    {
      number: 3,
      title: "SEO & Content Marketing",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Search Engine Optimization (SEO)",
        "Google Search Console",
        "Google My Business",
        "Content Marketing",
        "Online Reputation Management",
      ],
    },
    {
      number: 4,
      title: "Social Media Marketing & Personal Branding",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Social Business Profile Creations",
        "Facebook & Instagram SEO",
        "Linkedin & YouTube SEO",
        "Linkedin All Star Profile & Personal Branding",
        "Advanced Social Media Calendar Planning",
        "Social Media Competitor Analysis",
        "Social Media Brand & Reputation Management",
        "Social Media Strategy & Planning",
        "Meta Ads & Business Manager Creation",
        "Lead Generation & Traffic Campaigns",
        "Linkedin Ads",
      ],
    },
    {
      number: 5,
      title: "PPC & Landing Page Creation",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Google Search Ads",
        "Google Display Ads",
        "Google Shopping Ads",
        "YouTube Marketing",
        "App Marketing",
        "Lead Generation Ads",
        "Landing Page Creation",
      ],
    },
    {
      number: 6,
      title: "Marketing Analytics",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Google Analytics - 4",
        "Google Tag Manager",
        "Customer Acquisition Analytics",
      ],
    },
    {
      number: 7,
      title: "Softskills & Interview Cracking Skills",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Communication Skills",
        "Teamwork & Collaboration",
        "Problem-Solving & Critical Thinking",
        "Time Management & Organization",
        "Adaptability & Resilience",
        "Negotiation & Conflict Resolution",
        "Presentation & Public Speaking",
        "Interview Preparation & Techniques",
      ],
    },
    {
      number: 8,
      title: "Entrepreneurship & Business Skill",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "How to become a Freelancer",
        "How to Set Up Your Own Agency",
        "Campaign Planning & Project Management",
        "Attending events and building connections",
        "Presentation Skills Improvement",
        "Client Pitching for Freelancing Projects",
      ],
    },
  ],
};
