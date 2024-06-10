import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { addDays, format, differenceInCalendarDays, parseISO } from "date-fns";
import "./EnquiryForm.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaMapMarkerAlt,
  FaUsers,
  FaRegFutbol,
} from "react-icons/fa";

const EnquiryForm = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [groundName, setGroundName] = useState("");
  const [location, setLocation] = useState("");
  const [numUmpires, setNumUmpires] = useState("");
  const [matchFormat, setMatchFormat] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDates, setSelectedDates] = useState("");
  const [datesValid, setDatesValid] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date()),
      key: "selection",
    },
  ]);

  const handleSubmit = (event) => {
    return;
  };

  const handleShowDatePicker = () => {
    setShowDatePicker((prevShowDatePicker) => !prevShowDatePicker);
  };

  const handleDateChange = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    if (differenceInCalendarDays(endDate, startDate) <= 3) {
      setState([
        {
          ...state[0],
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          key: "selection",
        },
      ]);
      setSelectedDates(
        `${format(startDate, "MM/dd/yyyy")} - ${format(endDate, "MM/dd/yyyy")}`
      );
      setShowDatePicker(false);
    } else {
      alert("You can only select a range of up to 4 days.");
    }
  };


  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          {formSubmitted ? (
            <div className="p-5 rounded" style={{ backgroundColor: "#0a2e38", color: "#f9f9f9" }}>
              <h2 className="text-center mb-4">
                Thanks for submitting your response, We'll get back to you!
              </h2>
            </div>
          ) : (
            <Form
              onSubmit={handleSubmit}
              className="p-5 rounded"
              style={{ backgroundColor: "#0a2e38", color: "#f9f9f9" }}
            >
            <h2 className="text-center mb-4">
              Have an Enquiry or Requirement?
            </h2>
            <Form.Group controlId="role" className="mb-4">
              <Form.Label>
                <FaUser /> Your Role
              </Form.Label>
              <Form.Control
                as="select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select...</option>
                <option value="umpire">Umpire</option>
                <option value="organizer">Organizer</option>
              </Form.Control>
            </Form.Group>
            <hr />
            <Form.Group controlId="name" className="mb-4">
              <Form.Label>
                <FaUser /> Name
              </Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <hr />
            <Form.Group controlId="email" className="mb-4">
              <Form.Label>
                <FaEnvelope /> Email
              </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <hr />
            <Form.Group controlId="phoneNumber" className="mb-4">
              <Form.Label>
                <FaPhone /> Mobile Number
              </Form.Label>
              <Form.Control
                type="text"
                pattern="[6-9][0-9]{9}"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onBlur={(e) => {
                  if (!e.target.checkValidity()) {
                    e.target.setCustomValidity(
                      "Please enter a valid Mobile number. Should follow [6-9][0-9]{9}"
                    );
                  }
                }}
                onInput={(e) => e.target.setCustomValidity("")}
                required
              />
            </Form.Group>
            <hr />

            {role === "umpire" && (
              <Form.Group controlId="dates" className="mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <Form.Label>
                    <FaCalendar /> Interested Dates
                  </Form.Label>
                  <Button
                    variant="outline-light"
                    onClick={handleShowDatePicker}
                  >
                    {selectedDates ? selectedDates : "Select Dates"}
                  </Button>
                </div>
                {!datesValid && <div>Please select dates.</div>}
                {showDatePicker && (
                  <DateRangePicker
                    ranges={state}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    showSelectionPreview={false}
                    showMonthAndYearPickers={false}
                    staticRanges={[]}
                    inputRanges={[]}
                    moveRangeOnFirstSelection={false}
                  />
                )}
              </Form.Group>
            )}
            <hr />
            {role === "organizer" && (
              <>
                <Form.Group controlId="groundName" className="mb-4">
                  <Form.Label>
                    <FaRegFutbol /> Ground Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={groundName}
                    onChange={(e) => setGroundName(e.target.value)}
                    required
                  />
                </Form.Group>
                <hr />
                <Form.Group controlId="location" className="mb-4">
                  <Form.Label>
                    <FaMapMarkerAlt /> Location
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </Form.Group>
                <hr />
                <Form.Group controlId="numUmpires" className="mb-4">
                  <Form.Label>
                    <FaUsers /> Number of Umpires Required
                  </Form.Label>
                  <Form.Control
                    type="number"
                    value={numUmpires}
                    onChange={(e) => setNumUmpires(e.target.value)}
                    required
                  />
                </Form.Group>
                <hr />
                <Form.Group controlId="matchFormat" className="mb-4">
                  <Form.Label>
                    <FaRegFutbol /> Match Format
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={matchFormat}
                    onChange={(e) => setMatchFormat(e.target.value)}
                    required
                  />
                </Form.Group>
                <hr />
                <Form.Group controlId="dates" className="mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label>
                      <FaCalendar /> Interested Dates
                    </Form.Label>
                    <Button
                      variant="outline-light"
                      onClick={handleShowDatePicker}
                    >
                      {selectedDates ? selectedDates : "Select Dates"}
                    </Button>
                  </div>
                  {!datesValid && <div>Please select dates.</div>}
                  {showDatePicker && (
                    <DateRangePicker
                      ranges={state}
                      onChange={handleDateChange}
                      minDate={new Date()}
                      showSelectionPreview={false}
                      showMonthAndYearPickers={false}
                      staticRanges={[]}
                      inputRanges={[]}
                      moveRangeOnFirstSelection={false}
                    />
                  )}
                </Form.Group>
                <hr />
              </>
            )}
            <Button
              variant="outline-light"
              type="submit"
              className="mt-3 hero-button"
            >
              Submit Enquiry
            </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EnquiryForm;