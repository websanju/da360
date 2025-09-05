import Assesment from "@/components/Ui/svg/assesment";
import Assignment from "@/components/Ui/svg/assignment";
import CaseStudy from "@/components/Ui/svg/caseStudy";
import Live from "@/components/Ui/svg/live";
import type { CurriculumProps } from "@/types/curriculum";

export const curriculumData: CurriculumProps = {
  heading: "Latest Curriculum Reviewed by Industry Leaders",
  description:
    "Cutting-edge digital marketing syllabus—designed by expert trainers and endorsed by top recruiters and domain experts.",
  learningMode: "Offline",
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
        "Marketing Principles & Digital Evolution",
        "Paid, Earned, and Owned Media Models",
        "Branding & Positioning for Ads",
        "Buyer Journey & Funnel Awareness",
        "Market Research & Competitor Benchmarking",
        "Advanced Keyword Research Techniques",
        "Using AI for Consumer Insight Mining",
        "Understanding KPIs in Performance Marketing",
        "Introduction to AI in Digital Strategy",
      ],
    },
    {
      number: 2,
      title: "Portfolio Website & Landing Page Creation",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Domain, Hosting & Email Setup",
        "WordPress/Unbounce/Swipe Pages Basics",
        "Designing Lead Capture Pages",
        "Using Templates & Conversion Optimization Tools",
        "Lead Magnet Integration & CRM Hookups",
        "A/B Testing for Headlines & CTAs",
        "Speed, UX, and Mobile Optimization",
        "Using Google Tag Manager for Event Tracking",
      ],
    },
    {
      number: 3,
      title: "SEO & Content Marketing Foundations",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Introduction to SEO & SERP Structure",
        "Technical SEO Basics",
        "Google Search Console & Site Audit",
        "Keyword Mapping for Paid + Organic Strategy",
        "Content Clusters & Performance Copy",
        "On-Page Optimization with AI",
        "Link Building Strategies for Authority",
        "Reputation Management for Ad Brands",
        "Content ROI Measurement",
      ],
    },
    {
      number: 4,
      title: "Social Media Strategy & Organic Planning",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Platform-Specific Strategy (Meta, LinkedIn, YouTube)",
        "Social SEO: Hashtags, Timing, Captions",
        "Competitor Analysis for Paid/Organic Mix",
        "Brand Persona & Tone of Voice",
        "AI Calendar Planning Tools (Publer, Predis.ai)",
        "Social Listening & Trend Hijacking",
        "Building Creatives Using AI Tools",
        "Storytelling Frameworks for Campaigns",
        "Organic Performance Metrics",
      ],
    },
    {
      number: 5,
      title: "Paid Ads & Campaign Management",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Paid, Earned, and Owned Media Models",
        "Branding & Positioning for Ads",
        "Buyer Journey & Funnel Awareness",
        "Market Research & Competitor Benchmarking",
        "Advanced Keyword Research Techniques",
        "Using AI for Consumer Insight Mining",
        "Understanding KPIs in Performance Marketing",
        "Introduction to AI in Digital Strategy",
      ],
    },
    {
      number: 6,
      title: "Analytics, Attribution & CRO",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "GA4 Deep Dive & Funnel Tracking",
        "Google Tag Manager for Events",
        "Conversion Rate Optimization Framework",
        "Heatmaps, Scroll Maps (Hotjar / Clarity)",
        "ROAS, CPA, CTR, CPM Calculations",
        "Attribution Models (First Click, Last Click, Linear, etc.)",
        "Landing Page Optimization Tools",
        "E-commerce Tracking Implementation",
        "Reporting Dashboards",
      ],
    },
    {
      number: 7,
      title: "Communication, Agency Collaboration & Soft Skills",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Client Communication Templates & Pitching",
        "Team Collaboration in Campaigns",
        "Agency Workflow & Deliverables",
        "Presentation Skills for Media Plans",
        "Negotiation Skills in Media Buying",
        "Conflict Resolution & Client Handling",
        "Reporting Meeting Simulations",
        "Resume Building & Interview Practice",
        "Portfolio Preparation",
      ],
    },
    {
      number: 8,
      title: "Freelancing & Growth Planning",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "How to Set Up as a Freelance Media Buyer",
        "Pricing Structures: Project vs. Retainer",
        "Creating Proposal & Pitch Decks",
        "Onboarding Clients & Managing Contracts",
        "Tools for Freelancers: Trello, Notion, Calendly",
        "Building Personal Brand as a Media Expert",
        "Portfolio Website & LinkedIn Branding",
        "DA360 Agency Collaboration Project",
        "Showcase Day Prep",
      ],
    },
  ],
};
