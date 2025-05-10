"use client";

import styles from "./style.module.scss";
import Image from "next/image";

export default function LeadCaptureSection() {
  return (
    <section className={`${styles.leadCaptureSection}`}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-7">
            <h1>
              PGCP In AI{" "}
              <span className={styles.gifAniamtion}>
                <Image
                  src={`/images/face.gif`}
                  alt="logo"
                  height={50}
                  width={120}
                />{" "}
              </span>
              <br />
              Digital Marketing <br />& E-Commerce
            </h1>
            <div className={`${styles.tag}`}>
              <span>6 Months Program</span>
              <span>AI Driven Curriculum</span>
              <span>1 Month Internship in Agency</span>
            </div>
            <p>
              Fast-Track Your Success in AI-Powered Digital Marketing, Next-Gen
              AI Skills for Next-Gen AI Marketers
            </p>
            <div className={`${styles.btnAction}`}>
              <button className={`${styles.btnRed} btnRed`}>Apply Now</button>
              <button className={`${styles.btnWhite} btnWhite`}>
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-5 d-flex justify-content-end">
            <div className={`${styles.formBox}`}>
              <h3>Book your slot</h3>
              <form>
                <div className="form-field">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name*"
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email*"
                    required
                  />
                </div>
                <div className={`${styles.phoneCodefield} form-field d-flex`}>
                  <span className={`${styles.phoneCode}`}>
                    <select className="form-select" required>
                      <option value="+91">+91 IN</option>
                      <option value="+1">+1 US</option>
                      <option value="+44">+44 UK</option>
                      <option value="+61">+61 AU</option>
                    </select>
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number*"
                    required
                  />
                </div>
                <div className="form-field">
                  <select className="form-select" required>
                    <option value="">Work Experience</option>
                    <option value="fresher">Fresher</option>
                    <option value="1-2">1-2 Years</option>
                    <option value="3+">3+ Years</option>
                  </select>
                </div>
                <div className={`${styles.formRadio} form-field form-radio`}>
                  <label>Learning Mode:</label>
                  <div className="form-radio-inline">
                    <input
                      className="form-radio-input"
                      type="radio"
                      name="mode"
                      id="online"
                      value="online"
                    />
                    <label className="form-radio-label" htmlFor="online">
                      Online
                    </label>
                  </div>
                  <div className="form-radio-inline">
                    <input
                      className="form-radio-input"
                      type="radio"
                      name="mode"
                      id="offline"
                      value="offline"
                    />
                    <label className="form-radio-label" htmlFor="offline">
                      Offline
                    </label>
                  </div>
                </div>
                <div className="form-field form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="updates"
                    required
                  />
                  <label className="form-check-label small" htmlFor="updates">
                    I authorize Digital Academy 360 and its associates to
                    contact me with updates & notifications.
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-black w-100 rounded-pill"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
