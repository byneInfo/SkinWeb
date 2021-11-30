import React from "react";
import { Row, Container, Col, Card, ListGroup } from "react-bootstrap";
import ServiceDetailsLogo from "../Images/service-details.png";
import { NavLink } from "react-router-dom";

function ServiceDetails() {
  return (
    <>
      <img
        src={ServiceDetailsLogo}
        alt="ServiceDetailsLogo"
        height="531"
        className="w-100 img-fluid"
      />
      <Container className="mt-5 mb-5" style={{marginTop:'150px'}}>
        <Row>
          <Col lg={9}>
            <h3>Alopecia Areata</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              risus senectus maecenas et morbi mauris vitae cursus lacus. Ac
              vulputate porta quis sed vel massa ut orci. Quis feugiat ut ac
              elementum ac placerat ut vitae. Id nulla turpis volutpat
              suspendisse sem etiam. Amet amet dolor adipiscing maecenas purus.
              Consectetur at nisi, felis ornare amet sed etiam congue ornare.
              Leo tellus, sem consequat magna egestas. Eu justo ultrices
              sollicitudin viverra a vel. Arcu vel lectus arcu quis.
            </p>
            <p>What parts of the body can be involved ? </p>
            <p>
              In infants: on the most exposed areas - the cheeks, forehead and
              chin
            </p>
            <p>
              In children: inside folds - elbows, behind the knees, on the upper
              side of the feet, hands, the torso or neck.
            </p>
            <p> In adults: the face, neck and hands.</p>
            <p className="mt-2 mb-2">
              <b>Some useful tips for atopic patients </b>
            </p>
            <ul>
              <li className="mt-2 mb-2">
                Clothing should be soft next to the skin. Cotton is comfortable
                and can be layered in the winter. Wool products should be
                avoided.
              </li>
              <li className="mt-2 mb-2">
                Clothing should be soft next to the skin. Cotton is comfortable
                and can be layered in the winter. Wool products should be
                avoided.
              </li>
              <li className="mt-2 mb-2">
                Clothing should be soft next to the skin. Cotton is comfortable
                and can be layered in the winter. Wool products should be
                avoided.
              </li>
              <li className="mt-2 mb-2">
                Clothing should be soft next to the skin. Cotton is comfortable
                and can be layered in the winter. Wool products should be
                avoided.
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <Card>
              <Card.Header>
                <b>Other Service</b>
              </Card.Header>
              <ListGroup variant="flush">
              <NavLink
                  to="/services"
                  className="nav-link"
                  activeClassName="active"
                >
                <ListGroup.Item>Hair Transplant Treatment</ListGroup.Item>
                <ListGroup.Item>
                  DMC- RRT (R) Root Restore Therapy
                </ListGroup.Item>
                <ListGroup.Item>Lip Pigmentation</ListGroup.Item>
                <ListGroup.Item>Collagen Induction Therapy</ListGroup.Item>
                </NavLink>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ServiceDetails;
