import Content from "./content";
import { getJobBySlug, jobList } from "../jobs";
import { notFound } from "next/navigation";

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
