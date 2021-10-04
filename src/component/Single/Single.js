import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Single.css";
import pool from "../../images/pool.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Single = (props) => {
  const { service, duration, training_hour, fee, image } = props.service;

  let picture = image || pool;
  return (
    <div className="card">
      <div>
        <img className="image" src={picture} alt="" />
      </div>
      <div>
        <h3> {service}</h3>
        <h5>Course Duration: {duration}</h5>
        <h5>Training Hour: {training_hour}</h5>
        <h4> Course Fee: ${fee}</h4>
        <Link to="/admission">
          <Button variant="primary">Join Course</Button>
        </Link>
      </div>
    </div>
  );
};

export default Single;
