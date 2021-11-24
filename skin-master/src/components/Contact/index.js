import React from "react";
import {
  Row,
  Container,
  Col,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import CallLogo from "../Images/Vector.png";
import MapLogo from "../Images/map.png";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Contact(props) {
  return (
    <>
      <Container style={{marginTop:'150px'}}>
        <div className="page-title">
          <p className="title">Contact</p>
          <h1 className="heading">Thanks For Your</h1>
          <h1 className="heading">Interest in Skin Square</h1>
        </div>
        <Row className="contactForm">
          <Col lg={4} md={6} className="address">
            <Container className="p-5">
              <div className="">
                <i className="far fa-envelope fa-2x text-black mb-5"></i>
                <p>skinsquare@gmial.com</p>
                <p>skinsquare@gmial.com</p>
              </div>
              <div className="">
                <img src={CallLogo} alt="call" className="mb-5 img-fluid" />
                <p>+91 9876543210</p>
                <p>+91 9876543210</p>
              </div>
              <div className="">
                <i class="fas fa-map-marker-alt fa-2x text-black mb-5"></i>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
            </Container>
          </Col>
          <Col lg={8} md={6}>
            <div className="mt-5">
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="m-5 mb-3"
              >
                <Form.Control type="text" placeholder="John" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Email"
                className="m-5 mt-4 mb-3"
              >
                <Form.Control type="email" placeholder="john@gmail.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Mobile No"
                className="m-5 mt-4 mb-3"
              >
                <Form.Control type="text" placeholder="+91 9876543210" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Subject"
                className="m-5 mt-4 mb-3"
              >
                <Form.Control type="test" placeholder="Subject" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Send Massage"
                className="m-5 mt-4 mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  className="message"
                />
              </FloatingLabel>
              <Button className="contactBtn m-5 mt-4 pt-2 pb-2">
                Send Message
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="mt-5 mb-5">
      <iframe src="https://www.google.com/maps/d/embed?mid=1YQLO70Ay9Fhkttgn-AXCp_IFZyo" width="100%" height="500px"></iframe>
        {/* <img src={MapLogo} alt="mapLogo" height="796" className="w-100" /> */}
      </div>
      {/* <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAaDqbQ7-ZE7ukiZTAioiSHB_hfRMAA7vw" }}
          defaultCenter={"center"}
          defaultZoom={"zoom"}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div> */}
    </>
  );
}

export default Contact;
