// import Live from "@/components/Ui/svg/live";
import Live from "@/components/Ui/svg/live";
import type { SpecialisationProps } from "@/types/electiveData";

export const electiveData: SpecialisationProps = {
  specialisationHeading: "Electives",
  specialisationDescription:
    "Select from 3 Industry Ready Electives with our MBA in Digital Marketing and AI course",

  specialisationmodulesData: [
    {
      number: 1,
      title: "AI in Digital Marketing & Business Strategy",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
        { icon: <Live />, label: "1 Case Study" },
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
    },
    {
      number: 2,
      title: "AI-Driven Product Innovation",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
        { icon: <Live />, label: "1 Case Study" },
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
    },
    {
      number: 3,
      title: "Social Selling and Growth Strategy",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
        { icon: <Live />, label: "1 Case Study" },
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
    },
  ],
};
