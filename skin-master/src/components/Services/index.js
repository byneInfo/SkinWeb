import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import ServicesLogo from "../Images/services.png";
import UserImg from "../Images/user-image.png";
import { NavLink } from "react-router-dom";

function Services() {
  return (
    <>
      <Container style={{ marginTop: "150px" }}>
        <div className="page-title">
          <p className="title">Services</p>
          <h1 className="heading">What We DO</h1>
        </div>
        <div className="mt-5 mb-5">
          <Row className="g-3">
            {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
            <Col lg={4}>
              <Card style={{ boxShadow: "0px 23px 53px rgba(0, 0, 0, 0.12)" }}>
                <Card.Img variant="top" src={ServicesLogo} />
                <NavLink
                  to="/services/service-details"
                  className="nav-link"
                  activeClassName="active"
                >
                  <Card.Body style={{ color: "#000" }}>
                    <Card.Title classNam="form-label">HAIR FALL</Card.Title>
                    <Card.Text>
                      Skin Square clinic has a team of expert trichologists
                      which treats all causes of hair fall. We offer the most
                      advanced and evidence-based therapies
                    </Card.Text>
                    <Card.Text className="font-weight-bold">
                      Read More{" "}
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </Card.Text>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col lg={4}>
              <Card style={{ boxShadow: "0px 23px 53px rgba(0, 0, 0, 0.12)" }}>
                <Card.Img variant="top" src={ServicesLogo} />
                <NavLink
                  to="/services/service-details"
                  className="nav-link"
                  activeClassName="active"
                >
                  <Card.Body style={{ color: "#000" }}>
                    <Card.Title classNam="form-label">HAIR FALL</Card.Title>
                    <Card.Text>
                      Skin Square clinic has a team of expert trichologists
                      which treats all causes of hair fall. We offer the most
                      advanced and evidence-based therapies
                    </Card.Text>
                    <Card.Text className="font-weight-bold">
                      Read More{" "}
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </Card.Text>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col lg={4}>
              <Card style={{ boxShadow: "0px 23px 53px rgba(0, 0, 0, 0.12)" }}>
                <Card.Img variant="top" src={ServicesLogo} />
                <NavLink
                  to="/services/service-details"
                  className="nav-link"
                  activeClassName="active"
                >
                  <Card.Body style={{ color: "#000" }}>
                    <Card.Title classNam="form-label">ACNE</Card.Title>
                    <Card.Text>
                      At Skin Square, we practice different modalities including
                      systemic and topical medications, peels and lasers for
                      effective treatment of acne
                    </Card.Text>
                    <Card.Text className="font-weight-bold">
                      Read More{" "}
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </Card.Text>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col lg={4}>
              <Card style={{ boxShadow: "0px 23px 53px rgba(0, 0, 0, 0.12)" }}>
                <Card.Img variant="top" src={ServicesLogo} />
                <NavLink
                  to="/services/service-details"
                  className="nav-link"
                  activeClassName="active"
                >
                  <Card.Body style={{ color: "#000" }}>
                    <Card.Title classNam="form-label">PIGMENTATION</Card.Title>
                    <Card.Text>
                      Pigmentation treatment includes accurate diagnosis and
                      advanced treatment modalities.
                    </Card.Text>
                    <Card.Text className="font-weight-bold">
                      Read More{" "}
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </Card.Text>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col lg={4}>
              <Card style={{ boxShadow: "0px 23px 53px rgba(0, 0, 0, 0.12)" }}>
                <Card.Img variant="top" src={ServicesLogo} />
                <NavLink
                  to="/services/service-details"
                  className="nav-link"
                  activeClassName="active"
                >
                  <Card.Body style={{ color: "#000" }}>
                    <Card.Title classNam="form-label">ACNE SCARS </Card.Title>
                    <Card.Text>
                      We have various chemical peels, lasers and acne scar
                      surgeries including subcision, scar excision, Taylor’s
                      subcision, fat grafting etc. for promising results.
                    </Card.Text>
                    <Card.Text className="font-weight-bold">
                      Read More{" "}
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </Card.Text>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            <Col lg={4}>
              <Card style={{ boxShadow: "0px 23px 53px rgba(0, 0, 0, 0.12)" }}>
                <Card.Img variant="top" src={ServicesLogo} />
                <NavLink
                  to="/services/service-details"
                  className="nav-link"
                  activeClassName="active"
                >
                  <Card.Body style={{ color: "#000" }}>
                    <Card.Title classNam="form-label">LASERS</Card.Title>
                    <Card.Text>
                      Skin square hosts a wide range of aesthetic procedures
                      with best in class lasers for hair removal, pigmentation ,
                      tatooes and scars including acne scars.....
                    </Card.Text>
                    <Card.Text className="font-weight-bold">
                      Read More{" "}
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </Card.Text>
                  </Card.Body>
                </NavLink>
              </Card>
            </Col>
            {/* ))} */}
          </Row>
        </div>
        {/* <div className="mt-5 mb-5">
          <p className="text-center"><br/>
            <b>---Testimonials---</b>
          </p>
          <h3 className="text-center">What People Say About Us!</h3><br/><br/>
          <div className="my-5 mx-5">
          <Row className="g-5">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col lg={6} md={6}>
                <Card className="position-relative border border-light">
                  <Card.Img variant="top" src={UserImg} className="user-img" />
                  <Card.Body  style={{boxShadow:" 0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)"}}>
                    <Card.Text className="p-3">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Leo a sem sed nibh netus morbi auctor nam suscipit. Nisl,
                      id ut eget nullam.”
                      <div className="mt-3">
                        <b>Mike taylor</b>
                        <br />
                        <small>Mp, India</small>
                      </div>
                    </Card.Text>
                  </Card.Body> 
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      
        </div> */}
      </Container>
    </>
  );
}

export default Services;
