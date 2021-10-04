import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col } from "react-bootstrap";
const Admission = () => {
  return (
    <div className="w-75 mx-auto mt-5 mb-5">
      <h3>Please fill up this form to join courses</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Enter your name" />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Training Time</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Regular</option>
              <option>Only Weekend</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Course</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Begginer</option>
              <option>Professional</option>
              <option>Acrobat</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="I accept all terms & conditions" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Admission;
