import Live from "@/components/Ui/svg/live";
import type { CurriculumProps } from "@/types/curriculum";

export const curriculumData: CurriculumProps = {
  heading: "Latest Curriculum Reviewed by Industry Leaders",
  description:
    "Cutting-edge digital marketing syllabus—designed by expert trainers and endorsed by top recruiters and domain experts.",
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
  ],
  modules: [
    {
      number: 1,
      title: "Digital Marketing Introduction & Fundamentals",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Live />, label: "3 Assignments" },
      ],
      topics: [
        "Marketing & Principles of Marketing",
        "Introduction to Digital Marketing & Evolution of Online Advertising",
        "Branding, Designing, & Business Fundamentals",
        "Owned, Earned & Paid Media Framework",
        "Market Research & Competitor Analysis",
        "Customer Journey Mapping & Building Customer Personas",
        "Advanced Level Keyword Research for Paid & Organic",
        "AI Keyword Research Tools for Targeting & Planning",
        "Importance of AI in Performance Marketing & Campaign Optimization",
        "AI Content Generation for Ad Copies, Blogs & Creatives",
      ],
    },
    {
      number: 2,
      title: "WordPress Website Designing – Personal & Business",
      badges: [
        { icon: <Live />, label: "10 Live Sessions" },
        { icon: <Live />, label: "3 Assignments" },
      ],
      topics: [
        "Domain & Hosting Purchase & Setup",
        "UI/UX Fundamentals for Landing Pages & Websites",
        "Creating Professional Business Email IDs",
        "Introduction to WordPress Dashboard & Settings",
        "WordPress Tools, Plugins & Theme Selection",
        "Designing Multiple Web Pages – Home, About, Services, Contact",
        "Canva – Poster, Ad Creative & Social Media Content Designing",
        "Logo Designing Basics – Using HuMint & Brandmark",
        "Portfolio Creation & Integration in Website",
        "Website Testing, SEO Setup & Final Launch",
      ],
    },
    {
      number: 3,
      title: "SEO & Content Marketing",
      badges: [
        { icon: <Live />, label: "9 Live Sessions" },
        { icon: <Live />, label: "3 Assignments" },
      ],
      topics: [
        "Search Engine Optimization (SEO) Fundamentals",
        "On-Page & Off-Page SEO Implementation",
        "Google Search Console Setup & Insights",
        "Google My Business Optimization for Local Marketing",
        "Content Marketing Strategies for Blogs, Videos & Social Media",
        "Online Reputation Management for Brands & Individuals",
        "AI-Powered Content Planning & Distribution",
        "Keyword Clustering for Topic Authority",
        "Link Building & Content Outreach Strategies",
      ],
    },
    {
      number: 4,
      title: "Social Media Marketing & Personal Branding",
      badges: [
        { icon: <Live />, label: "9 Live Sessions" },
        { icon: <Live />, label: "3 Assignments" },
      ],
      topics: [
        "Social Business Profile Creation & Optimization",
        "Facebook & Instagram SEO for Organic Growth",
        "LinkedIn & YouTube SEO for Visibility",
        "LinkedIn All-Star Profile Creation & Personal Branding",
        "Advanced Social Media Calendar Planning",
        "Social Media Competitor Analysis & Benchmarking",
        "Social Media Brand & Reputation Management",
        "Social Media Strategy & Campaign Planning",
        "AI Tools for Social Media Design & Engagement",
      ],
    },
    {
      number: 5,
      title: "Advanced Paid Ads & Analytics",
      badges: [
        { icon: <Live />, label: "8 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
      ],
      topics: [
        "Google Ads Campaign Creation & Optimization",
        "Facebook & Instagram Ads Strategies",
        "YouTube Ads & Video Campaigns",
        "Remarketing & Retargeting Strategies",
        "AI Tools for Ad Copy & Creative Optimization",
        "Conversion Rate Optimization (CRO) Basics",
        "Tracking with Google Tag Manager",
        "Google Analytics 4 Setup & Reporting",
        "ROI Calculation & Ad Budget Planning",
      ],
    },
    {
      number: 6,
      title: "Email & Automation Marketing",
      badges: [
        { icon: <Live />, label: "7 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
      ],
      topics: [
        "Email Marketing Fundamentals",
        "Building Email Lists & Lead Magnets",
        "Designing Email Templates in Mailchimp/Sendinblue",
        "Segmentation & Personalization Strategies",
        "Automated Email Workflows",
        "A/B Testing & Open Rate Optimization",
        "Integrating Email with CRM Tools",
        "AI Tools for Email Subject Line & Copywriting",
      ],
    },
    {
      number: 7,
      title: "E-commerce & Affiliate Marketing",
      badges: [
        { icon: <Live />, label: "7 Live Sessions" },
        { icon: <Live />, label: "2 Assignments" },
      ],
      topics: [
        "Setting up an E-commerce Store (Shopify/WooCommerce)",
        "Product Page Optimization & SEO",
        "AI Tools for Product Descriptions",
        "Payment Gateway Integration",
        "Affiliate Marketing Fundamentals",
        "Finding & Joining Affiliate Programs",
        "Tracking Affiliate Conversions",
        "Influencer Marketing for E-commerce",
      ],
    },
    {
      number: 8,
      title: "Capstone Project & Career Preparation",
      badges: [
        { icon: <Live />, label: "6 Live Sessions" },
        { icon: <Live />, label: "Final Project" },
      ],
      topics: [
        "Capstone Project Briefing & Guidelines",
        "End-to-End Digital Marketing Campaign Planning",
        "Portfolio Creation & Presentation",
        "Resume & LinkedIn Profile Optimization",
        "Mock Interviews & Feedback",
        "Freelancing Platforms Overview",
        "Pitching to Clients & Agencies",
        "Certification Exam & Graduation",
      ],
    },
  ],
};
