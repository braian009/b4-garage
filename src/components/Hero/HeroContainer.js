import styled from "styled-components";

const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;

  position: relative;

  background-image: url(${props => props.bgimage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-bottom: 2px solid var(--palid-orange);

  .hero-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 5;

    background-image: linear-gradient(
      -45deg,
      rgba(19, 19, 26, 0.7) 0%,
      rgba(19, 19, 26, 0.7) 42%,
      rgba(19, 19, 26, 0.88) 42%,
      rgba(19, 19, 26, 0.88) 43%,
      rgba(19, 19, 26, 0.86) 43%,
      rgba(19, 19, 26, 0.86) 44%,
      rgba(19, 19, 26, 0.89) 44%,
      rgba(19, 19, 26, 0.89) 45%,
      rgba(19, 19, 26, 0.86) 45%,
      rgba(19, 19, 26, 0.86) 46%,
      rgba(19, 19, 26, 0.9) 46%,
      rgba(19, 19, 26, 0.9) 100%
    );
  }

  .hero-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr 2fr;
    place-items: center;

    height: calc(100% - (85px - 3em));
    width: 100%;
    max-width: 1080px;
    padding: 2em 0 0;
    padding-top: calc(85px + 3em);
    margin: 0 auto;

    position: relative;
    z-index: 10;

    .hero-link {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5em;

      width: 100%;

      justify-self: start;
      grid-column: span 3;
      grid-row: 2 / 3;

      @keyframes color-change {
        0% {
        color: var(--white-secondary);

        }
        50% {
        color: var(--palid-orange);

        }
        100% {
        color: var(--white-secondary);

        }
      }

      a {
        font-size: 1.1rem;
        color: var(--white-secondary);
        transition: all 0.2s ease-out;
        animation: color-change 2s ease-out infinite;

        &:hover {
          color: var(--palid-orange);
        }
        
      }

      svg {
        stroke: var(--palid-orange);
      }
    }

    .hero-socials {
      display: flex;
      justify-content: center;
      gap: 1em;

      justify-self: end;
      align-self: end;
      grid-column: 3 / 5;
      grid-row: 3 / 4;

      padding: 0.75em 2em;

      border-bottom: 2px solid var(--palid-orange);

      .hero-socials__item {
        width: 30px;
        height: 30px;
        cursor: pointer;

        &:hover {
          svg {
            fill: var(--palid-orange);
            transform: scale(1.1);
          }
        }

        svg {
          width: 33px;
          height: 33px;

          fill: var(--dark-white);
          transition: all 0.2s ease-out;
        }
      }
    }

    .hero-header {
      grid-column: 1 / 4;
      grid-row: span 1;

      border-bottom: 2px solid var(--palid-orange);
      padding: 1em 2em;

      display: flex;
      flex-direction: column;
      justify-self: start;

      .hero-header__brand {
        h2 {
          font-size: 9rem;
          font-family: sans-serif;
          font-weight: bold;
          font-style: italic;

          color: var(--white-secondary);
          text-shadow: 9px 4px 0px var(--gray-primary);
        }

        h4 {
          font-size: 1.2rem;
          font-weight: lighter;
          font-style: italic;
          color: var(--white-secondary);
        }
      }

      .cta-button {
        font-size: 1rem;
        text-align: center;

        align-self: flex-start;

        padding: 0.4em 0.9em;
        margin: 0;
        margin-top: 1em;

        color: var(--white-primary);
        background-color: var(--orange-primary);
        
        box-shadow: 4px 4px 0px var(--gray-primary);
        border-radius: 20px;
        outline: none;
        cursor: pointer;
        transition: all 0.2s ease-out;

        &:hover {
          background-color: var(--orange-secondary);
        }
        &:active {
          box-shadow: none;
          transform: translate(4px, 4px);
        }
      }
    }
  }
`;


export default HeroContainer;