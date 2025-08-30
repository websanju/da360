// import styles from "./style.module.scss";
import ContactForm from "@/components/contactForm";
import DepartmentContacts from "@/components/departmentContacts";
import CallToActionBanner from "@/components/callToActionBanner";
import LocationCard from "@/components/locationCard";
import TrustedByLearners from "@/components/trustedByLearners";
import PaddingWrapper from "@/components/widgets/PaddingWrapper";

export const metadata = {
  title: "Digital Academy 360 Help & Support | Toll Free & Contact Info",
  description:
    "Need help? Call Digital Academy 360 toll free or email our dedicated team for admissions, support & enquiries. 24/7 assistance. Just a click away!",
  keywords: [
    "Digital Academy 360 Help, Digital Academy 360 Support, Digital Academy 360 Toll Free, Contact Digital Academy 360",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/contact-us",
  },
  openGraph: {
    title: "Digital Academy 360 Help & Support | Toll Free & Contact Info",
    description:
      "Need help? Call Digital Academy 360 toll free or email our dedicated team for admissions, support & enquiries. 24/7 assistance. Just a click away!",
    url: "https://digitalacademy360.com/contact-us",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Academy 360 Help & Support | Toll Free & Contact Info",
    description:
      "Need help? Call Digital Academy 360 toll free or email our dedicated team for admissions, support & enquiries. 24/7 assistance. Just a click away!",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
};

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
