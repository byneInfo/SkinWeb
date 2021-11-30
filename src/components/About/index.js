import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Doctor from "../Images/doctor.png";
import Atul from "../Images/atul.png";
import Seujee from "../Images/seujee.png";
import Anshu from "../Images/anshu.png";

function About() {
  return (
    <>
      <Container style={{ marginTop: "0px" }} style={{ marginTop: "150px" }}>
        <div className="page-title">
          <p className="title">
            Dr. Atul Bothra - Chief Dermatologist and Hair Transplant Surgeon{" "}
          </p>
          <h5 className="heading">
            MBBS , MD (Dermatology and Venereology and Leprosy) – Gold Medalist
          </h5>
          <h5 className="heading">
            FRGUHS (Dermatosurgery and Hair transplantation)
          </h5>
        </div>
        <br />
        <div className="aboutFeature">
          <img src={Atul} alt="" style={{ width: "30vw" }} />
          <Col lg={6} className="aboutFeatureText">
            <h5>
              Dr. Atul Bothra is a certified Dermatologist and Dermato surgeon
              practicing in Guwahati (and previously Bangalore) .He has
              completed his MBBS and MD (Dermatology, Venereology and Leprosy)
              from Guwahati Medical College, Guwahati, Assam followed by
              Fellowship in Dermatosurgery and Hair Transplantation at Cutis
              Academy of Cutaneous Sciences, Bangalore under Rajiv Gandhi
              University of Health Sciences. He is well versed with the various
              problems related to skin, hair and nails and also deals with
              problems related to oral mucosa and genitals, including sexually
              transmitted diseases.
            </h5>
            <br />
            <h5>
              He has a vast knowledge and experience with various dermatological
              procedures including botox , fillers, electrocautery and
              radiofrequency ablation, procedures involving the nail and mucosa,
              skin biopsy and other dermatosurgical procedures. He is specially
              trained in skin surgeries including hair transplantation, vitiligo
              surgeries, mole and cyst removals, scars and keloids treatment,
              fat transfer, acne scar management, thread lift etc. He is an
              expert in the usage of LASER technology for dermatological and
              cosmetological procedures. Dr. Atul Bothra also has great
              experience with the various aesthetic procedures for treatment of
              skin problems and hair issues. He is always eager to learn the
              newer therapies available to address the problems of the patients
              better.
            </h5>
            <br />
            <h5>
              Dr. Atul Bothra has several laurels to his name including awards
              at zonal and national levels and has 13 international and national
              publications. He has also written chapters for 4 reputed national
              books including ACS(I) textbook of Dermatosurgery
            </h5>
          </Col>
        </div>
        <br />
        <br />
        <div className="my-5">
          <p className="text-center">
            <b>---Our Team---</b>
          </p>
          <h3 className="text-center">We Have Some Awsome People</h3>
          <br />
          <section id="ourTeam">
            {/* <div className="teamRow">
              <div>
                <img src={Doctor} alt="Doctor" className="team-img img-fluid" />
              </div>
              <Col lg={6}>
                <div className="h-100 d-inline-block d-flex flex-column justify-content-center p-5">
                  <h5>Wade Warren</h5>
                  <small className="text-muted">Doctor</small>
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Scelerisque non hendrerit convallis mattis pharetra, sed
                    facilisi. Nulla facilisis viverra leo egestas hendrerit
                    urna.
                  </p>
                </div>
              </Col>
            </div> */}
            <div className="teamRow" style={{ flexWrap: "wrap-reverse" }}>
              <Col lg={6}>
                <div className="h-100 d-inline-block d-flex flex-column justify-content-center p-5">
                  <h5>Dr. Anshu Maheswari – Lead Dermatologist and Aesthetic physician</h5>
                  <small className="text-muted">MBBS , MD (Dermatology and Venereology and Leprosy</small>
                  <p className="mt-5">
                    Dr. Anshu Maheswari is a certified Dermatologist and has
                    completed her MBBS and MD (Dermatology, Venereology and
                    Leprosy) from Gauhati Medical College, Guwahati, Assam. She
                    is a well known Consultant Dermatologist practicing in
                    Delhi-NCR. She is well versed with the various problems
                    related to skin, hair and nails. She also deals with
                    problems related to oral mucosa and genitals, including
                    sexually transmitted diseases.
                  </p>                  
                </div>
              </Col>
              <div>
                <img src={Anshu} alt="Doctor" className="team-img img-fluid" />
              </div>
            </div>
            <div className="teamRow">
              <div>
                <img src={Seujee} alt="Doctor" className="team-img img-fluid" />
              </div>
              <Col lg={6}>
                <div className="h-100 d-inline-block d-flex flex-column justify-content-center p-5">
                  <h5>Dr. Seujee Das – Visiting Clinical Dermatologist </h5>
                  <small className="text-muted">MBBS, MD (Dermatology and Venereology and Leprosy) – Gold Medalist</small>
                  <p className="mt-5">
                    Dr. Seujee Das is a certified Dermatologist practicing in
                    Guwahati .She has completed her MBBS from Gauhati Medical
                    College, Guwahati, Assam and MD (Dermatology, Venereology
                    and Leprosy) from Assam Medical College and Hospital
                    (Dibrugarh). She has also done observership in Dermatoscopy
                    under IADVL Academy in the prestigious Rita Skin Foundation.
                    She has been working as a registrar in the Department of
                    Dermatology, GMCH. She is an adroit practitioner of clinical
                    Dermatology and treats various problems related to skin,
                    hair and nails and also deals with problems related to oral
                    mucosa and genitals, including sexually transmitted
                    diseases.
                  </p>
                </div>
              </Col>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}

export default About;
