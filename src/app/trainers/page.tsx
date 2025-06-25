// import styles from "./style.module.scss";
import TrainersHeroSection from "@components/trainersHeroSection";
import CallToActionBanner from "@/components/callToActionBanner";
import GuestFacultyCard from "@components/widgets/guestFacultyCard";
import styles from "./style.module.scss";
import SectionHeader from "@/components/widgets/sectionHeader";

const dataItem = [
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    logo: "/images/jeet.png",
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
    logo: "/images/zer.png",
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
    logo: "/images/value.png",
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
    logo: "/images/jeet.png",
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
    logo: "/images/zer.png",
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
    logo: "/images/value.png",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/sharmila.png",
      mobile: "/images/sharmila.png",
    },
  },
];
const data = [
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    logo: "/images/jeet.png",
    bgColor: "bgPink",
    image: {
      desktop: "/images/faculty1.png",
      mobile: "/images/faculty1m.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    logo: "/images/zer.png",
    bgColor: "bgBlue",
    image: {
      desktop: "/images/faculty2.png",
      mobile: "/images/faculty1m.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    logo: "/images/value.png",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/faculty3.png",
      mobile: "/images/faculty1m.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    logo: "/images/value.png",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/faculty4.png",
      mobile: "/images/faculty1m.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    logo: "/images/value.png",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/faculty5.png",
      mobile: "/images/faculty1m.png",
    },
  },
  {
    name: `Deepak Soni`,
    title: "Digital Marketing Trainer",
    experience: "5+ years Experience",
    logo: "/images/value.png",
    bgColor: "bgGreen",
    image: {
      desktop: "/images/faculty6.png",
      mobile: "/images/faculty1m.png",
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
      <CallToActionBanner />
    </main>
  );
}
