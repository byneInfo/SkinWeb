import React from "react";
import { NavLink } from "react-router-dom";

import Slider from "react-slick";
import {
  Row,
  Container,
  Col,
  Card,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import Banner from "../Images/banner-img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TreatImg1 from "../Images/treat1.png";
import TreatImg2 from "../Images/treat2.png";
import TreatImg3 from "../Images/treat3.png";
import TreatImg4 from "../Images/treat4.png";
import TreatImg5 from "../Images/treat5.png";
import UserImg from "../Images/user-image.png";
import Blog from "../Images/blog.png";
import Doctor from "../Images/doctor.png";
// import "./home.css";



function Home() {
  const settings = {
    dots: true,
    fade: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <>
      <Slider {...settings} style={{ marginTop: '100px' }}>
        <div className="silderImg" >
          <img src={Banner} alt="Banner" className="img-fluid w-100" />
          <div className="sliderTxt">
            <h4 style={{ color: '#FFE484' }}>Skin square 1</h4>
            <h1 style={{}}>We offer more <br /><span style={{ color: '#000', background: '#FFE484' }}> possibilities</span> to meet <br />
              your every need  </h1>
          </div>
        </div>
        <div>
          <img src={Banner} alt="Banner" className="img-fluid w-100" />
          <div className="sliderTxt">
            <h4 style={{ color: '#FFE484' }}>Skin square 2</h4>
            <h1 style={{}}>We offer more <br /><span style={{ color: '#000', background: '#FFE484' }}> possibilities</span> to meet <br />
              your every need  </h1>
          </div>
        </div>
        <div>
          <img src={Banner} alt="Banner" className="img-fluid w-100" />
          <div className="sliderTxt">
            <h4 style={{ color: '#FFE484' }}>Skin square 3</h4>
            <h1 style={{}}>We offer more <br /><span style={{ color: '#000', background: '#FFE484' }}> possibilities</span> to meet <br />
              your every need  </h1>
          </div>
        </div>
      </Slider>
      <br />
      <section id="treatments">
        <p className="text-center">
          <b>---Treatments---</b>
        </p>
        <h3 className="text-center">Our Popular Treatments</h3>
        <div className="treatMentCard">
          <div className='tcrow '>
            <img src={TreatImg1} alt="treatment" className="tcardImg img-fluid" />
            <div class="overlay">
              <h4>Anti Ageing Therapies</h4> </div>
          </div>
          <div className='tcrow '>
            <img src={TreatImg5} alt="treatment" className="tcardImg img-fluid" />
            <div class="overlay">
              <h4>Anti Ageing Therapies</h4> </div>
          </div>
          <div className='tcrow '>
            <img src={TreatImg2} alt="treatment" className="tcardImg img-fluid" />
            <div class="overlay">
              <h4>Anti Ageing Therapies</h4>  </div>
          </div>
          </div> 
          <div className="treatMentCard">

          <div className='tcrow '>
            <img src={TreatImg3} alt="treatment" className="tcardImg img-fluid" />
            <div class="overlay">
              <h4>Anti Ageing Therapies</h4>  </div>
          </div>
          <div className='tcrow '>
            <img src={TreatImg4} alt="treatment" className="tcardImg img-fluid" />
            <div class="overlay">
              <h4>Anti Ageing Therapies</h4>  </div>
          </div>
          <div className='tcrow '>
            <img src={TreatImg5} alt="treatment" className="tcardImg img-fluid" />
            <div class="overlay">
              <h4>Anti Ageing Therapies</h4> </div>
          </div> 
        </div>
      </section><br /><br /><br />
      {/* about us  */}
      <section className='aboutUs'  >
        <br />
        <div className='aboutContainer'>
          <div className='aboutText'>
            <h4>About Us</h4>
            <h1>Meet the clinical dermatology & cosmetic dermatology  specialist</h1>
            <br /><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis arcu in tincidunt sed imperdiet etiam fames. Tincidunt augue risus mattis eget sem habitant id ultrices augue. Sit rhoncus .</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis arcu in tincidunt sed imperdiet etiam fames. Tincidunt augue risus mattis eget sem habitant id ultrices augue. Sit rhoncus .</p>
            <NavLink to="/about" className="nav-link" activeClassName="active"> <h5 style={{ color: '#000' }}>Read More</h5></NavLink>
          </div>
        </div>
      </section>

      {/* about us end  */}
     
      {/* our team  */}
      <section id='ourTeam'>
        <p className="text-center">
          <b>---Our Team---</b>
        </p>
        <h3 className="text-center">We Have Some Awsome People</h3>
        <br /><br />
        <div className="teamRow">
          <div >
            <img
              src={Doctor}
              alt="Doctor"
              className="team-img img-fluid"
            />
          </div>
          <Col lg={6}>
            <div className="h-100 d-inline-block d-flex flex-column justify-content-center p-5">
              <h5>Wade Warren</h5>
              <small className="text-muted">Doctor</small>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque non hendrerit convallis mattis pharetra, sed
                facilisi. Nulla facilisis viverra leo egestas hendrerit
                urna.
              </p>
            </div>
          </Col>
        </div>
        <div className="teamRow" style={{ flexWrap: 'wrap-reverse' }}>

          <Col lg={6}>
            <div className="h-100 d-inline-block d-flex flex-column justify-content-center p-5">
              <h5>Wade Warren</h5>
              <small className="text-muted">Doctor</small>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque non hendrerit convallis mattis pharetra, sed
                facilisi. Nulla facilisis viverra leo egestas hendrerit
                urna.
              </p>
            </div>
          </Col>
          <div >
            <img
              src={Doctor}
              alt="Doctor"
              className="team-img img-fluid"
            />
          </div>
        </div>
        <div className="teamRow">
          <div >
            <img
              src={Doctor}
              alt="Doctor"
              className="team-img img-fluid"
            />
          </div>
          <Col lg={6}>
            <div className="h-100 d-inline-block d-flex flex-column justify-content-center p-5">
              <h5>Wade Warren</h5>
              <small className="text-muted">Doctor</small>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque non hendrerit convallis mattis pharetra, sed
                facilisi. Nulla facilisis viverra leo egestas hendrerit
                urna.
              </p>
            </div>
          </Col>
        </div>

      </section>

      {/*end of our team  */}

      {/* contact map   */}



      {/*end of  contact map   */}

      <div className="my-5">
        <p className="text-center">
          <b>---Contact Us---</b>
        </p>
        <h3 className="text-center">Feel Free To Contact With Us</h3>
        <div className="contact-div mt-5">
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.45446938823!2d75.72376397472755!3d22.72391173166939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1631338520599!5m2!1sen!2sin" allowfullscreen="" loading="lazy" className='map'></iframe>
          </div>
          <Card className="contanctForm">
            <h1 style={{ margin: '50px 50px -40px 50px' }}>Get In Touch</h1>

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

          </Card>

        </div>
      </div>
      <Container>
        <div className="mt-5 mb-5">
          <p className="text-center">
            <b>---Testimonials---</b>
          </p>
          <h3 className="text-center">What People Say About Us!</h3>
          <br /> <br />
          <div className="my-5 mx-5">
            <Row className="g-5">
              {Array.from({ length: 2 }).map((_, idx) => (
                <Col lg={6} md={6}>
                  <Card className="position-relative border border-light">
                    <Card.Img
                      variant="top"
                      src={UserImg}
                      className="user-img"
                    />
                    <Card.Body style={{ boxShadow: " 0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)" }}>
                      <Card.Text className="p-3" >
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Leo a sem sed nibh netus morbi auctor nam
                        suscipit. Nisl, id ut eget nullam.”
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
        </div>
        <div className="mt-5 mb-5">
          <p className="text-center">
            <b>---Our Blog---</b>
          </p>
          <h3 className="text-center">Every Signel Update From Here</h3>
          <Row className="my-3 g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col lg={4}>
                <Card style={{ boxShadow: "0px 23px 53px rgba(0, 0, 0, 0.12)" }}>
                  <Card.Img variant="top" src={Blog} className="rounded" />
                  <NavLink to="/blogs" className="nav-link" activeClassName="active">   <Card.Body style={{ color: '#000' }}>
                    <Card.Title classNam="form-label">
                      Questions every man wants to ask a dermatologist
                    </Card.Title>
                    <Card.Text className="mt-3">
                      <small>
                        <i class="fas fa-stopwatch"></i> January 25, 2021
                      </small>
                      &nbsp;&nbsp;
                      <small>
                        <i class="far fa-user"></i> Cristofer Westervelt
                      </small>
                    </Card.Text>
                  </Card.Body></NavLink>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Home;
