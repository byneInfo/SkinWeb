import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Logo from "../Images/Skin_Square.png";
import Logo from "../Images/skin-square.svg";

function Footer() {
  return (
    <>
      <Container className="text-left pt-5" fluid="md" >
        <Row className="text-left mt-3 pb-3" >
          <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
            <img
              src={Logo}
              alt="Logo"
              width="185"
              height="121"
              className="mb-4"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
              facilisi quis risus egestas ipsum.
            </p>
            <div className="text-left">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating">
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

          <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
            <h5 className="mt-4 mb-4 font-weight-bold">Company</h5>
            <p>
              <Link to="/about">About</Link>
            </p>
            <p>
              <Link to="/testimonials">Testimonials</Link>
            </p>
            <p>
              <Link to="/gallery">Gallery</Link>
            </p>
            <p>
              <Link to="/blogs">Blog</Link>
            </p>
          </Col>

          <hr className="w-100 clearfix d-md-none" />

          <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
            <h5 className="mt-4 mb-4 font-weight-bold">Contact</h5>
            <p className="pr-5">4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p>+91 9876543210</p>
            <p>skinsquare@gmail.com</p>
          </Col>

          <hr className="w-100 clearfix d-md-none" />

          <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
            <h5 className="mt-4 mb-4 font-weight-bold">
              Subscribe our Newsletter
            </h5>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control size="lg" type="email" placeholder="Your Email" className="subInput" />
            </Form.Group>
            <Button className="appointBtn mt-3">Subscribe</Button>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col md={6} lg={6}>
            <p className="text-left">
              © Copyright 2021. All Right Reserved By Skin Square.
            </p>
          </Col>

          <Col md={6} lg={6}>
            <p className="text-right">
            Clinic Timings - Monday-Saturday: 09:00 AM - 6:00 PM | Sunday: Closed.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Footer;
