// import styles from "./style.module.scss";
import JoinTeam from "@components/joinTeam";
import CurrentOpenings from "@components/currentOpenings";
import WhyWorkWithUs from "@components/whyWorkWithUs";
import TeamSpeaksSlider from "@components/teamSpeaksSlider";
import LifeAtDA360Gallery from "@components/lifeAtDA360Gallery";

export const metadata = {
  title: "Join India's Largest Digital Marketing Training Company",
  description:
    "Join Digital Academy 360 For Jobs Regarding Digital Marketing Trainer. DIgital Marketing Jobs In Bangalore. Vacancies For Trainer, Sales & More In Bangalore.",
  keywords: [
    "Digital Academy 360 Jobs, Working at Digital Academy 360, Digital Marketing Jobs In Bangalore, Digital Marketing Vacancies in Bengaluru, Digital Marketing Trainers & Coaches",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/career",
  },
  openGraph: {
    title: "Join India's Largest Digital Marketing Training Company",
    description:
      "Join Digital Academy 360 For Jobs Regarding Digital Marketing Trainer. DIgital Marketing Jobs In Bangalore. Vacancies For Trainer, Sales & More In Bangalore.",
    url: "https://digitalacademy360.com/career",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join India's Largest Digital Marketing Training Company",
    description:
      "Join Digital Academy 360 For Jobs Regarding Digital Marketing Trainer. DIgital Marketing Jobs In Bangalore. Vacancies For Trainer, Sales & More In Bangalore.",
  },
};

export default function Career() {
  return (
    <main>
      <JoinTeam />
      <CurrentOpenings />
      <WhyWorkWithUs />
      <TeamSpeaksSlider />
      <LifeAtDA360Gallery
        paddingBottom={{ desktop: "140px", mobile: "60px" }}
      />
    </main>
  );
}
