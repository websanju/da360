import { CoursesType } from "@/types/courses";
import { HighlightSkill } from "@components/highlights";
import { CaseStudiesSection } from "@/types/caseStudies";
import { Project } from "@/components/liveProjectsSlider";

const liveProjectsData: Project[] = [
   {
    id: 1,
    title: "Viral Instagram Reels Production",
    // duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "In this creator-first project, you’ll conceptualize, produce, and launch a series of viral Instagram Reels for one brand, designed to maximize reach and engagement:",
    details: [
      "Analyze brand goals and target audience for Reels strategy",
      "Research trending audio, hashtags, and reel formats",
      "Write engaging hooks and scripts for maximum retention",
    ],
    steps: [
      "Shoot Reels using smartphone/DSLR with proper framing & lighting",
      "Edit Reels with transitions, captions, and effects",
      "Create a content calendar with posting frequency & timing",
      "Publish 20 Reels targeting 10K+ reach within campaign period",
      "Monitor insights and optimize for views, saves, and shares",
    ],
    note: "",
    // logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 217, 205, 0) 0%, #CDFFDE 53.35%)",
    bgsolid: "#CDFFDE",
  },
  {
    id: 2,
    title: "YouTube Channel Launch & Monetization Plan",
    // duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "This project empowers you to launch and scale a YouTube channel, focusing on both Shorts and Long-Form videos for audience growth and monetization readiness:",
    details: [
      "Define channel niche, audience persona, and content pillars",
      "Create SEO-optimized titles, descriptions, and tags for visibility",
      "Script and record 10 Shorts & 5 Long-Form professional videos",
    ],
    steps: [
      "Design custom thumbnails and consistent channel branding",
      "Optimize playlists, channel art, and community tab engagement",
      "Implement YouTube SEO strategies to improve watch time & CTR",
      "Set up channel for monetization via YouTube Partner Program",
      "Track analytics on retention, click-through, and subscriber growth",
    ],
    note: "",
    // logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(255, 240, 205, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 3,
    title: "Brand Collaboration Campaign",
    // duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "In this practical project, you’ll collaborate with a real brand to design and execute a high-ROI influencer campaign from start to finish:",
    details: [
      "Identify a target brand and analyze its objectives & audience",
      "Create a professional media kit and proposal for collaboration",
      "Develop campaign creatives: posts, reels, stories, and carousels",
    ],
    steps: [
      "Execute outreach to brand/agency with a pitch presentation",
      "Plan full campaign workflow including content calendar & deliverables",
      "Launch brand partnership content across selected platforms",
      "Monitor KPIs: reach, engagement, conversions, and ROI",
      "Collect campaign feedback and testimonials from the brand",
    ],
    note: "",
    // logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(205, 255, 236, 0) 0%, #FFD9CD 53.35%)",
    bgsolid: "#FFD9CD",
  },
  {
    id: 4,
    title: " LinkedIn Thought Leadership Profile",
    // duration: "15 Hours (±15 Days of Live Campaign)",
    heading:
      "This project positions you as a thought leader on LinkedIn through professional branding, viral content, and network growth strategies:",
    details: [
      "Build a LinkedIn All-Star Profile with professional photo, banner & headline",
      "Craft a value-driven About section and optimized experience details",
      "Create and publish 8+ high-impact posts: carousels, polls, and articles",
    ],
    steps: [
      
      "Write viral carousels using Canva and AI tools (ChatGPT, Jasper)",
      "Launch a LinkedIn Newsletter or Event for authority building",
      "Engage in targeted networking with 1K+ industry professionals",
      "Implement commenting and DMs strategy for organic reach",
      "Analyze performance with Shield App and native LinkedIn analytics",
      "Submit profile audit report and growth analytics dashboard",
    ],
    note: "",
    // logos: ["meta.png", "google-ads.png", "analytics.png"],
    bgGradient:
      "linear-gradient(280deg, rgba(205, 255, 236, 0) 0%, #CECDFF 53.35%)",
    bgsolid: "#CECDFF",
  },
];
const aiVibeCaseStudies: CaseStudiesSection = {
  heading: "Glimpse of Brand Case Studies",
  subheading: "Learn Through Real Campaigns & Creator Journeys",
  items: [
    {
      id: 1,
      logo: "/images/case-studies/netflix-logo.png",
      title: "Netflix India — Driving Engagement with Short-Form Video",
      description:
        "Netflix India revolutionized its social media strategy by leveraging Reels and meme collaborations to connect with Gen Z and millennial audiences. Through witty short-form storytelling, trending audio, and influencer tie-ups, Netflix maximized engagement for show launches and campaigns like Sacred Games and Money Heist.",
      tags: [
        "Short-Form Video Storytelling",
        "Meme Collaborations",
        "Influencer Tie-Ups",
      ],
    },
    {
      id: 2,
      logo: "/images/case-studies/zomato-logo.png",
      title: "Zomato — Using Humor & Meme Marketing for Virality",
      description:
        "Zomato redefined digital engagement by adopting a meme-first strategy. With witty tweets, meme-based creatives, and relatable Reels, the brand saw a 10x boost in social engagement. Their campaigns during IPL and cricket series showcased the power of humor in building viral momentum.",
      tags: [
        "Meme Marketing",
        "Humor-Driven Engagement",
        "Real-Time Content Creation",
      ],
    },
    {
      id: 3,
      logo: "/images/case-studies/cred-logo.png",
      title: "CRED — Creator-Driven Influencer Collaborations",
      description:
        "CRED built credibility and brand trust by collaborating with high-profile creators and celebrities. Their campaigns blended quirk, authority, and storytelling—turning influencer-led videos into national conversations. Creators like Rahul Dravid and Tanmay Bhat were instrumental in CRED’s viral brand recall.",
      tags: [
        "Campaign Planning",
        "Creator Collaborations",
        "High-ROI Content Production",
      ],
    },
  ],
};

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
    subtitleOne: "AI-Driven Curriculum Tailored for Aspiring Content Leaders & Video Entrepreneurs Fast-Track Your Career as a Social Media Influencer, Creator, and Brand Strategist",
    subtitleTwo: "",
    tags: ["12-Month Intensive Program", "Includes 3-Month Agency Internship"],
  },
  cohortSectionHeading: "Leadership in Social Content Creator & Video Production",
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
    { icon: "/images/icons/calendar.png", title: "Months", value: "12" },
    { icon: "/images/icons/clock.png", title: "Time", value: "Flexible" },
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
      title: "Mentorship",
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
    headerTitle: "Your 12-Month Creator Journey",
    description: "Your journey is strategically designed for maximum growth at every stage."
  },
   programSkills: {
    heading: "Key Highlights of the Program",
    subheading: "Social Content Creation Skills You’ll Master to Lead the Creator Economy",
    skills: highlightSkills,
  },
  caseStudies: aiVibeCaseStudies,
   liveProjects: {
    section: "section6",
    heading: "AI Vibe Marketing Live Projects",
    description:
      "Practical, hands-on projects to apply AI marketing skills in real-world brand scenarios.",
    projects: liveProjectsData,
  },
};

export default digitalMarketingLeadership;