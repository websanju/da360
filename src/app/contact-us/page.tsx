// import styles from "./style.module.scss";
import ContactForm from "@/components/contactForm";
import DepartmentContacts from "@/components/departmentContacts";
import CallToActionBanner from "@/components/callToActionBanner";
import LocationCard from "@/components/locationCard";
import TrustedByLearners from "@/components/trustedByLearners";
import PaddingWrapper from "@/components/widgets/PaddingWrapper";

export default function ContactUS() {
  return (
    <main>
      <ContactForm />
      <DepartmentContacts />
      <PaddingWrapper desktopPaddingTop="140px" mobilePaddingTop="60px">
        <TrustedByLearners />
      </PaddingWrapper>
      <LocationCard
        city="Bangalore"
        addressLines={[
          "No 46/A, 1st Main Rd, opposite Mini Forest,",
          "Near to Jayadeva Hospital, J. P. Nagar 3rd Phase,",
          "Bangalore – 560 078",
        ]}
        phone="+91 7353 515 515"
        imageSrc="/images/building.png"
        directionLink="https://maps.google.com/?q=Digital+Academy+360"
      />
      <CallToActionBanner />
    </main>
  );
}
