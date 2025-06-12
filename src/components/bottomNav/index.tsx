"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ContactButtonsSticky from "@components/widgets/contactButtonsSticky";
interface Section {
  id: string;
  label: string;
}

interface Props {
  sections: Section[];
  showContactButtons?: boolean;
}

const BottomNav = ({ sections, showContactButtons = false }: Props) => {
  const [activeId, setActiveId] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 + 1; // +1 for edge case
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Manual scroll to section without updating URL
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`${styles.bottomNavSection} ${
        isVisible ? styles.show : styles.hide
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.bottomNavBox}>
              <div className={styles.bottomNavLeft}>
                <nav className={`${styles.bottomNav} `}>
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`${styles.link} ${
                        activeId === section.id ? styles.active : ""
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
              {showContactButtons && (
                <div className={styles.bottomNavRight}>
                  <ContactButtonsSticky />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
