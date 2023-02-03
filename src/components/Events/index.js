import * as React from "react";
import styled from "styled-components";
import EventsBackground from "../../assets/images/pagebackground7.jpg";

const eventList = [
  {
    name: "Drift & Slide",
    description:
      "A day-long event where drivers compete in drifting and sliding competitions, showcasing their car control skills and high-performance vehicles.",
      image: require('../../assets/images/event1.jpg'),
    date: {
      day: "21",
      month: "Jul",
    },
  },
  {
    name: "Race for a Cause",
    description:
      "A rally event to raise money for a local charity, with participants driving modified vehicles on a scenic route, raising awareness and funds for a good cause.",
      image: require('../../assets/images/event2.jpg'),

    date: {
      day: "9",
      month: "Aug",
    },
  },
  {
    name: "Scenic Convoy",
    description:
      "A convoy event where participants drive a procession of vehicles on a scenic route, showcasing modified vehicles and enjoying a scenic drive together.",
      image: require('../../assets/images/event3.jpg'),

    date: {
      day: "27",
      month: "Aug",
    },
  },
  {
    name: "Cruise Night",
    description:
      "A night-time event where drivers can show off their modified vehicles and cruise together, with music, food, and a display of some of the area's best cars.",
      image: require('../../assets/images/event4.jpg'),

    date: {
      day: "4",
      month: "Sep",
    },
  },
];

const Events = () => {

  const [currentEvent, setCurrentEvent] = React.useState(eventList[0]);
  return (
    <EventsContainer>
      <div className="events-inner" style={{ backgroundImage: `url(${currentEvent.image})` }}>
        <div className="events-overlay"></div>
        <h2 className="events-title">Next Events</h2>
        <div className="events-list">
          {eventList.map((event, i) => {
            return (
              <div className="events-item">
                <div className="events-item__date">
                  <div className="date__month">{event.date.month}</div>
                  <div className="date__day">{event.date.day}</div>
                </div>
                <div className="events-item__info">
                  <h4 className={`${event === currentEvent ? "active" : ""}`} onClick={() => setCurrentEvent(event)}>{event.name} </h4>
                  <p>{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 2em 90%;
    padding: 2.5em 2.5em;

      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

    position: relative;

    @media (min-width: 50em) {
      padding: 2.5em 4.5em;
    }

    .events-overlay {


      /* display: none; */
      background-image: linear-gradient(
        to right,
        hsla(0, 0%, 0%, 1),
        hsla(0, 0%, 0%, 1),
        hsla(0, 0%, 0%, 0.9),
        hsla(0, 0%, 0%, 0.8),
        hsla(0, 0%, 0%, 0.7),
        hsla(0, 0%, 0%, 0.6),
        hsla(0, 0%, 0%, 0.3),
        hsla(0, 0%, 0%, 0)
      );
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .events-list {
      width: 100%;
      height: 80%;
      align-self: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      /* padding: 0 1.5em; */
      position: relative;
      z-index: 10;

      @media (min-width: 40em) {
        align-items: flex-start;
        max-width: 80%;
      }

      @media (min-width: 55em) {
        align-items: flex-start;
        max-width: 60%;
      }

      .events-item {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 4fr;
        grid-template-rows: 1fr;

        .events-item__date {
          width: 4.5em;
          height: 4.5em;
          padding: 0.5em;
          grid-column: 1 / 2;
          grid-row: span 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: black;
          border-radius: 50%;
          background-color: var(--white-primary);

          .date__month {
            text-align: center;
            font-size: 0.9rem;
            font-weight: bold;
            font-style: italic;
            line-height: 0.9;
          }

          .date__day {
            text-align: center;
            font-style: italic;
            font-weight: bolder;
            font-size: 2.7rem;
            line-height: 0.8;
          }
        }

        .events-item__info {
          grid-column: 2 / 3;
          grid-row: span 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 1.5em;

          h4 {
            padding-left: 0.5em;
            margin-bottom: 0.5em;
            cursor: pointer;

            &.active {
              color: var(--orange-primary);
            }
          }

          p {
            line-height: 1;
            font-size: 0.8rem;
            color: var(--white-secondary);
            padding-left: 0.75em;
          }
        }
      }

      @media (min-width: 40em) {
        justify-self: start;
      }
    }

    @media (min-width: 40em) {
      background-image: url(${EventsBackground});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      .events-overlay {
        display: block;
      }
    }

    .events-title {
      color: var(--white-primary);
      position: relative;
    }
  }
`;

export default Events;
