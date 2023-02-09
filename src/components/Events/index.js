import * as React from "react";

import EventsContainer from "./EventsContainer";
import EventsItem from "./EventsItem";

import { eventList } from "./eventsList";

const Events = () => {
  const [currentEvent, setCurrentEvent] = React.useState(eventList[0]);

  const handleCurrentEvent = (index) => {
    setCurrentEvent(eventList[index]);
  }

  return (
    <EventsContainer id="events">
      <div
        className="events-inner"
        style={{ backgroundImage: `url(${currentEvent.image})` }}
      >
        <div className="events-overlay"></div>
        <h2 className="events-title">Next Events</h2>
        <div className="events-list">
          {eventList.map((event, i) => {
            return <EventsItem key={`event-${i}`} event={event} index={i} isActive={currentEvent === event ? true : false} onChangeEvent={handleCurrentEvent} />;
          })}
        </div>
      </div>
    </EventsContainer>
  );
};


export default Events;
