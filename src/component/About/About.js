import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h3>Location</h3>
      <p>
        Our Academy is located at the heart of the city in City Square. So the
        communication with the academy anywhere of the city is very good.
        <br />
        You can find the academy on the google map. here is the link of{" "}
        <a href="https://www.google.com/maps">google map</a> of the academy
        location.
      </p>
      <h3>Infrastructure</h3>
      <p>
        Our Academy has it's own infrastructure. A level 5 building with 5000
        squre feet in each floore. 3 pool situated respectively 1st, 2nd and top
        floor. 2nd floor pool is a world class pool for with all fecility for
        competitive events.
      </p>
      <h3>Services</h3>
      <p>
        Our Academy is a complete institute of learning swimming from begginer
        to professional level. Current students as well students who
        successfully complete the program can practice in the pool at the
        off-schedule hours.
        <br />
        To check all our services <Link to="/services">click here</Link>
      </p>
      <h3>History</h3>
      <p>
        This Academy established in 2005 with just one pool in the open air. But
        our promising contribution as well as service and also the support of
        our clients we have come so far.
      </p>
      <h3>Trainer & Executive Body</h3>
      <p>
        Academy Chairman Mr. Khan is a reknown person in the city. Present time,
        The Academy has 10 regular and 15 guest trainer. All of them comes of
        the best trainers of the town. There are also 15 executive works in the
        Academy.
      </p>
    </div>
  );
};

export default About;
