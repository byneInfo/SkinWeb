import React, { useEffect, useState } from 'react'
import { Row, Container, Col } from "react-bootstrap";
import { api } from '../../config'

const Gallery = () => {

  const [images, setImages] = useState([])

  useEffect(() => {
    const getImages = () => {
      api
        .get('images')
        .then(response => setImages(response.data.data.images))
        .catch(error => console.log(error.response.data.message))
    }

    getImages()
  }, [])

  return (
    <>
      <section style={{ padding: '30px', marginTop: '100px' }} >
        <br />
        <br />
        <p className="title">Gallery </p>
        <h1 className="heading">Our Gallery</h1>

        <br />
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            {
              images.map(image => (
                <img
                  key={image._id}
                  src={`https://skin-sepia.herokuapp.com${image.url}`}
                  alt={image.mimetype}
                  className="w-100 shadow-1-strong rounded mb-4"
                />
              ))
            }
          </div>

          {/* <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />

            <img
              src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />

            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />

            <img
              src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Gallery
