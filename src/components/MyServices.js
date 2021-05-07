import React from "react";
import Service from "./Service";
const MyServices = () => {
  return (
    <section class="services-section" id="services">
      <h1>My services</h1>
      <div class="my-services">
        <Service />
        <Service />
        <Service />
      </div>
    </section>
  );
};

export default MyServices;
