import ReviewHighlights from "@components/reviewHighlights";
import MarqueeTestimonials from "@components/marqueeTestimonials";
import TestimonialsGrid from "@components/testimonialsGrid";

export const metadata = {
  title: "Digital Academy 360 Student Reviews | Student Testimonials",
  description:
    "See Why 50,000+ Students Trust DA360. Read Testimonials On Career Transformations, Placement Success & Training Quality. Start Your Journey Today!",
  keywords: [
    "Digital Academy 360 Review, Digital Academy 360 Testimonial, Digital Academy 360 Student Review, DA 360 Student Review",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/review-testimonial",
  },
  openGraph: {
    title: "Digital Academy 360 Student Reviews | Student Testimonials",
    description:
      "See Why 50,000+ Students Trust DA360. Read Testimonials On Career Transformations, Placement Success & Training Quality. Start Your Journey Today!",
    url: "https://digitalacademy360.com/review-testimonial",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Academy 360 Student Reviews | Student Testimonials",
    description:
      "See Why 50,000+ Students Trust DA360. Read Testimonials On Career Transformations, Placement Success & Training Quality. Start Your Journey Today!",
    images: ["https://digitalacademy360.com/og-image.jpg"],
  },
};

export default function Testimonial() {
  return (
    <main>
      <ReviewHighlights />
      <MarqueeTestimonials />
      <TestimonialsGrid />
    </main>
  );
}
