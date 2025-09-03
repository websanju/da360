"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import RightArrow from "@/components/Ui/svg/rightArrow";
import SectionHeader from "@components/widgets/sectionHeader";
import Link from "next/link";

const blogPosts = [
  {
    imgSrc:
      "/images/blog/digital-marketing-as-career-in-2025-skills-salary.jpg",
    category: "Digital Marketing",
    title: "Digital Marketing as a Career in 2025 - Skills, Salary...",
    link: "https://www.digitalacademy360.com/blogs/digital-marketing-as-a-career-in-2025-skills-salary-growth/",
  },
  {
    imgSrc: "/images/blog/top-digital-marketing-JobsinDemand-in2025.jpg",
    category: "Digital Marketing",
    title: "Top Digital Marketing Jobs in Demand in 2025",
    link: "https://www.digitalacademy360.com/blogs/top-digital-marketing-jobs-in-demand-in-2025and-how-to-get-hired/",
  },
  {
    imgSrc:
      "/images/blog/AI-vs-human-creativity-what-the -future-holds-for-digital.jpg",
    category: "Digital Marketing",
    title: "AI vs Human Creativity - What the Future Holds for Digital...",
    link: "https://www.digitalacademy360.com/blogs/ai-vs-human-creativity-what-the-future-holds-for-digital-marketing-careers/",
  },
];

const LatestBlogPosts = () => {
  return (
    <section className={`${styles.latestBlogSection}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              title={<>Latest Blog Posts</>}
            />
            {/* <div className={`${styles.sectionHeader}`}>
              <h2>Latest Blog Posts</h2>
            </div> */}
          </div>
        </div>
        <div className={`${styles.row} row`}>
          {blogPosts.map((post, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className={styles.blogCard}>
                <div className={`${styles.blogImage}`}>
                  <Image
                    src={post.imgSrc}
                    alt={post.title}
                    width={400}
                    height={250}
                    className={`img-fluid`}
                  />
                </div>
                <div className={styles.blogContent}>
                  <span className={styles.category}>{post.category}</span>
                  <h5 className={styles.title}>{post.title}</h5>
                  <div className={styles.readMoreBtn}>
                    <Link
                      target="_blank"
                      href={post.link}
                      className={styles.readMoreLink}
                    >
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.loadBtn} row`}>
          <div
            className={`col-lg-12 d-flex align-items-center justify-content-center`}
          >
            <Link
              href={"https://www.digitalacademy360.com/blogs/"}
              className="btnWhite"
              target="_blank"
            >
              Load More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
