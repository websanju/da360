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
  title: "Hire Digital Marketing Freshers & Interns In Bangalore",
  description:
    "Hire Full Time or Freelance Digital Marketing Freshers & Interns For Free. Get Fresh Digital Marketers With Hands On Project Knowledge & Real Time Experience",
  keywords: [
    "Hire Digital Marketing Freshers in Bangalore, Hire Digital Marketing Interns in Bangalore, Hire Digital Marketers in Bangalore, Hire Freelancer For Digital Marketer In Bangalore",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/contact-us",
  },
  openGraph: {
    title: "Hire Digital Marketing Freshers & Interns In Bangalore",
    description:
      "Hire Full Time or Freelance Digital Marketing Freshers & Interns For Free. Get Fresh Digital Marketers With Hands On Project Knowledge & Real Time Experience",
    url: "https://digitalacademy360.com/contact-uss",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Digital Marketing Freshers & Interns In Bangalore",
    description:
      "Hire Full Time or Freelance Digital Marketing Freshers & Interns For Free. Get Fresh Digital Marketers With Hands On Project Knowledge & Real Time Experience",
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
