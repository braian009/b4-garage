import * as React from "react";

import SliderImage from "./SliderImage";
import AboutContainer from "./AboutContainer";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrowleft.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrowright.svg";

import aboutBg from "../../assets/images/aboutbg.jpg";

import { aboutCards } from "./aboutCards";

const About = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  
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
    <AboutContainer id="about" bgimage={aboutBg}>
      <div className="about-overlay"></div>
      <div className="about-inner">
        <div className="arrow-left" onClick={toThePrevious}>
          <ArrowLeft />
        </div>
        <div className="arrow-right" onClick={toTheNext}>
          <ArrowRight />
        </div>
        <div className="about-slider">
          <SliderImage
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


export default About;
