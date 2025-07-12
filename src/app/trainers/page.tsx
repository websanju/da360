// import styles from "./style.module.scss";
import TrainersHeroSection from "@components/trainersHeroSection";
import CareerBanner from "@/components/careerBanner";
import GuestFacultyCard from "@components/widgets/guestFacultyCard";
import styles from "./style.module.scss";
import SectionHeader from "@/components/widgets/sectionHeader";

const dataItem = [
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "12+ years Experience",
    linkedinLink: "/images/jeet.png",
    bgColor: "bgPink",
    image: {
      desktop: "/images/akshita.png",
      mobile: "/images/akshita.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    linkedinLink: "/images/zer.png",
    bgColor: "bgBlue",
    image: {
      desktop: "/images/rahul.png",
      mobile: "/images/rahul.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    linkedinLink: "/images/value.png",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/sharmila.png",
      mobile: "/images/sharmila.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    linkedinLink: "/images/jeet.png",
    bgColor: "bgPink",
    image: {
      desktop: "/images/akshita.png",
      mobile: "/images/akshita.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    linkedinLink: "/images/zer.png",
    bgColor: "bgBlue",
    image: {
      desktop: "/images/rahul.png",
      mobile: "/images/rahul.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    linkedinLink: "/images/value.png",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/sharmila.png",
      mobile: "/images/sharmila.png",
    },
  },
];
const data = [
  {
    name: `Deepak <br/> Soni`,
    title: "Digital Marketing Trainer",
    experience: "12+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgPink",
    image: {
      desktop: "/images/trainers/deepak.png",
      mobile: "/images/trainers/deepak.png",
    },
  },
  {
    name: `Madhuraj P`,
    title: "Digital Marketing Trainer",
    experience: "8+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgBlue",
    image: {
      desktop: "/images/trainers/madhu.png",
      mobile: "/images/trainers/madhu.png",
    },
  },
  {
    name: `Sathiyaseelan S`,
    title: "Digital Marketing Trainer",
    experience: "3+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/sathya.png",
      mobile: "/images/trainers/sathya.png",
    },
  },
  {
    name: `Monisha Jain S S`,
    title: "Digital Marketing Trainer",
    experience: "3+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/monisha.png",
      mobile: "/images/trainers/monisha.png",
    },
  },
  {
    name: `Anush Raj K`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/anush.png",
      mobile: "/images/trainers/anush.png",
    },
  },
  {
    name: `Swanand <br/> Patwardhan`,
    title: "Digital Marketing Trainer",
    experience: "8+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/swanand.png",
      mobile: "/images/trainers/swanand.png",
    },
  },
  {
    name: `Sujeeth H D`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    linkedinLink: "/images/devicon_linkedin.svg",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/trainers/sujeeth.png",
      mobile: "/images/trainers/sujeeth.png",
    },
  },
];
export default function Career() {
  return (
    <main>
      <TrainersHeroSection />
      <section className={styles.featuredSuperSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHeader
                title={"Industry Leaders as Your Guest Mentors"}
                titleMarginBottom={{ desktop: "20px", mobile: "24px" }}
                description={
                  "Learn from those who’ve walked the path — and led the way."
                }
                wrapperMarginBottom={{ desktop: "60px", mobile: "24px" }}
              />
            </div>
          </div>
          <div className={`${styles.row} row d-md-flex`}>
            {dataItem.map((item, index) => (
              <div className="col-md-4 col-lg-4 col-6" key={index}>
                <GuestFacultyCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CareerBanner />
      <section className={styles.featuredSuperSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHeader
                title={"Trainers At DA360"}
                wrapperMarginBottom={{ desktop: "60px", mobile: "24px" }}
              />
            </div>
          </div>
          <div className={`${styles.row} row d-md-flex`}>
            {data.map((item, index) => (
              <div className="col-md-4 col-lg-4 col-6" key={index}>
                <GuestFacultyCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
