import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./home.css";
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
// import Doctor from "../Images/doctor.png";
import Atul from "../Images/atul.png";
import Anshu from "../Images/anshu.png";
import Seujee from "../Images/seujee.png";
// import "./home.css";
import { api } from '../../config'

function Home() {

  const [treatments, setTreatments] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [blogs, setBlogs] = useState([])

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

  useEffect(() => {
    getTreatments()
    getTestimonials()
    getBlogs()
  }, [])

  const getTreatments = () => {
    api
      .get('/treatments')
      .then(response => setTreatments(response.data.data.treatments))
      .catch(error => console.log(error.response.data.message))
  }

  const getTestimonials = () => {
    api
      .get('/testimonials')
      .then(response => setTestimonials(response.data.data.testimonials))
      .catch(error => console.log(error.response.data.message))
  }

  const getBlogs = () => {
    api
      .get('/blogs')
      .then(response => setBlogs(response.data.data.docs))
      .catch(error => console.log(error.response.data.message))
  }

  return (
    <>
      <Slider {...settings} style={{ marginTop: "100px" }}>
        <div className="silderImg">
          <img src={Banner} alt="Banner" className="img-fluid w-100" />
          <div className="sliderTxt">
            <h4 style={{ color: "#FFE484" }}>Skin square 1</h4>
            <h1 style={{}}>
              We offer more <br />
              <span style={{ color: "#000", background: "#FFE484" }}>
                {" "}
                possibilities
              </span>{" "}
              to meet <br />
              your every need{" "}
            </h1>
          </div>
        </div>
        <div>
          <img src={Banner} alt="Banner" className="img-fluid w-100" />
          <div className="sliderTxt">
            <h4 style={{ color: "#FFE484" }}>Skin square 2</h4>
            <h1 style={{}}>
              We offer more <br />
              <span style={{ color: "#000", background: "#FFE484" }}>
                {" "}
                possibilities
              </span>{" "}
              to meet <br />
              your every need{" "}
            </h1>
          </div>
        </div>
        <div>
          <img src={Banner} alt="Banner" className="img-fluid w-100" />
          <div className="sliderTxt">
            <h4 style={{ color: "#FFE484" }}>Skin square 3</h4>
            <h1 style={{}}>
              We offer more <br />
              <span style={{ color: "#000", background: "#FFE484" }}>
                {" "}
                possibilities
              </span>{" "}
              to meet <br />
              your every need{" "}
            </h1>
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
          {
            treatments.map(treatment => (
              <div key={treatment._id} className="tcrow">
                <img
                  src={`https://skin-sepia.herokuapp.com${treatment.imageUrl}`}
                  alt={treatment.altText}
                  className="tcardImg img-fluid"
                />
                <div class="overlay">
                  <h4>{treatment.title}</h4>{" "}
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <br />
      <br />
      <br />
      {/* about us  */}
      <section className="aboutUs">
        <br />
        <div className="aboutContainer">
          <div className="aboutText">
            <h4>About Us</h4>
            <h1>
              Meet the clinical dermatology & cosmetic dermatology specialist
            </h1>
            <br />
            <br />
            <p>
              Skin Square clinic is a state-of-the-art Dermatology, Aesthetics
              and Hair Transplantation clinic in Guwahati, Assam bringing
              advanced skin care to the entire North- East India.
            </p>
            <br />
            <p>
              Skin Square pioneers in providing high quality evidence-based
              dermatology care, by board certified dermatologists and takes
              great pride in full filling educational, research and community
              service missions with excellence.
            </p>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              {" "}
              <h5 style={{ color: "#000" }}>Read More</h5>
            </NavLink>
          </div>
        </div>
      </section>

      {/* about us end  */}

      {/* our team  */}
      <section id="ourTeam">
        <p className="text-center">
          <b>---Our Team---</b>
        </p>
        <h3 className="text-center">We Have Some Awsome People</h3>
        <br />
        <br />
        <div className="teamRow">
          <div className="doctorImg">
            <img src={Atul} alt="Doctor" className="team-img img-fluid" />
          </div>
          <Col lg={6}>
            <div className="h-100 d-inline-block d-flex flex-column justify-content-center p-5">
              <h5>Dr. Atul Bothra</h5>
              <small className="text-muted">
                Chief Dermatologist and Hair Transplant Surgeon
              </small>
              <p className="mt-3">
                certified Dermatologist and Dermatosurgeon practicing in
                Guwahati (and previously Bangalore). Completed MBBS and MD
                (Dermatology, Venereology and Leprosy) from Gauhati Medical
                College, Guwahati, Assam.
              </p>
            </div>
          </Col>
        </div>
        <div className="teamRow" style={{ flexWrap: "wrap-reverse" }}>
          <Col lg={6}>
            <div className="h-100 d-inline-block d-flex flex-column justify-content-center p-5">
              <h5>Dr. Anshu Maheswari</h5>
              <small className="text-muted">
                Lead Dermatologist and Aesthetic Physician
              </small>
              <p className="mt-3">
                Vast knowledge and experience with various dermatological
                procedures including botox , fillers and thread lifts ,
                electrocautery and radiofrequency ablation.
              </p>
            </div>
          </Col>
          <div className="doctorImgRight">
            <img src={Anshu} alt="Doctor" className="team-img img-fluid" />
          </div>
        </div>
        <div className="teamRow">
          <div className="doctorImg">
            <img src={Seujee} alt="Doctor" className="team-img img-fluid" />
          </div>
          <Col lg={6}>
            <div className="h-100 d-inline-block d-flex flex-column justify-content-center p-5">
              <h5>Dr. Seujee Das</h5>
              <small className="text-muted">
                Visiting Clinical Dermatologist
              </small>
              <p className="mt-3">
                Vast knowledge and experience with various dermatological
                disorders including psoriasis and papulosquamous disorders,
                autoimmune disorders, cutaneous infections, trichology,
                connective tissue disorders etc.
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
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.45446938823!2d75.72376397472755!3d22.72391173166939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1631338520599!5m2!1sen!2sin" allowfullscreen="" loading="lazy" className='map'></iframe> */}
            <iframe src="https://maps.google.com/maps?q=Dd%20tower%20,mahtma%20Gandhi%20path,ganeshguri%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowfullscreen="" loading="lazy" className='map'></iframe>
          </div>
          <Card className="contanctForm">
            <h1 style={{ margin: "50px 50px -40px 50px" }}>Get In Touch</h1>

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
              {testimonials.map(testimonial => (
                <Col key={testimonial._id} lg={6} md={6}>
                  <Card className="position-relative border border-light">
                    <Card.Img
                      variant="top"
                      src={`https://skin-sepia.herokuapp.com${testimonial.imageUrl}`}
                      className="user-img"
                    />
                    <Card.Body style={{ boxShadow: " 0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)" }}>
                      <Card.Text className="p-3" >
                        “{testimonial.comment}”
                        <div className="mt-3">
                          <b>{testimonial.name}</b>
                          <br />
                          <small>{testimonial.location}</small>
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
            {blogs.map(blog => (
              <Col key={blog._id} lg={4}>
                <Card
                  style={{ boxShadow: "0px 23px 53px rgba(0, 0, 0, 0.12)" }}
                >
                  <Card.Img variant="top" src={`https://skin-sepia.herokuapp.com${blog.thumbnail}`} className="rounded" />
                  <NavLink
                    to="/blogs"
                    className="nav-link"
                    activeClassName="active"
                  >
                    {" "}
                    <Card.Body style={{ color: "#000" }}>
                      <Card.Title classNam="form-label">
                        {blog.title}
                      </Card.Title>
                      <Card.Text className="mt-3">
                        <small>
                          <i class="fas fa-stopwatch"></i> {new Date(blog.createdAt).toLocaleDateString()}
                        </small>
                        &nbsp;&nbsp;
                        <small>
                          <i class="far fa-user"></i> {blog.user.name}
                        </small>
                      </Card.Text>
                    </Card.Body>
                  </NavLink>
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
