import * as React from "react";

import ServicesContainer from "./ServicesContainer";
import ServicesItem from "./ServicesItem";

import { servicesList } from "./servicesList";


const Services = () => {
  return (
    <ServicesContainer id="services">
      <div className="services-inner">
        {servicesList.map((service, i) => {
          return (
            <ServicesItem
              key={`service-${i}`}
              serviceTitle={service.title}
              bg={service.image}
              serviceList={service.services}
            />
          );
        })}
      </div>
    </ServicesContainer>
  );
};


export default Services;
