import * as React from "react";
import styled from "styled-components";
import Slider from "./Slider";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrowleft.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrowright.svg";

const About = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const aboutCards = [
    {
      title: "From Passion to Profession",
      description:
        "Our garage was founded with the mission of offering top-notch car modification and repair services. The founder, a true car enthusiast, wanted to create a space where drivers could bring their vehicles to receive the best care possible. With a passion for the industry and a commitment to excellence, our garage has become a trusted name in the community.",
      image: require("../../assets/images/aboutimage1.jpg"),
    },
    {
      title: "Leading the Way",
      description: "Today, our garage is widely recognized as one of the best in the area. We have gained popularity due to our attention to detail, use of high-quality parts, and exceptional customer service. We are proud sponsors of local racing events and car shows, further establishing our reputation as a leader in the industry.",
      image: require("../../assets/images/aboutimage2.jpg"),
    },
    {
      title: "Driving Forward",
      description: "Looking to the future, our company has set its sights on continued growth and expansion. We are dedicated to staying at the forefront of the industry, offering the latest and greatest. Whether it's through expanding our facility, offering new services, or partnering with leading brands, we are committed to delivering the best experience for our customers.",
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
        <div className="about-slider">
          <Slider
            onChangeSlide={handleSlideChange}
            index={currentIndex}
            images={[...aboutCards.map((item) => item.image)]}
          />
        </div>

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
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#d8d8d8"
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

    grid-template-rows: 60% 1fr 40px;
    padding: 1.5em 1em;

    position: relative;

    .arrow-left {
      width: 40px;
      height: 40px;

      position: absolute;
      bottom: 0.25em;

      left: 2.5em;
      transform: translate(0, -50%);
      z-index: 1;
      cursor: pointer;
      overflow: hidden;

      svg {
        width: 100%;
        height: 100%;
        stroke: var(--white-primary);
      }

      /* @media (min-width: 40em) {
        left: 4em;
      } */

      @media (min-width: 1180px) {
        left: -1em;
        top: 50%;
      }
    }

    .arrow-right {
      width: 40px;
      height: 40px;
      position: absolute;
      bottom: 0.25em;
      right: 2.5em;
      transform: translate(0, -50%);
      z-index: 1;
      cursor: pointer;
      overflow: hidden;

      svg {
        width: 100%;
        height: 100%;
        stroke: var(--white-primary);
      }
      /* 
      @media (min-width: 40em) {
        right: 4em;
      } */

      @media (min-width: 1180px) {
        right: -1em;
        top: 50%;
      }
    }

    .about-points {
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        width: 40px;
        height: 40px;

        &.active {
          svg {
            stroke: #27ae60;
          }
          }

        svg {
          width: 100%;
          height: 100%;

          &:hover {
            stroke: #27ae60;

          }

          



        }
      }
    }

    .about-slider {
      grid-column: span 1;
      grid-row: span 1;
      width: 100%;
      height: 100%;
      max-width: 620px;

      padding: 1em;
    }

    .about-text {
      font-size: 0.95rem;
      align-self: start;
      grid-column: span 1;
      grid-row: span 1;
      padding: 0 1em;
      margin-top: 1em;


      p {
        margin-top: 1em;
        overflow: auto;
      }
    }

    .about-points {
      grid-column: span 1;
      grid-row: span 1;
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
