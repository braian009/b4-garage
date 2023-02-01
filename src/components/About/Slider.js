import * as React from "react";
import styled from "styled-components";



const Slider = ({ onChangeSlide, index, images }) => {

  console.log(images);
  console.log(index);

  return (
    <SliderContainer className="slider" id="slider">
      <div className="slider-inner">
        <div className="slider-img">
          <div
            style={{ backgroundImage: `url(${images[index]})` }}
          ></div>
        </div>
        
      </div>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;

  .slider-inner {
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    place-items: center;

    div {
      height: 100%;
      width: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

  }


`;



export default Slider;