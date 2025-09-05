// import styles from "./style.module.scss";
import JoinTeam from "@components/joinTeam";
import CurrentOpenings from "@components/currentOpenings";
import WhyWorkWithUs from "@components/whyWorkWithUs";
// import TeamSpeaksSlider from "@components/teamSpeaksSlider";
import LifeAtDA360Gallery from "@components/lifeAtDA360Gallery";

export const metadata = {
  title: "Jobs At India's Largest Digital Marketing Training Company",
  description:
    "Explore Digital Academy 360 Jobs In Bangalore. Openings For Digital Marketers, Trainers, & Counsellors. Impactful Work Culture & Growth. Apply Now!",
  keywords: [
    "Digital Academy 360 Jobs, Working at Digital Academy 360, Digital Marketing Jobs In Bangalore, Digital Marketing Vacancies in Bengaluru,",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/career-jobs",
  },
  openGraph: {
    title: "Jobs At India's Largest Digital Marketing Training Company",
    description:
      "Explore Digital Academy 360 Jobs In Bangalore. Openings For Digital Marketers, Trainers, & Counsellors. Impactful Work Culture & Growth. Apply Now!",
    url: "https://digitalacademy360.com/career-jobs",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobs At India's Largest Digital Marketing Training Company",
    description:
      "Explore Digital Academy 360 Jobs In Bangalore. Openings For Digital Marketers, Trainers, & Counsellors. Impactful Work Culture & Growth. Apply Now!",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
};

export default function Career() {
  return (
    <main>
      <JoinTeam />
      <CurrentOpenings />
      <WhyWorkWithUs />
      {/* <TeamSpeaksSlider /> */}
      <LifeAtDA360Gallery
        paddingBottom={{ desktop: "140px", mobile: "60px" }}
      />
    </main>
  );
}
