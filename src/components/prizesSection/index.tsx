"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import SectionHeader from "@components/widgets/sectionHeader";

const PrizesSection = () => {
  return (
    <section className={styles.prizesSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              title={"Prizes!"}
              wrapperMarginBottom={{ desktop: "60px", mobile: "20px" }}
              titleMarginBottom={"20px"}
              description={
                <>
                  Prizes will be paid in US dollars. <br />
                  Subscribe to keep up with the latest CloneComp news.
                </>
              }
            ></SectionHeader>
            <div className={styles.grandPrize}>
              <h3>Grand Prize</h3>
              <p>
                This year we will be awarding $5,000 in cash to the first place
                winner along with a crystal trophy and an all-expenses-paid trip
                to #CodeConf in San Francisco this November. To win this
                you&apos;ll have to wow the judges as well as other
                participants.
              </p>
              <div className={styles.prizeBox}>
                <div className={styles.prizeItem}>
                  <div className={styles.prizeIcons}>
                    <Image
                      src="/images/money.svg"
                      alt="Cash"
                      width={94}
                      height={94}
                    />
                  </div>
                  <span>₹50,000</span>
                </div>
                <div className={styles.prizeItem}>
                  <div className={styles.prizeIcons}>
                    <Image
                      src="/images/trophy.svg"
                      alt="Trophy"
                      width={94}
                      height={94}
                    />
                  </div>
                  <span>Trophy</span>
                </div>
              </div>
            </div>

            <div className={styles.prizeCards}>
              {[
                {
                  title: "First Runner-Up",
                  desc: "You might have missed top honors, but you’re still taking home more than $2,000 in cash and prizes.",
                },
                {
                  title: "Second Runner-Up",
                  desc: "You might have missed top honors, but you’re still taking home more than $2,000 in cash and prizes.",
                },
                {
                  title: "Round Winners",
                  desc: "You might have missed top honors, but you’re still taking home more than $2,000 in cash and prizes.",
                },
              ].map((item, index) => (
                <div key={index} className={styles.card}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <div className={styles.cardImg}>
                    <Image
                      src="/images/money.svg"
                      alt="Money Icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={styles.amount}>₹25,000</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
