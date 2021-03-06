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

          backgroundColor: "lightskyblue",
          margin: "30px",
          padding: "10px",
        }}
      >
        -- Our Services --
      </h2>
      <div className="grid">
        {services.map((s) => (
          <Single key={s.course_id} service={s}></Single>
        ))}
      </div>
    </div>
  );
};

export default Services;
