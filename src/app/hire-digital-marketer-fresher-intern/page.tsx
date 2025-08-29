import HireSection from "@components/hireSection";
import WhyHireDA360 from "@components/whyHireDA360";
import RecruitSkills from "@components/recruitSkills";
import AlumniGrid from "@components/alumniGrid";
import TestimonialSlider from "@components/testimonialSlider";
import TalentDeliverTimeline from "@components/talentDeliverTimeline";
import BrandLogos from "@components/brandLogos";
import HireForm from "@components/hireForm";
import Faq from "@components/faq";
// import styles from "./style.module.scss";

export const metadata = {
  title: "Hire Digital Marketing Freshers, Interns & Freelancers in Bangalore",
  description:
    "Hire Full-Time & Freelance Digital Marketing Freshers and Interns In Bangalore. Get Industry-Ready Marketers With Hands-On Project Experience. Connect Today!",
  keywords: [
    "Hire Digital Marketing Freshers, Hire Digital Marketing Interns, Hire Digital Marketer, Hire Freelancer For Digital Marketer",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/contact-us",
  },
  openGraph: {
    title:
      "Hire Digital Marketing Freshers, Interns & Freelancers in Bangalore",
    description:
      "Hire Full-Time & Freelance Digital Marketing Freshers and Interns In Bangalore. Get Industry-Ready Marketers With Hands-On Project Experience. Connect Today!",
    url: "https://digitalacademy360.com/contact-uss",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hire Digital Marketing Freshers, Interns & Freelancers in Bangalore",
    description:
      "Hire Full-Time & Freelance Digital Marketing Freshers and Interns In Bangalore. Get Industry-Ready Marketers With Hands-On Project Experience. Connect Today!",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
};

export default function HireFrom() {
  return (
    <main>
      <HireSection />
      <WhyHireDA360 />
      <RecruitSkills />
      <AlumniGrid />
      <TalentDeliverTimeline />
      <TestimonialSlider />
      <BrandLogos
        firstHeading="Trusted by 300+ Global Partners"
        secondHeading=" "
      />
      <HireForm />
      <Faq />
    </main>
  );
}
