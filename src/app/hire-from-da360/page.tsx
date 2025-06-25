import HireSection from "@components/hireSection";
import WhyHireDA360 from "@components/whyHireDA360";
import RecruitSkills from "@components/recruitSkills";
import BrandLogos from "@components/brandLogos";
import HireForm from "@components/hireForm";
import Faq from "@components/faq";
// import styles from "./style.module.scss";

export default function HireFrom() {
  return (
    <main>
      <HireSection />
      <WhyHireDA360 />
      <RecruitSkills />
      <BrandLogos
        firstHeading="Trusted by 300+ Global Partners"
        secondHeading=" "
      />
      <HireForm />
      <Faq />
    </main>
  );
}
