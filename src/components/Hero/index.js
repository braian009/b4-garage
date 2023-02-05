import * as React from "react";
import styled from "styled-components";
import HeroBg from "../../assets/images/pagebackground4.jpg";

import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as B4Logo } from "../../assets/icons/B4_logo.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero-overlay">
        <div className="hero-overlay__logo">
          <B4Logo />
        </div>
      </div>
      <div className="hero-inner">
        <div className="hero-header">
          <div className="hero-header__brand">
            <h2>B4</h2>
            <h4>Customizations and repairs</h4>
          </div>
          <div className="cta-button">Order now</div>
        </div>
        <div className="hero-slogan"><p>{`\[drive better\]`}</p></div>
        <div className="hero-links">
          <div className="hero-links__item">
            <Instagram />
          </div>
          <div className="hero-links__item">
            <Twitter />
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${HeroBg});
  /* opacity: 0.4; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  border-bottom: 1px solid var(--orange-primary);

  .hero-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 5;
    background-color: rgba(19, 19, 26, 0.8);
    background-image: linear-gradient(
      -45deg,
      rgb(19, 19, 26, 0.7) 42%,
      rgb(19, 19, 26, 0.9) 42%,
      rgb(19, 19, 26, 0.9) 42%,
      rgb(19, 19, 26, 0.9)
    );

    .hero-overlay__logo {
      height: 100%;
      width: 100%;
      display: grid;
      place-items: center;
      overflow: hidden;

      svg {
        height: 200%;
        width: 200%;

        g {
          fill: rgba(211, 211, 211, 0.009);
          stroke: rgba(211, 211, 211, 0.009);
        }
      }
    }
  }

  .hero-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    place-items: center;
    height: calc(100% - (85px - 1em));
    width: 100%;
    position: relative;
    top: calc(85px + 1em);
    padding: 1.5em 0;
    max-width: 1080px;
    margin: 0 auto;
    z-index: 10;

    .hero-slogan {
      grid-column: span 4;
      grid-row: 2 / 3;
       p {
        font-size: 1.2rem;
        opacity: 0.5;
       }
    }

    .hero-links {
      /* position: relative; */
      grid-column: 3 / 5;
      grid-row: 3 / 4;
      display: flex;
      justify-content: center;
      justify-self: end;

      padding: 1em 1.5em;
      padding-right: 2em;
      /* border-bottom-left-radius: 20px;
      border-top-left-radius: 20px; */
      /* width: 60vw; */

      /* background-image: linear-gradient(
        to left,
        rgba(44, 44, 44, 0),
        var(--black-secondary)
      ); */

      border-bottom: 1px solid var(--orange-primary);

      /* &::after {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--orange-secondary);
    position: absolute;
    top: 0;
    left: 0;
} */

      * + * {
        margin-left: 1em;
      }

      .hero-links__item {
        width: 35px;
        height: 35px;

        svg {
          width: 100%;
          height: 100%;
          fill: var(--white-secondary);
        }
      }
    }

    .hero-header {
      grid-column: 1 / 3;
      grid-row: span 1;
      display: inline-block;

      /* background-image: linear-gradient(
        to right,
        rgba(44, 44, 44, 0),
        var(--black-secondary)
      ); */
      border-bottom: 1px solid var(--orange-primary);
      padding: 1em;
      padding-left: 2em;
      padding-right: 3.5em;

      display: flex;
      flex-direction: column;
      /* border-top-right-radius: 20px;
      border-bottom-right-radius: 20px; */

      justify-self: start;

      .hero-header__brand {
        h2 {
          font-size: 9rem;
          /* opacity: 0.8; */
          color: var(--gray-primary);

          font-family: sans-serif;
          font-weight: bold;
          font-style: italic;
          text-shadow: 9px 4px 0px #3d3d3d;
        }

        h4 {
          font-size: 1.2rem;
          font-weight: lighter;
          font-style: italic;
          color: var(--gray-primary);

          text-shadow: 4px 2px 0px #3d3d3d;

          margin-top: 5px;
        }
      }

      .cta-button {
        font-size: 1rem;
        background-color: var(--orange-primary);
        padding: 0.4em 0.8em;
        border-radius: 20px;
        margin: 0;
        outline: none;
        cursor: pointer;
        text-align: center;
        margin-top: 20px;
        width: 6.5em;
        align-self: flex-start;
        transition: all 0.2s ease-out;
        box-shadow: 4px 4px 0px #3d3d3d;

        &:hover {
          background-color: var(--orange-secondary);
          transform: scale(1.05);
          box-shadow: 1px 1px 4px #3d3d3d;
        }
      }

      @media (min-width: 1080px) {
        justify-self: start;

        grid-column: 1 / 3;
      }
    }
  }
`;

export default Hero;
