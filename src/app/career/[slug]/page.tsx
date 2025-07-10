import Content from "./content";
import { getJobBySlug, jobList } from "../jobs";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Join India's Largest Digital Marketing Training Company",
  description:
    "Join Digital Academy 360 For Jobs Regarding Digital Marketing Trainer. DIgital Marketing Jobs In Bangalore. Vacancies For Trainer, Sales & More In Bangalore.",
  keywords: [
    "Digital Academy 360 Jobs, Working at Digital Academy 360, Digital Marketing Jobs In Bangalore, Digital Marketing Vacancies in Bengaluru, Digital Marketing Trainers & Coaches",
  ],
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://digitalacademy360.com/career",
  },
  openGraph: {
    title: "Join India's Largest Digital Marketing Training Company",
    description:
      "Join Digital Academy 360 For Jobs Regarding Digital Marketing Trainer. DIgital Marketing Jobs In Bangalore. Vacancies For Trainer, Sales & More In Bangalore.",
    url: "https://digitalacademy360.com/career",
    siteName: "Digital Academy 360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join India's Largest Digital Marketing Training Company",
    description:
      "Join Digital Academy 360 For Jobs Regarding Digital Marketing Trainer. DIgital Marketing Jobs In Bangalore. Vacancies For Trainer, Sales & More In Bangalore.",
  },
};

// Static generation
export const dynamicParams = false;

export async function generateStaticParams() {
  return jobList.map((job) => ({
    slug: job.slug,
  }));
}

// ✅ Note: `params` is now a Promise in Next.js v15+
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const job = await getJobBySlug(slug);
  if (!job) return notFound();

  return <Content job={job} />;
}
