import TrainersHeroSection from "@components/trainersHeroSection";
import CareerBanner from "@/components/careerBanner";
import TrainersFacultyCard from "@components/widgets/trainersFacultyCard";
import GuestFacultyCard from "@components/widgets/guestFacultyCard";
import styles from "./style.module.scss";
import SectionHeader from "@/components/widgets/sectionHeader";
import CaseStudyPopup, { Study } from "@components/widgets/popups/gurstFaculty";
import TrainersFacultyPopup from "@components/widgets/popups/trainersFaculty";
import PopupTrigger from "./popupTrigger";

export const metadata = {
  title:
    "Classroom Experience, Life & Learning at Digital Academy 360Certified Digital Marketing Mentors | DA360 Trainer & Expert",
  description:
    "Best Digital Marketing Trainers. Industry Certified Mentors & Guest Faculties From Global Brands, 10 Level Methodology, 5 Tier Team Support. Learn Form Best!",
  keywords: [
    "Digital Marketing Trainers",
    "Digital Marketing Experts",
    "DA360 Trainers",
    "Best Trainers at DA360",
    "DA360 Certified Trainers",
    "Digital Marketing Trainers & Coaches",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/digital-marketing-trainers-da360",
  },
  openGraph: {
    title:
      "Classroom Experience, Life & Learning at Digital Academy 360Certified Digital Marketing Mentors | DA360 Trainer & Expert",
    description:
      "Best Digital Marketing Trainers. Industry Certified Mentors & Guest Faculties From Global Brands, 10 Level Methodology, 5 Tier Team Support. Learn Form Best!",
    url: "https://digitalacademy360.com/digital-marketing-trainers-da360",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Classroom Experience, Life & Learning at Digital Academy 360Certified Digital Marketing Mentors | DA360 Trainer & Expert",
    description:
      "Best Digital Marketing Trainers. Industry Certified Mentors & Guest Faculties From Global Brands, 10 Level Methodology, 5 Tier Team Support. Learn Form Best!",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
};

const dataItem: Study[] = [
  {
    name: "Rajesh Choudhury",
    namePopup: "Rajesh <br/> Choudhury",
    title: "DGM Digital Marketing at Purvankara",

    expertise:
      "Media planning, SEO/SEM, PPC, content strategy, ORM, analytics, and digital training for high-growth performance marketing.",
    description:
      "Deputy General Manager – Digital Marketing at Puravankara Ltd. with 18+ years of experience in digital strategy across real estate, retail & e-commerce sectors.",
    profileImage: "/images/guestMentor/rajesh-choudhury.jpg",
    profileImagePopup: "/images/guestMentor/rajesh-choudhury.png",
    logos: [
      "/images/guestMentor/amazon.svg",
      "/images/guestMentor/puravankara.svg",
      "/images/guestMentor/anarock.svg",
    ],
  },

  {
    name: "Shantanu Sharma",
    namePopup: "Shantanu <br/> Sharma",
    title: "AVP Digital Marketing at Casagrand",
    expertise:
      "Expert in Google Ads, Meta, LinkedIn & programmatic channels—manages multi-million-dollar budgets with automation, CRM integration & full-funnel optimization.",
    description:
      "8+ years of experience in performance marketing across US, UK & APAC. Has successfully trained over 1,000 digital marketers and led high-ROI campaigns for brands like Archies, EasyMyTrip & PepsiCo.",
    profileImage: "/images/guestMentor/shantanu-sharma.jpg",
    profileImagePopup: "/images/guestMentor/shantanu-sharma.png",
    logos: [
      "/images/guestMentor/arehies.svg",
      "/images/guestMentor/easeMytrip.svg",
      "/images/guestMentor/pepsico.svg",
    ],
  },
  {
    name: "Harshvardhan S",
    namePopup: "Harshvardhan <br/> S",
    title: "Digital Lead at H&M",
    expertise:
      "Quick commerce campaigns, performance analysis, vendor onboarding, product optimization, and fashion e-commerce scaling.",
    description:
      "Digital Lead – Merch at H&M India with proven experience across digital merchandising, e-commerce strategy, and marketplace execution.",
    profileImage: "/images/guestMentor/harshvardhan.jpg",
    profileImagePopup: "/images/guestMentor/harshvardhan.png",
    logos: [
      "/images/guestMentor/hm.svg",
      "/images/guestMentor/innopark.svg",
      "/images/guestMentor/airstobrat.svg",
    ],
  },
  {
    name: "Jonas Prasanna",
    namePopup: "Jonas <br/> Prasanna",
    title: "Ex Global HR at Boeing",

    expertise:
      "Executive coaching, strategic HR transformation, culture design, psychological safety, and leadership development.",
    description:
      "Global HR & Leadership Coach with 16+ years in talent strategy across leading global companies. Featured on HR podcasts and a passionate advocate of workplace transformation.",
    profileImage: "/images/guestMentor/jonas-prasanna.jpg",
    profileImagePopup: "/images/guestMentor/jonas-prasanna.png",
    logos: [
      "/images/guestMentor/boeing.svg",
      "/images/guestMentor/capgemini.svg",
      "/images/guestMentor/philips.svg",
    ],
  },
  {
    name: "Deben Rath",
    namePopup: "Deben <br/> Rath",
    title: "Associate Account Manager at Adobe",
    expertise:
      "Programmatic ads, performance analytics, campaign optimization & digital ad-tech integrations.",
    description:
      "Associate Account Manager at Adobe with strong foundations in programmatic advertising and analytics. Known for simplifying complex data into actionable marketing insights.",
    profileImage: "/images/guestMentor/deben-rath.jpg",
    profileImagePopup: "/images/guestMentor/deben-rath.png",
    logos: [
      "/images/guestMentor/adob.svg",
      "/images/guestMentor/yahoo.svg",
      "/images/guestMentor/thermo.svg",
    ],
  },
  {
    name: "Gopal Raj",
    namePopup: "Gopal <br/> Raj",
    title: "Founder at Verycom",
    expertise:
      "Brand strategy, integrated marketing communications, creative campaign development, and multi-sector brand positioning.",
    description:
      "15+ years of experience across leading advertising agencies in India and overseas. Has successfully led campaigns for top-tier brands across diverse industries.",
    profileImage: "/images/guestMentor/gopalraj.jpg",
    profileImagePopup: "/images/guestMentor/gopalraj.png",
    logos: ["/images/guestMentor/ddb.svg", "/images/guestMentor/juut.svg"],
  },
  {
    name: "Aditya Agarwal",
    namePopup: "Aditya <br/> Agarwal",
    title: "Founder at Qilin Lab",

    expertise:
      "AI-powered personalization, martech infrastructure, campaign automation, cloud-native performance marketing systems.",
    description:
      "Cloud Optimization Expert & Founder of Qilin Lab, helping SaaS and fintech founders build scalable AI marketing stacks.",
    profileImage: "/images/guestMentor/aditya-agarwal.jpg",
    profileImagePopup: "/images/guestMentor/aditya-agarwal.png",
    logos: ["/images/guestMentor/qilin.svg"],
  },
  {
    name: "Riya Tiwari",
    namePopup: "Riya <br/> Tiwari",
    title: "Founder at Authique",
    expertise:
      "Organic LinkedIn growth, storytelling, personal brand positioning, and full-funnel content strategies focused on trust, visibility & monetization.",
    description:
      "Personal Branding Strategist known for helping B2B founders build LinkedIn authority and visibility. Has mentored 300+ freelancers and conducted 250+ client calls generating lakhs in revenue.",
    profileImage: "/images/guestMentor/riya-tiwari.jpg",
    profileImagePopup: "/images/guestMentor/riya-tiwari.png",
    logos: ["/images/guestMentor/authique.jpeg"],
  },
];
export interface Trainer {
  name: string;
  namePopup: string;
  title: string;
  experience: string;
  linkedinLink: string;
  bgColor: string;
  profileImage: string;
  profileImagePopup: string;
  expertise: string;
  description: string;
}

export type TrainerType = Trainer[];
const data: TrainerType = [
  {
    name: `Deepak Soni`,
    namePopup: "Deepak Soni",
    title: "Digital Marketing Trainer",
    experience: "12+ years Experience",
    linkedinLink: "#",
    bgColor: "bgPink",
    profileImage: "/images/trainers/deepak.png",
    profileImagePopup: "/images/trainers/deepak.png",
    expertise:
      "Media planning, SEO/SEM, PPC, content strategy, ORM, analytics, and digital training for high-growth performance marketing.",
    description:
      "Deputy General Manager – Digital Marketing at Puravankara Ltd. with 18+ years of experience in digital strategy across real estate, retail & e-commerce sectors.",
  },
  {
    name: `Madhuraj P`,
    namePopup: "Madhuraj P",
    title: "Sr. Trainer- Digital Marketing",
    experience: "8+ years Experience",
    linkedinLink: "https://www.linkedin.com/in/madhuraj-p/",
    bgColor: "bgBlue",
    profileImage: "/images/trainers/madhu.png",
    profileImagePopup: "/images/trainers/madhu.png",
    expertise:
      "Media planning, SEO/SEM, PPC, content strategy, ORM, analytics, and digital training for high-growth performance marketing.",
    description:
      "Deputy General Manager – Digital Marketing at Puravankara Ltd. with 18+ years of experience in digital strategy across real estate, retail & e-commerce sectors.",
  },
  {
    name: `Sathiyaseelan S`,
    namePopup: "Sathiyaseelan S",
    title: "Executive DM Trainer",
    experience: "3+ years Experience",
    linkedinLink: "https://www.linkedin.com/in/sathiyaseelan1/",
    bgColor: "bgGreen",
    profileImage: "/images/trainers/sathya.png",
    profileImagePopup: "/images/trainers/sathya.png",
    expertise:
      "Media planning, SEO/SEM, PPC, content strategy, ORM, analytics, and digital training for high-growth performance marketing.",
    description:
      "Deputy General Manager – Digital Marketing at Puravankara Ltd. with 18+ years of experience in digital strategy across real estate, retail & e-commerce sectors.",
  },
  {
    name: `Monisha Jain`,
    namePopup: "Monisha Jain",
    title: "Executive DM Trainer",
    experience: "3+ years Experience",
    linkedinLink: "https://www.linkedin.com/in/monishajainss/",
    bgColor: "bgGreen",
    profileImage: "/images/trainers/monisha.png",
    profileImagePopup: "/images/trainers/monisha.png",
    expertise:
      "Media planning, SEO/SEM, PPC, content strategy, ORM, analytics, and digital training for high-growth performance marketing.",
    description:
      "Deputy General Manager – Digital Marketing at Puravankara Ltd. with 18+ years of experience in digital strategy across real estate, retail & e-commerce sectors.",
  },
  {
    name: `Anush Raj K`,
    namePopup: "Anush Raj K",
    title: "Executive DM Trainer",
    experience: "5+ years Experience",
    linkedinLink: "https://www.linkedin.com/in/hvr26/",
    bgColor: "bgGreen",
    profileImage: "/images/trainers/anush.png",
    profileImagePopup: "/images/trainers/anush.png",
    expertise:
      "Media planning, SEO/SEM, PPC, content strategy, ORM, analytics, and digital training for high-growth performance marketing.",
    description:
      "Deputy General Manager – Digital Marketing at Puravankara Ltd. with 18+ years of experience in digital strategy across real estate, retail & e-commerce sectors.",
  },
  {
    name: `Swanand`,
    namePopup: "Swanand <br/> Patwardhan",
    title: "Sr. Trainer- Digital Marketing",
    experience: "8+ years Experience",
    linkedinLink: "http://www.linkedin.com/in/swanand-p",
    bgColor: "bgGreen",
    profileImage: "/images/trainers/swanand.png",
    profileImagePopup: "/images/trainers/swanand.png",
    expertise:
      "Media planning, SEO/SEM, PPC, content strategy, ORM, analytics, and digital training for high-growth performance marketing.",
    description:
      "Deputy General Manager – Digital Marketing at Puravankara Ltd. with 18+ years of experience in digital strategy across real estate, retail & e-commerce sectors.",
  },
  {
    name: `Sujeeth H D`,
    namePopup: "Sujeeth H D",
    title: "Executive DM Trainer",
    experience: "5+ years Experience",
    linkedinLink: "https://www.linkedin.com/in/sujeeth-hd-7988921b8/s",
    bgColor: "bgGreen",
    profileImage: "/images/trainers/sujeeth.png",
    profileImagePopup: "/images/trainers/sujeeth.png",
    expertise:
      "Media planning, SEO/SEM, PPC, content strategy, ORM, analytics, and digital training for high-growth performance marketing.",
    description:
      "Deputy General Manager – Digital Marketing at Puravankara Ltd. with 18+ years of experience in digital strategy across real estate, retail & e-commerce sectors.",
  },
];
export default function Trainer() {
  return (
    <main>
      <TrainersHeroSection />
      <section className={styles.featuredSuperSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHeader
                title={"Industry Leaders as Your Guest Mentors "}
                titleMarginBottom={{ desktop: "20px", mobile: "24px" }}
                description={
                  "Learn from those who’ve walked the path — and led the way."
                }
                wrapperMarginBottom={{ desktop: "60px", mobile: "24px" }}
              />
            </div>
          </div>
          <div className={`${styles.row} row d-md-flex`}>
            {dataItem.map((item, index) => (
              <div className="col-md-4 col-lg-4 col-6" key={index}>
                <PopupTrigger
                  popup={<CaseStudyPopup study={item} />}
                  className={styles.guestFacultyPopup}
                >
                  <GuestFacultyCard bgColor={""} {...item} />
                </PopupTrigger>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CareerBanner />
      <section className={styles.featuredSuperSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHeader
                title={"Trainers At DA360"}
                wrapperMarginBottom={{ desktop: "60px", mobile: "24px" }}
              />
            </div>
          </div>
          <div className={`${styles.row} row d-md-flex`}>
            {data.map((item, index) => (
              <div className="col-md-4 col-lg-4 col-6" key={index}>
                <PopupTrigger
                  popup={<TrainersFacultyPopup study={item} />}
                  className={styles.guestFacultyPopup}
                >
                  <TrainersFacultyCard {...item} />
                </PopupTrigger>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
