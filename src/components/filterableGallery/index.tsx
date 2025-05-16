"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./style.module.scss";
import { galleryData, categories } from "@data/galleryData";

const FilterableGallery = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visibleItems, setVisibleItems] = useState(10);

  const filteredData =
    activeCategory === "ALL"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 9);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleItems(10); // Reset visible items on category change
  };

  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.filterButtons}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={activeCategory === category ? styles.active : ""}
                >
                  {category}
                </button>
              ))}
            </div>

            <motion.div
              layout
              className={styles.grid}
              transition={{ duration: 0.2, ease: "easeIn" }}
            >
              <AnimatePresence mode="popLayout">
                {filteredData.slice(0, visibleItems).map((item) => {
                  if (item.Scholarship) {
                    return (
                      <motion.div
                        key={item.id}
                        className={styles.cardScholarship}
                        layout
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                      >
                        <div className={styles.cardScholarshipContent}>
                          <h3>Empower Your Education With Scholarship</h3>
                          <div className={styles.cardScholarshiAmout}>
                            <div className={styles.scholarshiAmout}>
                              Scholarship worth of <br /> <span> ₹20,000</span>
                            </div>
                            <button className={styles.button}>
                              {item.buttonText}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  } else {
                    return (
                      <motion.div
                        key={item.id}
                        className={`${styles.card}`}
                        layout
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                      >
                        <div className={styles.studentImg}>
                          <Image
                            src={item.image ?? ""}
                            alt={item.name ?? ""}
                            width={247}
                            height={256}
                            className={styles.image}
                          />
                        </div>

                        <div className={styles.studentcontent}>
                          <h3>{item.name}</h3>
                          <div className={styles.content}>
                            <p>
                              <span>Highest Education:</span> {item.education}
                            </p>
                            <p>
                              <span>Location:</span> {item.location}
                            </p>
                            <p>
                              <span>Experience:</span> {item.expertise}
                            </p>
                          </div>

                          {item.skills && item.skills.length > 0 && (
                            <div className={styles.tags}>
                              {item.skills.map((skill, index) => (
                                <span key={index} className={styles.tag}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className={styles.action}>
                            <button className={styles.button}>
                              {item.buttonText}
                            </button>
                            <a href={item.linkedin} className={styles.link}>
                              <Image
                                src="/images/icons/linkdin.svg"
                                alt={item.name ?? ""}
                                width={28}
                                height={28}
                                className={styles.image}
                              />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    );
                  }
                })}
              </AnimatePresence>
            </motion.div>

            {visibleItems < filteredData.length && (
              <div className={styles.loadMorebtn}>
                <motion.button
                  className={styles.loadMore}
                  onClick={loadMoreItems}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Load More
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterableGallery;
