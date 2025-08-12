import Live from "@/components/Ui/svg/live";
import type { CurriculumProps } from "@/types/curriculum";

export const curriculumData: CurriculumProps = {
  heading: "Latest Curriculum Reviewed by Industry Leaders",
  description:
    "Cutting-edge digital marketing syllabus—designed by Expert trainers and endorsed by top recruiters and domain experts.",
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
      title: "Marketing & Digital Fundamentals",
      badges: [
        { icon: <Live />, label: "8 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
      ],
      topics: [
        "Evolution of Digital Marketing",
        "Principles of Branding & Communication",
        "Owned, Earned & Paid Media Explained",
        "Understanding Buyer Psychology & Customer Journey",
        "Audience Persona Creation for Social Media",
        "Market Research Techniques using AI",
        "Introduction to Social-First Brand Positioning",
        "Keyword Research for Social Discovery",
        "Introduction to AI Tools in Marketing",
      ],
    },
    {
      number: 2,
      title: "Portfolio Website Creation & Personal Branding",
      badges: [
        { icon: <Live />, label: "6 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
      ],
      topics: [
        "Introduction to Personal Portfolio Websites",
        "Choosing Domain, Hosting & Email Setup",
        "Getting Started with WordPress, Wix, or Webflow",
        "Installing Themes, Plugins & Page Builders",
        "Structuring the Website: Home, About, Services, Portfolio, Contact",
        "Embedding Reels, YouTube Shorts, Carousels, and Testimonials",
        "Writing a Personal Bio & Brand Story",
        "Adding Case Studies, Campaign Results & Media Kit",
        "Optimizing the Site for Mobile, SEO & Performance",
      ],
    },
    {
      number: 3,
      title: "Social Media Content Creation & Design",
      badges: [
        { icon: <Live />, label: "6 Live Sessions" },
        { icon: <Live />, label: "3 Assignments" },
      ],
      topics: [
        "Canva for Social Creatives & Templates",
        "Poster, Reels & Carousel Designing",
        "Creating Consistent Brand Identity & Visual Language",
        "Logo Designing using Brandmark & HuMint",
        "Templates for Reels, Shorts & Story Highlights",
        "Video Captioning & Thumbnails",
        "Optimizing Creatives for Engagement",
        "Using AI to Generate Creative Variants",
        "Social Media Calendar & Scheduling Tools",
      ],
    },
    {
      number: 4,
      title: "Content Marketing & Strategy Building",
      badges: [
        { icon: <Live />, label: "6 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
      ],
      topics: [
        "What is Content Marketing & Why It Works",
        "Long-Form vs. Short Form Content",
        "Content Pillars & Buckets",
        "Writing Content Using ChatGPT & Jasper",
        "Planning Social Campaigns for Product/Service/Brand",
        "Copywriting Frameworks (AIDA, PAS, 4Cs)",
        "AI Tools for Headline & CTA Generation",
        "Repurposing Content Across Platforms",
        "Measuring Content Impact",
      ],
    },
    {
      number: 5,
      title: "Influencer Marketing & Brand Collaborations",
      badges: [
        { icon: <Live />, label: "5 Live Sessions" },
        { icon: <Live />, label: "1 Assignment" },
      ],
      topics: [
        "Understanding the Influencer Ecosystem",
        "Types of Influencers (Nano, Micro, Macro, Mega)",
        "Finding & Sourcing Influencers via Platforms (Heepsy, Winkl, One Impression)",
        "Outreach Templates & Negotiation Strategies",
        "Influencer Onboarding & Contract Basics",
        "Planning Branded Collaborations & Campaigns",
        "Monitoring Influencer Performance (ROI, Views, Conversions)",
        "Influencer Relationship Management (IRM)",
        "Compliance & FTC Guidelines – for USA",
      ],
    },
    {
      number: 6,
      title: "Platform Mastery: Instagram, YouTube, LinkedIn",
      badges: [
        { icon: <Live />, label: "6 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
      ],
      topics: [
        "Setting Up Creator/Business Profiles",
        "Instagram Reels & Highlights Strategy",
        "YouTube Shorts & Community Growth",
        "LinkedIn Personal Branding & Thought Leadership",
        "Organic Growth Strategies per Platform",
        "Social Media SEO (Hashtags, Captions, Timing)",
        "Using Platform Insights to Optimize",
        "Collaborations & Duets/Remix Features",
        "Leveraging Platform Algorithms",
      ],
    },
    {
      number: 7,
      title: "Social Media Paid Ads & Analytics",
      badges: [
        { icon: <Live />, label: "6 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
      ],
      topics: [
        "Introduction to Meta Ads Ecosystem",
        "Campaign Types: Awareness, Engagement, Conversions",
        "Audience Targeting & Lookalike Audiences",
        "Ad Copy & Visuals for High CTR",
        "Boosting vs. Ads Manager",
        "YouTube Ads & Retargeting",
        "Setting KPIs: CTR, CPC, CPM, ROAS",
        "UTM Parameters & Campaign Tracking",
        "Google Analytics 4 for Social Campaigns",
      ],
    },
    {
      number: 8,
      title: "Soft Skills, Presentation & Client Handling",
      badges: [
        { icon: <Live />, label: "4 Live Sessions" },
        { icon: <Live />, label: "1 Assignment" },
      ],
      topics: [
        "Communication & Storytelling for Creators",
        "Building Authority through Speaking & Content",
        "Time Management & Content Consistency",
        "Team Collaboration & Delegation Skills",
        "Negotiation Skills with Brands & Agencies",
        "Handling Feedback & Revisions",
        "Building an Online Reputation",
        "Presenting a Campaign Report to Clients",
        "Interview & Freelance Pitch Preparation",
      ],
    },
  ],
};
