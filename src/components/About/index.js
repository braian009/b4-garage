import * as React from "react";
import styled from "styled-components";
import Slider from "./Slider";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrowleft.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrowright.svg";

const About = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const aboutCards = [
    {
      title: "some title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt. Quam inventore in, aperiam dolor earum quod provident id aliquam nihil, ipsam impedit illum neque?",
      image: require("../../assets/images/aboutimage1.jpg"),
    },
    {
      title: "some title",
      description:
        "LLorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt. Quam inventore in, aperiam dolor earum quod provident id aliquam nihil, ipsam impedit illum neque?",
      image: require("../../assets/images/aboutimage2.jpg"),
    },
    {
      title: "some title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt. Quam inventore in, aperiam dolor earum quod provident id aliquam nihil, ipsam impedit illum neque?",
      image: require("../../assets/images/aboutimage3.jpg"),
    },
  ];

  const handleSlideChange = (i) => {
    setCurrentIndex(i);
  };

  const toThePrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? aboutCards.length - 1 : currentIndex - 1;
    handleSlideChange(newIndex);
  };

  const toTheNext = () => {
    const isLastIndex = currentIndex === aboutCards.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    handleSlideChange(newIndex);
  };

  return (
    <AboutContainer>
      <div className="about-inner">
        <div className="arrow-left" onClick={toThePrevious}>
          <ArrowLeft />
        </div>
        <div className="arrow-right" onClick={toTheNext}>
          <ArrowRight />
        </div>
        <Slider
          onChangeSlide={handleSlideChange}
          index={currentIndex}
          images={[...aboutCards.map((item) => item.image)]}
        />
        <div className="about-text">
          <h2>{aboutCards[currentIndex].title}</h2>
          <p>{aboutCards[currentIndex].description}</p>
        </div>
        <div className="about-points">
          {aboutCards.map((item, i) => {
            return (
              <div
                key={i}
                className={i === currentIndex ? "active" : ""}
                onClick={() => {
                  handleSlideChange(i);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-point"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #13131a;

  .about-inner {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;

    grid-template-rows: 2fr 1fr 1.5em;

    position: relative;
    padding: 1em;

    .arrow-left {
      font-size: 3.5rem;
      position: absolute;
      top: 95%;
      left: 0.1em;
      transform: translate(0, -50%);
      font-weight: bold;
      z-index: 1;
      cursor: pointer;
      width: 1em;
      height: 2em;

      svg {
        width: 100%;
        height: 100%;
        stroke: var(--white-primary);
      }

      @media (min-width: 40em) {
        left: 5em;
      }
    }

    .arrow-right {
      font-size: 3.5rem;
      position: absolute;
      top: 95%;
      right: 0.1em;
      transform: translate(0, -50%);
      font-weight: bold;
      z-index: 1;
      cursor: pointer;
      width: 1em;
      height: 1em;

      svg {
        width: 100%;
        height: 100%;
        stroke: var(--white-primary);
      }

      @media (min-width: 40em) {
        right: 5em;
      }
    }

    .about-points {
      display: flex;
      justify-content: flex-start;
    }

    #slider {
      grid-column: span 1;
      grid-row: span 1;
      height: 90%;
      max-width: 580px;
    }

    .about-text {
      align-self: start;
      grid-column: span 1;
      grid-row: span 1;
      padding: 0 1em;

      p {
        margin-top: 1em;
      }
    }

    .about-points {
      grid-column: span 1;
      grid-row: span 1;
    }

    @media (min-width: 40em) {
      grid-template-columns: 1fr 1fr;

      .about-points {
        grid-column: span 2;
        grid-row: span 1;
      }

      .about-text {
        grid-column: 2 / 3;
        grid-row: span 2;
        align-self: center;
      }

      #slider {
        grid-column: 1 / 2;
        grid-row: span 2;
        height: 85%;
      }
    }
  }
`;

const LeftArrow = styled.div`
  font-size: 3.5rem;
  position: absolute;
  top: 96%;
  left: 0.1em;
  transform: translate(0, -50%);
  font-weight: bold;
  color: var(--black-secondary);
  z-index: 1;
  cursor: pointer;

  /* @media (min-width: 40em) {
    top: 50%;
  } */
`;

const RightArrow = styled.div`
  font-size: 3.5em;
  position: absolute;
  top: 96%;
  right: 0.1em;
  transform: translate(0, -50%);
  font-weight: bold;
  color: var(--black-secondary);
  z-index: 1;
  cursor: pointer;
  /* 
  @media (min-width: 40em) {
    top: 50%;
  } */
`;

export default About;
