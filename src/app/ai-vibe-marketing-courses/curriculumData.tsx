import Live from "@/components/Ui/svg/live";
import Assignment from "@/components/Ui/svg/assignment";
import CaseStudy from "@/components/Ui/svg/caseStudy";
import Assesment from "@/components/Ui/svg/assesment";
import type { CurriculumProps } from "@/types/curriculum";

export const curriculumData: CurriculumProps = {
  heading: "Latest Curriculum Reviewed by Industry Leaders",
  description:
    "Cutting-edge digital marketing syllabus—designed by Expert trainers and endorsed by top recruiters and domain experts.",
  learningMode: "Online",
  batchTimings: [
    {
      label: "Online (Certification)",
      slots: [
        "07:30 AM to 09:30 AM",
        "10:30 AM to 12:30 PM",
        "09:00 PM to 10:30 PM",
      ],
    },
    {
      label: "",
      slots: [""],
    },
  ],
  modules: [
    {
      number: 1,
      title: "Introduction to AI in Modern Marketing",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Evolution of Marketing: From Traditional to AI - Powered",
        "Introduction to AI & Machine Learning in Marketing",
        "Key AI Concepts: NLP, Predictive Analytics, ML",
        "Rise of AI in Customer Journey Mapping",
        "Overview of Generative AI Tools (Image, Video)",
        "Metrics & Data Privacy in AI",
        "Introduction to Prompt Engineering",
        "AI Marketing Case Studies: Netflix, Spotify, Amazon",
        "The Rise of Hyper-Personalization with AI",
      ],
    },
    {
      number: 2,
      title: "AI Tools for Content & Campaign Creation",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "AI Copywriting Tools (ChatGPT, Jasper, Copy.ai)",
        "AI Image & Video Creation Tools (Canva AI, Pictory, Synthesia)",
        "Blog & Article Generators (Writesonic, HyperWrite)",
        "Prompts Engineering for Content Generation",
        "Real-Time Content Adaptation with AI",
        "AI - Generated Landing Pages & CTAs",
        "Content Strategy Using Insights from AI",
        "Brand Storytelling with AI",
        "AB Testing with AI - Optimal Variants",
      ],
    },
    {
      number: 3,
      title: "AI-Driven SEO & Smart Content Discovery",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Advanced Keyword Research with AI Tools",
        "AI - Powered Voice Search Optimization",
        "AI - Powered Video Search & Semantic SEO",
        "Content Scoring & AI Audit Tools (Surfer, MarketMuse)",
        "Search Intent Analysis & Predictive Search Insights",
        "Using AI for SERP Position Tracking",
        "Creating Long - form SEO Content with AI",
        "Dynamic On - page SEO Optimization",
      ],
    },
    {
      number: 4,
      title: "Social Media & Influencer Marketing with AI",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Smart Scheduling & AI",
        "Publishing Tools",
        "Social Listening with AI (Brand24, Sprout AI)",
        "AI in Trend Prediction & Hashtag Research",
        "Campaign Optimization with Meta AI & LinkedIn AI Tools",
        "Influencer Discovery Platforms (Upfluence, HypeAuditor, Heepsy AI)",
        "Personal Branding Automation with AI",
        "Sentiment Analysis in Social Engagement",
        "Storytelling Using AI Platforms",
        "Measuring ROI on AI Campaigns",
        "Drone Social Campaigns",
      ],
    },
    {
      number: 5,
      title: "Conversational Marketing & AI Chatbots",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Introduction to Chatbots & Conversational AI",
        "ChatGPT-based Customer Service Frameworks",
        "Building WhatsApp & Messenger Chatbots (TARS, Landbot)",
        "AI Scripts for Engagement & Sales Funnels",
        "Voice bots vs. Text bots",
        "Chat Journey Mapping (Intents, Actions, Responses)",
        "Integration with CRMs & Automation Tools",
        "Measuring Chatbot Performance Metrics",
      ],
    },
    {
      number: 6,
      title: "Paid Media & AI-Powered Ad Campaigns",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "AI in PPC: Google Performance Max, Meta Advantage+",
        "Predictive Audience Targeting with AI",
        "Dynamic Creative Optimization (DCO) Tools",
        "Campaign Strategy using AI Tools (Adcreative, Smartly.io)",
        "Bid Optimization with AI for Ad Placements",
        "Programmatic Advertising Basics",
        "Copy & Visuals Generation with Generative AI",
        "Measuring AI PPC Campaign Performance",
        "Measuring CAC & ROAS using AI Dashboards",
      ],
    },
    {
      number: 7,
      title: "Marketing Automation & Analytics with AI",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Assignment />, label: "2 Assignments" },
        { icon: <CaseStudy />, label: "1 Case Study" },
        { icon: <Assesment />, label: "2 Assessments" },
      ],
      topics: [
        "Powered CRMs (HubSpot, Zoho AI)",
        "Lead Scoring Using Predictive AI Models",
        "Personalization Engines with AI (Enite AI, Optimizely)",
        "Setting Up Automation Flows (Emails/SMS/WhatsApp)",
        "GA4 using GPT for Data Interpretation",
        "Predictive Analytics using Looker Studio",
        "Multi - touch Attribution Modeling",
        "Journey Optimization with Behavioral AI",
        "Marketing KPIs & Dashboarding",
      ],
    },
  ],
};
