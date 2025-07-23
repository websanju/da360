"use client";
import TrainersHeroSection from "@components/trainersHeroSection";
import CareerBanner from "@/components/careerBanner";
import TrainersFacultyCard from "@components/widgets/trainersFacultyCard";
import GuestFacultyCard from "@components/widgets/guestFacultyCard";
import styles from "./style.module.scss";
import SectionHeader from "@/components/widgets/sectionHeader";
import CaseStudyPopup, { Study } from "@components/widgets/popups/gurstFaculty";
import { usePopup } from "@components/widgets/popup/PopupContext";
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
    name: "Riya iwari",
    namePopup: "Riya <br/> iwari",
    title: "Founder at Authique",
    expertise:
      "Organic LinkedIn growth, storytelling, personal brand positioning, and full-funnel content strategies focused on trust, visibility & monetization.",
    description:
      "Personal Branding Strategist known for helping B2B founders build LinkedIn authority and visibility. Has mentored 300+ freelancers and conducted 250+ client calls generating lakhs in revenue.",
    profileImage: "/images/guestMentor/riya-tiwari.jpg",
    profileImagePopup: "/images/guestMentor/riya-tiwari.png",
    logos: [""],
  },
];
const data = [
  {
    name: `Deepak <br/> Soni`,
    title: "Digital Marketing Trainer",
    experience: "12+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgPink",
    image: {
      desktop: "/images/trainers/deepak.png",
      mobile: "/images/trainers/deepak.png",
    },
  },
  {
    name: `Madhuraj P`,
    title: "Digital Marketing Trainer",
    experience: "8+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgBlue",
    image: {
      desktop: "/images/trainers/madhu.png",
      mobile: "/images/trainers/madhu.png",
    },
  },
  {
    name: `Sathiyaseelan S`,
    title: "Digital Marketing Trainer",
    experience: "3+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/sathya.png",
      mobile: "/images/trainers/sathya.png",
    },
  },
  {
    name: `Monisha Jain S S`,
    title: "Digital Marketing Trainer",
    experience: "3+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/monisha.png",
      mobile: "/images/trainers/monisha.png",
    },
  },
  {
    name: `Anush Raj K`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/anush.png",
      mobile: "/images/trainers/anush.png",
    },
  },
  {
    name: `Swanand <br/> Patwardhan`,
    title: "Digital Marketing Trainer",
    experience: "8+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/swanand.png",
      mobile: "/images/trainers/swanand.png",
    },
  },
  {
    name: `Sujeeth H D`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/sujeeth.png",
      mobile: "/images/trainers/sujeeth.png",
    },
  },
];
export default function Career() {
  const { openPopup } = usePopup();
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
                <div
                  onClick={() =>
                    openPopup(<CaseStudyPopup study={item} />, {
                      className: `${styles.guestFacultyPopup}`,
                    })
                  }
                >
                  <GuestFacultyCard bgColor={""} {...item} />
                </div>
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
                <TrainersFacultyCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
