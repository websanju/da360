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
  subheading: "Learn Through Real Business Challenges from Industry-Leading Brands",
  items: [
    {
      id: 1,
      logo: "/images/case-studies/spotify-logo.png",
      title: "Spotify – AI-Personalized Playlists",
      description:
        "Spotify leveraged predictive AI to deliver hyper-personalized playlists for users, making music discovery seamless and unique to each listener. Viral campaigns like “Spotify Wrapped” turned user data into shareable stories, transforming personal insights into a global social media movement",
      tags: [
        "Predictive Analytics",
        "Content Personalization",
        "Viral Campaign Design",
      ],
    },
    {
      id: 2,
      logo: "/images/case-studies/nike-logo.png",
      title: "Nike – AI in Social Storytelling",
      description:
        "Nike harnessed AI-powered insights to create emotion-driven campaigns that resonated deeply with their audience. During major product launches, AI was used for smart targeting—ensuring the right message reached the right audience at the right time. Their campaigns became cultural conversations rather than just advertisements.",
      tags: [
        "Vibe Marketing",
        "AI-Powered Storytelling",
        "Emotional Branding",
        "Influencer Marketing",
      ],
    },
    {
      id: 3,
      logo: "/images/case-studies/zomato.png",
      title: "Zomato – AI Meme Marketing",
      description:
        "Zomato pioneered AI-driven meme marketing by creating real-time, trend-jacking campaigns that resonated with India’s social media culture. With geo-targeted retargeting and quick-turnaround creatives, Zomato built a brand persona that was witty, relatable, and omnipresent across platforms.",
      tags: [
        "Trend Hijacking",
        "AI Performance Marketing",
        "Geo-Targeted Retargeting",
      ],
    },
  ],
};

const highlightSkills: HighlightSkill[] = [
  { name: "AI-Powered Content Creation" },
  { name: "Storytelling" },
  { name: "Conversational Marketing" },
  { name: "Chatbots & Voice AI" },
  { name: "Vibe Marketing Psychology" },
  { name: "Viral Hooks" },
  { name: "Dynamic Creative" },
  { name: "Programmatic Media Buying" },
  { name: "Predictive Media Buying" },
  { name: "Social Listening" },
  { name: "Sentiment Analysis with AI" },
  { name: "Real-Time Personalization" },
  { name: "AI SEO" },
  { name: "Smart Content Discovery" },
];

const BBAInDigitalMarketingAndAi: CoursesType = {
  leadCapture: {
    titleOne: "BBA in Digital",
    titleTwo: "Marketing &  AI",
    subtitleOne: "",
    subtitleTwo: "",
    tags: ["Degree", "Admission Deadline: 31-Aug-2025", "Duration: 36 Months"],
  },
  cohortSectionHeading: "On Campuse Immersion Program for BBA Digital Marketing Cohort Details",
  Cohort: [
    {
      date: "Mar 28th",
      mode: "Offline",
      weekday: "(Mon-Fri)",
      capacity: "120 Seats",
      campus: "Satvva Global City Campus, Bangalore",
      campusLabel: "Location"
    },
  ],
  highlights: [
    { icon: "/images/icons/calendar.png", title: "Months", value: "36" },
    {
      icon: "/images/icons/template.png",
      title: "Learning Mode",
      value: "On Campus",
    },
    {
      icon: "/images/icons/ai.png",
      title: "AI-Powered Learning Tools",
      value: "70+"
    },
    {
      icon: "/images/icons/case-study.png",
      title: "Live Case Studies",
      value: "100+",
    },
    {
      icon: "/images/icons/internship.png",
      title: "Learning Methodologies",
      value: "10",
    },
    {
      icon: "/images/icons/project.png",
      title: "Capstone Project",
      value: "Included",
    },
    {
      icon: "/images/icons/specialisation.png",
      title: "Specialisations",
      value: "4",
    },
    {
      icon: "/images/icons/trainer.png",
      title: "Domain Specialist Trainers",
      value: "15+",
    },
  ],
  StoryHeader: {
    headerTitle: "Real Stories. Real Impact. Real Careers.",
    description: "Meet the Learners Who Transformed Their Futures with AI-Powered Digital Marketing",
  },
  LifeAtDA360Header: {
    headerTitle: "Life @ DA360 — Where Learning Gets Real",
    description: "Go Beyond the Classroom with Power-Packed Competitions & Creative Showdowns",
  },
  LearningRoadmapProps: {
    headerTitle: "Your 2-Month Learning Journey",
    description: "A strategic roadmap designed for maximum creative, technical, and career growth.",
  },
  programSkills: {
    heading: "Key Highlights of Our AI-Driven Digital Marketing Program",
    subheading: "Digital Marketing Skills You’ll Master to Lead the Future",
    skills: highlightSkills,
  },
  caseStudies: aiVibeCaseStudies,
  liveProjects: {
    section:"",
    heading: "AI Vibe Marketing Live Projects",
    description:
      "Practical, hands-on projects to apply AI marketing skills in real-world brand scenarios.",
    projects: liveProjectsData,
  },
};

export default BBAInDigitalMarketingAndAi;