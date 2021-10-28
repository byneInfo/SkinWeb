import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Doctor from "../Images/doctor.png";
import GroupGirl from "../Images/GroupGirl.png";

function About() {
  return (
    <>
      <Container style={{marginTop:'0px'}} style={{marginTop:'150px'}}>
        <div className="page-title">
        <p className="title">Dr. Atul Bothra - Chief Dermatologist and Hair Transplant Surgeon </p>
              <h1 className="heading">MBBS , MD (Dermatology and Venereology and Leprosy) – Gold Medalist</h1>
              <h1 className="heading">FRGUHS (Dermatosurgery and Hair transplantation)</h1>
        </div><br/>
        <div className="aboutFeature">
            <img src={GroupGirl} alt="" style={{width:'30vw',}}/>
            <Col lg={6} className='aboutFeatureText'>
            
            <h5 >
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                risus vitae pellentesque tellus sem mattis. Sed volutpat in
                urna nunc proin sit curabitur velit tortor. Sollicitudin nulla
                fermentum est faucibus. Mattis sit ornare neque non arcu
                proin.
            </h5><br/><br/>
            <h5 >
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                risus vitae pellentesque tellus sem mattis. Sed volutpat in
                urna nunc proin sit curabitur velit tortor. Sollicitudin nulla
                fermentum est faucibus. Mattis sit ornare neque non arcu
                proin.
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
            <div className="teamRow">
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
            </div>
            <div className="teamRow" style={{ flexWrap: "wrap-reverse" }}>
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
              <div>
                <img src={Doctor} alt="Doctor" className="team-img img-fluid" />
              </div>
            </div>
            <div className="teamRow">
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
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}

export default About;
