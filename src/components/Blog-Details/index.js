import React from "react";
import { Row, Container, Col, Card, ListGroup } from "react-bootstrap";
import BlogDetailsLogo from "../Images/blog-details.png";
import Bloger from "../Images/bloger.png";

function BlogDetails() {
  return (
    <>
      <div className="blog-details-h pt-5" style={{marginTop:'100px'}}>
        <p>Questions every man wants to ask</p>
        <p>a dermatologist</p>
      </div>
      <Container className="my-5">
        <Row>
          <Col lg={8}>
            <img
              src={BlogDetailsLogo}
              alt="BlogDetailsLogo"
              width="770"
              height="475"
              className="img-fluid"
            />
            <div className="mx-4">
              <small>
                <i class="fas fa-stopwatch"></i>&nbsp; January 25, 2021
              </small>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <small>
                <i class="far fa-user"></i>&nbsp; Cristofer Westervelt
              </small>
            </div>
          </Col>
          <Col lg={4}>
            <Card className="mt-3">
              <Card.Header>
                <h5>Letest Post</h5>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex d-flex justify-content-around">
                  <img src={Bloger} alt="Bloger" width="66" height="52" />
                  <p className="px-3 m-0">Minimal Post With A Preview Image</p>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex d-flex justify-content-around">
                  <img src={Bloger} alt="Bloger" width="66" height="52" />
                  <p className="px-3 m-0">Minimal Post With A Preview Image</p>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex d-flex justify-content-around">
                  <img src={Bloger} alt="Bloger" width="66" height="52" />
                  <p className="px-3 m-0">Minimal Post With A Preview Image</p>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex d-flex justify-content-around">
                  <img src={Bloger} alt="Bloger" width="66" height="52" />
                  <p className="px-3 m-0">Minimal Post With A Preview Image</p>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <div className="mx-4 my-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dictumst at imperdiet erat massa pulvinar. Odio et dolor enim
                fermentum risus. Neque felis nulla amet nec tellus tempus sit
                pellentesque. Massa est consectetur faucibus maecenas facilisi.
                Tristique commodo donec nullam habitant integer massa.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                risus senectus maecenas et morbi mauris vitae cursus lacus. Ac
                vulputate porta quis sed vel massa ut orci. Quis feugiat ut ac
                elementum ac placerat ut vitae. Id nulla turpis volutpat
                suspendisse sem etiam. Amet amet dolor adipiscing maecenas
                purus. Consectetur at nisi, felis ornare amet sed etiam congue
                ornare. Leo tellus, sem consequat magna egestas. Eu justo
                ultrices sollicitudin viverra a vel. Arcu vel lectus arcu quis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dictumst at imperdiet erat massa pulvinar. Odio et dolor enim
                fermentum risus. Neque felis nulla amet nec tellus tempus sit
                pellentesque. Massa est consectetur faucibus maecenas facilisi.
                Tristique commodo donec nullam habitant integer massa.
              </p>
            </div>
            <img
              src={BlogDetailsLogo}
              alt="BlogDetailsLogo"
              width="770"
              height="475"
              className="img-fluid"

            />
            <div className="mx-4 my-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                risus senectus maecenas et morbi mauris vitae cursus lacus. Ac
                vulputate porta quis sed vel massa ut orci. Quis feugiat ut ac
                elementum ac placerat ut vitae. Id nulla turpis volutpat
                suspendisse sem etiam. Amet amet dolor adipiscing maecenas
                purus. Consectetur at nisi, felis ornare amet sed etiam congue
                ornare. Leo tellus, sem consequat magna egestas. Eu justo
                ultrices sollicitudin viverra a vel. Arcu vel lectus arcu quis.
              </p>
            </div>
            <hr />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BlogDetails;
