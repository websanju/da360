"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const images = [
  "/images/universityGallery/photo-1.jpg",
  "/images/universityGallery/photo-2.jpg",
  "/images/universityGallery/photo-3.jpg",
  "/images/universityGallery/photo-4.avif",
  "/images/universityGallery/photo-5.avif",
  "/images/universityGallery/photo-6.avif",
  "/images/universityGallery/photo-7.avif",
  "/images/universityGallery/photo-8.avif",
  "/images/universityGallery/photo-9.avif",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className={styles.gallerySection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Grid Gallery */}
            <div className={styles.grid}>
              {images.map((src, index) => (
                <div
                  key={index}
                  className={styles.imageWrapper}
                  onClick={() => setSelectedImage(src)}
                >
                  <Image
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className={styles.image}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className={styles.lightbox}>
          <button
            className={styles.closeBtn}
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <div className={styles.lightboxContent}>
            <Image
              src={selectedImage}
              alt="Lightbox"
              fill
              className={styles.lightboxImage}
              unoptimized
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
