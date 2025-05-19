import AboutUs from "@components/about";
import ImageBanner from "@/components/imageBanner";
import ContentBlock from "@components/contentBlock";
import DigitalAcademy from "@components/digitalAcademy";
import OurPeople from "@components/ourPeople";
import BrandLogos from "@components/brandLogos";
import Gallery from "@components/gallery";
import MediaAwards from "@components/mediaAwards";
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
    </main>
  );
}
