import styled from 'styled-components';

const EventsContainer = styled.section`
  height: 100vh;
  width: 100%;

  background-color: var(--dark-blue);
  border-bottom: 2px solid var(--palid-orange);

  .events-inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1em auto;
    gap: 3em;
    place-items: center;
    justify-content: center;
    align-content: center;

    width: 100%;
    height: 100%;
    
    padding: 0 1.5em;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    position: relative;

    @media (min-width: 35em) {
      padding: 0 3.5em;
      gap: 2em;

    }

    @media (min-width: 55em) {
      padding: 0 5.5em;
    }

    .events-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      background-image: linear-gradient(
        to right,
        hsla(0, 0%, 0%, 1),
        hsla(0, 0%, 0%, 1),
        hsla(0, 0%, 0%, 0.9),
        hsla(0, 0%, 0%, 0.8),
        hsla(0, 0%, 0%, 0.7),
        hsla(0, 0%, 0%, 0.6),
        hsla(0, 0%, 0%, 0.4)
      );
    }

    .events-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      gap: 2.5em;

      width: 100%;
    
      position: relative;
      z-index: 10;

      @media (min-width: 35em) {
        max-width: 90%;
        justify-self: start;
        gap: 1.5em;
      }


    }

    .events-title {
      color: var(--white-primary);

      justify-self: start;
      position: relative;
    }
  }
`;

export default EventsContainer;