import ReviewHighlights from "@components/reviewHighlights";
import MarqueeTestimonials from "@components/marqueeTestimonials";
import TestimonialsGrid from "@components/testimonialsGrid";

export const metadata = {
  title: "Digital Academy 360 | Reviews & Testimonials",
  description:
    "Reviews For Digital Academy 360's job-oriented courses gets you certified & placed. 50,000+ Careers Transformed, 1000+ Hiring Partner",
  keywords: [
    "digital academy 360 review, digital marketng course review, digital marketing institute review, job guaranteed course review",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/testimonial",
  },
  openGraph: {
    title: "Digital Academy 360 | Reviews & Testimonials",
    description:
      "Reviews For Digital Academy 360's job-oriented courses gets you certified & placed. 50,000+ Careers Transformed, 1000+ Hiring Partner",
    url: "https://digitalacademy360.com/testimonial",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Academy 360 | Reviews & Testimonials",
    description:
      "Reviews For Digital Academy 360's job-oriented courses gets you certified & placed. 50,000+ Careers Transformed, 1000+ Hiring Partner",
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
