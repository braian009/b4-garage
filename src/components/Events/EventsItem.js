import styled from "styled-components";

const EventsItem = ({ index, event, isActive, onChangeEvent }) => {
  return (
    <EventsItemContainer>
      <div className={`events-item__date ${isActive ? "active" : ""}`}>
        <div className="date__month">{event.date.month}</div>
        <div className="date__day">{event.date.day}</div>
      </div>
      <div className="events-item__info">
        <h4
          className={`${isActive ? "active" : ""}`}
          onClick={() => onChangeEvent(index)}
        >
          {event.name}
        </h4>
        <p>{event.description}</p>
      </div>
    </EventsItemContainer>
  );
};

const EventsItemContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 5em 1fr;
  grid-auto-rows: 1fr;
  gap: 1em;

  width: 100%;
  max-width: 820px;
  padding: 0;

  .events-item__date {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 4.5em;
    height: 4.5em;

    grid-column: 1 / 2;
    grid-row: span 1;

    color: var(--black-primary);
    background-color: var(--white-secondary);
    border-radius: 50%;

    transition: all 0.3s ease-out;

    &.active {
      border: 2px solid var(--palid-orange);
    }

    .date__month {
      font-size: 0.9rem;

      text-align: center;
      font-weight: bold;
      font-style: italic;

      line-height: 0.9;
    }

    .date__day {
      font-size: 2.7rem;

      text-align: center;
      font-weight: bolder;
      font-style: italic;

      line-height: 0.8;
    }
  }

  .events-item__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5em;

    grid-column: 2 / 3;
    grid-row: span 1;

    h4 {
      max-width: 7em;

      transition: all 0.3s ease-out;
      cursor: pointer;

      &.active {
        color: var(--palid-orange);
      }
    }

    p {
      line-height: 1;
      font-size: 0.9rem;
      color: var(--dark-white);
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
    }
  }
`;

export default EventsItem;
