import React from "react";
import styles from "./styles.module.scss";
import SectionHeader from "../widgets/sectionHeader";
interface FeeStructureProps {
  firstHeading?: string;
  secondHeading?: string;
}
const FeeStructure: React.FC<FeeStructureProps> = ({
  firstHeading = "Our Alumni Work Across",
  secondHeading = "1,000+ Global Giants",
}) => {
  return (
    <section className={styles.feeSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.feeBox}>
              <SectionHeader
                wrapperMarginBottom={{ desktop: "60px", mobile: "40px" }}
                maxWidthTitle="900px"
                titleMarginBottom={{ desktop: "20px", mobile: "10px" }}
                title={firstHeading}
                description={secondHeading ?? ""}
              />

              <div className={styles.tableWrapper}>
                <table className={styles.feeTable}>
                  <thead>
                    <tr>
                      <th>Breakup</th>
                      <th>Semester 1</th>
                      <th>Semester 2</th>
                      <th>Semester 3</th>
                      <th>Semester 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Block Fees</td>
                      <td>Rs. 50,000</td>
                      <td>-</td>
                      <td>Rs. 50,000</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Tuition Fees</td>
                      <td>Rs. 4,00,000</td>
                      <td>Rs. 4,00,000</td>
                      <td>Rs. 4,00,000</td>
                      <td>Rs. 4,00,000</td>
                    </tr>
                    <tr>
                      <td>Upskilling &amp; Technology Fees</td>
                      <td>Rs. 1,75,000</td>
                      <td>Rs. 1,75,000</td>
                      <td>Rs. 75,000</td>
                      <td>Rs. 75,000</td>
                    </tr>
                    <tr>
                      <td>Refundable Caution Deposit (IFRSD)</td>
                      <td>Rs. 50,000</td>
                      <td>-</td>
                      <td>Rs. 50,000</td>
                      <td>-</td>
                    </tr>
                    <tr className={styles.totalRow}>
                      <td>TOTAL PAYABLE</td>
                      <td>Rs. 6,75,000</td>
                      <td>Rs. 5,75,000</td>
                      <td>Rs. 5,75,000</td>
                      <td>Rs. 4,75,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className={styles.note}>
                *May be subject to a year-on-year increase of 7–10% due to
                inflation, starting from the second year onwards. <br />
                The Seat Block amount is part of the total payable fees for
                Semester 1. Electricity charges will need to be paid separately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;
