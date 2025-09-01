// import Live from "@/components/Ui/svg/live";
import Live from "@/components/Ui/svg/live";
import type { CurriculumProps } from "@/types/curriculum";

export const electiveData: CurriculumProps = {
  heading: "Electives",
  description:
    "Select from 3 Industry Ready Electives with our MBA in Digital Marketing and AI course",

  modules: [
    {
      number: 1,
      title: "AI in Digital Marketing & Business Strategy",
      badges: [
        { icon: <Live />, label: "360 Periods" },
        { icon: <Live />, label: "3 Assignments" },
        { icon: <Live />, label: "5 Case Studies" },
        { icon: <Live />, label: "1 Assessment" },
      ],
      topics: [
        "Foundations of AI in Business Strategy",
        "AI-Powered Market Research, Competitive Intelligence & Foresight",
        "AI-Driven Customer Journey Mapping & Personalisation Strategies",
        "Predictive Analytics & AI Forecasting in Marketing ROI",
        "AI in Brand Positioning, Messaging & Reputation Management",
        "Integrating AI with Digital Transformation & Omnichannel Strategy",
        "Governance, Ethics & Responsible AI in Marketing Strategy",
        "Case Studies: AI-Driven Strategic Transformations (B2B, B2C, D2C)",
      ],
      moduleslable: "Elective",
    },
    {
      number: 2,
      title: "AI-Driven Product Innovation",
      badges: [
        { icon: <Live />, label: "360 Periods" },
        { icon: <Live />, label: "3 Assignments" },
        { icon: <Live />, label: "5 Case Studies" },
        { icon: <Live />, label: "1 Assessment" },
      ],
      topics: [
        "Human-Centered Design Thinking with AI Enhancements",
        "Generative Design & Concept Testing",
        "AI-Enabled Market Validation & Rapid Prototyping",
        "Predictive Analytics in Product Development & Lifecycle Planning",
        "AI in Pricing Models, Subscription Design & Monetization Strategies",
        "Leveraging AI for UX/UI Optimisation in Digital Products",
        "AI-Powered Feedback Loops: Sentiment, Reviews & User Data",
        "Case Studies: AI-Driven Product Launches & Innovations",
      ],
      moduleslable: "Elective",
    },
    {
      number: 3,
      title: "Social Selling and Growth Strategy",
      badges: [
        { icon: <Live />, label: "360 Periods" },
        { icon: <Live />, label: "3 Assignments" },
        { icon: <Live />, label: "5 Case Studies" },
        { icon: <Live />, label: "1 Assessment" },
      ],
      topics: [
        "Social Listening, Lead Scoring & Engagement",
        "AI-Powered Personal Branding & Social Reputation Management",
        "Advanced LinkedIn, Twitter & Instagram Selling with AI Tools",
        "AI Chatbots & Conversational Commerce in Social Selling",
        "Influencer-Led Social Selling + AI Matching Platforms",
        "Growth Hacking Frameworks with AI Experimentation & A/B Testing",
        "AI-Powered Funnel Optimisation: Awareness → Conversion → Retention",
        "Case Studies: Global Social Selling Growth Powered by AI",
      ],
      moduleslable: "Elective",
    },
  ],
  learningMode: "",
  batchTimings: [],
};
