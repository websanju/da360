import AboutUs from "@components/about";
import ImageBanner from "@/components/imageBanner";
import ContentBlock from "@components/contentBlock";
import DigitalAcademy from "@components/digitalAcademy";
import OurPeople from "@components/ourPeople";
import BrandLogos from "@components/brandLogos";
import Gallery from "@components/gallery";
import MediaAwards from "@components/mediaAwards";
import CareerWidget from "@components/widgets/careerWidget";
import styles from "./style.module.scss";

export default function About() {
  return (
    <main>
      <AboutUs />
      <ImageBanner
        src="/images/about-banner.png"
        alt="About Banner"
        width={1440}
        height={720}
      />
      <ContentBlock content="Digital Academy 360, India' Leading Digital Learning Platform started in the year 2015 with the aim of creating the largest conglomeration of digital learning resources, learning intelligence, and research opportunities that can benefit the Global Online Industry." />
      <ImageBanner
        src="/images/team.jpg"
        alt="About Banner"
        width={1440}
        height={720}
      />
      <DigitalAcademy />
      <OurPeople />
      <BrandLogos
        firstHeading="Collaborations &"
        secondHeading="Partnerships"
      />
      <Gallery />
      <MediaAwards />
      <div className={styles.careerWidget}>
        <div className="container">
          <div className="row">
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
