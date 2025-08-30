// app/career/[slug]/content.tsx

import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

interface Props {
  job: {
    title: string;
    description: string[];
    location: string;
  };
}

export default function Content({ job }: Props) {
  return (
    <section className={style.jobDetailsSection}>
      <div className="container">
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

        <div className="row">
          <div className="col-lg-8">
            <div className={style.jobDetails}>
              <div className={style.jobHeader}>
                <h1>{job.title}</h1>
                <span>{job.location}</span>
              </div>

              <ul className={style.descriptionList}>
                {job.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

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
