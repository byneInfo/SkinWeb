import React, { useState } from "react";
import { Row, Container, Col, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from "axios";
import { AppConfig } from "../../config";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";

function Appointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [doctor, setDoctor] = useState("");
  const [problem, setProblem] = useState("");
  const [problem_type, setProblemType] = useState("");
  const [time_slot, setTimeSlot] = useState("");
  const [date, setDate] = useState(new Date());
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  const onBookAppointment = async () => {
    try {
      let data = {
        name,
        email,
        phone,
        age,
        problem,
        problem_type,
        doctor,
        date,
        time_slot,
      };
      let res = await axios.post(
        AppConfig.API_ENDPOINT + "/appointment/add-appointment",
        data
      );
      if (res && res.data && res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPhone("");
        setAge("");
        setProblem("");
        setProblemType("");
        setDoctor("");
        setDate(new Date());
        setTimeSlot("");
        return true;
      } else {
        toast.error("Something went wrong please try after some time.");
        return false;
      }
    } catch (error) {
      console.log("Book appointment error ", error);
    }
  };

  const onChange = (data) => {
    const { name, value } = data;
    if (isNaN(value)) return;
    else name === "age" ? setAge(value) : setPhone(value);
    return true;
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0;
  };

  return (
    <>
      <Container style={{marginTop:'150px'}}>
        <div className="page-title">
          <p className="title">Appointment</p>
          <h1 className="heading">Make an Appointment </h1>
        </div><br/>
        <div className="m-3 mt-5 apointment" >
          <Row >
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Choose Doctor</Form.Label>
                <Form.Select
                  aria-label="Select Doctor"
                  size="lg"
                  value={doctor}
                  onChange={({ target }) => setDoctor(target.value)}
                >
                  <option>Select Doctor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Choose Problem</Form.Label>
                <Form.Select
                  aria-label="Select Problem"
                  size="lg"
                  value={problem_type}
                  onChange={({ target }) => setProblemType(target.value)}
                >
                  <option>Select Problem</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Choose Date and Time</Form.Label>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  filterDate={isWeekday}
                  minDate={new Date()}
                  inline
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>
                  Available Slots on {moment(date).format("DD MMMM YYYY")}
                </Form.Label>
                <Row>
                  <Col lg={4}>
                    <Button
                      variant="light"
                      onClick={() => setTimeSlot("09:00 AM")}
                      className={`mb-3 border ${
                        time_slot === "09:00 AM" ? "active-timeslot" : null
                      }`}
                    >
                      09:00 AM
                    </Button>
                  </Col>
                  <Col lg={4}>
                    <Button
                      variant="light"
                      onClick={() => setTimeSlot("10:00 AM")}
                      className={`mb-3 border ${
                        time_slot === "10:00 AM" ? "active-timeslot" : null
                      }`}
                    >
                      10:00 AM
                    </Button>
                  </Col>
                  <Col lg={4}>
                    <Button
                      variant="light"
                      onClick={() => setTimeSlot("12:00 PM")}
                      className={`mb-3 border ${
                        time_slot === "12:00 PM" ? "active-timeslot" : null
                      }`}
                    >
                      12:00 PM
                    </Button>
                  </Col>
                  <Col lg={4}>
                    <Button
                      variant="light"
                      onClick={() => setTimeSlot("03:00 PM")}
                      className={`mb-3 border ${
                        time_slot === "03:00 PM" ? "active-timeslot" : null
                      }`}
                    >
                      03:00 PM
                    </Button>
                  </Col>
                  <Col lg={4}>
                    <Button
                      variant="light"
                      className={`mb-3 border ${
                        time_slot === "04:00 PM" ? "active-timeslot" : null
                      }`}
                      onClick={() => setTimeSlot("04:00 PM")}
                    >
                      04:00 PM
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
          <h3 className="mb-5">Personal Information</h3>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  size="lg"
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                  maxLength={100}
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  size="lg"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  maxLength={100}
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Phone Number"
                  size="lg"
                  name="phone"
                  value={phone}
                  onChange={({ target }) => onChange(target)}
                  maxLength={10}
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Age"
                  size="lg"
                  name="age"
                  value={age}
                  onChange={({ target }) => onChange(target)}
                  maxLength={3}
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5 w-75">
                <Form.Label>Write Your Problem</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write Your Problem"
                  value={problem}
                  onChange={({ target }) => setProblem(target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            className="appointBtn mt-3 mb-5 pt-2 pb-2"
            onClick={() => onBookAppointment()}
          >
            Book Appointment
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Appointment;
