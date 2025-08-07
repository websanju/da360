// coursesData.ts
export type CourseItem = {
  title: string;
  duration: string;
  mode?: string;
  onClick: string;
  list: string[];
};

export const coursesData: Record<string, CourseItem[]> = {
  leadership: [
    {
      title: "Leadership in Digital Marketing, AI & Entrepreneurship",
      duration: "12 Months",
      onClick: "/master-digital-marketing-leadership-course",
      list: [
        "3 Months Internship Included",
        "1920+ Hours of Learning",
        "50+ Case Studies",
        "70+ Tools",
        "25+ Certifications",
      ],
    },
    {
      title: "Leadership in Social Content Creator & Video Production",
      duration: "12 Months",
      onClick: "/social-content-creator-and-video-production",
      list: [
        "3 Months Internship Included",
        "1920+ Hours of Learning",
        "50+ Case Studies",
        "55+ Specialised Tools",
        "20+ Certifications",
      ],
    },
  ],
  pgcp: [
    {
      title: "PGCP in Digital Marketing, E‑Comm & AI",
      duration: "6 Months",
      mode: "Online / Classroom",
      onClick: "/digital-marketing-training-institute",
      list: [
        "PG Level Certification",
        "240+ Hours of Learning",
        "20+ Case Studies",
        "30+ Tools",
        "15+ Certifications",
      ],
    },
    {
      title: "PGCP in Social Media & Influencer Marketing",
      duration: "6 Months",
      mode: "Online",
      onClick: "/social-media-and-Influencer-marketing",
      list: [
        "PG Level Certification",
        "240+ Hours of Learning",
        "20+ Case Studies",
        "18+ Specialised Tools",
        "15+ Certifications",
      ],
    },
    {
      title: "PGCP in Performance Marketing & Media Buying",
      duration: "6 Months",
      mode: "Online",
      onClick: "/performance-marketing-and-media-buying",
      list: [
        "PG Level Certification",
        "240+ Hours of Learning",
        "20+ Case Studies",
        "20+ Specialised Tools",
        "15+ Certifications",
      ],
    },
  ],
  certification: [
    {
      title: "AI Vibe Marketing",
      duration: "2 Months",
      mode: "Online",
      onClick: "/online-digital-marketing-courses",
      list: [
        "Advance Specialist Certification",
        "80+ Hours of Learning",
        "8+ Case Studies",
        "10+ Tools",
        "2 AI Flows",
      ],
    },
    {
      title: "Youtube & Instagram Influencer",
      duration: "2 Months",
      mode: "Online",
      onClick: "/online-digital-marketing-courses",
      list: [
        "Advance Specialist Certification",
        "80+ Hours of Learning",
        "8+ Case Studies",
        "5+ Specialised Tools",
        "2 Creator Flow",
      ],
    },
    {
      title: "LinkedIn & Personal Branding",
      duration: "2 Months",
      mode: "Online",
      onClick: "/online-digital-marketing-courses",
      list: [
        "Advance Specialist Certification",
        "80+ Hours of Learning",
        "8+ Case Studies",
        "10+ Tools",
        "2 Linkedin Outreach Flow",
      ],
    },
    {
      title: "Performance Marketing & MarTech",
      duration: "2 Months",
      mode: "Online",
      onClick: "/online-digital-marketing-courses",
      list: [
        "Advance Specialist Certification",
        "80+ Hours of Learning",
        "8+ Case Studies",
        "10+ Tools",
        "2 Funnel Blueprints",
      ],
    },
  ],
};
