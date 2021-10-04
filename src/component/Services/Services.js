import React from "react";
import Single from "../Single/Single";
import "bootstrap/dist/css/bootstrap.min.css";
import useData from "../useData/useData";
import "./Services.css";

const Services = () => {
  let services = useData();
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          backgroundColor: "lightpink",
          margin: "30px",
        }}
      >
        Here is our services
      </h2>
      <div className="grid">
        {services.map((s) => (
          <Single service={s}></Single>
        ))}
      </div>
    </div>
  );
};

export default Services;
