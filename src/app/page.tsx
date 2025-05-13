import ProgramsShowcase from "@components/programsShowcase";
import SelfPacedPrograms from "@components/selfPacedPrograms";
import OurSuccessStories from "@components/ourSuccessStories";
import TrustedByLearners from "@components/trustedByLearners";
import Comparison from "@components/comparison";
import LifeAtDA360 from "@components/lifeAtDA360";
import LatestBlogPosts from "@components/latestBlogPosts";
import MediaAwards from "@components/mediaAwards";
import PaddingWrapper from "@components/widgets/PaddingWrapper";

export const metadata = {
  title: "#1 Top Ranked Digital Marketing Training Institute in Asia",
  description:
    "Join the #1 Top-Ranked AI Digital Marketing Training Institute in India, Asia. Approved by NSDC & Skill India. Learn AI Digital Marketing & Get Certified Today",
  keywords: [
    "Digital Academy 360",
    "Digital Marketing Courses in India",
    "Digital Marketing Training in India",
    "Digital Marketing Institute in India",
    "Learn Digital Marketing",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/",
  },
  openGraph: {
    title: "#1 Top Ranked Digital Marketig Training Instiute in Asia",
    description:
      "Join the #1 Top-Ranked AI Digital Marketing Training Institute in India, Asia. Approved by NSDC & Skill India. Learn AI Digital Marketing & Get Certified Today",
    url: "https://digitalacademy360.com/",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Top Ranked Digital Marketig Training Instiute in Asia",
    description:
      "Join the #1 Top-Ranked AI Digital Marketing Training Institute in India, Asia. Approved by NSDC & Skill India. Learn AI Digital Marketing & Get Certified Today",
  },
};

export default function HomePage() {
  return (
    <main>
      <ProgramsShowcase />
      <SelfPacedPrograms />
      <OurSuccessStories />
      <TrustedByLearners />
      <Comparison />
      <LifeAtDA360 />
      <LatestBlogPosts />
      <PaddingWrapper desktopPaddingBottom="130px">
        <MediaAwards />
      </PaddingWrapper>
    </main>
  );
}
