import ReferHero from "@components/referHero";
import HowToEarn from "@components/howToEarn";
import CallToActionBanner from "@components/callToActionBanner";
import LearningPrograms from "@components/learningPrograms";
import Faq from "@components/faq";

export const metadata = {
  title: "Become Learning Advisor & Earn By Referring Student",
  description:
    "Refer & earn cash rewards with Digital Academy 360. Help others achieve their education goals by you becoming a learning ambassador",
  keywords: ["refer & earn, education referral program, refer and earn"],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/refer-and-earn",
  },
  openGraph: {
    title: "Become Learning Advisor & Earn By Referring Student",
    description:
      "Refer & earn cash rewards with Digital Academy 360. Help others achieve their education goals by you becoming a learning ambassador",
    url: "https://digitalacademy360.com/refer-and-earn",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become Learning Advisor & Earn By Referring Student",
    description:
      "Refer & earn cash rewards with Digital Academy 360. Help others achieve their education goals by you becoming a learning ambassador",
  },
};

export default function ReferEarn() {
  return (
    <main>
      <ReferHero />
      <HowToEarn />
      <LearningPrograms />
      <Faq />
      <CallToActionBanner />
    </main>
  );
}
