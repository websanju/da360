import AboutUs from "@components/about";
import ImageBanner from "@/components/imageBanner";
import ContentBlock from "@components/contentBlock";
// import DigitalAcademy from "@components/digitalAcademy";
import OurPeople from "@components/ourPeople";
import BrandLogos from "@components/brandLogos";
import Gallery from "@components/gallery";
import MediaAwards from "@components/mediaAwards";
import CareerWidget from "@components/widgets/careerWidget";

import VisionMissionStats from "@components/visionMissionStats";
import styles from "./style.module.scss";

export const metadata = {
  title: "Digital Academy 360 | Industry Leaders Since 2015",
  description:
    "Digital Academy 360 Pvt Ltd is India's Largest Digital Learning Center Located in Bangalore, India. Enroll today for certification and career growth",
  keywords: [
    "About Digital Academy 360, Digital Academy 360 Pvt Ltd, DA360, Digital Academy 360 Structure",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/about-us",
  },
  openGraph: {
    title: "Digital Academy 360 | Industry Leaders Since 2015",
    description:
      "Digital Academy 360 Pvt Ltd is India's Largest Digital Learning Center Located in Bangalore, India. Enroll today for certification and career growth",
    url: "https://digitalacademy360.com/about-us",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Academy 360 | Industry Leaders Since 2015",
    description:
      "Digital Academy 360 Pvt Ltd is India's Largest Digital Learning Center Located in Bangalore, India. Enroll today for certification and career growth",
  },
};

export default function About() {
  return (
    <main>
      <AboutUs />
      <ImageBanner
        src="/images/team-all-min.jpg"
        alt="About Banner"
        width={1440}
        height={720}
      />
      <ContentBlock />
      <VisionMissionStats />
      {/* <ImageBanner
        src="/images/team.jpg"
        alt="About Banner"
        width={1440}
        height={720}
      /> */}
      {/* <DigitalAcademy /> */}
      <OurPeople />
      <BrandLogos
        firstHeading="Collaborations &"
        secondHeading="Partnerships"
      />
      <Gallery />
      <MediaAwards />
      <div className={styles.careerWidget}>
        <div className="container">
          <div className={`${styles.careerWidgetRow} row`}>
            <div className="col-lg-6">
              <CareerWidget
                variant="red"
                title="Careers at <br/> Digital Academy 360"
                description="Fill out the form below or connect with our placement cell directly to start hiring from our trained talent pool."
                buttonText="Apply Now"
              />
            </div>
            <div className="col-lg-6">
              <CareerWidget
                variant="yellow"
                variantColor="blackColor"
                title="Careers at <br/> Digital Academy 360"
                description="Fill out the form below or connect with our placement cell directly to start hiring from our trained talent pool."
                buttonText="Join Now"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
