import * as React from "react";
import styled from "styled-components";

const Events = () => {
  return (
    <EventsContainer>
      <div className="events-inner"></div>
    </EventsContainer>
  );
};

const EventsContainer = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #13131a;

  .events-inner {
    width: 100%;
    height: 100%;


  }
`;

export default Events;
