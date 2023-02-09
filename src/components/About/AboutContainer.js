import styled from "styled-components";

const AboutContainer = styled.section`
  position: relative;

  height: 100vh;
  width: 100%;

  background-image: url(${(props) => props.bgimage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-bottom: 2px solid var(--palid-orange);

  .about-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 5;

    background-color: rgba(19, 19, 26, 0.98);
  }

  .about-inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60% 1fr 40px;
    place-items: center;

    position: relative;
    z-index: 20;

    width: 100%;
    height: 100%;

    padding: 1.5em 1em;
    margin: 0 auto;

    .arrow-left {
      width: 40px;
      height: 40px;

      position: absolute;
      left: 2.5em;
      bottom: 5px;
      z-index: 30;

      transform: translate(0, -50%);
      cursor: pointer;
      overflow: hidden;

      svg {
        width: 100%;
        height: 100%;
        stroke: var(--white-primary);

        transition: all 0.3s ease-out;
      }


      @media (min-width: 1180px) {
        left: -1em;
        top: 50%;

        &:hover {
          svg {
            transform: scale(1.2);
          }
        }
      }
    }

    .arrow-right {
      width: 40px;
      height: 40px;

      position: absolute;
      right: 2.5em;
      bottom: 5px;
      z-index: 30;

      transform: translate(0, -50%);
      cursor: pointer;
      overflow: hidden;

      svg {
        width: 100%;
        height: 100%;
        stroke: var(--white-primary);
        transition: all .3s ease-out;
      }

      &:hover {
          svg {
            transform: scale(1.2);
          }
        }


      @media (min-width: 1180px) {
        right: -1em;
        top: 50%;
      }
    }

    .about-points {
      display: flex;
      justify-content: center;
      align-items: center;

      grid-column: span 1;
      grid-row: span 1;

      div {
        width: 40px;
        height: 40px;

        &:hover {
          svg {
            stroke: var(--palid-orange);

          }
        }

        &.active {
          svg {
            stroke: var(--palid-orange);
            transform: scale(1.1);
          }
        }

        svg {
          width: 100%;
          height: 100%;
          transition: all 0.2s ease-out;
        }
      }
    }

    .about-slider {
      grid-column: span 1;
      grid-row: span 1;

      height: 100%;
      width: 100%;
      max-width: 620px;

      padding: 1em;
    }

    .about-text {
      
      align-self: start;
      grid-column: span 1;
      grid-row: span 1;

      padding: 0 1em;
      margin-top: 1em;

  transition: all 0.3s ease-out;



      p {
        font-size: 0.95em;
        margin-top: 1em;
        overflow: auto;
        color: var(--white-secondary);

      }
    }


    @media (min-width: 40em) {
      grid-template-columns: 1fr 1fr;
      max-width: 1080px;

      .about-points {
        grid-column: span 2;
        grid-row: span 1;
      }

      .about-text {
        grid-column: 2 / 3;
        grid-row: span 2;
        align-self: center;

        padding-left: 1em;
        margin-top: 0;
      }

      .about-slider {
        grid-column: 1 / 2;
        grid-row: span 2;
        
        height: 75%;
      }
    }
  }
`;

export default AboutContainer;