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
        title: 'Digital Marketing, AI & Entrepreneurship',
        features: [
          '✔ 2 Months internship included',
          '✔ 1200+ Hours of Learning',
          '✔ 50+ Case studies',
          '✔ 55+ Specialised Tools',
          '✔ 20+ Certifications',
            ],
         tags: [ '12 Months',],
        buttonText: 'View Course',
        thumb: '/images/course-list/digital-marketing-ai.jpg',
      },
      {
        id: 'social-content-creator-video-production',
          title: 'Social Content Creator & Video Production',
          tags: [ '12 Months',],
        features: [
          '✔ 2 Months internship included',
          '✔ 1200+ Hours of Learning',
          '✔ 50+ Case studies',
          '✔ 55+ Specialised Tools',
          '✔ 20+ Certifications',
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
            title: 'Digital Marketing, E-Comm & AI',
          tags: [ '6 Months', 'Online / Classroom',],
        features: [
          '✔ PG Level Certification',
          '✔ 240+ Hours of Learning',
          '✔ 30+ Case Studies',
          '✔ 30+ Tools',
          '✔ 15+ Certifications',
        ],
        buttonText: 'View Course',
        thumb: '/images/course-list/digital-marketing-6.jpg',
      },
      {
        id: 'social-media-influencer-marketing',
          title: 'Social Media & Influencer Marketing',
         tags: [ '6 Months', 'Online / Classroom',],
        features: [
          '✔ PG Level Certification',
          '✔ 240+ Hours of Learning',
          '✔ 20+ Case Studies',
          '✔ 30+ Tools',
          '✔ 15+ Certifications',
        ],
        buttonText: 'View Course',
        thumb: '/images/course-list/influencer-marketing.jpg',
      },
      {
        id: 'performance-marketing-media-buying',
          title: 'Performance Marketing & Media Buying',
         tags: [ '6 Months'],
        features: [
          '✔ PG Level Certification',
          '✔ 240+ Hours of Learning',
          '✔ 20+ Case Studies',
          '✔ 30+ Tools',
          '✔ 15+ Certifications',
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
        title: 'Digital Marketing, E-Comm & AI',
        features: [
          '✔ PG Level Certification',
          '✔ 240+ Hours of Learning',
          '✔ 20+ Case Studies',
          '✔ 30+ Tools',
          '✔ 15+ Certifications',
        ],
        buttonText: 'View Course',
        thumb: '/images/course-list/digital-marketing-5.jpg',
      },
      {
        id: 'social-media-influencer-cert',
        title: 'Social Media & Influencer Marketing',
        features: [
          '✔ PG Level Certification',
          '✔ 240+ Hours of Learning',
          '✔ 20+ Case Studies',
          '✔ 30+ Tools',
          '✔ 15+ Certifications',
        ],
        buttonText: 'View Course',
        thumb: '/images/course-list/social-influencer-cert.jpg',
      },
      {
        id: 'performance-marketing-cert',
        title: 'Performance Marketing & Media Buying',
        features: [
          '✔ PG Level Certification',
          '✔ 240+ Hours of Learning',
          '✔ 20+ Case Studies',
          '✔ 30+ Tools',
          '✔ 15+ Certifications',
        ],
        buttonText: 'View Course',
        thumb: '/images/course-list/performance-cert.jpg',
      },
      {
        id: 'digital-marketing-ecomm-ai-cert',
        title: 'Digital Marketing, E-Comm & AI',
        features: [
          '✔ PG Level Certification',
          '✔ 240+ Hours of Learning',
          '✔ 20+ Case Studies',
          '✔ 30+ Tools',
          '✔ 15+ Certifications',
        ],
        buttonText: 'View Course',
        thumb: '/images/course-list/digital-marketing-4.jpg',
      },
    ],
  },
];


export default coursesData;
