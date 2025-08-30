import Live from "@/components/Ui/svg/live";
import type { SpecialisationProps } from "@/types/specialisation";

export const specialisationData: SpecialisationProps = {
  specialisationHeading: "Fastrack Your AI Digital Marketing Career",
  specialisationDescription:
    "Learn 4 distinct specializations with a 6-month postgraduate Certification program",

  specialisationmodulesData: [
    {
      number: 1,
      title: "Media Buying & Planning",
      badges: [
        { icon: <Live />, label: "8 Live Sessions" },
        { icon: <Live />, label: "3 Assignments" },
        { icon: <Live />, label: "1 Case Study" },
      ],
      topics: [
        "4 Pillars of Media Buying Strategy",
        "Goal Setting (A3R3 Funnel Planning)",
        "Audience Targeting & Segmentation",
        "Budgeting & Media Mix Modeling",
        "Buying Channels: Google, Meta, LinkedIn, Programmatic",
        "Media Scheduling & Planning Calendars",
        "Cost Optimization Strategies (CPC, CPM, ROAS)",
        "Publisher Negotiation Skills",
        "Programmatic Ad Platforms",
        "Real-World Media Plan Project",
      ],
    },
    {
      number: 2,
      title: "MarCom & Automation",
      badges: [
        { icon: <Live />, label: "7 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
        { icon: <Live />, label: "1 Project" },
      ],
      topics: [
        "Introduction to MarTech Ecosystem",
        "Campaign Planning across Channels",
        "Email Marketing & Drip Campaigns",
        "Tools: Mailchimp, MoEngage, ActiveCampaign",
        "CRM Integration with Ad Tools",
        "Building ICPs & Personalization Funnels",
        "WhatsApp & SMS Campaigns",
        "Zapier & Webhook Automations",
        "ABM (Account Based Marketing) Workflows",
        "Building & Reporting Omnichannel Journeys",
      ],
    },
    {
      number: 3,
      title: "AI & Vibe Marketing",
      badges: [
        { icon: <Live />, label: "6 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
        { icon: <Live />, label: "1 Case Study" },
      ],
      topics: [
        "What is Vibe Marketing & Psychology in Ad Design",
        "AI Tools for Visuals: Canva AI, Midjourney, Leonardo.ai",
        "AI for Creative Storytelling & Shortform",
        "Generative Video for Ad Creatives (Pictory, HeyGen)",
        "Predictive Content Planning Using AI",
        "Real-time Personalization with AI Bots",
        "Building Viral Hook Models",
        "Sound Design & Hook Optimization",
        "Final AI Vibe Campaign Presentation",
      ],
    },
    {
      number: 4,
      title: "Photo & Video Generation with AI",
      badges: [
        { icon: <Live />, label: "8 Live Sessions" },
        { icon: <Live />, label: "3 Assignments" },
        { icon: <Live />, label: "1 Project" },
      ],
      topics: [
        "Text to Video AI: Pictory, Runway, Synthesia",
        "Instagram Reel and YouTube Short AI Templates",
        "AI Avatar & Talking Head Videos",
        "Using ChatGPT for Scriptwriting",
        "B-roll & Voiceover Automation Tools",
        "Thumbnails with Canva AI",
        "Video SEO Best Practices",
        "Building a Social Media Calendar",
        "Real-time Content Calendar Execution",
      ],
    },
  ],
};
