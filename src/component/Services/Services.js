import React from "react";
import Single from "../Single/Single";
import useData from "../useData/useData";
import "./Services.css";

const Services = () => {
  let services = useData();
  return (
    <div>
      <h1>Here is our services..</h1>
      <div className="grid">
        {services.map((s) => (
          <Single service={s}></Single>
        ))}
      </div>
    </div>
  );
};

export default Services;
