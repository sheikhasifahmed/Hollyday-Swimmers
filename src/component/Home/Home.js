import React from "react";
import "./Home.css";
import photo from "../../images/headerPic.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import useData from "../useData/useData";
import Single from "../Single/Single";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  let services = useData();

  let fewS = services.slice(0, 4);

  return (
    <div style={{ position: "relative" }}>
      <div>
        <img className="pic" src={photo} alt="" />
      </div>
      <div className="phelps">
        <h1>
          "I wouldn't say anything is impossible. I think that everything is
          possible as long as you put your mind to it and put the work and time
          into it." <br /> <br /> ---Michael Phelps
        </h1>
      </div>
      <h2 className="serv">Our Services</h2>
      <div className="grid">
        {fewS.map((s) => (
          <Single service={s}></Single>
        ))}
      </div>
      <h3
        style={{
          textAlign: "center",
          marginRight: "30px",
          backgroundColor: "lightgray",
          marginBottom: "30px",
        }}
      >
        <Link to="/services">Click Here</Link> to see all services
      </h3>
    </div>
  );
};

export default Home;
