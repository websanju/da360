import styles from "./style.module.scss";
import Password from "@components/widgets/password";
import CreateLeadForm from "@components/createLeadForm";

export default function LeadEntryInternal() {
  return (
    <main>
      <section className={styles.passwordSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Password />
              <div className="">
                <CreateLeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
