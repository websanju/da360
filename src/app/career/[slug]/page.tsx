import { jobList } from "../jobs";
import { notFound } from "next/navigation";
import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

// ✅ Mark function as async to avoid `params` error
export default async function JobDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const job = jobList.find((job) => job.slug === params.slug);

  if (!job) return notFound();

  return (
    <section className={style.jobDetailsSection}>
      <div className="container">
        {/* ✅ Breadcrumb */}
        <div className="row">
          <div className="col-lg-12">
            <nav className={style.breadcrumb}>
              <Link href="/career">Career</Link>
              <span>
                <Image
                  alt="arrow"
                  width={6}
                  height={10}
                  src="/images/icons/blackleftArrow.svg"
                />
              </span>
              <span>{job.title}</span>
            </nav>
          </div>
        </div>

        {/* ✅ Job Detail Section */}
        <div className="row">
          <div className="col-lg-8">
            <div className={style.jobDetails}>
              <div className={style.jobHeader}>
                <h1>{job.title}</h1>
                <span>{job.location}</span>
              </div>

              {/* ✅ Render description as bullet list */}
              <ul className={style.descriptionList}>
                {job.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* ✅ Sidebar with Contact Info */}
          <div className="col-lg-4 d-flex justify-content-end">
            <div className={style.talkUs}>
              <span>Talk to us</span>
              <div className={style.link}>
                <Link href="tel:+917353515515">+91 7353 515 515</Link>
                <Link href="mailto:info@digitalacademy360.com">
                  info@digitalacademy360.com
                </Link>
              </div>
              <div className={style.applyNow}>
                <Link href="#">Apply Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
