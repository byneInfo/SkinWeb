import React, { useEffect, useState } from "react";
import { Row, Container, Col, Card, ListGroup } from "react-bootstrap";
import BlogsLogo from "../Images/blogs-logo.png";
import Blog from "../Images/blog.png";
import Bloger from "../Images/bloger.png";
import { NavLink } from "react-router-dom";
import { api } from '../../config'
 
function Blogs() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const getBlogs = () => {
      api
        .get('/blogs')
        .then(response => setBlogs(response.data.data.docs))
        .catch(error => console.log(error.response.data.message))
    }

    getBlogs()
  }, [])

  return (
    <>
      <Container style={{marginTop:'120px'}}>
        <Row>
          <Col /*lg={5}*/>
            <div className="page-title">
              <p className="title">Blog</p>
              <h1 className="heading">Our Gallery</h1>
            </div>
          </Col>
          {/* <Col lg={7}>
            <div className="page-title">
              <img src={BlogsLogo} alt="BlogsLogo" className='img-fluid' />
            </div>
          </Col> */}
        </Row>
        <Row>
          <Col>
            <Row /*className="g-4"*/>
              {blogs.map(blog => (
                <Col key={blog._id} lg={4}>
                  <Card style={{boxShadow: "0px 23px 53px rgba(0, 0, 0, 0.12)",marginBottom:"1rem"}}>
                    <Card.Img variant="top" src={`https://skin-sepia.herokuapp.com${blog.thumbnail}`} className="rounded" />
                    <NavLink to="/blogs/blog-details"> <Card.Body style={{color:'#000'}}>
                      <Card.Title classNam="form-label" >
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
                    </Card.Body></NavLink >
                  </Card> 
                </Col>
              ))}
            </Row>
          </Col>
          {/* <Col lg={4}>
            <Card>
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
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default Blogs;
