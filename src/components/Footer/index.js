import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Logo from "../Images/Skin_Square.png";
import Logo from "../Images/skin-square.svg";

function Footer() {
  const scrollHandler = () => {
    window.scroll(0, 0);
    
  };
  return (
    <>
      <Container className="text-left pt-5" fluid="md">
        <Row className="text-left mt-3 pb-3">
          <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
            <img
              src={Logo}
              alt="Logo"
              width="220"
              height="150"
              // className="mb-4"
            />
            <p>
              Skin Square clinic is a state-of-the-art Dermatology, Aesthetics
              and Hair Transplantation clinic in Guwahati, Assam bringing
              advanced skin care to the entire North- East India.
            </p>
            <div className="text-left">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    className="btn-floating"
                    href="https://www.facebook.com/skinsquareclinic/"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating"
                    href="https://www.instagram.com/invites/contact/?i=1v6csc8yc2g14&utm_content=mf8k2dx"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <hr className="w-100 clearfix d-md-none" />

          <Col
            md={3}
            lg={3}
            xl={3}
            className="mx-auto mt-3"
            style={{ paddingLeft: "5rem" }}
          >
            <h5 className="mt-4 mb-4 font-weight-bold">Company</h5>
            <p>
              <Link to="/about" onClick={() => scrollHandler()}>
                About
              </Link>
            </p>
            <p>
              <Link to="/services" onClick={() => scrollHandler()}>
                Services
              </Link>
            </p>
            <p>
              <Link to="/testimonials" onClick={() => scrollHandler()}>Testimonials</Link>
            </p>
            <p>
              <Link to="/gallery" onClick={() => scrollHandler()}>
                Gallery
              </Link>
            </p>
            <p>
              <Link to="/appointment" onClick={() => scrollHandler()}>
                Book Appointment
              </Link>
            </p>
            <p>
              <Link to="/blogs" onClick={() => scrollHandler()}>
                Blog
              </Link>
            </p>
          </Col>

          <hr className="w-100 clearfix d-md-none" />

          <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
            <h5 className="mt-4 mb-4 font-weight-bold">Contact</h5>
            <p className="pr-5">
              <p>
                Skin Square Clinic DD Tower, 2nd floor, Mahatma Gandhi Path,
                Ganeshguri, Guwahati, Assam 781005
              </p>
              {/* <a href="https://goo.gl/maps/xEmiuquTdW3BuGHe7">
                https://goo.gl/maps/xEmiuquTdW3BuGHe7
              </a> */}
            </p>

            <p>+91 6901625075</p>
            <p>skinsquareclinic@gmail.com</p>
          </Col>

          <hr className="w-100 clearfix d-md-none" />

          {/* <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
            <h5 className="mt-4 mb-4 font-weight-bold">
              Subscribe our Newsletter
            </h5>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control size="lg" type="email" placeholder="Your Email" className="subInput" />
            </Form.Group>
            <Button className="appointBtn mt-3">Subscribe</Button>
          </Col> */}
        </Row>

        <hr />

        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col md={6} lg={6}>
            <p className="text-center">
              © Copyright 2021. All Right Reserved By Skin Square.
            </p>
          </Col>

          {/* <Col md={6} lg={6}>
            <p className="text-right">
            Clinic Timings - Monday-Saturday: 09:00 AM - 6:00 PM | Sunday: Closed.
            </p>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}
export default Footer;
