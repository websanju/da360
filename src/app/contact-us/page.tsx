// import styles from "./style.module.scss";
import ContactForm from "@/components/contactForm";
import DepartmentContacts from "@/components/departmentContacts";
import CallToActionBanner from "@/components/callToActionBanner";
import LocationCard from "@/components/locationCard";
import TrustedByLearners from "@/components/trustedByLearners";
import PaddingWrapper from "@/components/widgets/PaddingWrapper";
import styles from "./style.module.scss";

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
          "No 46/A, 1st Main Rd, Opposite Mini Forest,",
          "Near to Jayadeva Hospital, J. P. Nagar 3rd Phase,",
          "Bangalore – 560 078",
        ]}
        phone="+91 7353 515 515"
        imageSrc="/images/contactus-min.jpg"
        directionLink="https://maps.app.goo.gl/8sUTmVew8vEKA88e6"
      />
      <div className={styles.mapSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4957.392669314062!2d77.59650277507545!3d12.91122928739861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14910b5208e9%3A0x30ccd3b0a7414ca9!2sDigital%20Academy%20360!5e1!3m2!1sen!2sin!4v1736928950748!5m2!1sen!2sin"
                width="100%"
                height="380"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <CallToActionBanner />
    </main>
  );
}
