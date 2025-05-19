"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import RightArrow from "@/components/Ui/svg/rightArrow";
import Link from "next/link";

const blogPosts = [
  {
    imgSrc: "/images/blog/blog1.jpg",
    category: "Digital Marketing",
    title: "Google Analytics for Beginners in 2024: A Complete Guide",
  },
  {
    imgSrc: "/images/blog/blog2.jpg",
    category: "Digital Marketing",
    title: "Google Analytics for Beginners in 2024: A Complete Guide",
  },
  {
    imgSrc: "/images/blog/blog3.jpg",
    category: "Digital Marketing",
    title: "Google Analytics for Beginners in 2024: A Complete Guide",
  },
];

const LatestBlogPosts = () => {
  return (
    <section className={`${styles.latestBlogSection}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${styles.sectionHeader}`}>
              <h2>Latest Blog Posts</h2>
            </div>
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
                    <button className={styles.readMoreLink}>
                      <RightArrow />
                    </button>
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
            <Link href={"#"} className="btnWhite">
              Load More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
