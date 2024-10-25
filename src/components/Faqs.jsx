import Header from "./Header";

// import React from "react";

function Faqs() {
  return (
    <>
      <h1 className="names">{"FAQ's"}</h1>
      <div className="faqs_page">
        <div className="faqs">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" style={{ margin: "0px" }}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseZero"
                  aria-expanded="false"
                  aria-controls="flush-collapseZero"
                >
                  <b id="question">0. Where the lab is located?</b>
                </button>
              </h2>
              <div
                id="flush-collapseZero"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  The lab is located at Room no 31 \ 3 pokharan road no 1 near
                  yashodhan English school shastri nagar thane west 400606
                </div>
              </div>
            </div>
            {/*  */}
            <div className="accordion-item">
              <h2 className="accordion-header" style={{ margin: "0px" }}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <b id="question">
                    1. What services does your laboratory offer?
                  </b>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  We provide a range of diagnostic tests, including blood tests,
                  ECGs, liver and kidney function tests, blood pressure
                  monitoring, and comprehensive full-body checkups.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <b id="question">2. How can I schedule an appointment?</b>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  You can schedule an appointment by calling our office
                  <b> 9119812125/ 9594990555 </b>, or email us on{" "}
                  <b>diagnosticearth@gmail.com </b>
                  or visiting us in person.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <b id="question">3. How do I prepare for my blood test?</b>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Preparation may vary depending on the specific test.
                  Generally, you may need to fast for 8-12 hours before a blood
                  draw. Please consult our guidelines or call us for specific
                  instructions.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  <b id="question">
                    4. Do I need a {"doctor's"} referral for tests?
                  </b>
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Most tests can be done without a referral. However, some
                  specialized tests may require a {"doctor's"} order. Please
                  check with us or your healthcare provider.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  <b id="question">
                    5. How long will it take to receive my test results?
                  </b>
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Result may very upon the Tests, usually results are typically
                  available within 24 hours. You will be notified via [email,
                  phone].
                </div>
              </div>
            </div>

            {/* lab timing: */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  <b id="question">6. What are the diagnostic center hours?</b>
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Monday - Satursday: 8 AM - 10 PM
                  <br />
                  Sunday:8 AM - 6 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
