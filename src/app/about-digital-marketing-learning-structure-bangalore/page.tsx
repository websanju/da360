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
  title: "Digital Academy 360 | Industry Leaders in Digital Marketing",
  description:
    "Digital Academy 360 Pvt Ltd, Founded In 2015, Is India’s Largest Digital Marketing Learning Center. AI Tools, Live Projects & 100% Placement. Know More!",
  keywords: [
    "Digital Marketing Learning Center",
    "Digital Marketing Learning Center in Bangalore",
    "About Digital Academy 360",
    "Digital Academy 360 Pvt Ltd",
    "Digital Academy 360 Structure",
    "DA360",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical:
      "https://digitalacademy360.com/about-digital-marketing-learning-structure-bangalore",
  },
  openGraph: {
    title: "Digital Academy 360 | Industry Leaders in Digital Marketing",
    description:
      "Digital Academy 360 Pvt Ltd, Founded In 2015, Is India’s Largest Digital Marketing Learning Center. AI Tools, Live Projects & 100% Placement. Know More!",
    url: "https://digitalacademy360.com/about-digital-marketing-learning-structure-bangalore",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "Digital Academy",
    title: "Digital Academy 360 | Industry Leaders in Digital Marketing",
    description:
      "Digital Academy 360 Pvt Ltd, Founded In 2015, Is India’s Largest Digital Marketing Learning Center. AI Tools, Live Projects & 100% Placement. Know More!",
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
          <div
            className={`${styles.careerWidgetRow} row flex justify-content-center`}
          >
            <div className="col-lg-7">
              <CareerWidget
                variant="red"
                title="Careers at <br/> Digital Academy 360"
                description="Fill out the form below or connect with our placement cell directly to start hiring from our trained talent pool."
                buttonText="Apply Now"
              />
            </div>
            {/* <div className="col-lg-6">
              <CareerWidget
                variant="yellow"
                variantColor="blackColor"
                title="Careers at <br/> Digital Academy 360"
                description="Fill out the form below or connect with our placement cell directly to start hiring from our trained talent pool."
                buttonText="Join Now"
              />
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
