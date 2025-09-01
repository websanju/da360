import ReferHero from "@components/referHero";
import HowToEarn from "@components/howToEarn";
import CallToActionBanner from "@components/callToActionBanner";
import LearningPrograms from "@components/learningPrograms";
import Faq from "@components/faq";

export const metadata = {
  title: "Become Affiliate To Refer & Earn | Invite Student For Reward",
  description:
    "Become a DA360 Learning Ambassador. Join Our Affiliate Program To Refer Students & Earn Per Admission. Simple Sign-Up, Easy Tracking & Quick Payouts. Join Now!",
  keywords: [
    "Refer & Earn, Learn & Earn, Create Content & Earn",
    "education referral program",
    "Earn Via Admission",
    "Refer Student & Earn",
    "Admission Affiliate Program",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/affiliate-admission-refer-earn",
  },
  openGraph: {
    title: "Become Affiliate To Refer & Earn | Invite Student For Reward",
    description:
      "Become a DA360 Learning Ambassador. Join Our Affiliate Program To Refer Students & Earn Per Admission. Simple Sign-Up, Easy Tracking & Quick Payouts. Join Now!",
    url: "https://digitalacademy360.com/affiliate-admission-refer-earn",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Become Affiliate To Refer & Earn | Invite Student For Reward",
    description:
      "Become a DA360 Learning Ambassador. Join Our Affiliate Program To Refer Students & Earn Per Admission. Simple Sign-Up, Easy Tracking & Quick Payouts. Join Now!",
    images: ["https://digitalacademy360.com/og-image.jpg"],
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
