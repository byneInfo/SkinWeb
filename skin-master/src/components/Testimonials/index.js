import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import UserImg from "../Images/user-image.png";

function Testimonials() {
  return (
    <>
      <Container style={{marginTop:'150px'}}>
        <div className="page-title">
          <p className="title">Testimonials</p>
          <h1 className="heading">What People Say About Us!</h1><br/>
        </div>
        <div className="mt-5 mx-5">
          <Row className="g-5">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col lg={6} md={6}>
                <Card className="position-relative border border-light" style={{boxShadow:" 0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)"}}>
                  <Card.Img variant="top" src={UserImg} className="user-img" />
                  <Card.Body>
                    <Card.Text className="p-3" >
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
      </Container>
    </>
  );
}

export default Testimonials;
