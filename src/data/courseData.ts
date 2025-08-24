export type Course = {
  tags?: string[];
  id: string;
  title: string;
  features: string[];
  buttonText: string;
  thumb: string;
};

export type CourseSection = {
  sectionId: string;
  sectionTitle: string;
  componentType: "Leadership" | "PostGraduate" | "Certification";
  courses: Course[];
};

const coursesData: CourseSection[] = [
  {
    sectionId: 'leadership-programs',
    sectionTitle: 'Digital Marketing Leadership Programs',
        componentType: 'Leadership',
       
    courses: [
      {
        id: 'digital-marketing-ai-entrepreneurship',
        title: 'Leadership in Digital Marketing, AI & Entrepreneurship',
        features: [
          '3 Months Internship Included',
          '1920+ Hours of Learning',
          '50+ Case Studies',
          '70+ Tools',
          '25+ Certifications',
            ],
         tags: [ '12 Months',],
        buttonText: 'View Course',
        thumb: '/images/course-list/digital-marketing-ai.jpg',
      },
      {
        id: 'social-content-creator-video-production',
          title: 'Leadership in Social Content Creator & Video Production',
          tags: [ '12 Months',],
        features: [
          '3 Months Internship Included',
          '1920+ Hours of Learning',
          '50+ Case Studies',
          '55+ Specialised Tools',
          '20+ Certifications',
        ],
        buttonText: 'View Course',
        thumb: '/images/course-list/social-content-creator.jpg',
      },
    ],
  },
  {
    sectionId: 'pg-courses',
    sectionTitle: 'Post Graduate Certification Program Courses',
    componentType: 'PostGraduate',
    courses: [
      {
        id: 'digital-marketing-ecomm-ai',
            title: 'PGCP in Digital Marketing, E‑Comm & AI',
          tags: [ '6 Months', 'Online / Classroom',],
        features: [
          'PG Level Certification',
          '240+ Hours of Learning',
          '20+ Case Studies',
          '30+ Tools',
          '15+ Certifications',
        ],
        buttonText: 'View Course',
        thumb: '/images/course-list/digital-marketing-6.jpg',
      },
      // {
      //   id: 'social-media-influencer-marketing',
      //     title: 'PGCP in Social Media & Influencer Marketing',
      //    tags: [ '6 Months', 'Online',],
      //   features: [
      //     'PG Level Certification',
      //     '240+ Hours of Learning',
      //     '20+ Case Studies',
      //     '18+ Specialised Tools',
      //     '15+ Certifications',
      //   ],
      //   buttonText: 'View Course',
      //   thumb: '/images/course-list/influencer-marketing.jpg',
      // },
      {
        id: 'performance-marketing-media-buying',
          title: 'Performance Marketing & Media Buying',
         tags: [ '6 Months', 'Online / Classroom'],
        features: [
          'PG Level Certification',
          '240+ Hours of Learning',
          '20+ Case Studies',
          '20+ Specialised Tools',
          '15+ Certifications',
        ],
        buttonText: 'View Course',
        thumb: '/images/course-list/performance-marketing.jpg',
      },
    ],
  },
  {
    sectionId: 'certification-courses',
    sectionTitle: 'Certification Courses',
    componentType: 'Certification',
    courses: [
      {
        id: 'digital-marketing-ecomm-cert',
            title: 'AI Vibe Marketing',
          tags: [ '2 Months', 'Online'],
        features: [
          'Advance Specialist Certification',
          '80+ Hours of Learning',
          '8+ Case Studies',
          '10+ Tools',
          '2 AI Flows',
        ],
        buttonText: 'View Course',
        thumb: '/images/course-list/digital-marketing-5.jpg',
      },
      {
        id: 'social-media-influencer-cert',
          title: 'Youtube & Instagram Influencer',
           tags: [ '2 Months', 'Online'],
        features: [
          'Advance Specialist Certification',
          '80+ Hours of Learning',
          '8+ Case Studies',
          '5+ Specialised Tools',
          '2 Creator Flow',
        ],
        buttonText: 'View Course',
        thumb: '/images/course-list/social-influencer-cert.jpg',
      },
      // {
      //   id: 'performance-marketing-cert',
      //     title: 'LinkedIn & Personal Branding',
      //    tags: [ '2 Months', 'Online'],
      //   features: [
      //     'Advance Specialist Certification',
      //     '80+ Hours of Learning',
      //     '8+ Case Studies',
      //     '10+ Tools',
      //     '2 Linkedin Outreach Flow',
      //   ],
      //   buttonText: 'View Course',
      //   thumb: '/images/course-list/performance-cert.jpg',
      // },
      {
        id: 'digital-marketing-ecomm-ai-cert',
        title: 'Performance Marketing & MarTech',
        features: [
          'Advance Specialist Certification',
          '80+ Hours of Learning',
          '8+ Case Studies',
          '10+ Tools',
          '2 Funnel Blueprints',
        ],
        buttonText: 'View Course',
        thumb: '/images/course-list/digital-marketing-4.jpg',
      },
    ],
  },
];


export default coursesData;
