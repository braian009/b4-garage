import * as React from "react";
import styled from "styled-components";

const SliderImage = ({ index, images }) => {
  return (
    <SliderImageContainer>
      <div className="sliderimage-inner">
        <div className="img">
          <div style={{ backgroundImage: `url(${images[index]})` }}></div>
        </div>
      </div>
    </SliderImageContainer>
  );
};

const SliderImageContainer = styled.div`
  width: 100%;
  height: 100%;

  .sliderimage-inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    place-items: center;

    position: relative;

    height: 100%;
    width: 100%;
    margin: 0 auto;

    .img {
      height: 100%;
      width: 100%;

      div {
        height: 100%;
        width: 100%;
        transition: all 0.3s ease-out;

        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
`;

export default SliderImage;
