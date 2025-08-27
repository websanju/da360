import Image from "next/image";
import styles from "./styles.module.scss";
import SectionHeader from "../widgets/sectionHeader";

export default function ReasonsToJoin() {
  const reasons = [
    {
      title: "100% Job Guarantee Program",
      desc: "Secure your future with assured placement support.",
    },
    {
      title: "Dedicated Career Assistance",
      desc: "Personalized placement support until you land the right job.",
    },
    {
      title: "Mentorship by Industry Leaders",
      desc: "Learn directly from CEOs, CMOs, and senior marketing professionals.",
    },
    {
      title: "3X More Interview Opportunities",
      desc: "Our training and grooming ensure you stand out to recruiters.",
    },
    {
      title: "Work on Real-World Projects",
      desc: "Gain practical experience with live industry case studies.",
    },
    {
      title: "Dual Expertise Advantage",
      desc: "A blend of Digital Marketing + Business Management for career growth.",
    },
    {
      title: "AI & Analytics Integration",
      desc: "Master next-gen tools in AI, automation, and marketing analytics.",
    },
    {
      title: "Specialized Electives",
      desc: "Choose from SEO, SEM, Social Media, E-commerce, Performance Marketing & more.",
    },
    {
      title: "Globally Recognized Certifications",
      desc: " Earn Google, HubSpot, Meta, and SEMrush certifications.",
    },
    {
      title: "Soft Skills & Leadership Training",
      desc: "Build confidence with communication, presentation & leadership modules.",
    },
    {
      title: "Entrepreneurship & Startup Focus",
      desc: "Learn how to launch and scale your own business.",
    },
    {
      title: "Exposure to Marketing Automation ",
      desc: "Hands-on training with CRM and automation platforms.",
    },
    {
      title: "Capstone Industry Project",
      desc: "Showcase your learning with a portfolio-worthy project.",
    },
    {
      title: "Hybrid Learning Model ",
      desc: "Online + offline sessions for flexibility and accessibility.",
    },
    {
      title: "Expert Faculty + Corporate Trainers",
      desc: "Guidance from academicians and active industry professionals.",
    },
    {
      title: "Networking with Alumni & Industry Experts",
      desc: "Access to a strong professional community.",
    },
    {
      title: "Global Case Studies",
      desc: " Learn from international brand campaigns and strategies",
    },
    {
      title: "Internships with Top Companies ",
      desc: "Gain on-the-job experience while studying.",
    },
    {
      title: "Placement Across 1,000+ Hiring Partners",
      desc: "Opportunities with startups, MNCs, and agencies.",
    },
    {
      title: "Higher Earning Potential",
      desc: "MBA graduates command faster promotions and higher salary packages.",
    },
  ];

  return (
    <section className={`${styles.reasonsSection}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
              maxWidthTitle="650px"
              title={"20 Reasons to Join the S-VYASA MBA in Digital Marketing"}
            />
            <div className={`${styles.reasonsBox}`}>
              <div className="row">
                {/* Left: Image */}
                <div className="col-lg-5">
                  <div className={styles.studentImg}>
                    <Image
                      src="/images/student.jpg" // Replace with your actual image
                      alt="Students holding books"
                      width={400}
                      height={500}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="col-lg-7">
                  <div className={styles.reasonsContent}>
                    <h3>Brand, Trust & Alumni Network</h3>
                    <ul>
                      {reasons.map((reason, i) => (
                        <li key={i}>
                          <span>{i + 1}.</span> {/* number in loop */}
                          <div className={styles.reasonsText}>
                            <p className={styles.reasonsTitle}>
                              {reason.title}
                            </p>
                            <p className={styles.reasonsDesc}>{reason.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
